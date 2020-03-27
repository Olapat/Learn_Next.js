import React, { useState, useEffect } from 'react'
import useSWR from 'swr'
import config from '../../config'
import Axios from 'axios'

const Posts = () => {
  const [count, setCount] = useState(0)
  useEffect(() => {

  }, [])
  const { data: res, error } = useSWR(config.hostBackend + '/posts', Axios, {
    revalidateOnFocus: false,
    focusThrottleInterval: 30000
  })
  if (error) return <div>failed to load</div>
  if (!res) return <div>loading...</div>
  // console.log(data)
  return (
    <div className='posts'>
      <button onClick={() => setCount(prev => prev + 1)}>push</button>
      <p>{count}</p>
      {res.data.map((item, index) =>
        <article className='card' key={index}>
          <h2>{item.title}</h2>
          <p>{item.body}</p>
        </article>
      )}
    </div>
  )
}

export default Posts
