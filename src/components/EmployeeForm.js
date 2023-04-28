import { Box, Paper, Stack } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import React from "react";
import { useForm } from "../hooks/useForm";
import Controls from "./controls";

const departmentOptions = [
  { label: "arts", value: "1" },
  { label: "science", value: "2" },
  { label: "nature", value: "3" },
];

const EmployeeForm = () => {
  // validate each field. once user types
  // validate on submit as well
  const validateFields = (field = newEmployee) => {
    let temp = {};

    if ("fullName" in field) {
      temp.fullName =
        field["fullName"].length > 0 ? "" : "Full Name is required";
    }
    if ("mobile" in field) {
      temp.mobile =
        field["mobile"].length > 9
          ? ""
          : "Mobile Number must have more than 9 digits";
    }
    if ("departmentId" in field) {
      temp.departmentId =
        field["departmentId"].length > 0 ? "" : "Department is required";
    }
    setErrors((prev) => ({
      ...prev,
      ...temp,
    }));

    return Object.values(temp).filter((v) => v !== "").length === 0;
  };

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

  const {
    values: newEmployee,
    handleChange,
    setValues,
    errors,
    setErrors,
  } = useForm(initialValues, true, validateFields);

  const handleSubmit = (e) => {
    e.preventDefault();

    const isFormValid = validateFields();

    if (isFormValid) {
      window.alert("Testing...");
    }
  };

  const handleReset = () => {
    setValues(initialValues);
    setErrors({});
  };

  return (
    <Box m={4}>
      <Paper sx={{ padding: "16px" }}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={4}>
            <Grid xs={12} md={6}>
              <Controls.Input
                label="Full Name"
                name="fullName"
                onChange={handleChange}
                value={newEmployee.fullName}
                error={errors.fullName}
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
                error={errors.mobile}
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
                error={errors.departmentId}
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
          <Stack flexDirection="row" gap={3} justifyContent="center" mt={3}>
            <Controls.Button type="submit" label="Submit"></Controls.Button>
            <Controls.Button
              label="Reset"
              onClick={handleReset}
            ></Controls.Button>
          </Stack>
        </form>
      </Paper>
    </Box>
  );
};

export default EmployeeForm;
