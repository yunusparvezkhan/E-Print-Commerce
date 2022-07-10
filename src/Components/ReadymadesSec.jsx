import React, { useRef, useState } from "react";
import "./ReadymadeSec.css";
import { Categories } from './ReadymadeSec';
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
                    slidesPerGroup={4}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="slider"
                >
                    <SwiperSlide>
                        <img src="https://images.pexels.com/photos/8758429/pexels-photo-8758429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                        <label>Artistic Dupatta</label>
                        <h3>₹329.00</h3>
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src="https://images.pexels.com/photos/3483967/pexels-photo-3483967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                        <label>Mat Black Tall Mug</label>
                        <h3>₹399.00</h3>
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src="https://images.pexels.com/photos/8543394/pexels-photo-8543394.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                        <label>Sky Blue Half Sleev Volunteer T Shirt</label>
                        <h3>₹449.00</h3>
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src="https://images.pexels.com/photos/1207918/pexels-photo-1207918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                        <label>Metalic 150mL Mug White</label>
                        <h3>₹149.00</h3>
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src="https://images.pexels.com/photos/8758429/pexels-photo-8758429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                        <label>Artistic Dupatta</label>
                        <h3>₹329.00</h3>
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src="https://images.pexels.com/photos/8758429/pexels-photo-8758429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                        <label>Artistic Dupatta</label>
                        <h3>₹329.00</h3>
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src="https://images.pexels.com/photos/8758429/pexels-photo-8758429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                        <label>Artistic Dupatta</label>
                        <h3>₹329.00</h3>
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src="https://images.pexels.com/photos/8758429/pexels-photo-8758429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                        <label>Artistic Dupatta</label>
                        <h3>₹329.00</h3>
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src="https://images.pexels.com/photos/8758429/pexels-photo-8758429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                        <label>Artistic Dupatta</label>
                        <h3>₹329.00</h3>
                    </SwiperSlide>

                </Swiper>


            </div>
        </div>
    )
}

export default ReadymadesSec