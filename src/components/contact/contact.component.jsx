import React from "react"

import CustomButton from "../custom-button/custom-button.component"

import { Form, FormContainer } from "./contact.styles"

const Contact = () => {
  return (
    <FormContainer id="contact">
      <h2 style={{ color: "white" }}>Contact</h2>
      <Form
        name="contact-form"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
      >
        <input type="text" name="name" placeholder="Name" />

        <input type="email" name="email" placeholder="Email" />

        <input type="hidden" name="bot-field" />

        <textarea name="message" placeholder="Leave a message"></textarea>

        <CustomButton type="submit" inverted>
          Send
        </CustomButton>
      </Form>
    </FormContainer>
  )
}

export default Contact
