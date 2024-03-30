import gsap from 'gsap'
import React from 'react'
import { useLayoutEffect } from 'react'
import { useRef } from 'react'
import styled from 'styled-components'
import Image1 from '../assets/bk assets/coconut-no-bg.webp'
import ScrollTrigger from 'gsap/ScrollTrigger'
const Section = styled.section`
  width: 100vw;
  min-height: 100vh;
  position: relative;
  z-index: 1;
  overflow: hidden;
  background: linear-gradient(110.3deg, #c3d825 8.7%, #9db91c 47.5%, #6b9714 89.1%);

`
const I1 = styled.img`
  position: absolute;
 bottom: 10%;
  right: -100%;
  width: 45%;
  height: 75vh;
  object-fit: contain;

  filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.5));
  z-index: 5;
  user-select: none;
`
const TextContainer = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  position: absolute;
  gap: 1rem;
  top: 4%;
  left: 14%;

  & > *:nth-child(1) {
    margin-right: 1rem;
  }
`

const Title = styled.h1`
 font-size: 3.6rem;
  font-family: 'Oregano', cursive;
  color: #7b3f00;
  z-index: 5;
  text-transform: capitalize;

  @media screen and (max-width: 1120px) {
    /* Adjust font size for smaller screens */
    font-size: calc(2.4em + 1vw);
  }
  @media screen and (max-width: 625px) {
    font-size: calc(
      1.8em + 1vw
    ); /* Adjust font size for even smaller screens */
  }
`
const Text = styled.p`

font-size: 2.5rem;
  color: #fff;
  font-family: 'Oregano', cursive;
  line-height: 1.8;
  z-index: 5;
  text-transform: capitalize;
  text-transform: 0 0 4px #fff;
  font-weight: 500;

  @media screen and (max-width: 1120px) {
    font-size: calc(1em + 1vw);
  }
  @media screen and (max-width: 625px) {
    font-size: calc(0.9em + 1vw);
  }
`
const Button = styled.button`
font-size: 1.9rem;
color: #fff;
border: 0;
outline: 0;
padding: 0.8rem 1.1rem 0.8rem 1.1rem;
cursor: pointer;
background-color: #7b3f00;
border-radius: 0.2rem;
font-family: 'Oregano', cursive;
@media screen and (max-width: 768px) {
    font-size: 1.7rem;
  }
  @media screen and (max-width: 640px) {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 480px) {
    font-size: 1.4rem;
  }
`

const SeventhSection = () => {
  gsap.registerPlugin(ScrollTrigger)
  const sectionRef = useRef(null)
  const ImageRef1 = useRef(null)

  const textRef = useRef(null)


  const subElements = gsap.utils.selector(textRef)

  useLayoutEffect(() => {
    const Elem = sectionRef.current
    const ImageElem1 = ImageRef1.current

    console.log('worked')
    // pin the section
    gsap.to(Elem, {
      scrollTrigger: {
        trigger: Elem,
        start: 'top top',
        end: `bottom+=500 bottom`,
        scrub: 1,
        pin: true,
        pinSpacing: true,
      },
    })

    let t2 = gsap
      .timeline({
        scrollTrigger: {
          trigger: Elem,
          start: 'top top',
          end: `bottom+=500 bottom`,
          scrub: 1,
        },
      })
      .to(ImageElem1, {
        scale: 1,
       
        right: '1%',
        bottom:"10%",
        zIndex: 5,
        scale: 1,
       
      })

    subElements('h1').forEach((el) =>
      t2.fromTo(
        el,
        {
          scrollTrigger: {
            trigger: el,
            start: 'top top',
            end: `bottom bottom`,
            scrub: 1,
          },
          x: 100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
        },
        'key3'
      )
    )
    subElements('p,button').forEach((el) =>
      t2.fromTo(
        el,
        {
          scrollTrigger: {
            trigger: el,
            start: 'top top',
            end: `bottom bottom`,
            scrub: 1,
          },
          x: 100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
        },
        'key3'
      )
    )
    subElements('button').forEach((el) =>
      t2.fromTo(
        el,
        {
          scrollTrigger: {
            trigger: el,
            start: 'top top',
            end: `bottom bottom`,
            scrub: 1,
          },
          x: 100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
        },
        'key3'
      )
    )

    return () => {
      if (t2) t2.kill()
    }
  }, [])

  return (
    
      <Section ref={sectionRef}>
      
      <TextContainer ref={textRef}>
          <Title>Our Coconut Delight🥥</Title>
          <Text>
            {' '}
            Experience the Taste of the Tropics with Every Coconut-infused Bite! 🌴🥥 Let the Creamy Goodness of Coconut Transport You to Relaxation! 🏝️🥥
          </Text>
         <Button onClick={()=>{
            window.location.href = '/contact-us'
          }}>Get Franchise</Button>
        </TextContainer>
        <I1 ref={ImageRef1} src={Image1}/>
      </Section>
   
   
  )
}

export default SeventhSection
