import qs from 'query-string'

export const checkBeforeCall = (isAuth, token) => {
  let status = 'loading'
  let msg = ''
  if (!navigator.onLine) {
    status = 'error'
    msg = 'ขออภัยไม่สามารถเชื่อมต่อกับเซิฟเวอร์ได้ โปรดตรวจสอบเครือข่ายของท่าน'
    return { status, msg }
  } else if (isAuth && !token) {
    status = 'error'
    msg = 'ไม่มีสิทธ์เข้าใช้งาน'
    return { status, msg }
  }

  return
}

export const onErrorCall = (error, msgError) => {
  let _msg = ''
  if (error?.response?.data) {
    const { data } = error?.response
    _msg = msgError || data?.error_mgs
  } else {
    _msg = msgError || 'เกิดข้อผิดพลาด โปรดลองใหม่ภายหลัง'
  }

  return _msg
}

export const getOptionAxios = (option, token) => {
  let newOption = Object.assign({}, option)
  const keyPropsNotGet = ['onError', 'onSuccess', 'msgError', 'msgSuccess']
  keyPropsNotGet.forEach(key => {
    delete newOption[key]
  });

  if (token) {
    newOption.headers.Authorization = token
  }

  return newOption
}

export const convertURLParamsToObject = (search = '') => {
  const obj = qs.parse(search)
  if (!obj || Object.keys(obj).length) {
    return null
  }
  return qs.parse(search)
}

const commontCall = async (axios, url, body, token, option = {}) => {
  const errorFirst = checkBeforeCall(!!token, token)
  if (errorFirst) {
    const { status, msg } = errorFirst
    // [data, ...]
    return [null, status, msg]
  } else {
    try {
      const { data: res } = await axios()
      if (option.onSuccess && typeof option.onSuccess === 'function') {
        option.onSuccess(res)
      }
      return [res, 'success', option.msgSuccess || '']
    } catch (error) {
      console.error(url, error)
      let msg = onErrorCall(error, option.msgError)
      if (option.onError && typeof option.onError === 'function') {
        option.onError(msg)
      } 

      return [null, 'error', msg]
    }
  }
}

export default commontCall
