import React from 'react'
import styled from 'styled-components'
import Image1 from '../assets/bk assets/ice-cream-shop.webp'
const Section = styled.section`
  width: 100vw;
  min-height: 100vh;
  z-index: 1;
  overflow: hidden;
  background: linear-gradient(
    110.3deg,
    #f78da7 8.7%,
    #f9416c 47.5%,
    #f71d7f 89.1%
  );
  display: grid;
  justify-items: center;
  align-items: end;
`
const AboutContainer = styled.div`
  width: 93vw;
  height: 90%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  place-items: center;
 @media(max-width:800px){
  grid-template-columns: 1fr;
  grid-template-rows: 0.7fr 1fr;
  gap: 0.5rem;
 }
`
const I1 = styled.img`
  height: 85%;
  width: 95%;
  object-fit: cover;
  filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.5));
  z-index: 5;
  user-select: none;
  border-radius: 0.3rem;
  @media(max-width:1200px){
    height: 75%;
  }
  @media(max-width:800px){
  height: 95%;
 }
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  @media(max-width:800px){
  width: 99%;
 }
  & > *:nth-child(1) {
    margin-right: 1rem;
  }
  #svgContainer {
    align-self: center;
    margin-top: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.8rem;
    border-radius: 50%;
    border: 2px solid #fff;
    background-color: transparent;
    transition: all 0.6s ease-in-out;
    cursor: pointer;
    &:hover {
      background-color: #fffdd0;
    }
  }
`

const Title = styled.h1`
  font-size: 2.5rem;
  font-family: 'Oregano', cursive;
  color: #fffdd0;
  z-index: 5;
  text-transform: capitalize;
  align-self: center;

  @media screen and (max-width: 1200px) {
    font-size: 2.1rem;
  }
  @media screen and (max-width: 625px) {
    font-size : 2rem;
  }
`
const Text = styled.p`
  font-size: 1.55rem;
  color: #fff;
  font-family: 'Oregano', cursive;
  font-weight: 500;
  line-height: 1.8;
  z-index: 5;
  text-transform: capitalize;
  text-transform: 0 0 4px #fff;

  font-weight: 500;

  @media screen and (max-width: 1200px) {
    font-size: 1.3rem;
  }
  @media screen and (max-width: 625px) {
    font-size : 1.3rem;
  }
`
const HeroSection = () => {
  const smoothScroll = () => {
    window.scrollBy({
      top: window.innerHeight * 2,
      behavior: 'smooth',
    })
  }

  return (
    <Section>
      <AboutContainer>
        <I1 src={Image1} />
        <TextContainer>
          <Title>About Us</Title>
          <Text>
            {' '}
            Founded in 2024, ScoopSavor was born out of a passion for creating
            delectable frozen delights. Our founder, Nikhil Verma, grew up with
            fond memories of enjoying ice cream with family and friends.
            Inspired by those cherished moments, they embarked on a mission to
            bring that same joy to others.
          </Text>
          <Title>Our Promise</Title>
          <Text>
            When you step into ScoopSavor, you're not just a customer – you're
            part of our extended family. Whether you're indulging in a classic
            favorite or trying one of our innovative flavors, we want every
            visit to be an experience to savor.
          </Text>
          <div id="svgContainer" onClick={smoothScroll}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="29"
              height="29"
              fill="white"
              viewBox="0 0 92 92"
              id="down-arrow"
            >
              <path d="M73.8 57.9l-25 24.9C48 83.6 47 84 46 84s-2-.4-2.8-1.2l-25-24.9c-1.6-1.6-1.6-4.1 0-5.7 1.6-1.6 4.1-1.6 5.7 0L42 70.4V12c0-2.2 1.8-4 4-4s4 1.8 4 4v58.4l18.2-18.1c1.6-1.6 4.1-1.6 5.7 0 1.5 1.5 1.5 4-.1 5.6z"></path>
            </svg>
          </div>
        </TextContainer>
      </AboutContainer>
    </Section>
  )
}

export default HeroSection
