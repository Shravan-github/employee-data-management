import React, { useState, useEffect } from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Grid,
  Box,
  Typography,
  Container,
} from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
import logo from "../components/images/shravan_logo.jpg";




const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [check, setCheck] = useState(false);
  const [touched, setTouched] = useState({
    firstName: false,
    lastName: false,
    email: false,
    password: false,
    confirmPassword: false,
  });
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const navigate = useNavigate();

  const firstNameRegex = /^[a-zA-Z ]+$/;
  const lastNameRegex = /^[a-zA-Z ]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  useEffect(() => {
    if (touched.firstName) {
      if (firstName === "") {
        setFirstNameError("First Name is required");
      } else if (!firstNameRegex.test(firstName)) {
        setFirstNameError("First Name is invalid");
      } else {
        setFirstNameError("");
      }
    }

    if (touched.lastName) {
      if (lastName === "") {
        setLastNameError("Last Name is required");
      } else if (!lastNameRegex.test(lastName)) {
        setLastNameError("Last Name is invalid");
      } else {
        setLastNameError("");
      }
    }

    if (touched.email) {
      if (!emailRegex.test(email)) {
        setEmailError("Invalid email format");
      } else {
        setEmailError("");
      }
    }

    if (touched.password) {
      if (!passwordRegex.test(password)) {
        setPasswordError(
          "Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character"
        );
      } else {
        setPasswordError("");
      }
    }

    if (touched.confirmPassword) {
      if (confirmPassword !== password) {
        setConfirmPasswordError("Passwords do not match");
      } else {
        setConfirmPasswordError("");
      }
    }

    if (
      firstName &&
      lastName &&
      email &&
      password &&
      confirmPassword === password &&
      check &&
      !firstNameError &&
      !lastNameError &&
      !emailError &&
      !passwordError &&
      !confirmPasswordError
    ) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    check,
    touched,
    firstNameError,
    lastNameError,
    emailError,
    passwordError,
    confirmPasswordError,
  ]);

  const handleBlur = (field) => (e) => {
    setTouched({ ...touched, [field]: true });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setTouched({
      firstName: true,
      lastName: true,
      email: true,
      password: true,
      confirmPassword: true,
    });

    if (isButtonDisabled) {
      return;
    }

    const existingEmail = localStorage.getItem("email");
    if (existingEmail === email) {
      alert("User already registered with this email");
    } else {
      localStorage.setItem("firstName", firstName);
      localStorage.setItem("lastName", lastName);
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
      localStorage.setItem("confirmPassword", confirmPassword);
      localStorage.setItem("terms", check);
      console.log("User Data Saved Successfully");
      navigate("/");
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ width: 100, height: 100 }}>
          <Typography variant="h6" noWrap component="div" className="logo">
            <img src={logo} alt="logo" height="30px" />
          </Typography>
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                onBlur={handleBlur("firstName")}
                autoFocus
                error={!!firstNameError}
                helperText={touched.firstName && firstNameError}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                onBlur={handleBlur("lastName")}
                autoComplete="family-name"
                error={!!lastNameError}
                helperText={touched.lastName && lastNameError}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={handleBlur("email")}
                error={!!emailError}
                helperText={touched.email && emailError}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onBlur={handleBlur("password")}
                error={!!passwordError}
                helperText={
                  touched.password &&
                  "Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character"
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                id="confirmPassword"
                autoComplete="confirm-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                onBlur={handleBlur("confirmPassword")}
                error={!!confirmPasswordError}
                helperText={touched.confirmPassword && confirmPasswordError}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    value="allowExtraEmails"
                    color="primary"
                    checked={check}
                    onChange={(e) => setCheck(e.target.checked)}
                  />
                }
                label="I accept the terms and conditions"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={isButtonDisabled}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Button component={Link} to="/">
                Already have an account? Sign in
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default SignUp;

// import React, { useState } from "react";
// import {
//   Avatar,
//   Button,
//   CssBaseline,
//   TextField,
//   FormControlLabel,
//   Checkbox,
//   Grid,
//   Box,
//   Typography,
//   Container,
// } from "@mui/material";
// import { LockOutlined as LockOutlinedIcon } from "@mui/icons-material";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import logo from "../components/images/shravan_logo.jpg";

// const defaultTheme = createTheme();

// function SignUp() {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [check, setCheck] = useState(false);
//   const [values, setValues] = useState({
//     firstName: " ",
//     lastName: " ",
//     email: " ",
//     password:  " ",
//     confirmPassword: " ",

