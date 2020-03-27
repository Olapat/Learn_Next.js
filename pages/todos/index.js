import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import axios from 'axios'
import config from '../../config'

const Todos = props => {
  const [todos, setTodos] = useState(props.todos)
  useEffect(() => {
    console.log(props)
  }, [])

  const onChangeTodos = index => {
    const newTodos = [...todos]
    newTodos[index].completed = !todos[index].completed
    setTodos(newTodos)
  }

  return (
    <div className='todos'>
      {todos.map((item, index) => 
        <div key={index}>
          <input
            id={item.id}
            name={item.id}
            type='checkbox'
            checked={item.completed}
            onChange={() => onChangeTodos(index)}
          />
          <label htmlFor={item.id}>{item.title}</label>
          <Link href={`/todos/${item.id}`} passHref>
            <a>{'detail'}</a>
          </Link>
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
