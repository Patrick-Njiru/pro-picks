import React from 'react'
import PropTypes from 'prop-types'
import { ProductCard } from '../../../components'

const SampleProducts = props => {
  return (
    <div className='' style={{ marginTop: '25vh' }}>
      <div className="text-center mb-5">
        <h5 className='text-uppercase text-orange-75'>Choose Any Products</h5>
        <h2 className='fw-bold'>Buy Everything With Us</h2>
      </div>
      <div className="d-flex justify-content-evenly align-items-center flex-wrap">
        <ProductCard section='sample products' />
        <ProductCard section='sample products' />
        <ProductCard section='sample products' />
        <ProductCard section='sample products' />
        <ProductCard section='sample products' />
        <ProductCard section='sample products' />
      </div>
      <button className="btn btn-light border border-2 border-warning px-3 mx-auto mt-5">Get Started Now</button>
    </div>
  )
}

SampleProducts.propTypes = {}

export default SampleProducts