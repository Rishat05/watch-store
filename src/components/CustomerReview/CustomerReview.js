import React from 'react';
import './CustomerReview.css';
const CustomerReview = (props) => {
    const { name, img, comment, rating } = props.review;
    return (
        <div className="review-post">
            <div>
                <img className='review-img' src={img} alt="" />
            </div>

            <div className='review-comments'>

                <p>{comment}</p>
                <h3>{name}</h3>
                <div className="ratings">
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star empty"></i>
                    <span className="rating-point">{rating}</span>

                </div>

            </div>


        </div >

    );
};

export default CustomerReview;