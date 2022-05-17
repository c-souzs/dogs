import React from 'react'
import * as C from "./style.js";

const Button = ({children, ...props}) => {
  return (
    <C.Button {...props}>{children}</C.Button>
  )
}

export default Button