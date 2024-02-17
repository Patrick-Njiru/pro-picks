import React from 'react'
import PropTypes from 'prop-types'
import { ProductCard } from '../../../components'

const OurProducts = props => {
  return (
    <div
      className='text-start'
      style={{ marginTop: '25vh' }}
    >
      <div className="d-sm-flex justify-content-between align-items-center flex-wrap mb-5 rounded shadow py-1 p-sm-3">
        <h2 className='fw-bold text-center'>Our Products</h2>
        <div
          className="d-flex justify-content-between align-items-center mx-center"
          style={{ maxWidth: '100%' }}
        >
          <button className="mx-1 mx-sm-2 h6 border-0 p-1 clickable">All</button>
          <button className="mx-1 mx-sm-2 h6 border-0 p-1 clickable">Shoes</button>
          <button className="mx-1 mx-sm-2 h6 border-0 p-1 clickable">Bags</button>
          <button className="mx-1 mx-sm-2 h6 border-0 p-1 clickable">Phones</button>
          <button className="mx-1 mx-sm-2 h6 border-0 p-1 clickable">Beauty</button>
        </div>
      </div>
      <div className="d-flex justify-content-evenly align-items-center flex-wrap">
        <ProductCard section='our products' />
        <ProductCard section='our products' />
        <ProductCard section='our products' />
        <ProductCard section='our products' />
        <ProductCard section='our products' />
        <ProductCard section='our products' />
      </div>
    </div>
  )
}

OurProducts.propTypes = {}

export default OurProducts