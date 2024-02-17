import React from 'react'
import PropTypes from 'prop-types'
import { HomeSearchForm, HomeProducts } from '../components'

const Home = props => {
  return (
    <div className='container text-center'>
      <h1 className="text-capitalize my-3">
        Search your one from
        <span className='text-warning mx-2'>Thousands</span>
        of products
      </h1>
      <HomeSearchForm />
      <h6 className="lead text-capitalize my-3">we have the largest collection of products</h6>
      <HomeProducts />
    </div>
  )
}

Home.propTypes = {}

export default Home