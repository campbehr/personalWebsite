import React from "react"

import CustomButton from "../custom-button/custom-button.component"

import { Form, FormContainer } from "./contact.styles"

const Contact = () => {
  return (
    <FormContainer id="contact">
      <h2>Contact</h2>
      <Form
        name="contact-form"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input name="name" placeholder="Name" type="text" />
        <input name="email" placeholder="Email" type="email" />
        <textarea name="message" placeholder="Leave a message!" />
        <CustomButton type="submit" inverted>
          Send
        </CustomButton>
      </Form>
    </FormContainer>
  )
}

export default Contact
