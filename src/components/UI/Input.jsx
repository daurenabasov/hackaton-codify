import { InputBase, styled } from "@mui/material";
import { forwardRef } from "react";

const Input = forwardRef(({ value, onChange, error, ...props }, ref) => {
  return (
    <InputStyled
      {...props}
      value={value}
      onChange={onChange}
      error={Boolean(error)}
      classes={{ root: "input", focused: "focused", error: "error" }}
      ref={ref}
    />
  );
});

Input.displayName = Input;

export default Input;

const InputStyled = styled(InputBase)(({ theme, backcolor }) => ({
  "&.input": {
    border: `0.1px solid blue`,
    background: backcolor || `white`,
    borderRadius: "5px",
    padding: "0 10px",
  },
  "&.input.focused": {
    border: `0.1px solid green`,
    background: `white`,
    color: `black`,
  },
  "&.input.error": {
    border: `1px solid red`,
  },
}));
