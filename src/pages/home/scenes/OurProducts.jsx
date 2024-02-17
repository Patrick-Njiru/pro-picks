import React from 'react'
import PropTypes from 'prop-types'
import { ProductCard } from '../../../components'

const OurProducts = props => {
  return (
    <div
      className='text-start'
      style={{ marginTop: '20vh' }}
    >
      <div className="d-sm-flex justify-content-between align-items-center flex-wrap mb-5 rounded shadow py-1 p-sm-3">
        <h2 className='fw-bold text-center'>Our Products</h2>
        <div
          className="d-flex justify-content-between align-items-center mx-center"
          style={{ maxWidth: '100%' }}
        >
          <btn className="mx-1 mx-sm-2 h6 clickable">All</btn>
          <btn className="mx-1 mx-sm-2 h6 clickable">Shoes</btn>
          <btn className="mx-1 mx-sm-2 h6 clickable">Bags</btn>
          <btn className="mx-1 mx-sm-2 h6 clickable">Phones</btn>
          <btn className="mx-1 mx-sm-2 h6 clickable">Beauty</btn>
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