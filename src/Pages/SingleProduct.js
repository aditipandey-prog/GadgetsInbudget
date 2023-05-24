import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import BreadCrumb from "../Component/BreadCrumb";
import Meta from "../Component/Meta";
import ProductCard from "../Component/ProductCard";

const SingleProduct = () => {
    const [orderProduct, setorderedProduct] = useState(false);
    return (
        <>
            <Meta title={"Refund Policy"} />
            <BreadCrumb title="Refund Policy" />
            <div className="main-product-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-6">
                            <div className="main-product-image">
                                <div></div>
                            </div>
                        </div>
                        <div className="col-6"></div>
                    </div>
                </div>
            </div>
            <div className="description-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                        <h4>Description</h4>
                            <div className="bg-white p-3">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Ex repellendus sint cum officiis, pariatur odio nostrum
                                    sequi? Sapiente, eveniet! Asperiores perferendis, velit
                                    quis ea assumenda dicta perspiciatis impedit. Dignissimos,
                                    laudantium.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="review-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h3>Reviews</h3>
                            <div className="review-inner-wrapper">
                            <div className="review-head d-flex justify-content-between align-items-end">
                                <div>
                                    <h4 className="mb-2">Customer Reviews</h4>
                                    <div className="d-flex align-items-center gap-10">
                                        <ReactStars count={5} size={24} value={4} edit={false} activeColor="#ffd700"
                                        />
                                        <p className="mb-0">Based on 2 reviews</p>
                                    </div>
                                </div>
                                {
                                    orderProduct && (
                                        <div>
                                            <a className="text-dark text-decoration-underline" href="/">Write a Review</a>
                                        </div>
                                    )
                                }
                            </div>
                            <div className="review-form py-4">
                                <h4>Write a Review</h4>
                            <form action="" className='d-flex flex-column gap-10'>
                                      
                                        <div>
                                        <ReactStars count={5} size={18} value={4} edit={true} activeColor="#ffd700"
                                        />
                                        </div>
                                        <div className='form-floating'>
                                            <textarea name="" className='form-control' cols="30" required rows="10" id="floatingComment" />
                                            <label for="floatingComment">Comment</label>
                                        </div>
                                        <div className="d-flex justify-content-end">
                                            <button className='button border-0'>Submit Review</button>
                                        </div>
                                    </form>
                            </div>
                            <div className="reviews mt-4">
                                <div className="review">
                                <div className="d-flex gap-10 align-items-center">
                                    <h6 className="mb-0">Navdeep</h6>
                                    <ReactStars count={5} size={20} value={4} edit={false} activeColor="#ffd700"
                                        />
                                </div>
                                        <p className="mt-3">
                                            Lorem ipsum dolor sit amet, 
                                            consectetur adipisicing elit. 
                                            Earum odio quisquam libero nihil 
                                            voluptatum recusandae, maiores saepe mollitia 
                                            quos qui dolorum modi adipisci optio pariatur eveniet 
                                            aliquam odit cumque labore.?
                                        </p>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="our-products-wrapper py-5 home-wrapper-2">
                <div className="container xxl">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="section-heading">Our Special Products</h3>
                        </div>
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>
                </div>
            </section>
        </>
    );

};

export default SingleProduct;