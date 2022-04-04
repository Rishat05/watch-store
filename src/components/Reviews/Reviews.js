import React from 'react';
import './Reviews.css';
import useReviews from '../../hooks/useReviews';
import CustomerReview from '../CustomerReview/CustomerReview';

const Reviews = () => {
    const [reviews, setreviews] = useReviews();
    return (
        <div className='review-show'>
            {
                reviews.map(review =>
                    <CustomerReview
                        key={review.id}
                        review={review}
                    ></CustomerReview>)
            }


        </div>
    );
};

export default Reviews;