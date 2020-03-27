import React, { PureComponent } from 'react';
import Input from './InputClass';

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

export default class BoxFormElement extends PureComponent {

  render() {
    const { component, labelClass, boxClass, label, required, name, errorMsg } = this.props;
    const Component = component

    console.count(`BoxFormElement: ${name} render`)
    return (
      <div className={`form-group ${boxClass ? boxClass : ''}`}>
        {label && <label className={labelClass} htmlFor={name}>{label} {required && <span className='text-danger'>*</span>}</label>}
        <Component {...deleteObjectProps(this.props)} id={name} />
        <label className='error-validat-mgs' htmlFor={name}>{errorMsg}&nbsp;</label>
      </div>
    )
  }
}

BoxFormElement.defaultProps = {
  component: Input
}
