import React from 'react'
import { BiLocationPlus, BiLogoFacebookSquare, BiLogoInstagram, BiLogoLinkedinSquare, BiLogoPinterest, BiLogoTwitter, BiPhone } from 'react-icons/bi'
import { FaMailBulk } from 'react-icons/fa'

const Footer = () => {
  return (
    <div
      className='bg-dark text-light p-5'
      style={{ marginTop: '25vh' }}
    >
      <div className="container">
        <div className="row g-4 gy-5">
          {/* Column 1 */}
          <div className="col-sm-6 col-md-4 col-lg-3 text-center text-sm-start">
            <h4 className="text-capitalize fw-bold">About proPicks</h4>
            <div className="mt-4 lh-lg">
              <p>
                The best online shop offering you a wide range of top quality products at affordable prices ranging from clothes and beauty products to electronics.
              </p>
              <div>
                <div>
                  <BiLocationPlus className='me-3 h5' />
                  New York, USA
                </div>
                <div>
                  <BiPhone className='me-3 h5' />
                  +880 123 456 789
                </div>
                <div className="">
                  <FaMailBulk className='me-3 h5' />
                  info@propicks.com
                </div>
              </div>
              <div className="mt-3">
                <BiLogoFacebookSquare className='me-1 text-clickable link-primary h4'/>
                <BiLogoTwitter className='me-1 text-clickable link-info h4'/>
                <BiLogoLinkedinSquare className='me-1 text-clickable link-secondary h4'/>
                <BiLogoInstagram className='me-1 text-clickable link-warning h4'/>
                <BiLogoPinterest className='me-1 text-clickable link-danger h4'/>
              </div>
            </div>
          </div>
          {/* Column 2 */}
          <div className="col-sm-6 col-md-4 col-lg-3 text-center text-sm-start">
            <h4 className="text-capitalize fw-bold">Categories</h4>
            <div className="mt-4 lh-xlg">
              <div>All Products</div>
              <div>Shoes</div>
              <div>Bags</div>
              <div>Phones</div>
              <div>Beauty</div>
            </div>
          </div>
          {/* Column 3 */}
          <div className="col-sm-6 col-md-4 col-lg-3 text-center text-sm-start">
            <h4 className="text-capitalize fw-bold">Quick Links</h4>
            <div className="mt-4 lh-xlg">
              <div className="text-clickable">Gallery</div>
              <div className="text-clickable">Blog</div>
              <div className="text-clickable">Location</div>
              <div className="text-clickable">Privacy Policy</div>
              <div className="text-clickable">Terms of Use</div>
              <div className="text-clickable">FAQs</div>
            </div>
          </div>
          {/* Column 4 */}
          <div className="col-sm-6 col-md-4 col-lg-3 text-center text-sm-start">
            <h4 className="text-capitalize fw-bold">Recent Tweets</h4>
            <div className="mt-4">
              <p className="d-flex justify-content-evenly align-items-center mb-4">
                <BiLogoTwitter  className='me-3 h4'/>
                <span className='lh-sm'>
                  Jane Doe <br />
                  @ProPicks Greetings! <br />
                  #Offer <br />
                  Grab your item, 50% Big Sale Offer !!
                </span>
              </p>
              <p className="d-flex justify-content-evenly align-items-center">
                <BiLogoTwitter className='me-3 h4' />
                <span className='lh-sm'>
                  Peter Smith <br />
                  @ProPicks Greetings! <br />
                  #Offer <br />
                  Grab your item, 50% Big Sale Offer !!
                </span>
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer