import React, { Fragment, useState, useEffect } from 'react'
import Head from 'next/head'
import Sidebar from './Sidebar'
import Header from './Header'

const Layout = props => {
  const [sideOpen, setSideOpen] = useState(true)

  useEffect(() => {
    if (window?.innerWidth < 960) {
      setSideOpen(false)
    }
  }, [])

  const toggleSidebar = () => {
    setSideOpen(prev => !prev)
  }

  return (
    <Fragment>
      <Head>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Header />
      <Sidebar sideOpen={sideOpen} toggleSidebar={toggleSidebar} />
      <main className={sideOpen ? 'on-sidebar': ''}>
        {props.children}
      </main>
    </Fragment>
  )
}

export default Layout
