import { CssBaseline, Stack, ThemeProvider, createTheme } from "@mui/material";
import React from "react";
import NavBar from "./components/NavBar";
import SideBar from "./components/Sidebar";
import Home from "./views/Home";

function App() {
  // can change backgrould color of body like this
  // useEffect(() => {
  //   document.body.style.backgroundColor = "red";
  // }, []);

  const theme = createTheme({
    palette: {
      primary: {
        main: "#333996",
        light: "#3c44b126",
      },
      secondary: {
        main: "#f83245",
        light: "#f8324526",
      },
      background: {
        default: "#f4f5fd",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Stack
        sx={{
          flexDirection: "row",
          height: "100vh",
          width: "100vw",
        }}
      >
        <SideBar />
        <Stack sx={{ flex: "1" }}>
          <NavBar />
          <Home />
        </Stack>
      </Stack>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
