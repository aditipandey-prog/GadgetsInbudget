import React from 'react'
import BreadCrumb from '../Component/BreadCrumb'
import Meta from '../Component/Meta'
import {FaHome, FaInfo} from 'react-icons/fa'
import {IoCall} from 'react-icons/io5'
import {HiMail} from 'react-icons/hi'
const Contact = () => {
    return (
        <div>
            <Meta title={"Contact Us"} />
            <BreadCrumb title="Contact Us" />
            <div className="contact-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d60542.39195429988!2d73.92367866683959!3d18.488211073704694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1677659979757!5m2!1sen!2sin"
                                width="600" height="450"
                                className='border-0 w-100' allowFullScreen=""
                                loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                        <div className="col-12 mt-5">
                            <div className="contact-inner-wrapper d-flex justify-content-between">
                                <div>
                                    <h3 className="contact-title">Contact</h3>
                                    <form action="" className='d-flex flex-column gap-10'>
                                        <div className='form-floating'>
                                            <input type="text" name="" className='form-control' required id="floatingInput" />
                                            <label for="floatingInput">Name</label>
                                        </div>
                                        <div className='form-floating'>
                                            <input type="email" name="" className='form-control' required id="floatingEmail" />
                                            <label for="floatingEmail">Email</label>
                                            </div>
                                        <div className='form-floating'>
                                            <input type="text" name="" className='form-control' required maxLength={10} id="floatingPhone" />
                                            <label for="floatingPhone">Phone</label>
                                        </div>
                                        <div className='form-floating'>
                                            <textarea name="" className='form-control' cols="30" required rows="10" id="floatingComment" />
                                            <label for="floatingComment">Comment</label>
                                        </div>
                                        <div>
                                            <button className='button border-0 '>Submit</button>
                                        </div>
                                    </form>
                                </div>
                                <div>
                                    <h3 className="contact-title">Get In Touch With Us</h3>
                                    <div>
                                        <ul className='ps-0'>
                                            <li className='mb-3 d-flex align-items-center gap-15'>
                                                <FaHome className='fs-5'></FaHome>
                                                <address className='mb-0'>
                                                33 New Montgomery St. Ste 750 San Francisco, CA, USA 94105
                                                    </address> 
                                                
                                            </li>
                                            <li className='mb-3 d-flex align-items-center gap-15'>
                                            <IoCall className='fs-5'/>
                                            <a href="tel:+91 842XXXXXXX"> +91 842XXXXXXX</a>
                                            </li>
                                            <li className='mb-3 d-flex align-items-center gap-15'>
                                                <HiMail className='fs-5'/>
                                                <a href="mailto:demo@123.gmail.com">demo@123.gmail.com</a>
                                            </li>
                                            <li className='mb-3 d-flex align-items-center gap-15'>
                                                <FaInfo className='fs-5'/>
                                                <p className='mb-0'> Monday – Friday 10 AM – 8 PM</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            )
}

export default Contact;
