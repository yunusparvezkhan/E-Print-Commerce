import React, { useRef, useState } from "react";
import "./ReadymadeSec.css";
import { Categories, ReadymadeProductsData } from './ReadymadeSec';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

const ReadymadesSec = () => {

    return (
        <div className="OuterBody">
            <div className='body'>
                <h1 className='title'>Our Readymades</h1>
                <select className='dropdown-btn'>
                    <option value="">Select Category</option>
                    <option value={Categories.first}>{Categories.first}</option>
                    <option value={Categories.second}>{Categories.second}</option>
                    <option value={Categories.third}>{Categories.third}</option>
                    <option value={Categories.fourth}>{Categories.fourth}</option>
                    <option value={Categories.fifth}>{Categories.fifth}</option>
                    <option value={Categories.sixth}>{Categories.sixth}</option>
                </select>


                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    slidesPerGroup={1}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="slider"
                >



                    {ReadymadeProductsData.map((slide, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <img src={slide.src} alt={slide.alt} />
                                <label>{slide.title}</label>
                                <h3>₹{slide.rupees}.{slide.paisa}</h3>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>


            </div>
        </div>
    )
}

export default ReadymadesSec