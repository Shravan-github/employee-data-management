// import React from "react";
// import { Container } from "@mui/material";
// import { Link, Routes, Route } from "react-router-dom";
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
// import PrivateRoute from "./components/PrivateRoute";

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
//   return (
//     <div style={{ display: "flex", flexDirection: "column" }}>
//       <Header />
//       <SideNavbar />
//       <Container style={{ paddingBottom: 64 }}>
//         <Routes>
//           <Route path="/home" element={<PrivateRoute component={Home} />} />
//           <Route path="/" element={<SignIn />} />
//           <Route path="sign-up" element={<SignUp />} />
//           <Route path="edit-employee/:EmployeeId" element={<PrivateRoute component={EditEmployee} />} />
//           <Route path="add-employee" element={<PrivateRoute component={AddEmployee} />} />
//           <Route path="logout" element={<ExitToApp />} />
//           <Route path="profile" element={<PrivateRoute component={ProfileData} />} />
//           <Route path="*" element={<NoMatch />} />
//         </Routes>
//       </Container>
//       <Footer />
//     </div>
//   );
// }

// export default App;

import React from "react";
import { Container } from "@mui/material";
import { Link, Routes, Route } from "react-router-dom";
import ExitToApp from "./components/ExitToApp";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SideNavbar from "./components/SideNavbar";
import AddEmployee from "./pages/AddEmployee";
import EditEmployee from "./pages/EditEmployee";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ProfileData from "./pages/ProfileData";
import PrivateRoute from "./components/PrivateRoute";
import notFound from "./components/images/page-not-found.png"

function NoMatch() {  
  return (
    <div>
      <img src={notFound} alt="Page NOt Found" />
      <h2>Sorry, it appears the page you were looking for doesn't exist anymore or might have been moved.
      The site administrator has been notified.</h2>
      <p>
        <Link to="/home">Go to the home page</Link>
      </p>
    </div>
  );
}

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Header />
      <SideNavbar />
      <Container style={{ paddingBottom: 64 }}>
        <Routes>
          <Route path="/home" element={<PrivateRoute component={Home} />} />
          <Route path="/" element={<SignIn />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="edit-employee/:EmployeeId" element={<PrivateRoute component={EditEmployee} />} />
          <Route path="add-employee" element={<PrivateRoute component={AddEmployee} />} />
          <Route path="logout" element={<ExitToApp />} />
          <Route path="profile" element={<PrivateRoute component={ProfileData} />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Container>
      <Footer />
    </div>
  );
}

export default App;


