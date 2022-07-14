import React from 'react'
import Header from '../Components/Header';
import Banner from '../Components/Banner';
import { ImageData } from '../Components/BannerData';
import PrintableMerchSec from '../Components/PrintableMerchSec';
import ReadymadeSec from '../Components/ReadymadesSec';
import FeaturedProductsSec from '../Components/FeaturedProductsSec';
import ContactSec from '../Components/ContactSec';
import './home.css';

const Home = () => {
    return (
        <div className='mainDiv'>
            <Banner slides={ImageData} />
            <PrintableMerchSec />
            <ReadymadeSec />
            <FeaturedProductsSec />
            <ContactSec />
            <Header />

        </div>
    )
}

export default Home;