import React from 'react';
import "./ReadymadeSec.css";
import { Categories } from './ReadymadeSec';

const ReadymadesSec = () => {
    return (
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

            <div className='ScrollSec'>
                <div className='Card'></div>
                <div className='Card'></div>
                <div className='Card'></div>
                <div className='Card'></div>
                <div className='Card'></div>
                <div className='Card'></div>
                <div className='Card'></div>
                <div className='Card'></div>
                <div className='Card'></div>
            </div>
        </div>
    )
}

export default ReadymadesSec