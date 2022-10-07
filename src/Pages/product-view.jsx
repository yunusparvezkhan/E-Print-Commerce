import React, { useState } from 'react';
import Header from '../Components/Header'
import { Product_Data, Product_Sizes } from './Data/product-data'
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";


import "./styles/product-view.css"
import { render } from 'react-dom';






const Product_View = () => {

    const [chosencolor, setChosencolor] = useState(0);
    const [chosensize, setChosensize] = useState(0);
    const [pvqnanums, setPvqnanums] = useState(3);


    return (
        <div className='pv-container'>

            {/* Product Display Section (image, title, price etc) */}
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


                        {
                            // Product_Sizes.at(chosensize).images.map((slide, index) => {
                            Product_Sizes.at(chosensize).colors.at(chosencolor).images.map((slide, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <img src={slide} alt={slide} id="product-prev-img" />
                                    </SwiperSlide>
                                )
                            }
                            )
                        }
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
                            Product_Sizes.at(chosensize).colors.at(chosencolor).price
                        }
                        </h2>
                        <label className='pv-price-subtext'>Including GST</label> <br />
                        <span className='pv-shipment-price-text'>{((Product_Data.shipment === 0 || Product_Data.shipment === null) ? 'Free Shipment' : "₹" + Product_Data.shipment)}</span> <br />

                        <label className='pv-color-text'>Colour</label>
                        {
                            Product_Sizes.at(chosensize).colors.map((xyz, colorindex) => {
                                let colorChangeFunc = () => {
                                    setChosencolor(colorindex);
                                }
                                return (
                                    <button className='color-button' onClick={colorChangeFunc}>{xyz.color}</button>
                                )
                            })
                        }
                    </div>
                    <label className='pv-size-text'>Size</label>
                    {
                        Product_Sizes.map((sizes, index) => {
                            let sizeChangeFunc = () => {
                                if (chosencolor < sizes.colors.length) {
                                    setChosensize(index);
                                } else {
                                    setChosencolor(0);
                                    setChosensize(index);
                                }
                            }
                            return (
                                <button className='size-button' onClick={sizeChangeFunc} >{sizes.size}</button>
                            )
                        })
                    }
                    <br />
                    <span>
                        {
                            Product_Sizes.at(chosensize).colors.at(chosencolor).spann
                        }
                    </span>
                </div>
            </div>


            {/* Description Section */}

            <div className='pv-despription-sec'>
                <h2 className='pv-despriction-title' >Description</h2>
                <p className='pv-description-body'>{Product_Data.description}</p>
            </div>


            {/* Question and Answer section */}

            <div className='pv-qna-sec'>
                <h2>Questions & Answers</h2>
                {
                    Product_Data.qna.map((qnaset, index) => {
                        if (index <= pvqnanums - 1) {
                            return (
                                <div>
                                    <h3 className='pv-qna-question'>{qnaset.question}</h3>
                                    <p className='pv-qna-answer'>{qnaset.answer}</p>
                                </div>
                            )
                        }
                    })
                }
                <button onClick={() => setPvqnanums(pvqnanums + 5)}></button>

            </div>
            <div className='pv-review-sec'>
                <h2>Reviews</h2>
                {
                    Product_Data.reviews.map((review, index) => {

                        return (
                            <div>
                                <div>
                                    {
                                        review.star.map(() => {
                                            return (
                                                <StarIcon />
                                            )
                                        })
                                    }
                                </div>
                                <div>
                                    {
                                        review.star.map((e, i) => {
                                            let emptystar = 5 - review.star.length;
                                            if (i < emptystar) {
                                                return (<StarOutlineIcon />)
                                            }
                                        })
                                    }
                                </div>
                                <h3 className='pv-review-title'>{review.headline}</h3>
                                <p className='pv-review-body'>{review.reviewBody}</p>
                            </div>
                        )
                    })
                }
            </div>


            <Header />
        </div >
    )
}

export default Product_View;
