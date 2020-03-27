import React, { useMemo } from 'react';
import Input from './Input';

// delete props not use in Element
const deleteObjectProps = props => {
  let newProps = Object.assign({}, props)
  const keyPropsNotGet = ['label', 'labelClass', 'component', 'boxClass', 'errorMsg', 'required']
  keyPropsNotGet.forEach(key => {
    delete newProps[key]
  });
  if (props.errorMsg) {
    newProps.className = newProps.className ? newProps.className + ' invalid' : 'invalid'
  } else {
    newProps.className = newProps.className ? newProps.className : ''
  }
  return newProps
}

export const BoxFormElement = props => {
  const { component, labelClass, boxClass, label, required, name, errorMsg } = props;
  const Component = component

  console.count(`BoxFormElement: ${name} render`)
  return (
    <div className={`form-group ${boxClass ? boxClass : ''}`}>
      {label && <label className={labelClass} htmlFor={name}>{label} {required && <span className='text-danger'>*</span>}</label>}
      <Component {...deleteObjectProps(props)} id={name} />
      <label className='error-validat-mgs' htmlFor={name}>{errorMsg}&nbsp;</label>
    </div>
  )
}

BoxFormElement.defaultProps = {
  component: Input
}

/**
 * optimiz performance re render on it props update
 * is return function
 */
export default props => useMemo(() => (
  <BoxFormElement {...props} />

  // is props on change it re render
), [props.value, props.errorMsg])
