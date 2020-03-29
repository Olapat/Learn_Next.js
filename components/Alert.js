import React, { useState, useMemo, useEffect } from 'react'
import AlertAnt from 'antd/lib/alert'
import { CloseOutlined } from '@ant-design/icons'

const Alert = props => {
  const { message, onCloseAlert, type, showIcon } = props
  const [open, setOpen] = useState(!!message)

  const onClose = () => {
    setOpen(false)
    setTimeout(() => {
      onCloseAlert()
    }, 200)
  }

  useEffect(() => {
    setOpen(!!message)
  }, [message])

  return (
    <div className={`alert ${open ? 'alert--open' : ''}`}>
      <AlertAnt
        message={message}
        type={type}
        showIcon={showIcon}
      />
      <CloseOutlined className='alert__icon-close' onClick={onClose} />
    </div>
  )
}

export default Alert