import React from "react"

import { Button } from "./custom-button.styles"

const CustomButton = ({ children, inverted, ...otherProps }) => (
  <Button className={`${inverted ? "inverted" : ""}`} {...otherProps}>
    {children}
  </Button>
)

export default CustomButton
