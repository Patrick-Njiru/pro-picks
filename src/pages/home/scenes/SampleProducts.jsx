import React from 'react'
import PropTypes from 'prop-types'
import SampleProductCard from '../../../components/Home/SampleProductCard'

const Products = props => {
  return (
    <div className='' style={{ marginTop: '25vh' }}>
      <div className="text-center mb-5">
        <h5 className='text-uppercase text-orange-75'>Choose Any Products</h5>
        <h2 className='fw-bold'>Buy Everything With Us</h2>
      </div>
      <div className="d-flex justify-content-evenly align-items-center flex-wrap">
        <SampleProductCard />
        <SampleProductCard />
        <SampleProductCard />
        <SampleProductCard />
        <SampleProductCard />
        <SampleProductCard />
      </div>
      <button className="btn btn-light border-orange px-3 mx-auto mt-5">Get Started Now</button>
    </div>
  )
}

Products.propTypes = {}

export default Products