import React from 'react'
import Header from '../Components/Header';
import Banner from '../Components/Banner';
import { ImageData } from '../Components/ImageData';


const Home = () => {
    return (
        <div>
            <Banner slides={ImageData} />
            <Header />

        </div>
    )
}

export default Home;