import React from 'react';
import styled from '@emotion/styled';
import { FirstCard, SecondCard, ThirdCard, FourthCard, FifthCard, SixthCard } from './PrintableMerchSecData';
import "./PrintableMerchSec.css";

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
    display: block;
    flex: 1;
    height: 200px;
    background-color: #000;
    margin: 30px;
    cursor: pointer;
`

const CardImg = styled.img`
    width: 100%;
    height:100%;
    object-fit: cover;
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


    // CategoryData.map((CategoryData) => {
    //     const bgimage = CategoryData.image;
    //     const bgtext = CategoryData.title;
    // }
    // )

    return (
        < Container >
            <Title>Printable Merch</Title>
            <Subtitle>Choose your desired category for printing</Subtitle>
            <FirstCatLine>
                <Card>
                    <CardImg src={FirstCard.image} />
                    {/* <div className='BgDarker' /> */}
                </Card>
                <Card>
                    <CardImg src={SecondCard.image} />
                </Card>
                <Card>
                    <CardImg src={ThirdCard.image} />
                </Card>
            </FirstCatLine>
            <SecondCatLine>
                <Card>
                    <CardImg src={FourthCard.image} />
                </Card>
                <Card>
                    <CardImg src={FifthCard.image} />
                </Card>
                <Card>
                    <CardImg src={SixthCard.image} />
                </Card>
            </SecondCatLine>
            <MoreBtn>More</MoreBtn>
        </Container >
    )
}

export default PrintableMerchSec