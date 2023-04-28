import { Box, Stack, styled } from "@mui/material";
import React from "react";

const StyledSideBar = styled(Box)(({ theme }) => ({
  width: "320px",
  height: "100%",

  [theme.breakpoints.up("xs")]: {
    display: "none",
  },
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },

  flexDirection: "column",
  backgroundColor: "#253053",
  color: "#fff",
}));

const SideBar = () => {
  return (
    // <Stack
    //   sx={{
    //     width: "320px",
    //     height: "100%",
    //     display: { xs: "none", sm: "flex" },
    //     backgroundColor: "#253053",
    //     color: "#fff",
    //   }}
    // >
    //   SideBar
    // </Stack>
    <StyledSideBar>sidebar</StyledSideBar>
  );
};

export default SideBar;
