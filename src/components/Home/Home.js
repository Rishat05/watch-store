import React, { useEffect, useState } from 'react';
import './Home.css';
import Reviews from '../Reviews/Reviews';
import useReviews from '../../hooks/useReviews';
import CustomerReview from '../CustomerReview/CustomerReview';
import { Link } from 'react-router-dom';

const Home = () => {
    const [reviews, setreviews] = useReviews();
    return (
        <div>
            <div className="home-container">
                <div className="data-container">
                    <h1 className='title'><span className='first-word-title'> Watch</span> Store</h1>
                    <p>A watch is a portable timepiece intended to be carried or worn by a person. It is designed to keep a consistent movement despite the motions caused by the person's activities.</p>
                    <button className='data-btn'>Live Demo</button>
                </div>
                <div className="pic-container">
                    <img src="https://fdn2.gsmarena.com/vv/bigpic/apple-watch-s6-titanium.jpg" alt="" />
                </div>
            </div>
            <div className='home-review'>
                <h1>Customer Reviews(3)</h1>
                <div className='customer-reviews'>
                    {
                        reviews.slice(3).map(review =>
                            <CustomerReview
                                key={review.id}
                                review={review}
                            ></CustomerReview>)
                    }
                </div>
                <Link to='/reviews'>
                    <button className='review-btn'>See all Reviews</button>
                </Link>


            </div>

        </div>
    );
};

export default Home;