//   })

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     if (firstName === " ") {
//       alert("First Name is required");
//     } else if (lastName === " ") {
//       alert("Last Name is required");
//     } else if (email === " ") {
//       alert("Email is required");
//     } else if (password === " ") {
//       alert("Password is required");
//     } else if (confirmPassword === " ") {
//       alert("confirmPassword is required");
//     } else {
//       localStorage.setItem("firstName", firstName);
//       localStorage.setItem("lastName", lastName);

//       localStorage.setItem("email", email);

//       localStorage.setItem("password", password);
//       localStorage.setItem("confirmPassword", confirmPassword);

//       localStorage.setItem("terms", check);
//       console.log("User Data Saved Succefully");
//     }
//   };

//   // const handleSubmit = async (event) => {
//   //   event.preventDefault();
//   //   const data = new FormData(event.currentTarget);
//   //   const userData = {
//   //     firstName: data.get("firstName"),
//   //     lastName: data.get("lastName"),
//   //     email: data.get("email"),
//   //     password: data.get("password"),
//   //   };

//   //   try {
//   //     const response = await axios.post(
//   //       "http://localhost:5000/signup",
//   //       userData
//   //     );
//   //     console.log("User signed up:", response.data);
//   //   } catch (error) {
//   //     console.error("Error signing up:", error);
//   //   }
//   // };

//   return (
//     <ThemeProvider theme={defaultTheme}>
//       <Container component="main" maxWidth="xs" >
//         <CssBaseline />
//         <Box
//           sx={{
//             marginTop: 8,
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//           }}
//         >
//           {/* <Typography
//             variant="h6"
//             noWrap
//             component="div"
//             className="logo"
//             sx={{
//               m: 1,
//               bgcolor: "secondary.main",
//               padding: "10px",
//               borderRadius: "20px",
//             }}
//           >
//             <img src={logo} alt="logo" height="50px" />
//           </Typography> */}
//           {/* <Avatar sx={{ m: 2, bgcolor: "secondary.main" }}>
//             <LockOutlinedIcon />
//             <Typography variant="h6" noWrap component="div" className="logo">
//               <img src={logo} alt="logo" height="50px" />
//             </Typography>
//           </Avatar> */}
//           {/* <Avatar>
//             <Typography variant="h6" noWrap component="div" className="logo">
//               <img src={logo} alt="logo" height="50px" />
//             </Typography>
//           </Avatar> */}

//           <Avatar sx={{ width: 100, height: 100 }}>
//             <Typography variant="h6" noWrap component="div" className="logo">
//               <img src={logo} alt="logo" height="30px" />
//             </Typography>
//           </Avatar>

//           <Typography component="h1" variant="h5">
//             Sign up
//           </Typography>
//           <Box
//             component="form"
//             noValidate
//             onSubmit={handleSubmit}
//             sx={{ mt: 3 }}
//           >
//             <Grid container spacing={2}>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   autoComplete="given-name"
//                   name="firstName"
//                   required
//                   fullWidth
//                   id="firstName"
//                   label="First Name"
//                   value={firstName}
//                   onChange={(e) => {
//                     setFirstName(e.target.value);
//                   }}
//                   autoFocus
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   required
//                   fullWidth
//                   id="lastName"
//                   label="Last Name"
//                   name="lastName"
//                   value={lastName}
//                   onChange={(e) => {
//                     setLastName(e.target.value);
//                   }}
//                   autoComplete="family-name"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   id="email"
//                   label="Email Address"
//                   name="email"
//                   autoComplete="email"
//                   value={email}
//                   onChange={(e) => {
//                     setEmail(e.target.value);
//                   }}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   name="password"
//                   label="Password"
//                   type="password"
//                   id="password"
//                   autoComplete="new-password"
//                   value={password}
//                   onChange={(e) => {
//                     setPassword(e.target.value);
//                   }}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   name="confirm password"
//                   label="Confirm Password"
//                   type="confirm password"
//                   id="confirm password"
//                   autoComplete="confirm-password"
//                   value={confirmPassword}
//                   onChange={(e) => {
//                     setConfirmPassword(e.target.value);
//                   }}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <FormControlLabel
//                   control={
//                     <Checkbox
//                       value="allowExtraEmails"
//                       color="primary"
//                       checked={check}
//                       onChange={(e) => {
//                         setCheck(e.target.value);
//                       }}
//                     />
//                   }
//                   label="I  Agree on Consent to store my personal information with this website. "
//                 />
//               </Grid>
//             </Grid>
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{ mt: 3, mb: 2 }}
//             >
//               Sign Up
//             </Button>
//             <Grid container justifyContent="flex-end">
//               <Grid item>
//                 <Button component={Link} to="/">
//                   Already have an account? Sign in
//                 </Button>
//               </Grid>
//             </Grid>
//           </Box>
//         </Box>
//       </Container>
//     </ThemeProvider>
//   );
// }

// export default SignUp;

// // import React, { useState, useEffect } from "react";
// // import {
// //   Avatar,
// //   Button,
// //   CssBaseline,
// //   TextField,
// //   FormControlLabel,
// //   Checkbox,
// //   Grid,
// //   Box,
// //   Typography,
// //   Container,
// // } from "@mui/material";
// // import { LockOutlined as LockOutlinedIcon } from "@mui/icons-material";
// // import { createTheme, ThemeProvider } from "@mui/material/styles";
// // import { Link } from "react-router-dom";
// // // import axios from "axios";
// // import logo from "../components/images/shravan_logo.jpg";
// // // import { useNavigate } from "react-router-dom";

// // const defaultTheme = createTheme();

