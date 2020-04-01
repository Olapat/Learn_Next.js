import { useState } from 'react'
import Axios from 'axios'
import { useCookies } from 'react-cookie'
import POST from './post'
import GET from './get'

Axios.defaults.timeout = 90000
Axios.defaults.headers.common['Content-Type'] = 'application/json'

const useCallApi = () => {
  const [cookies] = useCookies(['auth']);
  const [loading, setLoading] = useState(false)

  const post = async (url, body, isAuth = true, option) => {
    setLoading(true)
    let token = cookies.token
    if (!isAuth) token = null

    const res = await POST(url, body, token, option)
    setLoading(false)
    return res
  }

  const get = async (url, isAuth = true, option) => {
    console.log(url)
    setLoading(true)
    let token = cookies.token
    if (!isAuth) token = null
  
    const res = await GET(url, token, option)
    setLoading(false)
    return res
  }

  return { post, get, loading }
}

export default useCallApi