import React from 'react'

const PhotoUploader = ({ ProductName }) => {
    return (
        <div className='photouploader-container'>
            <div classname="photouploader-nav">
                <button className='photouploader-nav-buttons'>Home</button>
                <button className='photouploader-nav-buttons'>About Us</button>
                <button className='photouploader-nav-buttons'>Printables</button>
                <button className='photouploader-nav-buttons'>Readymades</button>
                <button className='photouploader-nav-buttons'>Contact Us</button>
                <button className='photouploader-nav-buttons'>Cart</button>
                <button className='photouploader-nav-buttons'>Favourites</button>
                <button className='photouploader-nav-buttons'>Account</button>
                <button className='photouploader-nav-buttons'>Privacy Policies</button>
                <button className='photouploader-nav-buttons'>Terms & Conditions</button>
            </div>
            <div>
                <h2 className='photouploader-product-name'>{ProductName}</h2>
                {/* Photo Upload and sizing panel component */}
                <button className='photouploader-prime-btn'>Add to Cart</button>
                <button className='photouploader-prime-btn'>Go Back</button>
            </div>

            {/* This page will upload informations like, product id, image, image coordinates (x & y) to a database related to user's cart */}

        </div>
    )
}

export default PhotoUploader