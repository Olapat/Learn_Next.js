import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import LayoutPrivate from '../../components/layout/LayoutPrivate'
import config from '../../config'

const SingleTodo = props => {
  const router = useRouter()
  const { todo } = props
  useEffect(() => {
    console.log(props)
  }, [])
  if (router.isFallback) {
    console.log('Loading...')
    return <div>Loading...</div>
  }
  return (
    <LayoutPrivate className='todos'>
      <div>
        <input
          id={todo?.id}
          name={todo?.id}
          type='checkbox'
          checked={todo?.completed}
        />
        <label htmlFor={todo?.id}>{todo?.title}</label>
      </div>
    </LayoutPrivate>
  )
}

export const getStaticPaths = async () => {
  return {
    paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
    fallback: true,
  }
}

export const getStaticProps = async ({ params }) => {
  console.log(params.id)
  try {
    const { data, status, statusText } = await axios(config.hostBackend + '/todos/' + params.id)
    if (status === 200) {
      return {
        props: {
          todo: status === 200 ? data : null,
          status: status || null,
          statusText: statusText || null
        }
      }
    } else {
      throw new Error()
    }
  } catch (error) {
    console.log('Error', error)
    return {
      props: {
        todo: [],
        status: error?.response?.status || null,
        statusText: error?.response?.statusText || null
      }
    }
  }
}

export default SingleTodo
