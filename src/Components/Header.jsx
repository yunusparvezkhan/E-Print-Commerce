import React from 'react'
import styled from 'styled-components'
import { Search } from '@mui/icons-material'
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LanguageIcon from '@mui/icons-material/Language';
import { Badge } from '@mui/material';

const Container = styled.div`
    background-color : #3e3e3e;
    color : #fcfcfc;
    font-family: 'roboto', sans-serif;
`

const Wrapper = styled.div`
    padding : 10px 20px;
    display : flex;
    align-items:center;
`

const Left = styled.div`
    flex:1;
    display: flex;
    align-items:center; 
`
const Center = styled.div`
    flex:1
`
const Right = styled.div`
    flex:1
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
    right:100px;
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
    font-family : 'Roboto Slab', serif;
    font-weight : normal;
    text-align : center;
    width:100%;
    cursor:pointer;
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
    margin-right: 50px;
`

const CartIcon = styled.div`
    position : absolute;
    right:50px;
    cursor:pointer;
    margin-right:50px;
`



const Header = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Location>
                        <LanguageIcon />
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
    )
}

export default Header