import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <header>
      <div className='logo'>
        <Link href='/'>
          <div className='logo__bg'></div>
        </Link>
      </div>
      <div className='noti'>
        >>>>>
      </div>
      <div className='profile'>
        >>>>>
      </div>
    </header>
  )
}

export default Header
