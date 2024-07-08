import { Button, Grid, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateEmployee } from "../features/employeeSlice";
import MultiSelectAutoComplete from "../components/MultiSelectAutoComplete";
import { fetchEmployees } from "../actions/employee";

function EditEmployee() {
  const params = useParams();
  console.log("useParams", params);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let employee = useSelector((state) => state.employees.originalList);




  const [updatedEmployee, setUpdatedEmployee] = useState({
    EmployeeId: "",
    EmpName: "",
    Department: [],
    Salary: "",
    PhNumber: "",
    EmailId: "",
    Address: "",
  });
  console.log("updatedEmployee", updatedEmployee)

  

  useEffect(() => {
    console.log("employee", employee);
    if (employee?.length && params?.EmployeeId) {
      setUpdatedEmployee(
        employee.find((emp) => emp.EmployeeId == params.EmployeeId)
      );
      return;
    }
    console.log("Employees", employee);
    dispatch(fetchEmployees());
  }, [employee, params, dispatch]);

  useEffect(() => {
    console.log("updatedEmployee", updatedEmployee);
  }, [updatedEmployee]);

  const handleChange = (e) => {
    setUpdatedEmployee({ ...updatedEmployee, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateEmployee(updatedEmployee));
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container sx={{ minHeight: "100vh" }}>
        <Grid item xs={12}>
          <Typography variant="h3" sx={{ color: "#161616" }}>
            Edit Employee Details
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Employee ID"
            name="EmployeeId"
            value={updatedEmployee?.EmployeeId}
            onChange={handleChange}
            required
            sx={{ minWidth: "100%", padding: 1 }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Name"
            name="EmpName"
            value={updatedEmployee["EmpName"]}
            onChange={handleChange}
            required
            sx={{ minWidth: "100%", padding: 1 }}
          />
        </Grid>
        <Grid item xs={12}>
          <MultiSelectAutoComplete
            data={employee}
            value={updatedEmployee["Department"]}
            onSelect={(departments) =>

              setUpdatedEmployee({ ...updatedEmployee, Department: departments })

            }
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Salary"
            name="Salary"
            value={updatedEmployee["Salary"]}
            onChange={handleChange}
            required
            sx={{ minWidth: "100%", padding: 1 }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Phone No"
            name="PhNumber"
            value={updatedEmployee["PhNumber"]}
            onChange={handleChange}
            required
            sx={{ minWidth: "100%", padding: 1 }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Email"
            name="EmailId"
            value={updatedEmployee["EmailId"]}
            onChange={handleChange}
            required
            sx={{ minWidth: "100%", padding: 1 }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Address"
            name="Address"
            value={updatedEmployee["Address"]}
            onChange={handleChange}
            required
            sx={{ minWidth: "100%", padding: 1 }}
          />
        </Grid>
        <Grid item xs={12}>
          <Grid
            item xs={8}
            style={{ display: "flex", justifyContent: "flex-end", marginLeft: "auto"}}
          >
            <Button type="submit" color="primary" variant="contained">
              Add Employee
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
}

export default EditEmployee;
