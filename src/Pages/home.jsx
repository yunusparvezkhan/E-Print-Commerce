import React from 'react'
import Header from '../Components/Header';
import Banner from '../Components/Banner';
import PrintableMerchSec from '../Components/PrintableMerchSec';
import { ImageData } from '../Components/SliderData';
import './home.css';

const Home = () => {
    return (
        <div className='mainDiv'>
            <Banner slides={ImageData} />
            <PrintableMerchSec />
            <Header />

        </div>
    )
}

export default Home;