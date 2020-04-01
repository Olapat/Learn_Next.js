import Axios from 'axios'
import commontCall from './commont'

const post = async (url, body, token, option) => {
  return commontCall(
    optionAxios => Axios.post(url, body, optionAxios),
    url, body, token, option
  )
}


export default post
