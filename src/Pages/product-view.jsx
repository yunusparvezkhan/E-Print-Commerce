import React from 'react'
import Header from '../Components/Header'
import { Product_Data, Product_Sizes } from './Data/product-data'


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";


import "./styles/product-view.css"






const Product_View = () => {

    let chosencolor = 1;
    let chosensize = 1;
    chosencolor = 0;
    chosensize = 0;

    return (
        <div className='pv-container'>
            <div className='pv-display-sec'>
                <div className='pv-image-container'>


                    <Swiper
                        slidesPerView={1}
                        slidesPerGroup={1}
                        loop={true}
                        loopFillGroupWithBlank={true}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        id="product-preview"

                    >


                        {Product_Sizes.at(chosencolor).images.map((slide, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <img src={slide} alt={slide} id="product-prev-img" />
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>



                </div>
                <div className='pv-details-container' >
                    <div id='pv-details-sub-container' >
                        <span className='pv-hash-a'>{Product_Data.tags.at(0)}</span>
                        <span className='pv-hash-b'>{Product_Data.tags.at(1)}</span>
                        <span className='pv-hash-c'>{Product_Data.tags.at(2)}</span>
                        <h1 className='pv-title'>{Product_Data.title}</h1>
                        <label className='pv-rating-text'>{Product_Data.rating}</label> <br />
                        {/* stars */}

                        <label className='pv-price-text'>Price</label>
                        <h2 className='pv-price'>₹{
                            Product_Sizes.at(chosensize).prices.at(chosencolor)
                        }
                        </h2>
                        <label className='pv-price-subtext'>Including GST</label> <br />
                        <span className='pv-shipment-price-text'>{((Product_Data.shipment === 0 || Product_Data.shipment === null) ? 'Free Shipment' : "₹" + Product_Data.shipment)}</span> <br />

                        <label className='pv-color-text'>Colour</label>
                        {
                            Product_Sizes.at(chosensize).colors.map((color) => {
                                return (
                                    <button className='color-button'>{color}</button>
                                )
                            })
                        }
                    </div>
                    <label className='pv-size-text'>Size</label>
                    {
                        Product_Sizes.map((sizes, index) => {
                            let sizeChangeFunc = () => {
                                chosensize = index;
                                console.log(chosensize);
                                // let subCont = document.getElementById("pv-details-sub-container");
                                // window.subCont.reload();
                                // subCont.fetchData()
                            }
                            return (
                                <button className='size-button' onClick={sizeChangeFunc} >{sizes.size}</button>
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