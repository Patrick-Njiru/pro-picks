import React from 'react'
import PropTypes from 'prop-types'
import { SiMicrosoft } from 'react-icons/si'
import { FaStar } from 'react-icons/fa'

const ProductCard = ({section}) => {
  return (
    <div>
      {section == 'sample products' ?
        // Sample Products Card
        <div
          className=' m-3 sample-product-card'
          style={{
            background: 'url(https://www.picsum.photos/220) no-repeat',
            backgroundSize: '100% 100%',
            backgroundBlendMode: 'color-burn',
            height: '40vh',
            width: '220px'
          }}
        >
          <div className="cover" style={{height: '100%'}}>
            <div className="empty" style={{height: '75%'}}></div>
            <div className="text-start m-3">
              <div className="btn-orange btn-sm rounded-circle me-2 px-2 py-1">
                <SiMicrosoft className='h6 mt-1' />
              </div>
              <span className="text-light h5">Category</span>
            </div>
          </div>
        </div>
        : section == 'our products' ?
          // Our Products Card
          <div
            className="rounded m-3 shadow our-product-card"
            style={{ height: '43vh', width: '220px' }}
          >
            <div
              className="mb-3 our-product-card_img"
              style={{
                background: 'url(https://www.picsum.photos/220) no-repeat',
                backgroundBlendMode: 'color-dodge',
                height: '30vh',
                width: '100%',
                minWidth: '200px',
              }}
            >
              <div className="empty d-block" style={{height: '80%'}}>
                
              </div>
              <div
                className="bg-orange-75 px-3 d-flex justify-content-between align-items-center text-dark our-products_category"
                style={{height: '20%'}}
              >
                <h6 className="fw-bold text-capitalize">category</h6>
                <div className="">
                  <FaStar className='h6' />
                  <FaStar className='h6' />
                  <FaStar className='h6' />
                  <FaStar className='h6' />
                  <FaStar className='h6' />
                </div>
              </div>
              <h5 className="text-capitalize mt-3 px-3 "> Title </h5>
              <div className="d-flex justify-content-between px-3">
                <h6 className='text-capitalize'>Brand</h6>
                <h6 className="text-orange-75">$100.00</h6>
              </div>
            </div>
            
          </div>
          :
          <h1 className='alert alert-danger fw-bold'> Invalid value for The section prop passed </h1>
      }
    </div>
  )
}

ProductCard.propTypes = {
  section: PropTypes.string.isRequired
}

export default ProductCard