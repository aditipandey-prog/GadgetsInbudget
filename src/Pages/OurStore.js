import React, { useState } from 'react'
import BreadCrumb from '../Component/BreadCrumb'
import Meta from '../Component/Meta'
import ReactStars from "react-rating-stars-component";
import ProductCard from '../Component/ProductCard';
import Color from '../Component/Color';

const OurStore = () => {
    const[grid,setGrid]=useState(4);
    return (
        <>
            <Meta title={"Our Store"} />
            <BreadCrumb title="Our Store" />
            <div className='store-wrapper home-wrapper-2 py-5'>
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-3">
                            <div className='filter-card mb-3'>
                                <h3 className="filter-title">Shop By Categories</h3>
                                <div>
                                    <ul className="ps-0">
                                        <li>Watch</li>
                                        <li>TV</li>
                                        <li>Camera</li>
                                        <li>Laptop</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='filter-card mb-3'>
                                <h3 className="filter-title">Filter By</h3>
                                <div>
                                    <h5 className="sub-title">Availability</h5>
                                    <div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                                In Stock(21)
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label className="form-check-label" htmlFor="flexCheckChecked">
                                                Out Of Stock(1)
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h5 className="sub-title">Price</h5>
                                    <div className='d-flex align-items-center gap-10'>
                                        <div className="form-floating">
                                            <input type="number" className="form-control" id="floatingInput" placeholder="From" />
                                            <label for="floatingInput">From</label>
                                        </div>
                                        <div className="form-floating">
                                            <input type="number" className="form-control" id="floatingInput" placeholder="To" />
                                            <label for="floatingInput1">To</label>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h5 className="sub-title">Colors</h5>
                                    <div>
                                        <Color/>
                                    </div>
                                </div>
                                <div>
                                    <h5 className="sub-title">Size</h5>
                                    <div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="size-s" />
                                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                                S(2)
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="size-m" />
                                            <label className="form-check-label" htmlFor="flexCheckChecked">
                                                M(2)
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='filter-card mb-3'>
                                <h3 className="filter-title">Product Tags</h3>
                                <div>
                                    <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                                        <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Headphones</span>
                                        <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Laptop</span>
                                        <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Mobile</span>
                                        <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Oppo</span>
                                        <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Speaker</span>
                                    </div>
                                </div>
                            </div>
                            <div className='filter-card mb-3'>
                                <h3 className="filter-title">Random Products</h3>
                                <div>
                                    <div className="random-products d-flex mb-3">
                                        <div className="w-50">
                                            <img src="images/watch.jpg" className="img-fluid" alt="watch" />
                                        </div>
                                        <div className="w-50">
                                            <h5>Kids headphones bulk 10 pack multi colored for students</h5>
                                            <ReactStars
                                                count={5}
                                                value={3}
                                                size={24}
                                                edit={false}
                                                activeColor="#ffd700"
                                            />
                                            <b>$100</b>
                                        </div>
                                    </div>
                                    <div className="random-products d-flex ">
                                        <div className="w-50">
                                            <img src="images/watch.jpg" className="img-fluid" alt="watch" />
                                        </div>
                                        <div className="w-50">
                                            <h5>Kids headphones bulk 10 pack multi colored for students</h5>
                                            <ReactStars
                                                count={5}
                                                value={3}
                                                size={24}
                                                edit={false}
                                                activeColor="#ffd700"
                                            />
                                            <b>$100</b>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-9">
                            <div className='filter-sort-grid mb-4'>
                                <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center gap-10">
                                    <p className="mb-0 d-block " style={{width:"90px"}}>Sort By:</p>
                                    <select name="sort_by" class="form-control form-se;ect" id="SortBy" aria-describedby="a11y-refresh-page-message">
                                        <option value="manual">Featured</option><option value="best-selling" selected="selected">Best selling</option>
                                        <option value="title-ascending">Alphabetically, A-Z</option><option value="title-descending">Alphabetically, Z-A</option>
                                        <option value="price-ascending">Price, low to high</option><option value="price-descending">Price, high to low</option>
                                        <option value="created-ascending">Date, old to new</option><option value="created-descending">Date, new to old</option>
                                        </select>
                                </div>
                                <div className="d-flex align-items-center gap-10">
                                    <p className="totalproducts mb-0">21 products</p>
                                    <div className="d-flex gap-10 align-items-center grid">
                                        <img src="images/gr4.svg" onClick={()=>{setGrid(3)}} alt="grid" className="d-block img-fluid" />
                                        <img src="images/gr3.svg" onClick={()=>{setGrid(4)}} alt="grid" className="d-block img-fluid" />
                                        <img src="images/gr2.svg" onClick={()=>{setGrid(6)}} alt="grid" className="d-block img-fluid" />
                                        <img src="images/gr.svg"  onClick={()=>{setGrid(12)}}alt="grid" className="d-block img-fluid"/>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="products-lists pb-5">
                                <div className="d-flex gap-10 flex-wrap">
                                    <ProductCard grid={grid}/>
                                    <ProductCard grid={grid}/>
                                    <ProductCard grid={grid}/>
                                    <ProductCard grid={grid}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurStore
