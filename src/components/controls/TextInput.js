import { TextField } from "@mui/material";
import React from "react";

const TextInput = ({ label, name, value, onChange }) => {
  return (
    <TextField
      label={label}
      name={name}
      onChange={onChange}
      value={value}
      variant="outlined"
      fullWidth
    />
  );
};

export default TextInput;
