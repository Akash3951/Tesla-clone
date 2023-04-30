import React from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {
  return (
    <Container>
      <a>
        <img src='/images/logo.svg'/>
      </a>
      <Menu>
        <a href="#">Model S</a>
        <a href="#">Model 3</a>
        <a href="#">Model X</a>
        <a href="#">Model Y</a>
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <CustomIcon/>
      </RightMenu>
      <BurgerNav>
        <CloseWrapper>
          <CustomClose/>
        </CloseWrapper>
        <li><a href='#'>Existing Inventory</a></li>
        <li><a href='#'>Used Inventory</a></li>
        <li><a href='#'>Trade-in</a></li>
        <li><a href='#'>Cybertruck</a></li>
        <li><a href='#'>Roadaster</a></li>
        <li><a href='#'>Roadaster</a></li>
        <li><a href='#'>Roadaster</a></li>
        <li><a href='#'>Roadaster</a></li>
        <li><a href='#'>Roadaster</a></li>
      </BurgerNav>
    </Container>
  )
}

const Container= styled.div`
  min-height:60px;
  position:fixed;
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:0 20px;
  width:100%;
  z-index:1;
`

const Menu=styled.div`
  display:flex;
  align-items:center;

  a{
    font-weight:600;
    text-transform:uppercase;
    padding:0 10px;
  }

  @media(max-width:768px){
    display:none;
  }

`

const RightMenu = styled.div`
  display:flex;
  align-items:center;
  a{
    font-weight:600;
    text-transform:uppercase;
    margin-right:10px
  }
`

const CustomIcon=styled(MenuIcon)`
   cursor:pointer;
`

const BurgerNav= styled.div`
  position:fixed;
  top:0;
  bottom:0;
  right:0;
  width:300px;
  background:white;
  list-style:none;
  padding:20px;

  li{
    padding:15px 0;
    border-bottom:1px solid rgba(0,0,0,0.2);

    a{
      font-weight:600;
    }
  }
`

const CloseWrapper= styled.div`
  display:flex;
  justify-content:flex-end;
`

const CustomClose= styled(CloseIcon)`
  cursor:pointer;
`

export default Header
