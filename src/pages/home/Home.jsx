import React from 'react'
import PropTypes from 'prop-types'
import { SearchForm, SampleProducts, OurProducts, WorkShopRegistration } from './scenes'
import './home.css'

const Home = props => {
  return (
    <div className='text-center'>
      <div className="container">
        {/* <h1 className="text-capitalize my-3">
          Search your one from
          <span className='text-orange mx-2'>Thousands</span>
          of products
        </h1>
        <SearchForm />
        <h6 className="lead text-capitalize my-3">we have the largest collection of products</h6>
        <SampleProducts />
        <OurProducts /> */}
      </div>
      <WorkShopRegistration />
    </div>
  )
}

Home.propTypes = {}

export default Home