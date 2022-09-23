import {
  Label,
  CheckboxContainer,
  HiddenCheckbox,
  StyledCheckbox,
  Icon,
} from "./styles.js";

const Checkbox = ({
  className,
  name,
  checked,
  onChange,
  disabled,
  ...props
}) => {
  return (
    <Label>
      <CheckboxContainer className={className}>
        <HiddenCheckbox
          checked={checked}
          disabled={disabled}
          onChange={onChange}
          {...props} 
        />
        <StyledCheckbox checked={checked}>
          <Icon viewBox="0 0 24 24">
            <polyline points="20 6 9 17 4 12" />
          </Icon>
        </StyledCheckbox>
      </CheckboxContainer>
      {name}
    </Label>
  );
};

export default Checkbox;
