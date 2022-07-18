import React from "react";
import "./FeaturedProductsSec.css"
import { FeaturedProductsData } from "./FeaturedProductsData";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


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
            <h1 className="fps-title" >Featured Products</h1>
            <label className='fps-subtitle'>Sold most in the last week</label>


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


                {FeaturedProductsData.map((slide, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <img src={slide.src} alt={slide.alt} />
                            <label>{slide.title}</label>
                            <h3>₹{slide.rupees}.{slide.paisa}</h3>
                            <div className="fps-add-to-cart-button" >
                                <div className="fps-add-to-cart-icon">
                                    <AddShoppingCartIcon />
                                    <p>Add To Cart</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>



        </div>
    )
}

export default FeaturedProductsSec;