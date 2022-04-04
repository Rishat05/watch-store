import React from 'react';
import './Home.css';
const Home = () => {
    return (
        <div className='home-container'>
            <div className="data-container">
                <h1>Watch Store</h1>
                <p>A watch is a portable timepiece intended to be carried or worn by a person. It is designed to keep a consistent movement despite the motions caused by the person's activities.</p>
                <button>Live Demo</button>
            </div>
            <div className="pic-container">
                <img src="https://fdn2.gsmarena.com/vv/bigpic/apple-watch-s6-titanium.jpg" alt="" />
            </div>
        </div>
    );
};

export default Home;