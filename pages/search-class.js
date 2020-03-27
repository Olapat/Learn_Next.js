import React, { Component } from 'react'
import BoxFormItem from '../components/Forms/BoxFormItemClass'

export default class SearchClass extends Component {
  render() {
    return (
      <div className='search'>
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
      </div>
    )
  }
}