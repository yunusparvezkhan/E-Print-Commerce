import React, { useState } from 'react';
import styled from '@emotion/styled';
import { ArrowForwardRounded } from '@mui/icons-material';
import { ImageData } from "./ImageData";
import "./Banner.css"

const Container = styled.div`
    width: 100%;
    height: 40vh;
    position : absolute;
    top:0;
    left:0;
`

const ImageContainer = styled.div`
    height:100%;
    width:100%;
`

const BannerDarker = styled.div`
    position: absolute;
    top:0;
    width:100%;
    height: 100%;
    background-color:#00000035;
`

const Arrow = styled.div`
    position:absolute;
    height:50px;
    width: 50px;
    border-radius: 50%;
    top:50%;
    transform: translate(0, -50%);
    background-color: coral;
    display: flex;
    align-items: center;
    justify-content: center;
    left: ${props => props.direction === "left" && "30px"};
    right: ${props => props.direction === "right" && "30px"};
    cursor:pointer;
`


const Banner = ({ slides, bgclr }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;
    const bgcolor = slides.bgclor;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }



    return (
        <Container  >
            <ImageContainer>
                {ImageData.map((slide, index) => {
                    return (
                        <div className={index === current ? 'slide active' : 'slide'} key={index} >
                            {index === current && (
                                <div style={{ backgroundColor: slide.bgclor }} >
                                    <img src={slide.image} alt="fashion image" style={{ width: "100%", height: "40vh", objectFit: "contain" }} />
                                </div>
                            )}

                        </div>
                    )
                })}
            </ImageContainer>

            <BannerDarker />
            <Arrow direction="left" onClick={prevSlide} >
                <ArrowForwardRounded style={{ transform: "rotate(180deg)" }} />
            </Arrow>
            <Arrow direction="right" onClick={nextSlide} >
                <ArrowForwardRounded />
            </Arrow>
        </Container>
    )
}

export default Banner;