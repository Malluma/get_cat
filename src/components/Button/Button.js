import React from 'react';
import { Button as StyledButton } from "./styles.js";

function Button(props) {

  const { type = 'button', onClick, children, disabled='' } = props;

  return (
    <StyledButton type={type} onClick={onClick} disabled={disabled}>{children}</StyledButton>
  );
}

export default Button;