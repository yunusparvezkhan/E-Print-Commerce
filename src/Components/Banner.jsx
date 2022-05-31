import React from 'react';
import styled from '@emotion/styled';
import { ArrowForwardRounded } from '@mui/icons-material';

const Container = styled.div`
    width: 100%;
    height: 40vh;
    background-color: gray;
    position : absolute;
    top:0;
    left:0;
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
    left: ${props => props.direction === "left" && "50px"};
    right: ${props => props.direction === "right" && "50px"};
`

const Banner = () => {
    return (
        <Container>
            <img src="https://images.pexels.com/photos/8106782/pexels-photo-8106782.jpeg?cs=srgb&dl=pexels-karolina-grabowska-8106782.jpg&fm=jpg" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            <BannerDarker />
            <Arrow direction="left">
                <ArrowForwardRounded style={{ transform: "rotate(180deg)" }} />
            </Arrow>
            <Arrow direction="right">
                <ArrowForwardRounded />
            </Arrow>
        </Container>
    )
}

export default Banner;