import React from 'react'
import Faqs from '../components/faqs/Faqs'
import SecondNavbar from '../components/second-navbar/SecondNavbar'
import { MantineProvider, createTheme } from '@mantine/core'
import SecondFooter from '../components/second-footer/SecondFooter'
import { useEffect } from 'react'
import styled from 'styled-components'

const FaqsPage = () => {
  const Wrapper = styled.div`
  background: linear-gradient(110.3deg, #f78da7 8.7%, #f9416c 47.5%, #f71d7f 89.1%);
`
  const theme = createTheme({})
  useEffect(() => {
    ;(async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default
      const locomotiveScroll = new LocomotiveScroll()
    })()
  }, [])

  return (
    <Wrapper>
      <SecondNavbar />
      <MantineProvider theme={theme}>
        <Faqs />
      </MantineProvider>
      <SecondFooter />
      </Wrapper>
  )
}

export default FaqsPage
