import React, { Component } from 'react'
import LayoutPrivate from '..//components/layout/LayoutPrivate'
import BoxFormItem from '../components/Forms/BoxFormItemClass'

export default class SearchClass extends Component {
  render() {
    return (
      <LayoutPrivate className='search'>
        <h1>Search Class</h1>
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
}