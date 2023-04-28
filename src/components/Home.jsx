import React from 'react'
import styled from 'styled-components';
import Section from './Section'


const Container=styled.div`
  height:100vh;
`

function Home() {
  return (
    <Container>
      <Section 
        title="Model S"
        description="Order Online for Touchless Delivery"
        leftBtnText="custom order"
        rightBtnText="exisiting inventory"
        background="model-s.jpg"
      />
      <Section
         title="Model Y"
         description="Order Online for Touchless Delivery"
         leftBtnText="custom order"
         rightBtnText="exisiting inventory"
         background="model-y.jpg"
      />
      <Section
         title="Model X"
         description="Order Online for Touchless Delivery"
         leftBtnText="custom order"
         rightBtnText="exisiting inventory"
         background="model-x.jpg"
      />
      <Section
         title="Model 3"
         description="Order Online for Touchless Delivery"
         leftBtnText="custom order"
         rightBtnText="exisiting inventory"
         background="model-3.jpg"
      />
      <Section
         title="Lowest Cost Solar Panels in America"
         description="Money-back guarantee"
         leftBtnText="order now"
         rightBtnText="learn more"
         background="solar-panel.jpg"
      />
      <Section
         title="Solar for New Roofs"
         description="Solar Roof Costs Less Than a New Roofs"
         leftBtnText="order now"
         rightBtnText="learn more"
         background="solar-roof.jpg"
      />
      <Section
         title="Accessories"
         description=""
         leftBtnText="shop now"
         background="accessories.jpg"
      />
      
    </Container>
  )
}

export default Home
