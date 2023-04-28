import React from "react";
import { Button as MuiButton } from "@mui/material";

const Button = ({ label, type = "button", onClick }) => {
  return (
    <MuiButton
      variant="contained"
      color="primary"
      size="large"
      type={type}
      onClick={onClick}
    >
      {label}
    </MuiButton>
  );
};

export default Button;
