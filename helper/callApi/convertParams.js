export default (params = {}) => {
  if (!params || Object.keys(params).length) {
    let data = { ...params }

    const urlParams = Object.keys(data).map(key => {
      const value = data[key]
      return `${key}=${encodeURIComponent(value.toString())}`
    })

    return `?${urlParams.join('&')}`
  } else {
    return ''
  }
}
