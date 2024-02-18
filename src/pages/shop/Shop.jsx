import React from 'react'
import PropTypes from 'prop-types'

const Shop = props => {
  return (
    <div className='shop'>
      <div
        className="shop_top-section text-center text-light"
        style={{ 
          background: 'url(https://www.picsum.photos/1440)',
          backgroundSize: '100% 100%',
          height: '70vh',
          paddingTop: '40vh'
        }}
      >
        <h1>Our Shop Pages</h1>
        <h6>Home / Shop</h6>
      </div>
    </div>
  )
}

Shop.propTypes = {}

export default Shop