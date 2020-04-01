import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Axios from 'axios'
import { useCookies } from 'react-cookie'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import LayoutPublic from '../components/layout/LayoutPublic'
import BoxFormItem from '../components/Forms/BoxFormItem'
import useForm from '../components/Forms/useForm'
import Alert from '../components/Alert'
import useCallApi from '../helper/callApi/useCallApi'

const Login = () => {
  const [isAuth, setAuth] = useState(true)
  const [errorMsg, setErrorMsg] = useState(null)
  const [cookies, setCookie] = useCookies(['auth']);
  const router = useRouter()

  const { post, loading } = useCallApi()

  const onSubmitLogin = async () => {

    /* example 1 */
    // await post('/api/login', values, false, {
    //   // ...option for axios
    //   onError: err => { 
    //     setErrorMsg(err)
    //   },
    //   onSuccess: data => { 
    //     setCookie('token', data.token)
    //     router.replace('/welcome')
    //   },
    //   msgError: 'เกิดข้อผิดพลาดในการเข้าสู่ระบบ โปรดลองใหม่ภายหลัง',
    //   // msgSuccess: 'msgSuccess'
    // })

    /* example 2 */
    const [data, status, msg] = await post('/api/login', values, false, {
      msgError: 'เกิดข้อผิดพลาดในการเข้าสู่ระบบ โปรดลองใหม่ภายหลัง',
    })

    if (status === 'success') {
      setCookie('token', data.token)
      router.replace('/welcome')
    } else {
      setErrorMsg(msg)
    }
  }

  useEffect(() => {
    if (cookies.token) {
      router.replace('/welcome')
    } else {
      setAuth(false)
    }
  }, [])

  const optionsForm = {
    initialValues: {
      username: '',
      password: ''
    },
    rules: {
      username: {
        required: 'โปรดระบุชื่อผู้ใช้'
      },
      password: {
        required: 'โปรดระบุรหัสผ่าน'
      }
    },
    onSubmit: onSubmitLogin
  }

  const [values, hendlerChangeValues, submiting, handlerSubmit, handlerReset, errors] = useForm(optionsForm)

  const onChangeValues = event => {
    const name = event.target.name
    const value = event.target.value
    hendlerChangeValues(name, value)
  }

  useEffect(() => {
    if (errorMsg) {
      setErrorMsg(null)
    }
  }, [values])

  if (isAuth) {
    return (
      <LayoutPublic className='login'>
      </LayoutPublic>
    )
  }
  return (
    <LayoutPublic className='login'>
      <div className='login__body'>
        <img className='login__bg' alt='undraw_coming_home_52ir' src='/img/undraw_coming_home_52ir.svg' />
        <form className='login__form' onSubmit={handlerSubmit}>
          <span className='login__logo'>
            L Next.js
          </span>
          <Alert
            message={errorMsg}
            type="error"
            showIcon
            onCloseAlert={() => { setErrorMsg(null) }}
          />
          {loading && <p>loading...</p>}
          <BoxFormItem
            name='username'
            placeholder='username'
            prefix={<UserOutlined />}
            value={values.username || ''}
            onChange={onChangeValues}
            errorMsg={errors.username}
          />
          <BoxFormItem
            name='password'
            placeholder='password'
            type='password'
            prefix={<LockOutlined />}
            value={values.password || ''}
            onChange={onChangeValues}
            errorMsg={errors.password}
          />
          <button className='btn login__btn login__btn-submit' type='submit' disabled={submiting}>
            {`${submiting ? `login...` : 'login'}`}
          </button>
          <Link href='/forgot-password'>
            <a className='login__btn login__btn-fotgot'>
              forgot password
            </a>
          </Link>
        </form>
      </div>
    </LayoutPublic>
  )
}

export default Login
