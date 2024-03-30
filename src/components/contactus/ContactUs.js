import {
  Text,
  Title,
  SimpleGrid,
  TextInput,
  Textarea,
  Button,
  Group,
} from '@mantine/core'
import ContactIconsList from './ContactIcons' // Assuming this component remains unchanged
import classes from './ContactUs.module.css'

const ContactUs = () => {
  return (
    <div className={classes.wrapper}>
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={50}>
        <div>
          <Title className={classes.title}>Contact us</Title>
          <Text className={classes.description} mt="sm" mb={30}>
            Leave your email and we will get back to you within 24 hours
          </Text>

          {/* Rendering ContactIconsList component */}
          <ContactIconsList />

        
        </div>
        <div className={classes.form}>
          <form
          action="https://formspree.io/f/xvoeokjp"
          method="POST"
          >
            <TextInput
              label="Email"
              name="Email"
              placeholder="your@email.com"
              required
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />
            <TextInput
              label="Name"
              name="Name"
              placeholder="John Doe"
              mt="md"
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />
            <Textarea
              required
              label="Your message"
              name="Your message"
              placeholder="Hello...."
              minRows={4}
              mt="md"
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />

            <Group justify="flex-end" mt="md">
              <Button type='submit' className={classes.control}>Send message</Button>
            </Group>
          </form>
        </div>
      </SimpleGrid>
    </div>
  )
}
export default ContactUs
