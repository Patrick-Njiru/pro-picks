import React from 'react'
import PropTypes from 'prop-types'
import { SearchForm, SampleProducts, OurProducts, WorkShopRegistration, Map } from './scenes'
import './home.css'

const Home = props => {
  return (
    <div className='text-center home'>
      <div className="container">
        <h1 className="text-capitalize my-4">
          Search your one from
          <span className='text-orange mx-2'>Thousands</span>
          of products
        </h1>
        <SearchForm />
        <h6 className="lead text-capitalize my-5">we have the largest collection of products</h6>
        <SampleProducts />
        <OurProducts />
      </div>
      <WorkShopRegistration />
      <Map />
    </div>
  )
}

Home.propTypes = {}

export default Home