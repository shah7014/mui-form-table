import {
  AccountCircle,
  Mail,
  Notifications,
  Search,
} from "@mui/icons-material";
import {
  AppBar,
  Badge,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
} from "@mui/material";
import React, { useState } from "react";

const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = (event) => {
    setAnchorEl(null);
  };

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  return (
    <AppBar position="static">
      <Toolbar>
        {/* container for searchbar and icons */}
        <Stack
          sx={{
            flexDirection: "row",
            justifyContent: "space-between",
            flex: "1",
          }}
        >
          {/* search */}
          <InputBase
            sx={{
              px: 1,
              border: "1px solid #f2f2f2",
              fontSize: "0.8rem",
              "&:hover": {
                backgroundColor: "#f2f2f2",
              },
              "& .MuiSvgIcon-root": {
                marginRight: 1,
              },
            }}
            placeholder="Enter Search"
            startAdornment={<Search fontSize="small" />}
          />

          {/* icon container */}
          <Stack sx={{ flexDirection: "row", gap: "8px" }}>
            <IconButton size="large">
              <Badge badgeContent={4} color="error">
                <Notifications fontSize="small" />
              </Badge>
            </IconButton>
            <IconButton size="large">
              <Badge badgeContent={10} color="error">
                <Mail fontSize="small" />
              </Badge>
            </IconButton>
            <IconButton size="large" onClick={handleMenuOpen}>
              <AccountCircle fontSize="small" />
            </IconButton>
          </Stack>
        </Stack>
        {renderMenu}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
