import AcUnitIcon from "@mui/icons-material/AcUnit";
import { Box } from "@mui/material";
import React from "react";
import EmployeeForm from "../components/EmployeeForm";
import PageHeader from "../components/PageHeader";

const Home = () => {
  const headerIcon = <AcUnitIcon fontSize="inherit" />;

  return (
    <Box>
      <PageHeader
        icon={headerIcon}
        title={"Employee Form"}
        subtitle={"Add a new employee"}
      />
      <EmployeeForm />
    </Box>
  );
};

export default Home;
