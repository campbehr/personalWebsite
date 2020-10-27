import React from "react"

import CustomButton from "../custom-button/custom-button.component"

import { Form, FormContainer } from "./contact.styles"

const Contact = () => {
  return (
    <FormContainer id="contact">
      <h2>Contact</h2>
      <Form
        name="contact-form"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
      >
        <p>
          <label>
            <input type="text" name="name" placeholder="Name" />
          </label>
        </p>
        <p>
          <label>
            <input type="email" name="email" placeholder="Email" />
          </label>
        </p>
        <p>
          <label>
            <input type="hidden" name="bot-field" />
          </label>
        </p>

        <p>
          <label>
            <textarea name="message" placeholder="Leave a message"></textarea>
          </label>
        </p>

        <p>
          <label style={{ width: `135px` }}>
            <CustomButton type="submit" inverted>
              Send
            </CustomButton>
          </label>
        </p>
      </Form>
    </FormContainer>
  )
}

export default Contact
