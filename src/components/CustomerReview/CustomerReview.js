import React from 'react';
import './CustomerReview.css';
const CustomerReview = (props) => {
    const { name, img, comment } = props.review;
    return (
        <div className="review-post">
            <img className='review-img' src={img} alt="" />
            <h3>{name}</h3>
            <p>{comment}</p>

        </div>

    );
};

export default CustomerReview;