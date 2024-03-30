import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import HeaderImage from '../header-image/HeaderImage'
import icecreamBg from '../../assets/bk assets/ice-cream-bg.webp'
import icecreamBgTwo from '../../assets/bk assets/ice-cream-bg-2.webp'

const Title = styled(motion.div)`
  overflow: hidden;
  height: 0;
  z-index: 5;
  display: flex;
  margin: auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(110.3deg, #f78da7 8.7%, #f9416c 47.5%, #f71d7f 89.1%);

  /* position: relative; */
  .img-one {
    height: 11rem;
    width: 10rem;
    position: absolute;
    left: 2%;
    top: 20%;
    z-index: 0;
    @media (max-width: 768px) {
      left: 0;
      top: 15%;
      height: 8rem;
      width: 8rem;
    }
  }
  .img-two {
    height: 14.5rem;
    width: 12rem;
    position: absolute;
    right: 2%;
    top: 20%;
    z-index: 0;
    @media (max-width: 768px) {
      right: 0;
      top: 25%;
      height: 8rem;
      width: 8rem;
    }
  }
  div {
    display: flex;
    flex-direction: row;
    padding: 0.5rem;
  }
  h1 {
    font-family: 'Oregano', cursive;
    color: #EBEB91;
    text-align: center;
    line-height: 1.3;
    text-transform: capitalize;
    font-size: 3.2em;
    z-index: 2;
    /* text-shadow: 1px 1px 0px #333,
                 1px 1px 0px #333,
                 1px 1px 0px #333,
                 1px 1px 0px #333,
                 1px 1px 0px #333,
                 2px 2px 0px #333,
                 2px 2px 0px #333,
                 3px 3px 0px #333,
                 3px 3px 0px #333,
                4px 4px 0px #333;
  */

    user-select: none;
    @media (max-width: 800px) {
      font-size: 2.7em;
    }
    @media (max-width: 600px) {
      font-size: 2.6em;
    }
    @media (max-width: 500px) {
      font-size: 2.2em;
    }
    @media (max-width: 400px) {
      font-size: 2em;
    }
  }

  h2 {
    color: #fff;
    font-family: 'Oregano', cursive;
    font-weight: 700;
    font-size: clamp(1.1em, 2.2em, 2.2em);
    text-transform: capitalize;
    user-select: none;
    /* color: #b0b0b0; */
    text-align: center;
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    z-index: 2;
    @media (max-width: 768px) {
      font-size: 1.6em;
      width: 70%;
    }
  }
`

const Header = () => {
  return (
    <div style={{ marginTop: '12vh' }}>
      <Title
        initial={{
          height: 0,
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          height: '20rem',
        }}
        transition={{
          delay: 2,
          duration: 1.5,
        }}
      >
        <img className="img-one" src={icecreamBg} alt="" />
        <img className="img-two" src={icecreamBgTwo} alt="" />
        <motion.div>
          <motion.h1>Try ScoopSavor icecreams!</motion.h1>
        </motion.div>

        <motion.h2>
          Why Settle for One Flavor When You Can Taste the Rainbow. Try our
          flavourful icecreams.
        </motion.h2>
      </Title>

      <HeaderImage />
    </div>
  )
}

export default Header
