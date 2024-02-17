import React from 'react'
import PropTypes from 'prop-types'
import {SiMicrosoft} from 'react-icons/si'

const ProductCard = props => {
  return (
    <div
      className='my-4 product-card'
      style={{
        background: 'url(https://www.picsum.photos/250) no-repeat',
        backgroundSize: '100% 100%',
        backgroundBlendMode: 'color-burn',
        height: '40vh',
        width: '30%',
        minWidth: '200px'
      }}
    >
      <div className="cover" style={{height: '100%'}}>
        <div className="empty" style={{height: '75%'}}></div>
        <div className="text-start m-3 mt-0">
          <div className="btn btn-warning btn-sm rounded-circle me-2">
            <SiMicrosoft className='h6 mt-1' />
          </div>
          <span className="h6 text-light">Category</span>
        </div>
      </div>
    </div>
  )
}

ProductCard.propTypes = {}

export default ProductCard