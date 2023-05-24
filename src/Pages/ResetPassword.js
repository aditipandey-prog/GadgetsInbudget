import React from 'react'
import { Link } from 'react-router-dom'
import BreadCrumb from '../Component/BreadCrumb'
import Meta from '../Component/Meta'

const ResetPassword = () => {
  return (
    <>
      <Meta title={"Create Account"} />
            <BreadCrumb title="Create Account" />
            <div className="login-wrapper home-wrapper-2 py-5">
            <div className="container-xxl">
            <div className="row">
                <div className="col-12">
                    <div className='auth-card'>
                        <h3 className="title text-center">Reset Password</h3>
                        <form action="">
                          <div>
                            <input type="email" name="email" className='form-control' placeholder='Enter Your Email-Id' required/>
                          </div>
                          <div>
                            <input type="password" name="password" className='form-control' placeholder='Enter Your Password' required/>
                          </div>
                          <div>
                            <Link to="/forgot-password" className='mb-3'> Forgot Password?</Link>
                          </div>
                          <div className='d-flex justify-content-center gap-15 align-items-center'>
                            <button className='button border-0'>
                              Login
                            </button>
                            <Link to="/singup" className='button signup'>SignUp</Link>
                          </div>
                        </form>
                    </div>
                </div>
            </div>
            </div>
      
      </div>
    </>
  )
}

export default ResetPassword
