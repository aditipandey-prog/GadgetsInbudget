import React from 'react'
import { Link } from 'react-router-dom'
import BreadCrumb from '../Component/BreadCrumb'
import Meta from '../Component/Meta'

const Forgotpassword = () => {
  return (
    <>
       <Meta title={"Account"} />
            <BreadCrumb title="Account" />
            <div className="forgot-password-wrapper home-wrapper-2 py-5">
            <div className="row">
                <div className="col-12">
                    <div className='forgot-password-card'>
                        <h3 className="title text-center">Reset Your Password</h3>
                        <p className='mt-3 mb-4 text-center'>We will send you an email to reset your password</p>
                        <form action="">
                          <div className='mb-4'>
                            <input type="email" name="email" className='form-control' placeholder='Enter Your Email-Id' required/>
                          </div>
                          <div className=' mt-4 d-flex justify-content-center gap-15 flex-column align-items-center'>
                            <button className='button border-0'>
                              Submit
                            </button>
                            <Link to="/login" className='mb-3'> Cancel</Link>
                          
                          </div>
                        </form>
                    </div>
                </div>
            </div>
      
      </div>
    </>
  )
}

export default Forgotpassword
