import React from 'react';
import { Button as StyledButton } from "./styles.js";

function Button(props) {

  const { type = 'button', onClick, children } = props;

  return (
    <StyledButton type={type} onClick={onClick}>{children}</StyledButton>
  );
}

export default Button;