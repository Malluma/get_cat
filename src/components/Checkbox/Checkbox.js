import { Checkbox as StyledCheckbox, Label, Wrapper } from "./styles.js";

function Checkbox(props) {
  const { name, checked, onChange, disabled = "" } = props;

  return (
    <Wrapper>
      <StyledCheckbox
        type="checkbox"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      <Label>{name}</Label>
    </Wrapper>
  );
}

export default Checkbox;
