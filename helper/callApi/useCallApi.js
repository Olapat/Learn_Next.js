import { useState } from 'react'
import Axios from 'axios'
import { useCookies } from 'react-cookie'
import POST from './post'
import GET from './get'
import GETALL from './getAll'

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
    setLoading(true)
    let token = cookies.token
    if (!isAuth) token = null
  
    const res = await GET(url, token, option)
    setLoading(false)
    return res
  }

  const getAll = async all => {
    // set default
    setLoading(true)
    const apiAll = all.map(item => {
      let token = cookies.token
      if (item.isAuth === false) token = null
      return {
        ...item,
        option: item.option || { headers: { 'Content-Type': 'application/json' } },
        token
      }
    })

    const res = await GETALL(apiAll)
    setLoading(false)
    return res
  }

  return { post, get, getAll, loading }
}

export default useCallApi