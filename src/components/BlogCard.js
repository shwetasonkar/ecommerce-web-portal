import React from "react";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    <div className="blog-card">
      <div className="card-image">
        <img src="images/img9.jpg" className="img-fluid w-100" alt="blog" />
      </div>
      <div className="blog-content">
        <p className="date">5 May , 2023</p>
        <h5 className="title">Exploring the Latest Electronic Devices: Innovation at Your Fingertips</h5>
        <p className="desc">
        The world of electronic devices is constantly evolving, bringing us exciting innovations that enhance our lives in numerous ways. From the power-packed smartphones in our pockets to the smart home devices transforming our living spaces, and the wearable tech that keeps us connected and fit, electronic devices continue to push boundaries.
        </p>
        <Link to="/blog/:id" className="button">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
