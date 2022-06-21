import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
    width:80%;
    max-width: 1200px;
    border: 1px solid #000;
    height: auto;
    position: relative;
    display: flex;
    top:0px;
    left:50%;
    transform:translate(-50%,0);
    justify-content: center;
    align-items: center;
`

const Title = styled.h1`
    font-size: 36px;
    font-family: 'roboto slab';
    font-weight: 400;
    letter-spacing: 2px;
    color: #3e3e3e;
    position: absolute;
    top: 30px;
    left: 50%;
    transform: translate(-50%,0);
`

const Subtitle = styled.label`
    font-size: 14px;
    font-family: 'roboto slab';
    font-weight: 400;
    letter-spacing: 1.8px;
    color: #3e3e3e;
    position: absolute;
    top: 80px;
    left: 50%;
    transform: translate(-50%,0);
`

const FirstCatLine = styled.div`
    display: flex;
    position:absolute;
    width: 100%;
    height:auto;
    top:150px;
    min-height: 50px;
    border:2px solid green;
`
const SecondCatLine = styled.div`
    display: flex;
    position:absolute;
    width: 100%;
    height:auto;
    top:410px;
    min-height: 50px;
    border:2px solid green;
`

const Card = styled.div`
    flex: 1;
    height: 200px;
    background-color: #000;
    margin: 30px;
`

const MoreBtn = styled.button`
    width: 150px;
    height: 40px;
    position: absolute;
    top: 700px;
    left: 50%;
    transform: translate(-50%,0);
    font-size:  18px;
    font-family: 'roboto';
    text-align: center;
    justify-content: center;
    background-color: #654996;
    border-radius: 10px;
    border: none;
    color:#fff;
    cursor: pointer;
`



const PrintableMerchSec = () => {
    return (
        <Container>
            <Title>Printable Merch</Title>
            <Subtitle>Choose your desired category for printing</Subtitle>
            <FirstCatLine>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </FirstCatLine>
            <SecondCatLine>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </SecondCatLine>
            <MoreBtn>More</MoreBtn>
        </Container>
    )
}

export default PrintableMerchSec