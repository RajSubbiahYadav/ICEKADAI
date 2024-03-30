import React from 'react'
import SecondNavbar from '../components/second-navbar/SecondNavbar'
import { MantineProvider, createTheme,Title } from '@mantine/core'
import SecondFooter from '../components/second-footer/SecondFooter'
import ContactUs from '../components/contactus/ContactUs'
import { useEffect } from 'react'
import {motion} from 'framer-motion';
import styled from 'styled-components'


const ContactPage = () => {
  const Wrapper = styled.div`
  background: linear-gradient(110.3deg, #f78da7 8.7%, #f9416c 47.5%, #f71d7f 89.1%);
  display: grid;
  gap: 2rem;
`
  useEffect(() => {
    ;(async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default
      const locomotiveScroll = new LocomotiveScroll()
    })()
  }, [])
  const theme = createTheme({})


  const ContactTitle = styled(motion(Title))`
font-family: 'Oregano', cursive;
    color: #EBEB91;
  font-size: 3rem;
  @media (max-width: 720px) {
    font-size: 2.5rem !important;
  }
  @media (max-width: 500px) {
    font-size: 2.3rem !important;
  }
`
  return (
   <Wrapper>
      <SecondNavbar />
      <MantineProvider theme={theme}>
      <div style={{ height:'15vh', display:'flex', justifyContent:'center', alignItems:'center', width:'78vw', margin:'auto',marginTop:'11vh'}}>
      <ContactTitle
        ta="center"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 120 }}
      >
      Get in touch with us!
      </ContactTitle>
        </div>
        <ContactUs />
      </MantineProvider>
      <SecondFooter />
      </Wrapper>
  )
}

export default ContactPage
