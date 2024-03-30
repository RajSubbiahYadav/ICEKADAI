import React from 'react'
import SecondNavbar from '../components/second-navbar/SecondNavbar'
import HeroSection from '../features-sections/HeroSection'
import FirstSection from '../features-sections/FirstSection'
import Footer from '../home-sections/FooterSection'
import styled from 'styled-components'

const FeaturesPage = () => {
const Wrapper = styled.div`
  background: linear-gradient(110.3deg, #f78da7 8.7%, #f9416c 47.5%, #f71d7f 89.1%);
`
  return (
      <Wrapper>
      <SecondNavbar />
      <HeroSection />
      <FirstSection />
      <Footer />
      </Wrapper>
  )
}

export default FeaturesPage
