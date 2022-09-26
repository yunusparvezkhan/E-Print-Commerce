import React from 'react'
import Header from '../Components/Header'
import { Product_Data, Product_Sizes } from './Data/product-data'
import "./styles/product-view.css"

const Product_View = () => {
    return (
        <div className='pv-container'>
            <div className='pv-display-sec'>
                <div className='pv-image-container'>
                    {/* swipper element */}
                </div>
                <div className='pv-details-container'>
                    <span className='pv-hash-a'>{Product_Data.tags.at(0)}</span>
                    <span className='pv-hash-b'>{Product_Data.tags.at(1)}</span>
                    <span className='pv-hash-c'>{Product_Data.tags.at(2)}</span>
                    <h1 className='pv-title'>{Product_Data.title}</h1>
                    <label className='pv-rating-text'>{Product_Data.rating}</label> <br />
                    {/* stars */}

                    <label className='pv-price-text'>Price</label>
                    <h2 className='pv-price'>₹{
                        Product_Sizes.at(0).prices.at(1)
                    }</h2>
                    <label className='pv-price-subtext'>Including GST</label> <br />
                    <span className='pv-shipment-price-text'>{((Product_Data.shipment === 0 || Product_Data.shipment === null) ? 'Free Shipment' : "₹" + Product_Data.shipment)}</span> <br />

                    <label className='pv-color-text'>Colour</label>
                    {
                        Product_Sizes.at(0).colors.map((color) => {
                            return (
                                <button className='color-button'>{color}</button>
                            )
                        })
                    }

                    <label className='pv-size-text'>Size</label>
                    {
                        Product_Sizes.map((sizes) => {
                            return (
                                <button className='size-button'>{sizes.size}</button>
                            )
                        })
                    }


                </div>
            </div>
            <Header />
        </div>
    )
}

export default Product_View