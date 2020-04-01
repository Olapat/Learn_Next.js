import Axios from 'axios'
import { checkBeforeCall, onErrorCall, getOptionAxios } from './commont'

const getAll = async (apis) => {
  const resAll = []
  const statusAll = []
  const msgAll = []
  for (const api of apis) {
    const errorFirst = checkBeforeCall(!!api.token, api.token)
    if (errorFirst) {
      const { status, msg } = errorFirst
      // [data, ...]
      resAll.push(null)
      statusAll.push(status)
      msgAll.push(msg)
    } else {
      try {
        const { data: res } = await Axios.get(api.url, getOptionAxios(api.option, api.token))
        if (api?.option?.onSuccess && typeof api?.option?.onSuccess === 'function') {
          api.option.onSuccess(res)
        }
        resAll.push(res)
        statusAll.push('success')
        msgAll.push(api?.option?.msgSuccess || '')
      } catch (error) {
        console.error(api.url, error)
        let msg = onErrorCall(error, api?.option?.msgError)
        if (api?.option?.onError && typeof api?.option?.onError === 'function') {
          option.onError(msg)
        }

        resAll.push([null, 'error', msg])
        resAll.push(null)
        statusAll.push('error')
        msgAll.push(msg)
      }
    }
  }
  return [resAll, statusAll, msgAll]
}

export default getAll
