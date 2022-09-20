import { Checkbox as StyledCheckbox, Label } from "./styles.js";

function Checkbox(props) {
  const { name, checked, onChange, disabled = "" } = props;

  return (
      <Label>
        <StyledCheckbox
          type="checkbox"
          checked={checked}
          onChange={onChange}
          disabled={disabled}
        />
        {name}
      </Label> 
  );

  


}

export default Checkbox;
