import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup as MuiRadioGroup,
} from "@mui/material";
import React from "react";

const RadioGroup = ({ label, name, value, onChange, options }) => {
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <MuiRadioGroup row={true} name={name} value={value} onChange={onChange}>
        {options.map((op) => {
          return (
            <FormControlLabel
              value={op}
              key={op}
              control={<Radio />}
              label={op}
            />
          );
        })}
      </MuiRadioGroup>
    </FormControl>
  );
};

export default RadioGroup;
