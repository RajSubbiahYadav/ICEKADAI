import gsap from 'gsap'
import React from 'react'
import { useLayoutEffect } from 'react'
import { useRef } from 'react'
import styled from 'styled-components'
import Image1 from '../assets/bk assets/bar1.png';
import Image2 from '../assets/bk assets/bar2.png';
import Image3 from '../assets/bk assets/bar3.png'
import Image4 from '../assets/bk assets/bar4.webp'
import Image5 from '../assets/bk assets/bar5.png'
import Image6 from '../assets/bk assets/bar6.png'
import ScrollTrigger from 'gsap/ScrollTrigger'
const Section = styled.section`
  width: 100vw;
  min-height: 100vh;
  position: relative;
  z-index: 1;
  overflow: hidden;
  background: linear-gradient(110.3deg, #f78da7 8.7%, #f9416c 47.5%, #f71d7f 89.1%);

`

const I1 = styled.img`
  position: absolute;
  bottom: -120%;
  left: 2%;

  width:20%;
  height: 50vh;
  object-fit: contain;

  filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.5));
  z-index: 5;
  user-select: none;
`
const I2 = styled.img`
  position: absolute;
  bottom: -120%;
  left: 6%;
  width:20%;
  height: 50vh;
  object-fit: contain;

  filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.5));
  z-index: 5;
  user-select: none;
`
const I3 = styled.img`
  position: absolute;
  bottom: -120%;
  left: 9%;
  width:20%;
  height: 50vh;
  object-fit: contain;

  filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.5));
  z-index: 5;
  user-select: none;
`
const I4 = styled.img`
  position: absolute;
  bottom: -120%;
  left: 13%;
  width:20%;
  height: 50vh;
  object-fit: contain;

  filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.5));
  z-index: 5;
  user-select: none;
`
const I5 = styled.img`
  position: absolute;
  bottom: -120%;
  left: 17%;
  width:20%;
  height: 50vh;
  object-fit: contain;

  filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.5));
  z-index: 5;
  user-select: none;
`
const I6 = styled.img`
  position: absolute;
  bottom: -120%;
  left: 20%;
  width:20%;
  height: 50vh;
  object-fit: contain;

  filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.5));
  z-index: 5;
  user-select: none;
`

const TextContainer = styled.div`
  width: 40%;
  height: 50%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  gap: 1rem;
  top: 10%;
  right: 20%;
  left: 30%;

  & > *:nth-child(1) {
    margin-right: 1rem;
  }
  @media screen and (max-width: 625px) {
    width: 60%;
   left: 20%;
  }
`


const Text = styled.p`
  z-index: 5;
  text-transform: 0 0 4px #fff;

  font-size: 2.5rem;
  color: #fff;
  font-family: 'Oregano', cursive;
  @media screen and (max-width: 1120px) {
    font-size: 2rem;
  }
  @media screen and (max-width: 625px) {
    font-size: 1.6rem;
  }
`



const FourthSection = () => {
  gsap.registerPlugin(ScrollTrigger)
  const sectionRef = useRef(null)
  const ImageRef1 = useRef(null)
  const ImageRef2 = useRef(null)
  const ImageRef3 = useRef(null)
  const ImageRef4 = useRef(null)
  const ImageRef5 = useRef(null)
  const ImageRef6 = useRef(null)

  const textRef = useRef(null)

  const subElements = gsap.utils.selector(textRef)

  useLayoutEffect(() => {
    const Elem = sectionRef.current
    const ImageElem1 = ImageRef1.current
    const ImageElem2 = ImageRef2.current
    const ImageElem3 = ImageRef3.current
    const ImageElem4 = ImageRef4.current
    const ImageElem5 = ImageRef5.current
    const ImageElem6 = ImageRef6.current

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
        left: '-2%',
        zIndex: 5,
        rotation:12,
        scale: 1,
        transitionDuration:0.7
      })
      .to(ImageElem2, {
        scale: 1,
        bottom: '2%',
        left: '13%',
        zIndex: 5,
  
        scale: 1,
        transitionDuration:0.9
      })
      .to(ImageElem3, {
        scale: 1,
        bottom: '2%',
        left: '28%',
        zIndex: 5,

        scale: 1,
        transitionDuration:1.1
      })
      .to(ImageElem4, {
        scale: 1,
        bottom: '2%',
        left: '43%',
        zIndex: 5,
  
        scale: 1,
        transitionDuration:1.3
      })
      .to(ImageElem5, {
        scale: 1,
        bottom: '2%',
        left: '58%',
        zIndex: 5,

        scale: 1,
        transitionDuration:1.5
      })
      .to(ImageElem6, {
        scale: 1,
        bottom: '2%',
        left: '76%',
        zIndex: 5,
        scale: 1,
        transitionDuration:1.7
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
        <I2 ref={ImageRef2} src={Image2} />
        <I3 ref={ImageRef3} src={Image3} />
        <I4 ref={ImageRef4} src={Image4} />
        <I5 ref={ImageRef5} src={Image5} />
        <I6 ref={ImageRef6} src={Image6} />
   
        <TextContainer ref={textRef}>
          <Text>
            {' '}
            From classic flavors like chocolate and vanilla to exotic combinations that tantalize your taste buds, we have a bar for every craving.
          </Text>
         
        </TextContainer>
      </Section>
     
   
  )
}

export default FourthSection
