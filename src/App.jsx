import { Container } from "@mui/material";
import React, { useState } from "react";
import { Link, Route, Routes, Navigate } from "react-router-dom";
import ExitToApp from "./components/ExitToApp";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SideNavbar from "./components/SideNavbar";
import AddEmployee from "./pages/AddEmployee";
import EditEmployee from "./pages/EditEmployee";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ProfileData from "./pages/ProfileData";

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/home">Go to the home page</Link>
      </p>
    </div>
  );
}

function App() {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Header />
      <SideNavbar />
      <Container style={{ paddingBottom: 64 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="edit-employee/:EmployeeId" element={<EditEmployee />} />
          <Route path="add-employee" element={<AddEmployee />} />
          <Route path="logout" element={<ExitToApp />} />
          <Route path="profile" element={<ProfileData />} />
          <Route path="*" element={<NoMatch />} />

          {/* <Route path="/sign-in">
            <SignIn setIsAuthenticated={setIsAuthenticated} />
          </Route>
          <Route path="/sign-up" element={<SignUp />}></Route>
          <Route path="/home">
            {isAuthenticated ? <Home /> : <Navigate  to="/sign-in" />}
          </Route>
          <Route path="/">
            {isAuthenticated ? (
              <Navigate  to="/home" />
            ) : (
              <Navigate  to="/sign-in" />
            )}
          </Route> */}
        </Routes>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
