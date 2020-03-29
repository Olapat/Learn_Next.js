import { useState, useEffect, useCallback } from 'react'
import checkValidate, { checkErr as checkErrOne } from './checkValidate'

/**
 * is common hook function for manage form component
 * return array 
 */
const UseForm = props => {
  const [values, onChangeValues] = useState(props.initialValues)
  const [submiting, setSubmiting] = useState(false)
  const [submited, setSubmited] = useState(false)
  const [errors, setErrors] = useState({})

  useEffect(() => {
    customValidity()
  }, [])

  const handlerSubmit = async event => {
    event.preventDefault();
    setSubmiting(true)
    setSubmited(true)
    let errors = {}
    if (props.rules) {
      errors = checkValidate(values, props.rules, props.labels)
      setErrors(errors)
    }
    if (props.rules && Object.keys(errors).length) {
      setSubmiting(false)
      console.log('errors', errors)
      return
    }
    await props.onSubmit(values)
    console.log('Submited')
    setSubmiting(false)
  }

  const hendlerChangeValues = useCallback((name, value, type = 'string') => {
    if (props.rules && Object.keys(errors).length && props.rules[name] && submited) {
      setErrors(prev => ({
        ...prev,
        [name]: checkErrOne(props.rules[name], value, name)
      }))
    } else if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }))
    }
    switch (type) {
      case 'string':
        onChangeValues(prev => ({
          ...prev,
          [name]: value
        }))
        break;
      case 'date-range':
        onChangeValues(prev => ({
          ...prev,
          [name[0]]: value[0],
          [name[1]]: value[1],
        }))
        break;
      default:
        break;
    }
  }, [values, errors])

  const handlerReset = () => {
    onChangeValues(props.defaultValue)
    setErrors({})
  }

  return [values, hendlerChangeValues, submiting, handlerSubmit, handlerReset, errors]
}

UseForm.defaultProps = {
  rules: {}
}

export default UseForm

const customValidity = () => {
  var elements = document.getElementsByTagName("INPUT");
  for (var i = 0; i < elements.length; i++) {
    elements[i].oninvalid = function (e) {
      e.target.setCustomValidity(" ");
    };
  }
}
