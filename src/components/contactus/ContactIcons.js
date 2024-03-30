import React from 'react'
import styled from 'styled-components'

import { Text, Box, Stack } from '@mantine/core'

// Define icons as objects with keys corresponding to the icon names
const icons = {
  'ri-mail-fill': {
    title: 'Email',
    description: 'nikhilv7@yahoo.com',
  },
  'ri-phone-fill': {
    title: 'Phone',
    description: '+91 7208291301',
  },

  'ri-sun-fill': {
    title: 'Working hours',
    description: '12 p.m. – 8 p.m.',
  },
}

// Styled components
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  color: #fff !important;
  text-shadow: 2px 2px 2px rgb(0,0,0);
`

const Icon = styled(Box)`
  margin-right: var(--mantine-spacing-md);
  background-color: transparent;
`

const Title = styled(Text)`
    font-family: 'Oregano', cursive !important;
color: #fff !important;
text-shadow: 2px 2px 2px rgb(0,0,0);
  font-size: 1.8rem !important;
  @media screen and (max-width: 720px) {
    font-size: 1.4rem !important;
  }
`

const Description = styled(Text)`
  
  font-size: 1.7rem !important;
  font-family: 'Oregano', cursive !important;
color: #fff !important;
text-shadow: 2px 2px 2px rgb(0,0,0);

  @media screen and (max-width: 720px) {
    font-size:1.35rem !important;
  }
`

// Function to generate icon elements
function ContactIconsList() {
  const items = Object.keys(icons).map((iconKey, index) => {
    const icon = icons[iconKey]
    return (
      <Wrapper key={index}>
        <Icon mr="md">
          <i className={iconKey} style={{ fontSize: '1.6rem' }} />
        </Icon>
        <div>
          <Title size="xs">{icon.title}</Title>
          <Description>{icon.description}</Description>
        </div>
      </Wrapper>
    )
  })

  return <Stack>{items}</Stack>
}

export default ContactIconsList
