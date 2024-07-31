// import React from "react";
// import { Container } from "@mui/material";
// import { Route, Routes, Navigate, Link } from "react-router-dom";
// import SignIn from "./pages/SignIn";
// import SignUp from "./pages/SignUp";
// import Home from "./pages/Home";
// // import NoMatch from './pages/NoMatch'; // Create a 404 page component if needed
// import withAuth from "./withAuth";
// import Header from "./components/Header";
// import SideNavbar from "./components/SideNavbar";
// import AddEmployee from "./pages/AddEmployee";
// import EditEmployee from "./pages/EditEmployee";
// import ExitToApp from "./components/ExitToApp";
// import ProfileData from "./pages/ProfileData";

// function NoMatch() {
//   return (
//     <div>
//       <h2>Nothing to see here!</h2>
//       <p>
//         <Link to="/">Go to the home page</Link>
//       </p>
//     </div>
//   );
// }

// function App() {
//   return (
//     <Container>
//       <Header />
//       <SideNavbar />
//       <Routes>
//         <Route path="/" element={<Navigate to="/sign-in" />} />
//         <Route path="/sign-in" element={<SignIn />} />
//         <Route path="/sign-up" element={<SignUp />} />
//         <Route path="/home" element={withAuth(Home)} />
//         <Route path="edit-employee/:EmployeeId" element={<EditEmployee />} />
//         <Route path="add-employee" element={<AddEmployee />} />
//         <Route path="logout" element={<ExitToApp />} />
//         <Route path="profile" element={<ProfileData />} />
//         <Route path="*" element={<NoMatch />} />
//       </Routes>
//     </Container>
//   );
// }

// export default App;

// import React from "react";
// import { Container } from "@mui/material";
// import { Link, Routes, Route, Navigate } from "react-router-dom";
// import { AuthProvider, useAuth } from "./components/WithAuth";
// import PrivateRoute from "./components/ProtectedRoute";
// import ExitToApp from "./components/ExitToApp";
// import Footer from "./components/Footer";
// import Header from "./components/Header";
// import SideNavbar from "./components/SideNavbar";
// import AddEmployee from "./pages/AddEmployee";
// import EditEmployee from "./pages/EditEmployee";
// import Home from "./pages/Home";
// import SignIn from "./pages/SignIn";
// import SignUp from "./pages/SignUp";

// function NoMatch() {
//   return (
//     <div>
//       <h2>Nothing to see here!</h2>
//       <p>
//         <Link to="/">Go to the home page</Link>
//       </p>
//     </div>
//   );
// }

// function App() {
//   return (
//     <AuthProvider>
//       <Container>
//         <Header />
//         <SideNavbar />
//         <Routes>
//           <Route path="/signin" element={<SignIn />} />
//           <Route path="/sign-up" element={<SignUp />} />
//           <Route path="/" element={<PrivateRoute component={Home} />} />
//           <Route path="/logout" element={<ExitToApp />} />
//           <Route
//             path="/add-employee"
//             element={<PrivateRoute component={AddEmployee} />}
//           />
//           <Route
//             path="/edit-employee/:id"
//             element={<PrivateRoute component={EditEmployee} />}
//           />
//           <Route path="*" element={<NoMatch />} />
//         </Routes>
//         <br></br>
//         <Footer />
//       </Container>
//     </AuthProvider>
//   );
// }

// export default App;

//secound approach

// import React, { useEffect, useState } from "react";
// import { Container } from "@mui/material";
// import { Link, Route, Routes, Navigate, useNavigate } from "react-router-dom";
// import ExitToApp from "./components/ExitToApp";
// import Footer from "./components/Footer";
// import Header from "./components/Header";
// import SideNavbar from "./components/SideNavbar";
// import AddEmployee from "./pages/AddEmployee";
// import EditEmployee from "./pages/EditEmployee";
// import Home from "./pages/Home";
// import SignIn from "./pages/SignIn";
// import SignUp from "./pages/SignUp";
// import ProfileData from "./pages/ProfileData";
// import Cookies from "js-cookie";

// function NoMatch() {
//   return (
//     <div>
//       <h2>Nothing to see here!</h2>
//       <p>
//         <Link to="/home">Go to the home page</Link>
//       </p>
//     </div>
//   );
// }

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const clientKey = Cookies.get("clientKey");
//     if (clientKey) {
//       const expirationTime = new Date(Cookies.get("expirationTime"));
//       if (new Date() < expirationTime) {
//         setIsAuthenticated(true);
//       } else {
//         Cookies.remove("clientKey");
//         navigate("/");
//       }
//     }
//   }, []);

//   return (
//     <div style={{ display: "flex", flexDirection: "column" }}>
//       <Header />
//       <SideNavbar />
//       <Container style={{ paddingBottom: 64 }}>
//         <Routes>
//           <Route path="/" element={<SignIn setIsAuthenticated={setIsAuthenticated} />} />
//           <Route path="home" element={isAuthenticated ? <Home /> : <Navigate to="/" />} />
//           <Route path="sign-up" element={<SignUp />} />
//           <Route path="edit-employee/:EmployeeId" element={<EditEmployee />} />
//           <Route path="add-employee" element={<AddEmployee />} />
//           <Route path="profile" element={<ProfileData />} />
//           <Route path="logout" element={<ExitToApp />} />
//           <Route path="*" element={<NoMatch />} />
//         </Routes>
//       </Container>
//       <Footer />
//     </div>
//   );
// }

// export default App;

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
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<SignIn />} />
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
