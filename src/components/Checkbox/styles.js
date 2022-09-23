import styled from "styled-components";

import {
  backgroundMain,
  fontColorMain, primaryColor, colorMainLighter, colorMainLight
} from "../../styles/variables.styles";

export const Label = styled.label`
  font-size: 10px;
  color: ${fontColorMain};
`;

export const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const Icon = styled.svg`
  fill: none;
  stroke: ${backgroundMain} ;
  stroke-width: 5px;
`

export const StyledCheckbox = styled.div`
  color: ${fontColorMain};
  display: flex;
  width: 12px;
  height: 12px;
  background: ${props => props.checked ? primaryColor : backgroundMain};
  border: 1px solid ${colorMainLight};
  border-radius: 3px;
  transition: all 150ms;
  margin-right: 0.2rem;
  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 2px ${colorMainLighter};
  }
  ${Icon} {
    visibility: ${props => props.checked ? 'visible' : 'hidden'}
  }
  &:hover {
    box-shadow: 0 0 0 2px ${colorMainLighter};
  }
  ${HiddenCheckbox}:disabled + & {
    opacity: 0.5;
    background: ${colorMainLighter};
    box-shadow: none;
  }
`
export const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`