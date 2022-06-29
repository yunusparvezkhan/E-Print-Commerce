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
    position:absolute;
    width: 100%;
    height:auto;
    top:150px;
    min-height: 50px;
`
const SecondCatLine = styled.div`
    position:absolute;
    width: 100%;
    height:auto;
    top:410px;
    min-height: 50px;
`

const Card = styled.div`
    display: block;
    position: absolute;
    transform: translate(-50%,0);
    height: 200px;
    width: 30%;
    max-width: 300px;
    background-color: #000;
    cursor: pointer;
`




const PrintableMerchSec = () => {


    return (
        < Container >
            <Title>Printable Merch</Title>
            <Subtitle>Choose your desired category for printing</Subtitle>
            <FirstCatLine>
                <a href={FirstCard.href}>
                    <Card className='FirstCard'>
                        <img className='CardImg' src={FirstCard.image} />
                        <div className="CardImgDarker">
                            <label className='CardTitle' >{FirstCard.title}</label>
                        </div>
                    </Card>
                </a>
                <a href={SecondCard.href}>
                    <Card className='SecondCard'>
                        <img className='CardImg' src={SecondCard.image} />
                        <div className="CardImgDarker">
                            <label className='CardTitle' >{SecondCard.title}</label>
                        </div>
                    </Card>
                </a>
                <a href={ThirdCard.href}>
                    <Card className='ThirdCard'>
                        <img className='CardImg' src={ThirdCard.image} />
                        <div className="CardImgDarker">
                            <label className='CardTitle' >{ThirdCard.title}</label>
                        </div>
                    </Card>
                </a>
            </FirstCatLine>
            <SecondCatLine>
                <a href={FourthCard.href}>
                    <Card className='FirstCard'>
                        <img className='CardImg' src={FourthCard.image} />
                        <div className="CardImgDarker">
                            <label className='CardTitle' >{FourthCard.title}</label>
                        </div>
                    </Card>
                </a>
                <a href={FifthCard.href}>
                    <Card className='SecondCard'>
                        <img className='CardImg' src={FifthCard.image} />
                        <div className="CardImgDarker">
                            <label className='CardTitle' >{FifthCard.title}</label>
                        </div>
                    </Card>
                </a>
                <a href={SixthCard.href}>
                    <Card className='ThirdCard'>
                        <img className='CardImg' src={SixthCard.image} />
                        <div className="CardImgDarker">
                            <label className='CardTitle' >{SixthCard.title}</label>
                        </div>
                    </Card>
                </a>
            </SecondCatLine>
            <a>
                <button className="MoreBtn">More</button>
            </a>
        </Container >
    )
}

export default PrintableMerchSec