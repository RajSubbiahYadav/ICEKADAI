/* eslint-disable react-hooks/exhaustive-deps */
import gsap from 'gsap'
import React from 'react'
import { useLayoutEffect } from 'react'
import { useRef } from 'react'
import styled from 'styled-components'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Image1 from '../assets/bk assets/blueberry.png'
import Image2 from '../assets/bk assets/bluebrry.png'
const Section = styled.section`
  width: 100vw;
 min-height: 100vh;
  position: relative;
  z-index: 1;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 0.2px solid #f78da7;
  background: linear-gradient(110.3deg, rgb(138, 157, 212) 8.7%, rgb(93, 116, 186) 47.5%, rgb(50, 76, 149) 89.1%);


`

const I1 = styled.img`
  position: absolute;
  top: -100%;
  left: -50%; 
  border-radius: 2rem;
  width: 23%;

  height: 42vh;
  object-fit: contain;
  z-index: 2;

  filter: drop-shadow(1px 1px 5px rgba(0,0,0,1));
  @media screen and (max-width: 30em) {
    width: 25%;
    top: 10%;

  }
`

const I2 = styled.img`
  position: absolute;
  right: -100%;
  width: 25%;
  top: 40%;
  height: 58vh;
  object-fit: contain;
  object-position: bottom;
  filter: drop-shadow(1px 1px 5px rgba(0,0,0,1));
  z-index: 2;
  @media screen and (max-width: 30em) {
    width: 30%;
    top: 10%;

  }
`

const TitleContainer = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
 justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  @media screen and (max-width: 30em) {
   width: 40%;

  }
`
const TitleContainer2 = styled.div`
  width: 30%;
  
  height: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
 justify-content: center;
  position: absolute;
 
  left: 38%;
  bottom: -60%;
  @media screen and (max-width: 30em) {
    width: 40%;

  }
`


const Title = styled.p`
  font-size: 2.4rem;
  z-index: 101;
  text-transform: capitalize;
  font-family: 'Oregano', cursive;
    color: #FFFDD0;
    @media screen and (max-width: 1100px) {
   font-size: 2.1rem;

  }
    @media screen and (max-width: 768px) {
   font-size: 1.8rem;
  }
  @media screen and (max-width: 680px) {
   font-size: 1.5rem;
  }
  @media screen and (max-width: 590px) {
   font-size: 1.4rem;
  }
    @media screen and (max-width: 30em) {
   font-size: 1.3rem;

  }
`


const SecondSection = () => {

  gsap.registerPlugin(ScrollTrigger)
  const sectionRef = useRef(null)

  const ImageRef1 = useRef(null)
  const ImageRef2 = useRef(null)
  const firstTextRef = useRef(null)
  const secondTextRef = useRef(null)



  useLayoutEffect(() => {
    const Elem = sectionRef.current
    const ImageElem1 = ImageRef1.current
    const ImageElem2 = ImageRef2.current
    const firstTextelem = firstTextRef.current;
    const secondTextElem = secondTextRef.current

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
          end: `bottom+=700 bottom`,
          scrub: 1,
        },
      })
      .to(ImageElem1, { top: '49%', left:'10%',  scale: 1.5, }, 'key1') .to(firstTextelem, { top: '-18%',  scale: 1,delay:0 })
      .to(ImageElem2, { top: '28%', right: '5%', scale: 1.3 }, 'key2')
      .to(secondTextElem, { top: '45%',left:'38%', scale: 1,},"key2")
 
   
    return () => {
      if (t2) t2.kill()
    }
  }, [])

  return (
   
      <Section ref={sectionRef}>
       
        <TitleContainer ref={firstTextRef}>
          <Title>Satisfy Your Cravings with Every Scoop of our Delectable Blueberry Ice Cream - A Taste Sensation You Won't Want to Miss! 🍦💙</Title>
        </TitleContainer>
        

        <TitleContainer2 ref={secondTextRef}>
          <Title>Nourish Your Body and Delight Your Taste Buds with our Blueberry Ice Cream - Packed with the Goodness of Fresh Berries for a Guilt-Free Treat!🌱💪</Title>
        </TitleContainer2>

        <I1 ref={ImageRef1} src={Image1} />
        <I2 ref={ImageRef2} src={Image2} />
      </Section>

     
  )
}

export default SecondSection
