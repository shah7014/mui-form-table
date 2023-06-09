import { TextField } from "@mui/material";
import React from "react";

const TextInput = ({ label, name, value, onChange, error }) => {
  return (
    <TextField
      label={label}
      name={name}
      onChange={onChange}
      value={value}
      variant="outlined"
      fullWidth
      error={error ? true : false}
      helperText={error || ""}
    />
  );
};

export default TextInput;
