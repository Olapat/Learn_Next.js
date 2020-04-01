import React, { useState } from 'react'
import LayoutPrivate from '..//components/layout/LayoutPrivate'
import BoxFormItem from '../components/Forms/BoxFormItem'
import useForm from '../components/Forms/useForm'
import useCallApi from '../helper/callApi/useCallApi'
import convertParams from '../helper/callApi/convertParams'
import message from 'antd/lib/message'

const Search = () => {
  const [data, setData] = useState([])

  const { get, loading } = useCallApi()

  const onSubmitSearch = async () => {
    const [dataSearch, status, msg] = await get('/api/search' + convertParams(values))

    if (status === 'success' && dataSearch.data) {
      setData(dataSearch.data)
    } else {
      message.error(msg)
    }
  }

  const optionsForm = {
    initialValues: {
      fristname: '',
      lastName: ''
    },
    onSubmit: onSubmitSearch,
    defaultValue: {
      fristname: '',
      lastName: ''
    }
  }
  const [values, hendlerChangeValues, submiting, handlerSubmit, handlerReset, errors] = useForm(optionsForm)

  return (
    <LayoutPrivate className='search'>
      <h1>Search</h1>
      <div className='box-search'>
        <form onSubmit={handlerSubmit}>
          <BoxFormItem
            label='ชื่อ'
            name='fristname'
            value={values.fristname || ''}
            onChange={({ target }) => hendlerChangeValues(target.name, target.value)}
          />
          <BoxFormItem
            label='นามสกุล'
            name='lastName'
            value={values.lastName || ''}
            onChange={({ target }) => hendlerChangeValues(target.name, target.value)}
          />
          <button className='btn btn--outline' type='button' onClick={handlerReset}>
            Reset
          </button>
          <button className='btn' type='submit' disabled={submiting}>
            {`${submiting ? `Searching...` : 'Search'}`}
          </button>
        </form>
      </div>
      <table>
        <thead>
          <tr>
            <th>fristname</th>
            <th>lastName</th>
          </tr>
        </thead>
        <tbody>
          {loading &&
            <tr>
              <td colSpan='2'>loading...</td>
            </tr>
          }
          {!loading && (!data || data.length === 0) &&
            <tr>
              <td colSpan='2'>ไม่พบข้อมูล</td>
            </tr>
          }
          {!loading && data && data.map((item, index) =>
            <tr key={index}>
              <td>{item.fristname}</td>
              <td>{item.lastName}</td>
            </tr>
          )}
        </tbody>
      </table>
    </LayoutPrivate>
  )
}

export default Search
