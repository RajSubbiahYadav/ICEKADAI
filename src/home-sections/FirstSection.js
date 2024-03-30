import gsap from 'gsap'
import React from 'react'
import { useLayoutEffect } from 'react'
import { useRef } from 'react'
import styled from 'styled-components'
import video1 from '../assets/bk assets/choco-bar.mp4'
import Image2 from '../assets/bk assets/choco-bar-no-bg.png'
import Marquee from 'react-fast-marquee'

const Section = styled.section`
  width: 100vw;
  min-height: 100vh;
  position: relative;
  z-index: 1;
  background-color: #f78da7;
  overflow: hidden;
  background: linear-gradient(110.3deg, rgb(238, 179, 123) 8.7%, rgb(216, 103, 77) 47.5%, rgb(114, 43, 54) 89.1%);
`
const I1 = styled.video`
  position: absolute;
  
  border-radius: 2rem;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
  margin: auto;
  object-fit: cover;
  z-index: 1;
  filter: drop-shadow(2px 2px 10px rgba(0, 0, 0, 0.8));
`

const I2 = styled.img`
  position: absolute;
  top: -100%;

  left: -100%;
  border-radius: 2rem;
  width: 20%;
  height: 55vh;
  object-fit: contain;
  z-index: 2;
  filter: drop-shadow(2px 2px 10px rgba(0, 0, 0, 0.8));
  @media screen and (max-width: 30em) {
    width: 30%;
    top: 10%;
  height: 70vh;
  }
`

const TitleContainer = styled.div`

  width: 40%;
  height: 60%;
  padding: 0.3rem;
  gap: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 999;
  position: absolute;
  top: 20%;
  right: 10%;
  @media screen and (max-width: 768px) {
    top: 30%;
    width: 50%;
    right: 5%;
  }
  @media screen and (max-width: 640px) {
    width: 60%;
  }
  @media screen and (max-width: 480px) {
    top: 26%;
    width: 55%;
  }
`

const Title = styled.h1`
  font-size: 3.6rem;
  font-family: 'Oregano', cursive;
    color:#ebeb91;
  z-index: 5;

  @media screen and (max-width: 768px) {
    font-size: 2.3rem;
  }
  @media screen and (max-width: 640px) {
    font-size: 2.1rem;
  }
  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`
const SubTitle = styled.p`
  z-index: 999;
  font-size: 2.5rem;
  color: #fff;
    font-family: 'Oregano', cursive;
  font-weight: 500;
  z-index: 5;
  text-transform: capitalize;

  @media screen and (max-width: 768px) {
    font-size: 1.8rem;
  }
  @media screen and (max-width: 640px) {
    font-size: 1.4rem;
  }
  @media screen and (max-width: 480px) {
    font-size: 1.4rem;
  }
`
const Button = styled.button`
font-size: 1.8rem;
align-self: flex-start;
color: rgb(216, 103, 77);
border: 0;
outline: 0;
padding: 0.7rem 1rem 0.7rem 1rem;
cursor: pointer;
background-color: #ebeb91;
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

const FirstSection = () => {
  const sectionRef = useRef(null)

  const ImageRef1 = useRef(null)
  const ImageRef2 = useRef(null)
  const titleRef = useRef(null)

  let elements = gsap.utils.selector(titleRef)

  useLayoutEffect(() => {
    const Elem = sectionRef.current
    const ImageElem1 = ImageRef1.current
    const ImageElem2 = ImageRef2.current

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
      .to(
        ImageElem1,
        { scale: 0.3, rotation: -15, left: '-40%',opacity:0,delay:0, },
        'key1'
      )
      .to(
        ImageElem2,
        { scale: 1.5, left: '10%', top: '25%',delay:0 },
        'key1'
      )
   

    elements('h1').forEach((el) =>
      t2.fromTo(
        el,
        {
          scrollTrigger: {
            trigger: el,
            start: 'top top',
            end: `bottom bottom`,
            scrub: 1,
            // markers: true,
          },
          x: 100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
        },
        "key2"
      )
    )
    
    elements('p').forEach((el) =>
      t2.fromTo(
        el,
        {
          scrollTrigger: {
            trigger: el,
            start: 'top top',
            end: `bottom bottom`,
            scrub: 1,
            // markers: true,
          },
          x: 100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
        },
        "key2"
      )
    )

    elements('button').forEach((el) =>
      t2.fromTo(
        el,
        {
          scrollTrigger: {
            trigger: el,
            start: 'top top',
            end: `bottom bottom`,
            scrub: 1,
            // markers: true,
          },
          x: 100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
        },
        "key2"
      )
    )
    return () => {
      if (t2) t2.kill()
    }
  }, [])


  return (

      <Section ref={sectionRef}>
        <I1 ref={ImageRef1} src={video1} type = 'video/mp4' autoPlay loop muted playsInline/>
        <I2 ref={ImageRef2} src={Image2} />
        <TitleContainer ref={titleRef}>
          <Title>Taste our Choco icecreams😋</Title>
          <SubTitle>
            <span
              style={{
                filter: ' drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.2))',
              }}
            >
       Get Ready to Melt: Dive into Chocolate Heaven with Our Choco-tastic Ice Creams! 🍫
            </span>
          </SubTitle>
          <Button>Know more</Button>
        </TitleContainer>
      </Section>

   

  )
}

export default FirstSection
