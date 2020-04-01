import Axios from 'axios'
import commontCall from './commont'

const get = async (url, token, option) => {
  return commontCall(
    optionAxios => Axios.get(url, optionAxios),
    url, null, token, option
  )
}

export default get
