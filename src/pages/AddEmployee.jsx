import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addEmployee } from "../features/employeeSlice";
import { TextField, Button, MenuItem, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MultiSelectAutoComplete from "../components/MultiSelectAutoComplete";
import { fetchEmployees } from "../actions/employee";

function AddEmployee() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const employees = useSelector((state) => state.employees.list);
  const [employee, setEmployee] = useState({
    EmployeeId: "",
    EmpName: "",
    Department: "",
    Salary: "",
    PhNumber: "",
    EmailId: "",
    Address: "",
  });

  useEffect(() => {
    if (employees?.length) return;
    console.log("Employees", employees);
    dispatch(fetchEmployees());
  }, [employees]);

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addEmployee(employee));
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid item sx={{ minHeight: "100vh" }}>
        <Grid item xs={12}>
          <Typography variant="h3" sx={{ color: "#161616" }}>
            Add Employee Details
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Employee ID"
            name="EmployeeId"
            value={employee["EmployeeId"]}
            onChange={handleChange}
            required
            sx={{ minWidth: "100%", padding: 1 }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Name"
            name="EmpName"
            value={employee["EmpName"]}
            onChange={handleChange}
            required
            sx={{ minWidth: "100%", padding: 1 }}
          />
        </Grid>
        <Grid item xs={12}>
          <MultiSelectAutoComplete
            data={employees}
            value={employee["Department"]}
            onSelect={(departments) =>
              setEmployee({ ...employee, Department: departments })
            }
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Salary"
            name="Salary"
            value={employee["Salary"]}
            onChange={handleChange}
            required
            sx={{ minWidth: "100%", padding: 1 }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Phone No"
            name="PhNumber"
            value={employee["PhNumber"]}
            onChange={handleChange}
            required
            sx={{ minWidth: "100%", padding: 1 }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Email"
            name="EmailId"
            value={employee["EmailId"]}
            onChange={handleChange}
            required
            sx={{ minWidth: "100%", padding: 1 }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Address"
            name="Address"
            value={employee["Address"]}
            onChange={handleChange}
            required
            sx={{ minWidth: "100%", padding: 1 }}
          />
        </Grid>
        <Grid item xs={6}>
          <Button type="submit" color="primary" variant="contained">
            Add Employee
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default AddEmployee;
