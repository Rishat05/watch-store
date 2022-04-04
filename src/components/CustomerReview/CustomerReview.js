import React from 'react';
import './CustomerReview.css';
const CustomerReview = (props) => {
    const { name, img, comment, rating } = props.review;
    return (
        <div className="review-post">
            <img className='review-img' src={img} alt="" />
            <h3>{name}</h3>
            <div className="ratings">
                <i class="fas fa-star filled"></i>
                <i class="fas fa-star filled"></i>
                <i class="fas fa-star filled"></i>
                <i class="fas fa-star filled"></i>
                <i class="fas fa-star empty"></i>
                <span class="rating-point">{rating}</span>
            </div>
            <p>{comment}</p>

        </div>

    );
};

export default CustomerReview;