import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchEmployees } from "../actions/employee";
import SearchIcon from "@mui/icons-material/Search";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { deleteEmployee, onSearchByEmployee } from "../features/employeeSlice";
import { useReactToPrint } from "react-to-print";

function Home() {
  const dispatch = useDispatch();
  const searchText = useSelector((state) => state.employees.searchText);
  const [open, setOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [query, setQuery] = useState(searchText);

  const employees = useSelector((state) => state.employees.list);
  const componentRef = useRef();
  const handleDownload = useReactToPrint({
    content: () => componentRef.current,
  });

  useEffect(() => {
    if (employees?.length) return;
    console.log("Employees", employees);
    dispatch(fetchEmployees());
  }, [employees]);

  const handleDelete = (id) => {
    dispatch(deleteEmployee(id));
    setOpen(false);
  };


  const columns = [
    { field: "EmployeeId", headerName: "ID", width: 90 },
    { field: "EmpName", headerName: "Name", width: 150 },
    { field: "Department", headerName: "Department", width: 150 },
    { field: "Salary", headerName: "Salary", width: 150 },
    { field: "PhNumber", headerName: "Phone Number", width: 150 },
    { field: "EmailId", headerName: "Email Id", width: 150 },
    { field: "Address", headerName: "Address", width: 150 },
    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      renderCell: (params) => (
        <>
          <Button
            component={Link}
            to={`/edit-employee/${params.row.EmployeeId}`}
            color="primary"
          >
            Edit
          </Button>
          <Button
            color="secondary"
            onClick={() => {
              console.log("row::", params);
              setSelectedEmployee(params.row.EmployeeId);
              setOpen(true);
            }}
          >
            Delete
          </Button>
        </>
      ),
    },
  ];

  return (
    <div style={{ width: "100%" }}>
      <AppBar position="static" style={{ backgroundColor: "white" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              backgroundColor: "white",
              display: { xs: "none", sm: "block" },
              paddingTop: "15px",
            }}
          >
            <Button
              onClick={handleDownload}
              color="primary"
              variant="contained"
              style={{ backgroundColor: "#1976d2", marginBottom: 20 }}
            >
              Download PDF
            </Button>
          </Typography>

          {/* <Search>
            <SearchIconWrapper>
              <SearchIcon sx={{color:'#1976d2'}}/>
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              defaultValue={searchText}
              // style={{ backgroundColor:'#1976d2'}}
              onChange={(event)=>dispatch(onSearchByEmployee(event.target.value))}
            />
          </Search> */}

          <TextField
            id="search-bar"
            className="text"
            onInput={(event) => {
              setQuery(event.target.value);
            }}
            value={query}
            label="Employee Name"
            variant="outlined"
            placeholder="Search..."
            size="small"
          />
          <IconButton
            type="submit"
            aria-label="search"
            onClick={() => dispatch(onSearchByEmployee(query))}
          >
            <SearchIcon style={{ fill: "blue" }} />
          </IconButton>
        </Toolbar>
      </AppBar>

      <div ref={componentRef} style={{ height: 700, width: "100%" }}>
        <DataGrid
          id={"my-data-grid"}
          getRowId={(row) => row.EmployeeId}
          rows={employees}
          columns={columns}
          pageSize={5}
          checkboxSelection
        />
      </div>



      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>{"Delete Employee"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this employee?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="primary">
            Cancel
          </Button>
          <Button
            onClick={() => handleDelete(selectedEmployee)}
            color="secondary"
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Home;
