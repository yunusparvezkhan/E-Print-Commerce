import React from 'react'
import Header from '../Components/Header';
import Banner from '../Components/Banner';
import { ImageData } from '../Components/SliderData';
import PrintableMerchSec from '../Components/PrintableMerchSec';
import ReadymadeSec from '../Components/ReadymadesSec';
import './home.css';

const Home = () => {
    return (
        <div className='mainDiv'>
            <Banner slides={ImageData} />
            <PrintableMerchSec />
            <ReadymadeSec />
            <Header />

        </div>
    )
}

export default Home;