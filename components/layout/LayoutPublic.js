import React, { Fragment } from 'react'
import Head from 'next/head'

const LayoutPublic = props => {

  return (
    <Fragment>
      <Head>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <main className='static-page'>
        <div className={props.className}>
          {props.children}
        </div>
      </main>
    </Fragment>
  )
}

export default LayoutPublic
