import React from 'react'
import styled from 'styled-components'
import { Search } from '@mui/icons-material'
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LanguageIcon from '@mui/icons-material/Language';
import { Badge } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const HeaderDiv = styled.div`
    position: fixed;
    width: 100%;
    top:0;
    left:0;
    background-color : transparent;

`

const Container = styled.div`
    color : #fcfcfc;
    font-family: 'roboto', sans-serif;
    position: relative;
`

const Wrapper = styled.div`
    padding : 10px 10px;
    display : flex;
    align-items:center;
`

const Left = styled.div`
    flex:1;
    display: flex;
    align-items:center; 
`
const Center = styled.div`
    flex:1;
`
const Right = styled.div`
    flex:1;
`

const Location = styled.span`
    font-size:14px;
    cursor : pointer;
    display:flex;
    align-items:center;
    margin-left:25px;
`

const LocationBtn = styled.button`
    background-color:transparent;
    border:none;
    margin-left:10px;
    cursor:pointer;
    color:#fcfcfc;
`


const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display:flex;
    align-items:center;
    margin-left:25px;
    padding: 5px;
    position:absolute;
    right:90px;
    margin-right:50px;
    cursor:pointer;
    background-color: #fcfcfc;
`

const Input = styled.input`
    border:none;
    background-color:transparent;
    outline:none;
    height:100%;
    color:#2e2e2e;
`

const Logo = styled.h1`
    font-family : 'Montserrat', sans-serif;
    font-weight : normal;
    text-align : center;
    width:100%;
    cursor:pointer;
    letter-spacing: 5px;
`

const MenuItem = styled.div`
    font-size:14px;
    display:flex;
    align-items:center;
`

const AccIcon = styled.div`
    position : absolute;
    right : 0;
    cursor:pointer;
    margin-right: 40px;
`

const CartIcon = styled.div`
    position : absolute;
    right:40px;
    cursor:pointer;
    margin-right:50px;
`



const Header = () => {
    return (
        <HeaderDiv>
            <Container>
                <Wrapper>
                    <Left>
                        <Location>
                            <MenuIcon />
                            <LanguageIcon style={{ marginLeft: "15px" }} />
                            <LocationBtn> Kolkata (WB) </LocationBtn>
                        </Location>
                    </Left>
                    <Center><Logo>MiBin Print</Logo></Center>
                    <Right>

                        <MenuItem>
                            <SearchContainer>
                                <Input id="Input" placeholder='Search' />
                                <Search style={{ color: "#2e2e2e" }} />
                            </SearchContainer>
                            <CartIcon>
                                <Badge badgeContent={2} color="primary" >
                                    <ShoppingCartOutlined />
                                </Badge>
                            </CartIcon>
                            <AccIcon>
                                <AccountCircleOutlinedIcon />
                            </AccIcon>
                        </MenuItem>
                    </Right>
                </Wrapper>

            </Container>
        </HeaderDiv>
    )
}

export default Header