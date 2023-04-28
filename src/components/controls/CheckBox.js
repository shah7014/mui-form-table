import {
  FormControl,
  FormControlLabel,
  Checkbox as MuiCheckBox,
} from "@mui/material";
import React from "react";

const CheckBox = ({ label, name, value, onChange }) => {
  const handleChange = (e) => {
    const { name, checked } = e.target;
    onChange({ target: { name, value: checked } });
  };

  return (
    <FormControl>
      <FormControlLabel
        control={
          <MuiCheckBox name={name} checked={value} onChange={handleChange} />
        }
        label={label}
      />
    </FormControl>
  );
};

export default CheckBox;
