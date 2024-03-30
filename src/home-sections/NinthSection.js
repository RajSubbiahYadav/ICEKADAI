import gsap from 'gsap'
import React from 'react'
import { useLayoutEffect } from 'react'
import { useRef } from 'react'
import styled from 'styled-components'
import Image1 from '../assets/bk assets/mango-no-bg.png'
import ScrollTrigger from 'gsap/ScrollTrigger'
const Section = styled.section`
  width: 100vw;
  min-height: 100vh;
  position: relative;
  z-index: 1;
  overflow: hidden;
  background: linear-gradient(110.3deg, #ffeb3b 8.7%, #ffd54f 47.5%, #ffc107 89.1%);


`
const I1 = styled.img`
  position: absolute;
  bottom: -120%;
  left: 17%;
  width: 20%;
  height: 89vh;
  object-fit: contain;

  filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.5));
  z-index: 5;
  user-select: none;
`

const TextContainer = styled.div`
  width: 40%;
  height: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  gap: 1rem;
  top: 15%;
  right: 7%;
  & > *:nth-child(1) {
    margin-right: 1rem;
  }
`

const Title = styled.h1`
 font-size: 3.6rem;
  font-family: 'Oregano', cursive;
  color: #00693e;
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


const NinthSection = () => {
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
        bottom: '2%',
        left: '22%',
        zIndex: 5,
        scale: 1.5,
        transitionDuration:0.7
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
            // markers: true,
          },
          x: 100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
        },
        "key3"
      )
    )
    subElements('p').forEach((el) =>
      t2.fromTo(
        el,
        {
          scrollTrigger: {
            trigger: el,
            start: 'top top',
            end: `bottom bottom`,
            scrub: 1,
          },
          x: -100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
        },
        "key3"
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
          x: -100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
        },
        'key2'
      )
    )

    return () => {
      if (t2) t2.kill()
    }
  }, [])

  return (

      <Section ref={sectionRef}>
        
        <I1 ref={ImageRef1} src={Image1} />

        <TextContainer ref={textRef}>
          <Title>Here Comes the king🥭</Title>
          <Text>
            {' '}
            Savor the Royal Flavor of Mango in Every Luscious Bite! 🌟Let the Regal Sweetness of Mango Rule Your Taste Buds! 
          </Text>
         
        </TextContainer>
      </Section>
    
  )
}

export default NinthSection;