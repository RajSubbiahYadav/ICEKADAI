import React from 'react'
import { Container, Title, Accordion } from '@mantine/core'
import { motion } from 'framer-motion'
import styled from 'styled-components'

const ansOne = `
At ScoopSavor, we take pride in crafting our ice cream with the finest ingredients and utmost care. Our unique flavors and dedication to quality set us apart, ensuring each scoop is a delightful experience.
`
const ansTwo = `
Yes, we understand the importance of catering to various dietary needs. We offer a selection of dairy-free and vegan options, as well as low-sugar and gluten-free choices, so everyone can indulge in our delicious treats.
`
const ansThree = `
Absolutely! We love helping our customers create memorable moments. Whether it's a birthday party, wedding, or corporate event, we offer custom ice cream cakes, catering services, and personalized flavors to make your celebration extra special.
`
const ansFour = `
Stay connected with us through our website and social media channels. We regularly announce new flavors, promotions, and upcoming events on our website, Facebook, Instagram, and Twitter. You can also subscribe to our newsletter for exclusive updates delivered straight to your inbox.
`
const ansFive = `
Yes, we do! If you're interested in becoming a part of the ScoopSavor family and bringing our delicious ice cream to your community, we offer franchising opportunities. For more information on franchising with us, including requirements, benefits, and how to get started, please visit our Franchise page.
`

const FaqWrapper = styled(motion(Container))`
  padding-top: calc(var(--mantine-spacing-xl) * 4);
  padding-bottom: calc(var(--mantine-spacing-xl) * 0.4);
  min-height: 650px;
  font-family: 'Oregano', cursive;

`

const FaqTitle = styled(motion(Title))`
  margin-bottom: calc(var(--mantine-spacing-xl) * 1.5);
  font-family: 'Oregano', cursive;
  color: #EBEB91;
  font-size: 2.3rem;
  @media (max-width: 720px) {
    font-size: 2.1rem !important;
  }
  @media (max-width: 500px) {
    font-size: 1.9rem !important;
  }
`

const FaqAccordionItem = styled(motion(Accordion.Item))`

  
  font-size: 1.4rem;
  background-color: #EBEB91;
  border-radius: 0.3rem;
  border: none;
  margin-bottom: 20px;
 box-shadow: 2px 2px 8px rgb(0,0,0);
  @media (max-width: 720px) {
    font-size: 1.1rem !important;
  }
`

const FaqAccordionControl = styled(motion(Accordion.Control))`
 color: #f71d7f;
 /* text-shadow: 2px 2px 2px rgb(0,0,0); */
  font-size: 1.6rem;
  border: none;
  font-weight: 600;
  font-family: 'Oregano', cursive;
  @media (max-width: 720px) {
    font-size: 1.3rem !important;
  }
`

const FaqAccordionPanel = styled(motion(Accordion.Panel))`
  font-family: 'Oregano', cursive;
color: #f71d7f;
  font-size: 1.5rem;
  @media (max-width: 720px) {
    font-size: 1.2rem !important;
  }
`

const Faqs = () => {
  return (
    <FaqWrapper
      size="md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <FaqTitle
        ta="center"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 120 }}
      >
      Frequently Asked Questions
      </FaqTitle>

      <Accordion variant="separated">
        <FaqAccordionItem
          value="reset-password"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <FaqAccordionControl>
          What makes ScoopSavor's ice cream unique?
          </FaqAccordionControl>
          <FaqAccordionPanel>{ansOne}</FaqAccordionPanel>
        </FaqAccordionItem>

        <FaqAccordionItem
          value="another-account"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <FaqAccordionControl>
          Are there options for customers with dietary restrictions?
          </FaqAccordionControl>
          <FaqAccordionPanel>{ansTwo}</FaqAccordionPanel>
        </FaqAccordionItem>

        <FaqAccordionItem
          value="newsletter"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <FaqAccordionControl>
          Can I place a custom order for special events or occasions?
          </FaqAccordionControl>
          <FaqAccordionPanel>{ansThree}</FaqAccordionPanel>
        </FaqAccordionItem>

        <FaqAccordionItem
          value="credit-card"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          <FaqAccordionControl>
          How can I stay updated on new flavors, promotions, and events?
          </FaqAccordionControl>
          <FaqAccordionPanel>{ansFour}</FaqAccordionPanel>
        </FaqAccordionItem>

        <FaqAccordionItem
          value="payment"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          <FaqAccordionControl>
          Do you offer franchising opportunities for ScoopSavor?
          </FaqAccordionControl>
          <FaqAccordionPanel>{ansFive}</FaqAccordionPanel>
        </FaqAccordionItem>
      </Accordion>
    </FaqWrapper>
  )
}

export default Faqs
