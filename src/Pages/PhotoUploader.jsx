import React from 'react'
import SideNav from '../Components/side-nav'

const PhotoUploader = ({ ProductName }) => {
    return (
        <div className='photouploader-container'>
            <SideNav />
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