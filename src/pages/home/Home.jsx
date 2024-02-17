import React from 'react'
import PropTypes from 'prop-types'
import { SearchForm, SampleProducts } from './scenes'

const Home = props => {
  return (
    <div className='container text-center'>
      <h1 className="text-capitalize my-3">
        Search your one from
        <span className='text-warning mx-2'>Thousands</span>
        of products
      </h1>
      <SearchForm />
      <h6 className="lead text-capitalize my-3">we have the largest collection of products</h6>
      <SampleProducts />
    </div>
  )
}

Home.propTypes = {}

export default Home