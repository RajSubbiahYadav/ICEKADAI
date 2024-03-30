import gsap from 'gsap'
import React from 'react'
import { useLayoutEffect } from 'react'
import { useRef } from 'react'
import styled from 'styled-components'
import Image1 from '../assets/bk assets/vanilla-icecream-scoop.png'
import Image2 from '../assets/bk assets/vanilla-icecream-cone.png'
import ScrollTrigger from 'gsap/ScrollTrigger'
const Section = styled.section`
  width: 100vw;
  min-height: 100vh;
  position: relative; 
  z-index: 999;
  overflow: hidden; 
  background: linear-gradient(110.3deg, rgb(255, 250, 239) 8.7%, rgb( 255, 250, 240) 47.5%, rgb( 255, 250, 240) 89.1%);

`

const I1 = styled.img`
  position: absolute;

  right: 5%;
  bottom: -100%;
  width: 31%;
  height: 60vh;

  object-fit: contain;
  filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.5));
  z-index: 5;
  user-select: none;
`

const I2 = styled.img`
  position: absolute;

  left: 5%;
  bottom: -100%;
  width: 25%;
  height: 60vh;

  object-fit: contain;
  filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.5));
  z-index: 5;
  user-select: none;
`

const TitleContainer = styled.div`
  width: 60%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;

  position: absolute;
  top: 65%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70%;
  @media(max-width:480px){
left: 60%;
  }
`
const TextContainer = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  gap: 1rem;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* text-align: justify; */

  @media screen and (max-width: 1120px) {
    top: 50%;
  }
  @media screen and (max-height: 600px) {
    top: 30%;
  }
  @media screen and (max-width: 517px) {
    top: 60%;
  }
  @media screen and (max-width: 400px) {
    width: 60%;
  }
`

const Title = styled.h1`
  font-size: 3.6rem;
  font-family: 'Oregano', cursive;
  color:  #eedc82;
  z-index: 99;
  text-transform: capitalize;

  @media screen and (max-width: 1120px) {
    font-size: calc(2.6em + 1vw); /* Adjust font size for smaller screens */
  }
  @media screen and (max-width: 625px) {
    font-size: calc(
      2.2em + 1vw
    ); /* Adjust font size for even smaller screens */
  }
`
const Text = styled.p`
  font-size: 2.5rem;
  color: #EBEB91;
  font-family: 'Oregano', cursive;
  font-weight: 500;
  line-height: 1.8;
  z-index: 99;
  text-transform: capitalize;
  text-transform: 0 0 4px #fff;

  @media screen and (max-width: 1120px) {
    font-size: calc(1.2em + 1vw);
  }
  @media screen and (max-width: 625px) {
    font-size: calc(1em + 1vw);
  }
`
const Button = styled.button`
font-size: 1.8rem;
align-self: center;
color: rgb( 255, 250, 240);
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

const ThirdSection = () => {
  gsap.registerPlugin(ScrollTrigger)
  const sectionRef = useRef(null)
  const ImageRef1 = useRef(null)
  const ImageRef2 = useRef(null)
  const titleRef = useRef(null)
  const textRef = useRef(null)

  let elements = gsap.utils.selector(titleRef)
  const subElements = gsap.utils.selector(textRef)

  useLayoutEffect(() => {
    const Elem = sectionRef.current
    const ImageElem1 = ImageRef1.current
    const ImageElem2 = ImageRef2.current
    console.log('worked')
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
      
        bottom: '10%',
        right:'1%',
        zIndex: 5,
        scale: 1.3,
        transitionDuration: 0.1,
      })
      .to(ImageElem2, {
  
        bottom: '10%',
       left:'1%',
        zIndex: 5,
        scale: 1.3,
        transitionDuration: 0.1,
      })

    elements('h1').forEach((el) =>
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

    return () => {
      if (t2) t2.kill()
    }
  }, [])

  return (
    <Section ref={sectionRef}>
      <TitleContainer ref={titleRef}>
        <Title>Classic Vanilla ice creams</Title>
      </TitleContainer>
      <TextContainer ref={textRef}>
        <Text>
          {' '}
          Experience Pure Delight with Our Classic Vanilla Ice Cream 🍦✨.
          Indulge in the timeless charm of vanilla and let your taste buds dance
          with joy.
        </Text>
        <Button onClick={()=>{
            window.location.href = '/about-us'
          }}>About us</Button>
      </TextContainer>
      <I1 ref={ImageRef1} src={Image1} />
      <I2 ref={ImageRef2} src={Image2} />
    </Section>
  )
}

export default ThirdSection
