import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = () => {
  return (
    <div>
      <div className="blog-card">
        <div className="card-image">
            <img src="//cdn.shopify.com/s/files/1/0620/5082/8457/articles/blog-4_405x.jpg?v=1654928936" className="img-fluid" alt="blog" />
        </div>
         <div className="blog-content">
            <p className="date">1 Dec,2022</p>
            <h5 className="title"> A beautiful sunday morning renaissance</h5>
            <p className="desc">You’re only as good as your last collection, which is an enormous pressure. I think there is something about luxury...
            </p>
            <Link to="blogs/:id" className="button">Read More</Link>
         </div>
      </div>
    </div>
  )
}

export default BlogCard
