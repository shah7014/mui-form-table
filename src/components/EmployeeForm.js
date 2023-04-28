import React from "react";
import { Box, Paper } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useForm } from "../hooks/useForm";
import Controls from "./controls";

const departmentOptions = [
  { label: "arts", value: "1" },
  { label: "science", value: "2" },
  { label: "nature", value: "3" },
];

const EmployeeForm = () => {
  const initialValues = {
    fullName: "",
    email: "",
    mobile: "",
    city: "",
    gender: "male",
    departmentId: "",
    hireDate: new Date(),
    isPermanent: false,
  };

  const { values: newEmployee, handleChange } = useForm(initialValues);

  return (
    <Box m={4}>
      <Paper sx={{ padding: "16px" }}>
        <form>
          <Grid container spacing={4}>
            <Grid xs={12} md={6}>
              <Controls.Input
                label="Full Name"
                name="fullName"
                onChange={handleChange}
                value={newEmployee.fullName}
              />
            </Grid>
            <Grid xs={12} md={6}>
              <Controls.Input
                label="Email"
                name="email"
                onChange={handleChange}
                value={newEmployee.email}
              />
            </Grid>
            <Grid xs={12} md={6}>
              <Controls.RadioGroup
                name="gender"
                value={newEmployee.gender}
                onChange={handleChange}
                label={"Gender"}
                options={["male", "female", "other"]}
              />
            </Grid>
            <Grid xs={12} md={6}>
              <Controls.Input
                label="Mobile"
                name="mobile"
                onChange={handleChange}
                value={newEmployee.mobile}
              />
            </Grid>
            <Grid xs={12} md={6}>
              <Controls.Input
                label="City"
                name="city"
                onChange={handleChange}
                value={newEmployee.city}
              />
            </Grid>
            <Grid xs={12} md={6}>
              <Controls.Select
                name="departmentId"
                value={newEmployee.departmentId}
                onChange={handleChange}
                label={"Department"}
                options={departmentOptions}
              />
            </Grid>
            <Grid xs={12} md={6}>
              <Controls.CheckBox
                name="isPermanent"
                value={newEmployee.isPermanent}
                onChange={handleChange}
                label={"Permanent Employee"}
              />
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
};

export default EmployeeForm;
