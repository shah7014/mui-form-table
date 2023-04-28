import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select as MuiSelect,
} from "@mui/material";
import React from "react";

const Select = ({ label, name, value, onChange, options, error }) => {
  return (
    <FormControl fullWidth error={!!error}>
      <InputLabel id={label}>{label}</InputLabel>
      <MuiSelect
        labelId={label}
        value={value}
        label={label}
        name={name}
        onChange={onChange}
      >
        <MenuItem value={""}>None</MenuItem>
        {options.map((op) => (
          <MenuItem key={op.value} value={op.value}>
            {op.label}
          </MenuItem>
        ))}
      </MuiSelect>
      {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
};

export default Select;
