import React from 'react'
import { Link } from 'react-router-dom'
import BreadCrumb from '../Component/BreadCrumb'
import Meta from '../Component/Meta'

const SingUp = () => {
  return (
    <>
     <Meta title={"Create Account"} />
            <BreadCrumb title="Create Account" />
      <div className="login-wrapper home-wrapper-2 py-5">
           <div className="container-xxl">
           <div className="row">
                <div className="col-12">
                    <div className='sign_up'>
                        <h3 className="title text-center">Create Account</h3>
                        <form action="">
                            <div>
                                <input type="text" name="fname" className='form-control' placeholder='First Name' required />
                            </div>
                            <div>
                                <input type="text" name="lname" className='form-control' placeholder='Last name' required />
                            </div>
                          <div>
                            <input type="email" name="email" className='form-control' placeholder='Enter Your Email-Id' required/>
                          </div>
                          <div>
                            <input type="password" name="password" className='form-control' placeholder='Enter Your Password' required/>
                          </div>
                          <div className='d-flex justify-content-center gap-15 align-items-center'>
                            <button className='button border-0 mb-4'>
                              Create
                            </button>
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

export default SingUp
