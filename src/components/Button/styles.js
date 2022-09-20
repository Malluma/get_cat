import styled from "styled-components";

import {
  primaryGradient,
  primaryGradientDark,
  backgroundMain,
} from "../../styles/variables.styles.js";

export const Button = styled.button`
  font-family: inherit;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  border: none;
  border-radius: 22px;
  width: 100%;
  display: block;
  text-decoration: none;
  background: ${primaryGradient};
  color: ${backgroundMain};

  padding: 0.8em;
  &:hover, &:focus {
    color: ${backgroundMain};
    background: ${primaryGradientDark};
    outline: none;
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
  &:disabled{
    background: ${primaryGradient};
    opacity: 0.5;
    cursor: unset;
  }
`;