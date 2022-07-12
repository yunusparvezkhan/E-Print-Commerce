import React from "react";
import "./FeaturedProductsSec.css"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

const FeaturedProductsSec = () => {
    return (
        <div className='FPS-container'>
            <h1 className="title" >Featured Products</h1>
            <label className='subtitle'>Sold most in the last week</label>


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

                <SwiperSlide>
                    <img src="https://images.unsplash.com/photo-1546379753-abb7fd8cfb93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="" />
                    <label>250mL Coffee Mug</label>
                    <h3>₹239.00</h3>
                </SwiperSlide>

                <SwiperSlide>
                    <img src="https://images.pexels.com/photos/12395768/pexels-photo-12395768.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <label>Printable White Tee Shirt for Couples</label>
                    <h3>₹799.00</h3>
                </SwiperSlide>

                <SwiperSlide>
                    <img src="https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <label>Prinatable White Tee Shirt</label>
                    <h3>₹399.00</h3>
                </SwiperSlide>

                <SwiperSlide>
                    <img src="https://images.pexels.com/photos/1214205/pexels-photo-1214205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <label>Basic Photo Frame</label>
                    <h3>₹169.00</h3>
                </SwiperSlide>
            </Swiper>



        </div>
    )
}

export default FeaturedProductsSec;