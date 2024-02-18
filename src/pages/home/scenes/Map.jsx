import React from 'react'
import map2 from '../../../assets/map2.jpg'

const Map = () => {
  return (
    <div className='container' style={{marginTop: '25vh'}}>
      <h3 className="text-dark">
        More Than <span className="text-orange mx-1">60,000</span> Customers
      </h3>
      <p className='my-5'>
        Buy products on any of your devices with our app and enjoy your time getting what you want. Just download, install & start shopping.
      </p>
      <img src={map2} style={{ width: '90%' }} className='border-0 img-fluid rounded' />
    </div>
  )
}

export default Map