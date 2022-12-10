import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure className='image-style w-6/12 mx-auto'></figure>
            <div className="card-body">
                <h2 className="card-title 6/12">New album is released!</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Listen</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;