import React from 'react'
import styled from 'styled-components'
import Header from '../components/header/Header'

const Section = styled.section`
  position: relative;
  background: linear-gradient(110.3deg, #f78da7 8.7%, #f9416c 47.5%, #f71d7f 89.1%);
  overflow: hidden;
  height: 100vh;
`

const HeroSection = () => {
  return (
    <Section>
      <Header />
    </Section>
  )
}

export default HeroSection
