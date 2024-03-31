import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'
import { useEffect } from 'react'

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;

  background: linear-gradient(
    110.3deg,
    #f78da7 8.7%,
    #f9416c 47.5%,
    #f71d7f 89.1%
  );
  color: #ffdf00;
  position: relative;
`

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 3.6rem;
    user-select: none;
    font-family: 'Oregano', cursive;
    color: #ebeb91;
    transform: rotate(-12deg);
    @media (max-width: 768px) {
      font-size: 3rem;
    }
    @media (max-width: 480px) {
      font-size: 2.4rem;
    }
  }
`

const FooterComponent = styled(motion.footer)`
  width: 80vw;

  @media (max-width: 48em) {
    width: 90vw;
  }
  ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin: 2rem;
    margin-top: 4rem;
    padding: 0 1rem;
    border-top: 1px solid ${(props) => props.theme.text};
    border-bottom: 1px solid ${(props) => props.theme.text};

    @media (max-width: 48em) {
      justify-content: center;
    }
  }

  li {
    padding: 2rem;
    font-size: 1.8rem;
    text-transform: capitalize;
    font-family: 'Oregano', cursive;
    color: #ebeb91;
    font-weight: 520 !important;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
      transform: scale(1.1);
    }
    @media (max-width: 768px) {
      font-size: 1.6rem;
      padding: 1rem;
    }
    @media (max-width: 480px) {
      font-size: 1.5rem;
    }
  }
`

const Bottom = styled.div`
  padding: 0.5rem 0;
  margin: 0 4rem;
  font-size: 1.3rem;
  font-family: 'Oregano', cursive;
  font-weight: 520 !important;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  span {
    color: #ebeb91;
    font-size: 1.7rem;
    @media (max-width: 768px) {
      font-size: 1.6rem;
    }
    @media (max-width: 480px) {
      font-size: 1.5rem;
    }
  }
  a {
    text-decoration: underline;
  }

  @media (max-width: 64em) {
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    span {
      transform: none !important;
    }
  }

`

const FooterSection = () => {
  useEffect(() => {
    ;(async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default
      const locomotiveScroll = new LocomotiveScroll()
    })()
  }, [])
  const handleScroll = (id) => {
    let elem = document.querySelector(id)
    if (elem) {
      window.scrollTo({
        top: elem.offsetTop - 100,
        behavior: 'smooth',
      })
    }
  }

  return (
    <Section>
      <LogoContainer>
        <h1>ScoopSavor</h1>
      </LogoContainer>
      <FooterComponent
        initial={{ y: '-400px' }}
        whileInView={{ y: 0 }}
        viewport={{ once: false }}
        transition={{
          duration: 1.5,
        }}
      >
        <ul>
          <li aria-hidden="true" onClick={() => (window.location.href = '/')}>
            Home
          </li>
          <li
            aria-hidden="true"
            onClick={() => (window.location.href = '/about-us')}
          >
            About us
          </li>
          <li
            aria-hidden="true"
            onClick={() => (window.location.href = '/mysteries')}
          >
            Faqs
          </li>
          <li
            aria-hidden="true"
            onClick={() => (window.location.href = '/contact-us')}
          >
            Reach out
          </li>
        </ul>
        <Bottom>
          <span
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            Made by Nikhil Verma
          </span>

          <span>
            ScoopSavor&copy;2024.
            <br />
            All Rights Reserved.
          </span>
        </Bottom>
      </FooterComponent>
    </Section>
  )
}

export default FooterSection