// // function SignUp() {
// //   const [firstName, setFirstName] = useState("");
// //   const [lastName, setLastName] = useState("");
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [confirmPassword, setConfirmPassword] = useState("");
// //   const [check, setCheck] = useState(false);
// //   const [isValid, setIsValid] = useState(false);

// //   useEffect(() => {
// //     setIsValid(
// //       firstName !== "" &&
// //         lastName !== "" &&
// //         email !== "" &&
// //         password !== "" &&
// //         confirmPassword === password &&
// //         check
// //     );
// //   }, [firstName, lastName, email, password, confirmPassword, check]);

// //   // const navigate = useNavigate();

// //   const handleSubmit = async (event) => {
// //     event.preventDefault();
// //     if (isValid) {
// //       localStorage.setItem("firstName", firstName);
// //       localStorage.setItem("lastName", lastName);
// //       localStorage.setItem("email", email);
// //       localStorage.setItem("password", password);
// //       localStorage.setItem("confirmPassword", confirmPassword);
// //       localStorage.setItem("terms", check);
// //       console.log("User Data Saved Succefully");

// //     }
// //   };

// //   return (
// //     <ThemeProvider theme={defaultTheme}>
// //       <Container component="main" maxWidth="xs">
// //         <CssBaseline />
// //         <Box
// //           sx={{
// //             marginTop: 8,
// //             display: "flex",
// //             flexDirection: "column",
// //             alignItems: "center",
// //           }}
// //         >
// //           <Typography
// //             variant="h6"
// //             noWrap
// //             component="div"
// //             className="logo"
// //             sx={{
// //               m: 1,
// //               bgcolor: "secondary.main",
// //               padding: "10px",
// //               borderRadius: "20px",
// //             }}
// //           >
// //             <img src={logo} alt="logo" height="50px" />
// //           </Typography>
// //           <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
// //             <LockOutlinedIcon />
// //           </Avatar>
// //           <Typography component="h1" variant="h5">
// //             Sign up
// //           </Typography>
// //           <Box
// //             component="form"
// //             noValidate
// //             onSubmit={handleSubmit}
// //             sx={{ mt: 3 }}
// //           >
// //             <Grid container spacing={2}>
// //               <Grid item xs={12} sm={6}>
// //                 <TextField
// //                   autoComplete="given-name"
// //                   name="firstName"
// //                   required
// //                   fullWidth
// //                   id="firstName"
// //                   label="First Name"
// //                   value={firstName}
// //                   onChange={(e) => setFirstName(e.target.value)}
// //                   autoFocus
// //                 />
// //               </Grid>
// //               <Grid item xs={12} sm={6}>
// //                 <TextField
// //                   required
// //                   fullWidth
// //                   id="lastName"
// //                   label="Last Name"
// //                   name="lastName"
// //                   value={lastName}
// //                   onChange={(e) => setLastName(e.target.value)}
// //                   autoComplete="family-name"
// //                 />
// //               </Grid>
// //               <Grid item xs={12}>
// //                 <TextField
// //                   required
// //                   fullWidth
// //                   id="email"
// //                   label="Email Address"
// //                   name="email"
// //                   autoComplete="email"
// //                   value={email}
// //                   onChange={(e) => setEmail(e.target.value)}
// //                 />
// //               </Grid>
// //               <Grid item xs={12}>
// //                 <TextField
// //                   required
// //                   fullWidth
// //                   name="password"
// //                   label="Password"
// //                   type="password"
// //                   id="password"
// //                   autoComplete="new-password"
// //                   value={password}
// //                   onChange={(e) => setPassword(e.target.value)}
// //                 />
// //               </Grid>
// //               <Grid item xs={12}>
// //                 <TextField
// //                   required
// //                   fullWidth
// //                   name="confirmPassword"
// //                   label="Confirm Password"
// //                   type="password"
// //                   id="confirmPassword"
// //                   autoComplete="confirm-password"
// //                   value={confirmPassword}
// //                   onChange={(e) => setConfirmPassword(e.target.value)}
// //                 />
// //               </Grid>
// //               <Grid item xs={12}>
// //                 <FormControlLabel
// //                   control={
// //                     <Checkbox
// //                       value="allowExtraEmails"
// //                       color="primary"
// //                       checked={check}
// //                       onChange={(e) => setCheck(e.target.checked)}
// //                     />
// //                   }
// //                   label="I Agree on Consent to store my personal information with this website."
// //                 />
// //               </Grid>
// //             </Grid>
// //             <Button
// //               type="submit"
// //               fullWidth
// //               variant="contained"
// //               sx={{ mt: 3, mb: 2 }}
// //               disabled={!isValid}
// //             >
// //               Sign Up
// //             </Button>
// //             <Grid container justifyContent="flex-end">
// //               <Grid item>
// //                 <Button component={Link} to="/">
// //                   Already have an account? Sign in
// //                 </Button>
// //               </Grid>
// //             </Grid>
// //           </Box>
// //         </Box>
// //       </Container>
// //     </ThemeProvider>
// //   );
// // }

// // export default SignUp;
