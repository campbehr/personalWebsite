import React from "react"

import { Btn } from "./custom-btn.styles"

const CustomBtn = ({ children, ...otherProps }) => (
  <Btn {...otherProps}>{children}</Btn>
)

export default CustomBtn
