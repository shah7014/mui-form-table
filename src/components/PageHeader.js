import { Paper, Stack, Typography } from "@mui/material";
import React from "react";

const PageHeader = ({ icon, title, subtitle }) => {
  return (
    <Paper>
      <Stack
        sx={{
          flexDirection: "row",
          columnGap: 4,
          padding: 2,
          alignItems: "center",
          color: "#000",
          fontSize: "3rem",
        }}
      >
        {icon}
        <Stack justifyContent="space-between">
          <Typography variant="h3">{title}</Typography>
          <Typography variant="subtitle1" sx={{ opacity: "0.6" }}>
            {subtitle}
          </Typography>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default PageHeader;
