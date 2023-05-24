import React from 'react'
import BreadCrumb from '../Component/BreadCrumb'
import Meta from '../Component/Meta'

const Wishlist = () => {
  return (
    <div>
        <Meta title={"Wishlist"} />
            <BreadCrumb title="Wishlist" />
      <div className="wishlist-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
            <div className="row">
                <div className="col-3">
                    <div className="wishlist-products-card position-relative">
                    <img src="images/cross.svg" alt="quit" className='position-absolute cross img-fluid' />
                        <div className="products-card-image">
                        <img src="images/watch_01.jpg" alt="watch" className='img-fluid w-100'/>
                        </div>
                        <div className="py-3 px-3">
                             <h5 className='title'>
                             Olympus Pen E-PL9 Kit With 14-42, EZ Lens, Camera
                             </h5>
                             <h6 className="price mb-3 mt-3">$ 100</h6>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="wishlist-products-card position-relative">
                    <img src="images/cross.svg" alt="quit" className='position-absolute cross img-fluid' />
                        <div className="products-card-image">
                        <img src="images/watch_01.jpg" alt="watch" className='img-fluid w-100'/>
                        </div>
                        <div className="py-3 px-3">
                             <h5 className='title'>
                             Olympus Pen E-PL9 Kit With 14-42, EZ Lens, Camera
                             </h5>
                             <h6 className="price mb-3 mt-3">$ 100</h6>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="wishlist-products-card position-relative">
                    <img src="images/cross.svg" alt="quit" className='position-absolute cross img-fluid' />
                        <div className="products-card-image">
                        <img src="images/watch_01.jpg" alt="watch" className='img-fluid w-100'/>
                        </div>
                        <div className="py-3 px-3">
                             <h5 className='title'>
                             Olympus Pen E-PL9 Kit With 14-42, EZ Lens, Camera
                             </h5>
                             <h6 className="price mb-3 mt-3">$ 100</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Wishlist
