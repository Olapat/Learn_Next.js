import React, { Fragment, useState, useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useCookies } from 'react-cookie'
import Sidebar from './Sidebar'
import Header from './Header'

const Layout = props => {
  const [sideOpen, setSideOpen] = useState(true)
  const [cookies] = useCookies(['auth'])
  const router = useRouter()

  useEffect(() => {
    if (!cookies.token) {
      router.replace('/login')
    }
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
      <div className='warpper'>
        <Header />
        <Sidebar sideOpen={sideOpen} toggleSidebar={toggleSidebar} />
        <main className={sideOpen ? ' on-sidebar': ''}>
          <div className={props.className}>
            {props.children}
          </div>
        </main>
      </div>
    </Fragment>
  )
}

export default Layout
