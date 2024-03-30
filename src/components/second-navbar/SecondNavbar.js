import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { motion } from 'framer-motion'
gsap.registerPlugin(ScrollTrigger)

const Headers = styled(motion.header)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 11vh;
  background: linear-gradient(
    110.3deg,
    #f78da7 8.7%,
    #f9416c 47.5%,
    #f71d7f 89.1%
  );
  /* background:linear-gradient(135deg, rgba(43, 43, 42, 0.6), rgba(93, 93, 93, 0.6), rgba(34, 34, 33, 0.6)); */
  backdrop-filter: blur(16px) !important;
  position: fixed;
  z-index: 999;
  width: 100vw;
  /* box-shadow: 1px 1px 5px rgb(0,0,0); */
`

const Nav = styled.nav`
  width: 70%;
  font-weight: 520 !important;

  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.3s;
  @media only Screen and (max-width: 1117px) {
    display: none;
  }
  .no-hover {
    text-decoration: none; /* Optional: Remove underline on hover */
  }

  .no-hover:hover::after {
    width: 0; /* Set width to 0 on hover to disable the hover effect */
  }

  a {
    line-height: 1.5;
    font-weight: 600;
    font-size: 1.7rem;
    font-family: 'Oregano', cursive;
    color: #ebeb91;
    padding: 0.5rem 1rem 0.5rem 1rem;
    &:hover {
      background-color: #ebeb91;
      color: #f88379;
    }
    /* &:not(:last-child) {
      margin-right: 2rem;
    } */
    /* @media only Screen and (max-width: 48em) {
      &:not(:last-child) {
        margin-right: 1rem;
      }
    } */
  }
`
const LogoHeading = styled.h1`
  font-size: 2.2rem;
  text-align: center;
  font-family: 'Oregano', cursive;
  padding: 0 1rem 0 1rem;
  color: #EBEB91;
  @media(max-width:480px){
    font-size: 1.6rem;
  }
`
const HamburgerBtn = styled.button`
  display: none;
  @media only screen and (max-width: 1117px) {
    display: inline-block;
  }
  position: relative;
  margin-right: 1.5rem;
  background-color: transparent;
  color: white;
  width: 2rem;
  height: 6px;
  border: none;
  margin-top: 0rem;
  transition: transform 0.3s, background-color 0.3s;
  cursor: pointer;

  &::before,
  &::after {
    content: '';
    background-color: white;
    width: 100%;
    height: 3px;
    display: block;
    position: absolute;
    left: 0;
    transition: top 0.3s, transform 0.3s;
  }

  &::before {
    top: ${(props) => (props.clicked ? '0' : '-0.5rem')};
    transform: ${(props) => (props.clicked ? 'rotate(135deg)' : 'rotate(0)')};
  }

  &::after {
    top: ${(props) => (props.clicked ? '0' : '0.5rem')};
    transform: ${(props) => (props.clicked ? 'rotate(-135deg)' : 'rotate(0)')};
  }
`

const MobileMenu = styled.nav`

  display: none;
  margin-right: 0.5rem;
  @media only Screen and (max-width: 1117px) {
    display: flex;
  }
  flex-direction: column;
  font-family: 'Righteous', sans-serif !important;
  font-weight: 520 !important;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  visibility: ${(props) => (props.clicked ? 'visible' : 'hidden')};

  z-index: 999 !important;
  background-color:#ebeb91;
  backdrop-filter: blur(7px) !important;
  border-radius: 1rem; /* Adjust the alpha value (0.7) for opacity */ /* Adds a blur effect for glass-like appearance */
  margin: 0.5rem;
  box-shadow: 1px 1px 3px rgb(0,0,0);
  a {
    color: #d41442;
    font-family: 'Oregano', cursive;
    font-size: 1.6rem;
    margin: 1.5rem;
    cursor: pointer;
    font-weight: 520 !important;
  }
`

const SecondNavbar = () => {
  const [click, setClick] = useState(false)
  //const handleClick = () => setClick(!click);
  const ref = useRef(null)
  const bottomRef = useRef(null)

  useEffect(() => {
    const header = ref.current
    const bottom = bottomRef.current

    // ScrollTrigger setup
    ScrollTrigger.create({
      start: 'top',
      end: 'bottom',
      onUpdate: (self) => {
        // Check the direction of scroll
        const direction = self.direction === 1 ? 'down' : 'up'

        // Toggle visibility based on scroll direction
        if (direction === 'up') {
          gsap.to(header, { top: 0 })
          gsap.to(bottom, { bottom: '5%' })
        } else {
          gsap.to(header, { top: '-100%' })
          gsap.to(bottom, { bottom: '-100%' })
        }
      },
    })
  }, [])

  return (
    <>
      <Headers
      >
       <LogoHeading>
          🍨ScoopSavor
        </LogoHeading>
        <Nav>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '60%',
            }}
          >
            <a href="/">Home</a>
            <a href="/about-us">About</a>
            <a href="/mysteries">Faqs</a>
            <a href="/contact-us">Franchise</a>
          </div>
        </Nav>

        <HamburgerBtn clicked={+click} onClick={() => setClick(!click)}>
          <span></span>
        </HamburgerBtn>

        <MobileMenu clicked={+click}>
          <a href="/">Home</a>
          <a href="/about-us">About</a>
          <a href="/mysteries">Faqs</a>
          <a href="/contact-us">Franchise</a>
        </MobileMenu>
      </Headers>
    </>
  )
}
export default SecondNavbar
