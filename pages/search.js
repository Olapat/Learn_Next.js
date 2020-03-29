import React from 'react'
import LayoutPrivate from '..//components/layout/LayoutPrivate'
import BoxFormItem from '../components/Forms/BoxFormItem'

const Search = () => {
  return (
    <LayoutPrivate className='search'>
      <h1>Search</h1>
      <div className='box-search'>
        <BoxFormItem
          label='field 1'
        />
        <BoxFormItem
          label='field 1'
        />
        <BoxFormItem
          label='field 1'
        />
        <BoxFormItem
          label='field 1'
        />
        <BoxFormItem
          label='field 1'
        />
        <BoxFormItem
          label='field 1'
        />
        <BoxFormItem
          label='field 1'
        />
      </div>
    </LayoutPrivate>
  )
}

export default Search
