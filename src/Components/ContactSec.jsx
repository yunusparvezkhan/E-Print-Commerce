import React from 'react';
import "./ContactSec.css";
import BgImg from "../Media/images/ContactSecBg.png";

const ContactSec = () => {
    return (
        <div className='Con-Container'>
            <img src={BgImg} className="cs-img" />
            <div className='cs-textbox'>
                <h1 className='cs-text cs-text-a'>You Can</h1>
                <h1 className='cs-text cs-text-b'>Also</h1>
                <h1 className='cs-text cs-text-c'>Tell us</h1>
                <h1 className='cs-text cs-text-d'>About your</h1>
                <h1 className='cs-text cs-text-e'>needs</h1>
            </div>
            <button className='cs-contact-btn' >Contact</button>
        </div>
    )
}

export default ContactSec;