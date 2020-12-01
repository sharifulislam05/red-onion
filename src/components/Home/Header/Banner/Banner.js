import React from 'react';
import Background from '../../../../images/bannerbackground.png';
import './_banner.scss'

const Banner = () => {
    
    return (
        <div className="text-center d-flex justify-content-center align-items-center banner">
            <div>
                <h1>Best food waiting your belly</h1>
                <div className="mt-3 banner__input--container">
                    <input type="text" className="banner__input--search mr-5" placeholder="Search food items" />
                    <button value="Save" className="banner__button mr-5">Search</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;