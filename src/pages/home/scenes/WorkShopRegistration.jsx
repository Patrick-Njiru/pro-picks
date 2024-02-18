import React from 'react'

const WorkShopRegistration = () => {
  return (
    <div style={{
      marginTop: '25vh',
      background: 'url(https://www.picsum.photos/1200) no-repeat',
      backgroundSize: '100% 100%',
      minHeight: '65vh',
      width: '100%',
      paddingTop: '15vh',
    }}>
      <div className="container">
        <div className="d-flex justify-content-evenly align-items-center flex-wrap">
          <div className="p-sm-5 col-10 col-sm-7 col-md-8 text-start">
            <h6 className="text-orange text-uppercase">Save the day</h6>
            <h3 className="text-light">
              Join on Day Long Free Workshop for Advance <span className='text-orange'>Mastering</span> On Sales
            </h3>
            <h6 className='text-capitalize text-light'>Limited Time offer! hurry up</h6>
          </div>
          <form onSubmit={() => alert('registered')} className='text-center mx-auto p-3 mt-5 workshop-form rounded col-10 col-sm-4 col-md-3'>
            <legend className='h5 fw-bold'> Register Now </legend>
            <input type="text" placeholder='Username' className='border-0 my-2 py-2 w-100 rounded' />
            <input type="email" placeholder='Email' className='border-0 my-2 py-2 w-100 rounded' />
            <input type="tel" placeholder='Phone' className='border-0 my-2 py-2 w-100 rounded' />
            <button className="btn-orange rounded border-0 p-2 fw-bold my-2">Register Now</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default WorkShopRegistration