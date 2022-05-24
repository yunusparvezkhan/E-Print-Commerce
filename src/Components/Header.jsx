import React from 'react'
import styled from 'styled-components'
import { Search } from '@mui/icons-material'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LanguageIcon from '@mui/icons-material/Language';
// import "./Header.css"

const Container = styled.div`
    background-color : transparent;
    height : 50px;
    color : #2e2e2e;
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
`

const Input = styled.input`
    border:none;
    background-color:transparent;
    outline:none;
    height:100%;
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
                            <Input placeholder='Search' />
                            <Search />
                        </SearchContainer>
                        <CartIcon>
                            <ShoppingCartOutlinedIcon />
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