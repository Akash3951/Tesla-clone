import React from 'react'
import styled from 'styled-components'
import Fade from 'react-awesome-reveal';
import 'animate.css';


function Section({title, description, leftBtnText, rightBtnText, background}) {
  return (
    <Wrap bgImage={background}>
      {/* <Fade bottom>                                 REACT-REVEAL METHOD */}
        <ItemText>
          <h1 className="animate__animated animate__fadeInUp">{title}</h1>
          <p className="animate__animated animate__fadeInUp">{description}</p>
        </ItemText>
      {/* </Fade> */}
      <Buttons>
        {/* <Fade bottom>                                 REACT REVEAL METHOD*/}
          <ButtonGroup>
            <LeftButton className="">
              {leftBtnText}
            </LeftButton>
            {rightBtnText && 
              <RightButton className="">
                {rightBtnText}
              </RightButton>
            }          
          </ButtonGroup>
          <DownArrow src='/images/down-arrow.svg' className="">

          </DownArrow>
        {/* </Fade> */}
      </Buttons>
    </Wrap>
  )
}

export default Section

const Wrap= styled.div`
    height:100vh;
    width:100vw;
    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;
    // background-image:url('/images/model-s.jpg');
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    background-image: ${props=> `url("/images/${props.bgImage}")`};
`

const ItemText= styled.div`
  padding-top:15vh;
  text-align:center;
`

const ButtonGroup= styled.div`
  display:flex;
  margin-bottom:30px;
  @media(max-width:768px){
    flex-direction:column;
  }
`
const LeftButton= styled.div`
  background-color:rgba(23,26,32,0.8);
  height:40px;
  width:256px;
  color:white;
  display:flex;
  align-items:center;
  justify-content:center;
  border-radius:100px;
  opacity:0.8;
  text-transform:uppercase;
  font-size:12px;
  cursor:pointer;
  margin:8px;
`
const RightButton= styled(LeftButton)`
  background-color:white;
  opacity:0.65;
  color:black;
`;

const DownArrow=styled.img`
  height:40px;
  animation: animateDown infinite 1.5s
 
`

const Buttons=styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;

`

