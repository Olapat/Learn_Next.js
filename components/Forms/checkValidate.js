
const CheckValidate = (values, rules, labels) => {
  const errors = {}

  for (const field in rules) {
    if (rules.hasOwnProperty(field)) {
      const fieldRules = rules[field]
      const errMsg = checkErr(fieldRules, values[field], field)
      if (errMsg) errors[field] = errMsg
    }
  }

  return errors
}

export const checkErr = (fieldRules, value, fieldName) => {
  let errMsg = undefined
  for (const rule in fieldRules) {
    const valueRule = fieldRules[rule]
    if (fieldRules.hasOwnProperty(rule)) {
      switch (rule) {
        case 'required':
          if (!CheckEmpty(value)) errMsg = typeof valueRule === 'string' ? valueRule : `โปรดระบุ ${fieldName}`
          break;
        case 'min':
          if (!CheckMinLength(value, valueRule[0])) errMsg = valueRule[1] || `โปรดระบุ ${fieldName} ให้ถูกต้อง`
          break;
        case 'max':
          if (!CheckMaxLength(value, valueRule[0])) errMsg = valueRule[1] || `โปรดระบุ ${fieldName} ให้ถูกต้อง`
          break;
        default:
          break;
      }
    }
  }
  return errMsg
}

const CheckEmpty = value => value && value.trim() !== ''
const CheckEmail = value => !CheckEmpty(value) || /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
const CheckNumber = value => !CheckEmpty(value) || /^[\d]*$/.test(value)
const CheckMinLength = (value, min) => !CheckEmpty(value) || value.length >= min
const CheckMaxLength = (value, max) => !CheckEmpty(value) || value.length <= max

export default CheckValidate
