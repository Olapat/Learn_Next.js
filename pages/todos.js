import React, { useEffect } from 'react'
import axios from 'axios'
import config from '../config'

const Todos = props => {
  useEffect(() => {
    console.log(props)
  }, [])

  return (
    <div className='todos'>
      {props.todos.map((item, index) => 
        <div key={index}>
          <input
            id={item.id}
            name={item.id}
            type='checkbox'
            checked={item.completed}
          />
          <label htmlFor={item.id}>{item.title}</label>
        </div>
      )}
    </div>
  )
}

export const getStaticProps = async () => {
  try {
    const { data, status, statusText } = await axios(config.hostBackend + '/todos')
    if (status === 200) {
      return {
        props: {
          todos: status === 200 ? data: [],
          status,
          statusText
        }
      }
    } else {
      throw new Error()
    }
  } catch (error) {
    return {
      props: {
        todos: [],
        status: error?.response?.status,
        statusText: error?.response?.statusText
      }
    }
  }
}

export default Todos
