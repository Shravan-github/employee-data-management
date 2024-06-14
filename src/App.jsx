import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AddEmployee from "./pages/AddEmployee";
import EditEmployee from "./pages/EditEmployee";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "@mui/material";
import Sidebar from "./components/Sidebar";
import SideNavbar from "./components/SideNavbar";
import ExitToApp from "./components/ExitToApp";

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Header />
      <SideNavbar />
      <Container style={{  paddingBottom: 64 }}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="editEmployee/:EmployeeId" element={<EditEmployee />} />
          <Route path="addEmployee" element={<AddEmployee />} />
          <Route path="logout" element={<ExitToApp />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
