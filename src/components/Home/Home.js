import React, { useEffect, useState } from 'react';
import './Home.css';
import Reviews from '../Reviews/Reviews';

const Home = () => {


    return (
        <div>
            <div className="home-container">
                <div className="data-container">
                    <h1>Watch Store</h1>
                    <p>A watch is a portable timepiece intended to be carried or worn by a person. It is designed to keep a consistent movement despite the motions caused by the person's activities.</p>
                    <button className='data-btn'>Live Demo</button>
                </div>
                <div className="pic-container">
                    <img src="https://fdn2.gsmarena.com/vv/bigpic/apple-watch-s6-titanium.jpg" alt="" />
                </div>
            </div>
            <div className="customer-reviews">
                <h1>Customer Reviews(3)</h1>
                <div>

                </div>
                <button className='review-btn'>See all Reviews</button>

            </div>

        </div>
    );
};

export default Home;