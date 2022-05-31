import React from 'react';
import styled from '@emotion/styled';

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


const Banner = () => {
    return (
        <Container>
            <img src="https://images.pexels.com/photos/8106782/pexels-photo-8106782.jpeg?cs=srgb&dl=pexels-karolina-grabowska-8106782.jpg&fm=jpg" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            <BannerDarker />
        </Container>
    )
}

export default Banner;