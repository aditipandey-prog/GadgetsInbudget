import React from 'react'
import BreadCrumb from '../Component/BreadCrumb'
import Color from '../Component/Color'
import Meta from '../Component/Meta'

const CompareProducts = () => {
  return (
    <div>
         <Meta title={"Compare Products"} />
            <BreadCrumb title="Compare Products" />
      <div className="compare-products-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
            <div className="row">
                <div className="col-3">
                     <div className="compare-products-card position-relative">
                        <img src="images/cross.svg" alt="quit" className='position-absolute cross img-fluid' />
                        <div className="products-card-image">
                        <img src="images/watch.jpg" alt="watch" />
                        </div>
                        <div className="compare-products-details">
                             <h5 className='title'>
                             Olympus Pen E-PL9 Kit With 14-42, EZ Lens, Camera
                             </h5>
                             <h6 className="price mb-3 mt-3">$ 100</h6>
                             <div>
                                <div className="product-detail">
                                    <h5>Brand:</h5>
                                    <p>Havels</p>
                                </div>
                                <div className="product-detail">
                                    <h5>Type:</h5>
                                    <p>Watch</p>
                                </div>
                                <div className="product-detail">
                                    <h5>Availability:</h5>
                                    <p>In stock</p>
                                </div>
                                <div className="product-detail">
                                    <h5>Color:</h5>
                                    <Color/>
                                </div>
                                <div className="product-detail">
                                    <h5>Size:</h5>
                                    <div className="d-flex gap-10">
                                        <p>S</p>
                                        <p>M</p>
                                    </div>
                                </div>
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

export default CompareProducts

