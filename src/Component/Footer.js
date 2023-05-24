import React from 'react'
import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
   <>
   <footer className="py-4">
    <div className="container-xxl">
      <div className="row">
        <div className="col-5">
          <div className="footer-top-data d-flex gap-30 align-items-center">
            <img src="images/newsletter.png" alt="newsletter" />
            <h2 className='mb-0 text-white px-2'>Sign Up for Newsletter</h2>
          </div>
        </div>
        <div className="col-7">
        <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Enter your e-mail address"
                  aria-label="Enter your e-mail address"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                Subscribe
                </span>
              </div>
        </div>
      </div>
    </div>
   </footer>
   <footer className="py-3">
    <div className="container-xxl">
      <div className="row">
        <div className="col-4">
          <h4 className='text-white'>Contact Us</h4>
          <div>
            <address className='text-white fs-6'>
              Demo Shop Near vill chopal, <br/> Sonipat, Haryana<br/>
              Pincode:131103
            </address>
            <a href="tel:+91 8763451290" className='mt-3 d-block mb-2 text-white'>+91 8763451290</a>
            <a href="mailto:myideamyway123@gmail.com" className='mt-2 d-block mb-2 text-white'>myideamyway123@gmail.com</a>
            <div className="social_icons d-flex align-items-center gap-30 mt-4">
              <a className='text-white' href="/">
                 <BsLinkedin className='fs-4'/>
              </a>
              <a className='text-white' href="/">
                 <BsInstagram className='fs-4'></BsInstagram>
              </a>
              <a className='text-white' href="/">
                <BsGithub className='fs-4'></BsGithub>
              </a>
            </div>
          </div>
        </div>
        <div className="col-3">
          <h2 className='text-white'>Information</h2>
          <div className='footer-links d-flex flex-column'>
            <Link to="/privacy-policy" className='text-white py-2 mb-1'>Privacy Policy</Link>
            <Link to="/return-policy" className='text-white py-2 mb-1'>Refund Policy</Link>
            <Link to="/shipping-policy" className='text-white py-2 mb-1'>Shipping Policy</Link>
            <Link to="/terms-conditions" className='text-white py-2 mb-1'>Terms of Services</Link>
          </div>
        </div>
        <div className="col-3">
          <h2 className='text-white'>Account</h2>
          <div className='footer-links d-flex flex-column'>
            <Link className='text-white py-2 mb-1'>About Us</Link>
            <Link className='text-white py-2 mb-1'>FAQ</Link>
            <Link className='text-white py-2 mb-1'>Contact</Link>
         
          </div>
        </div>
        <div className="col-2">
          <h2 className='text-white'>Quick Links</h2>
          <div className='footer-links d-flex flex-column'>
            <Link className='text-white py-2 mb-1'>Laptops</Link>
            <Link className='text-white py-2 mb-1'>Watches</Link>
            <Link className='text-white py-2 mb-1'>Headphones</Link>
            <Link className='text-white py-2 mb-1'>Tablets</Link>
          </div>
        </div>
      </div>
    </div>
   </footer>
   <footer className="py-4">
    <div className="container-xxl">
      <div className="row">
        <div className="col-12">
          <p className='text-center mb-0 text-white'>&copy; {new Date().getFullYear()}; Powered By ABC</p>
        </div>
      </div>
    </div>
   </footer>
   </>
  )
}

export default Footer
