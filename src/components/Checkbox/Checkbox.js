import { Checkbox as StyledCheckbox, Label, Wrapper } from "./styles.js";

function Checkbox(props) {

  const {name, checked, onChange} = props;

  return (
    <Wrapper>
       <StyledCheckbox type='checkbox' checked={checked} onChange={onChange}/>
      <Label>{name}</Label>
    </Wrapper>
  );
}

export default Checkbox;
