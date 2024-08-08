import React, { useState, useEffect, useRef } from "react";
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
import axios from "axios";
import { Password } from "@mui/icons-material";

const Register = () => {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  // const [check, setCheck] = useState(false);
  // const [data, setData] = useState({
  //   firstName: '',
  //   lastName: '',
  //   email: '',
  //   password: '',
  //   confirmPassword: '',
  // });
  // const [firstNameError, setFirstNameError] = useState("");
  // const [lastNameError, setLastNameError] = useState("");
  // const [emailError, setEmailError] = useState("");
  // const [passwordError, setPasswordError] = useState("");
  // const [confirmPasswordError, setConfirmPasswordError] = useState("");
  // const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  // const navigate = useNavigate();

  // const firstNameRegex = /^[a-zA-Z ]+$/;
  // const lastNameRegex = /^[a-zA-Z ]+$/;
  // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // const passwordRegex =
  //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  // useEffect(() => {
  //   if (data.firstName) {
  //     if (firstName === "") {
  //       setFirstNameError("First Name is required");
  //     } else if (!firstNameRegex.test(firstName)) {
  //       setFirstNameError("First Name is invalid");
  //     } else {
  //       setFirstNameError("");
  //     }
  //   }

  //   if (data.lastName) {
  //     if (lastName === "") {
  //       setLastNameError("Last Name is required");
  //     } else if (!lastNameRegex.test(lastName)) {
  //       setLastNameError("Last Name is invalid");
  //     } else {
  //       setLastNameError("");
  //     }
  //   }

  //   if (data.email) {
  //     if (!emailRegex.test(email)) {
  //       setEmailError("Invalid email format");
  //     } else {
  //       setEmailError("");
  //     }
  //   }

  //   if (data.password) {
  //     if (!passwordRegex.test(password)) {
  //       setPasswordError(
  //         "Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character"
  //       );
  //     } else {
  //       setPasswordError("");
  //     }
  //   }

  //   if (data.confirmPassword) {
  //     if (confirmPassword !== password) {
  //       setConfirmPasswordError("Passwords do not match");
  //     } else {
  //       setConfirmPasswordError("");
  //     }
  //   }

  //   if (
  //     firstName &&
  //     lastName &&
  //     email &&
  //     password &&
  //     confirmPassword === password &&
  //     check &&
  //     !firstNameError &&
  //     !lastNameError &&
  //     !emailError &&
  //     !passwordError &&
  //     !confirmPasswordError
  //   ) {
  //     setIsButtonDisabled(false);
  //   } else {
  //     setIsButtonDisabled(true);
  //   }
  // }, [
  //   firstName,
  //   lastName,
  //   email,
  //   password,
  //   confirmPassword,
  //   check,
  //  data,
  //   firstNameError,
  //   lastNameError,
  //   emailError,
  //   passwordError,
  //   confirmPasswordError,
  // ]);

  // const handleBlur = (field) => (e) => {
  //   setData({ ...data, [field]: true });
  // };

  // const changeHandler = e =>{
  //   setData({...data,[e.target.name]:e.target.value});
  // }

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   if (isButtonDisabled) {
  //     return;
  //   }

  //   try {
  //     const response = await axios.post("http://localhost:3636/signup", data);
  //     alert(response.data);
  //     navigate("/");
  //   } catch (error) {
  //     console.error("There was an error making the request:", error.response);
  //     if (error.response) {
  //       // Server responded with a status other than 200 range
  //       alert(`Error: ${error.response.data}`);
  //     } else if (error.request) {
  //       // Request was made but no response received
  //       alert("Network error: No response received from server");
  //     } else {
  //       // Something else happened while setting up the request
  //       alert(`Error: ${error.message}`);
  //     }
  //   }
  // };

  let firstNameInputRef = useRef();
  let lastNameInputRef = useRef();
  let emailInputRef = useRef();
  let passwordInputRef = useRef();
  let confirmPasswordInputRef = useRef();

  let onSignup = async () => {
    let dataToSend = {
      firstName: firstNameInputRef.current.value,
      lastName: lastNameInputRef.current.value,
      email: emailInputRef.current.value,
      Password: passwordInputRef.current.value,
      confirmPassword: confirmPasswordInputRef.current.value,
    };

    let dataToSendJSON = JSON.stringify(dataToSend);
    console.log(dataToSend);

    let myHeader = new Headers();
    myHeader.append("content-type", "application/json");

    let reqOptions = {
      method: "POST",
      body: dataToSendJSON,
      headers: myHeader,
    };

    let JSONData = await fetch("http://localhost:3636/signup", reqOptions);

    let JSOData = await JSONData.json()

    console.log(JSOData )
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
        <Box component="form" noValidate sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                ref={firstNameInputRef}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                ref={lastNameInputRef}
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
                ref={emailInputRef}
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
                ref={passwordInputRef}
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
                ref={confirmPasswordInputRef}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I accept the terms and conditions"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={() => {
              onSignup();
            }}
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

export default Register;




// import React, { useState, useEffect } from "react";
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
// import { useNavigate, Link } from "react-router-dom";
// import logo from "../components/images/shravan_logo.jpg";
// import Cookies from "js-cookie";
// import axios from "axios";

// const SignUp = () => {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [check, setCheck] = useState(false);
//   const [touched, setTouched] = useState({
//     firstName: false,
//     lastName: false,
//     email: false,
//     password: false,
//     confirmPassword: false,
//   });
//   const [firstNameError, setFirstNameError] = useState("");
//   const [lastNameError, setLastNameError] = useState("");
//   const [emailError, setEmailError] = useState("");
//   const [passwordError, setPasswordError] = useState("");
//   const [confirmPasswordError, setConfirmPasswordError] = useState("");
//   const [isButtonDisabled, setIsButtonDisabled] = useState(true);
//   const navigate = useNavigate();

//   const firstNameRegex = /^[a-zA-Z ]+$/;
//   const lastNameRegex = /^[a-zA-Z ]+$/;
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   const passwordRegex =
//     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

//   useEffect(() => {
//     if (touched.firstName) {
//       if (firstName === "") {
//         setFirstNameError("First Name is required");
//       } else if (!firstNameRegex.test(firstName)) {
//         setFirstNameError("First Name is invalid");
//       } else {
//         setFirstNameError("");
//       }
//     }

//     if (touched.lastName) {
//       if (lastName === "") {
//         setLastNameError("Last Name is required");
//       } else if (!lastNameRegex.test(lastName)) {
//         setLastNameError("Last Name is invalid");
//       } else {
//         setLastNameError("");
//       }
//     }

//     if (touched.email) {
//       if (!emailRegex.test(email)) {
//         setEmailError("Invalid email format");
//       } else {
//         setEmailError("");
//       }
//     }

//     if (touched.password) {
//       if (!passwordRegex.test(password)) {
//         setPasswordError(
//           "Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character"
//         );
//       } else {
//         setPasswordError("");
//       }
//     }

//     if (touched.confirmPassword) {
//       if (confirmPassword !== password) {
//         setConfirmPasswordError("Passwords do not match");
//       } else {
//         setConfirmPasswordError("");
//       }
//     }

//     if (
//       firstName &&
//       lastName &&
//       email &&
//       password &&
//       confirmPassword === password &&
//       check &&
//       !firstNameError &&
//       !lastNameError &&
//       !emailError &&
//       !passwordError &&
//       !confirmPasswordError
//     ) {
//       setIsButtonDisabled(false);
//     } else {
//       setIsButtonDisabled(true);
//     }
//   }, [
//     firstName,
//     lastName,
//     email,
//     password,
//     confirmPassword,
//     check,
//     touched,
//     firstNameError,
//     lastNameError,
//     emailError,
//     passwordError,
//     confirmPasswordError,
//   ]);

//   const handleBlur = (field) => (e) => {
//     setTouched({ ...touched, [field]: true });
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     axios
//       .post("http://localhost:3636/signup", touched)
//       .then((res) => alert(res.touched));
//     setTouched({
//       firstName: true,
//       lastName: true,
//       email: true,
//       password: true,
//       confirmPassword: true,
//     });

//     if (isButtonDisabled) {
//       return;
//     }

//     const existingEmail = localStorage.getItem("email");
//     if (existingEmail === email) {
//       alert("User already registered with this email");
//     } else {
//       const userDetails = JSON.stringify({
//         firstName,
//         lastName,
//         email,
//         password,
//         check,
//       });
//       const encodedDetails = window.btoa(userDetails);

//       Cookies.set("userDetails", encodedDetails, { expires: 0.125 }); // 3 hours

//       console.log("User Data Saved Successfully");
//       navigate("/");
//     }
//   };

//   return (
//     <Container component="main" maxWidth="xs">
//       <CssBaseline />
//       <Box
//         sx={{
//           marginTop: 8,
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//         }}
//       >
//         <Avatar sx={{ width: 100, height: 100 }}>
//           <Typography variant="h6" noWrap component="div" className="logo">
//             <img src={logo} alt="logo" height="30px" />
//           </Typography>
//         </Avatar>
//         <Typography component="h1" variant="h5">
//           Sign up
//         </Typography>
//         <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
//           <Grid container spacing={2}>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 autoComplete="given-name"
//                 name="firstName"
//                 required
//                 fullWidth
//                 id="firstName"
//                 label="First Name"
//                 value={firstName}
//                 onChange={(e) => setFirstName(e.target.value)}
//                 onBlur={handleBlur("firstName")}
//                 autoFocus
//                 error={!!firstNameError}
//                 helperText={touched.firstName && firstNameError}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 required
//                 fullWidth
//                 id="lastName"
//                 label="Last Name"
//                 name="lastName"
//                 value={lastName}
//                 onChange={(e) => setLastName(e.target.value)}
//                 onBlur={handleBlur("lastName")}
//                 autoComplete="family-name"
//                 error={!!lastNameError}
//                 helperText={touched.lastName && lastNameError}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 required
//                 fullWidth
//                 id="email"
//                 label="Email Address"
//                 name="email"
//                 autoComplete="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 onBlur={handleBlur("email")}
//                 error={!!emailError}
//                 helperText={touched.email && emailError}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 required
//                 fullWidth
//                 name="password"
//                 label="Password"
//                 type="password"
//                 id="password"
//                 autoComplete="new-password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 onBlur={handleBlur("password")}
//                 error={!!passwordError}
//                 helperText={
//                   touched.password &&
//                   "Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character"
//                 }
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 required
//                 fullWidth
//                 name="confirmPassword"
//                 label="Confirm Password"
//                 type="password"
//                 id="confirmPassword"
//                 autoComplete="confirm-password"
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//                 onBlur={handleBlur("confirmPassword")}
//                 error={!!confirmPasswordError}
//                 helperText={touched.confirmPassword && confirmPasswordError}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <FormControlLabel
//                 control={
//                   <Checkbox
//                     value="allowExtraEmails"
//                     color="primary"
//                     checked={check}
//                     onChange={(e) => setCheck(e.target.checked)}
//                   />
//                 }
//                 label="I accept the terms and conditions"
//               />
//             </Grid>
//           </Grid>
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             sx={{ mt: 3, mb: 2 }}
//             disabled={isButtonDisabled}
//           >
//             Sign Up
//           </Button>
//           <Grid container justifyContent="flex-end">
//             <Grid item>
//               <Button component={Link} to="/">
//                 Already have an account? Sign in
//               </Button>
//             </Grid>
//           </Grid>
//         </Box>
//       </Box>
//     </Container>
//   );
// };

// export default SignUp;



















// import React, { useState, useEffect } from "react";
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
// import { useNavigate, Link } from "react-router-dom";
// import logo from "../components/images/shravan_logo.jpg";
// import Cookies from "js-cookie";
// import { encodeString } from "../utils/encoding";

// const SignUp = () => {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [check, setCheck] = useState(false);
//   const [touched, setTouched] = useState({
//     firstName: false,
//     lastName: false,
//     email: false,
//     password: false,
//     confirmPassword: false,
//   });
//   const [firstNameError, setFirstNameError] = useState("");
//   const [lastNameError, setLastNameError] = useState("");
//   const [emailError, setEmailError] = useState("");
//   const [passwordError, setPasswordError] = useState("");
//   const [confirmPasswordError, setConfirmPasswordError] = useState("");
//   const [isButtonDisabled, setIsButtonDisabled] = useState(true);
//   const navigate = useNavigate();

//   const firstNameRegex = /^[a-zA-Z ]+$/;
//   const lastNameRegex = /^[a-zA-Z ]+$/;
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   const passwordRegex =
//     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

//   useEffect(() => {
//     if (touched.firstName) {
//       if (firstName === "") {
//         setFirstNameError("First Name is required");
//       } else if (!firstNameRegex.test(firstName)) {
//         setFirstNameError("First Name is invalid");
//       } else {
//         setFirstNameError("");
//       }
//     }

//     if (touched.lastName) {
//       if (lastName === "") {
//         setLastNameError("Last Name is required");
//       } else if (!lastNameRegex.test(lastName)) {
//         setLastNameError("Last Name is invalid");
//       } else {
//         setLastNameError("");
//       }
//     }

//     if (touched.email) {
//       if (!emailRegex.test(email)) {
//         setEmailError("Invalid email format");
//       } else {
//         setEmailError("");
//       }
//     }

//     if (touched.password) {
//       if (!passwordRegex.test(password)) {
//         setPasswordError(
//           "Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character"
//         );
//       } else {
//         setPasswordError("");
//       }
//     }

//     if (touched.confirmPassword) {
//       if (confirmPassword !== password) {
//         setConfirmPasswordError("Passwords do not match");
//       } else {
//         setConfirmPasswordError("");
//       }
//     }

//     if (
//       firstName &&
//       lastName &&
//       email &&
//       password &&
//       confirmPassword === password &&
//       check &&
//       !firstNameError &&
//       !lastNameError &&
//       !emailError &&
//       !passwordError &&
//       !confirmPasswordError
//     ) {
//       setIsButtonDisabled(false);
//     } else {
//       setIsButtonDisabled(true);
//     }
//   }, [
//     firstName,
//     lastName,
//     email,
//     password,
//     confirmPassword,
//     check,
//     touched,
//     firstNameError,
//     lastNameError,
//     emailError,
//     passwordError,
//     confirmPasswordError,
//   ]);

//   const handleBlur = (field) => (e) => {
//     setTouched({ ...touched, [field]: true });
//   };

//   // const handleSubmit = async (event) => {
//   //   event.preventDefault();
//   //   setTouched({
//   //     firstName: true,
//   //     lastName: true,
//   //     email: true,
//   //     password: true,
//   //     confirmPassword: true,
//   //   });

//   //   if (isButtonDisabled) {
//   //     return;
//   //   }

//   //   const existingEmail = localStorage.getItem("email");
//   //   if (existingEmail === email) {
//   //     alert("User already registered with this email");
//   //   } else {
//   //     localStorage.setItem("firstName", firstName);
//   //     localStorage.setItem("lastName", lastName);
//   //     localStorage.setItem("email", email);
//   //     localStorage.setItem("password", password);
//   //     localStorage.setItem("confirmPassword", confirmPassword);
//   //     localStorage.setItem("terms", check);
//   //     console.log("User Data Saved Successfully");
//   //     navigate("/");
//   //   }
//   // };
//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setTouched({
//       firstName: true,
//       lastName: true,
//       email: true,
//       password: true,
//       confirmPassword: true,
//     });

//     if (isButtonDisabled) {
//       return;
//     }

//     const existingEmail = localStorage.getItem("email");
//     if (existingEmail === email) {
//       alert("User already registered with this email");
//     } else {
//       // Encode user details before storing them in cookies
//       const userDetails = {
//         firstName,
//         lastName,
//         email,
//         password,
//       };
//       const encodedDetails = encodeString(JSON.stringify(userDetails));
//       Cookies.set("userDetails", encodedDetails, { expires: 0.125 }); // 3 hours

//       console.log("User Data Saved Successfully");
//       navigate("/");
//     }
//   };
//   return (
//     <Container component="main" maxWidth="xs">
//       <CssBaseline />
//       <Box
//         sx={{
//           marginTop: 8,
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//         }}
//       >
//         <Avatar sx={{ width: 100, height: 100 }}>
//           <Typography variant="h6" noWrap component="div" className="logo">
//             <img src={logo} alt="logo" height="30px" />
//           </Typography>
//         </Avatar>
//         <Typography component="h1" variant="h5">
//           Sign up
//         </Typography>
//         <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
//           <Grid container spacing={2}>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 autoComplete="given-name"
//                 name="firstName"
//                 required
//                 fullWidth
//                 id="firstName"
//                 label="First Name"
//                 value={firstName}
//                 onChange={(e) => setFirstName(e.target.value)}
//                 onBlur={handleBlur("firstName")}
//                 autoFocus
//                 error={!!firstNameError}
//                 helperText={touched.firstName && firstNameError}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 required
//                 fullWidth
//                 id="lastName"
//                 label="Last Name"
//                 name="lastName"
//                 value={lastName}
//                 onChange={(e) => setLastName(e.target.value)}
//                 onBlur={handleBlur("lastName")}
//                 autoComplete="family-name"
//                 error={!!lastNameError}
//                 helperText={touched.lastName && lastNameError}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 required
//                 fullWidth
//                 id="email"
//                 label="Email Address"
//                 name="email"
//                 autoComplete="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 onBlur={handleBlur("email")}
//                 error={!!emailError}
//                 helperText={touched.email && emailError}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 required
//                 fullWidth
//                 name="password"
//                 label="Password"
//                 type="password"
//                 id="password"
//                 autoComplete="new-password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 onBlur={handleBlur("password")}
//                 error={!!passwordError}
//                 helperText={
//                   touched.password &&
//                   "Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character"
//                 }
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 required
//                 fullWidth
//                 name="confirmPassword"
//                 label="Confirm Password"
//                 type="password"
//                 id="confirmPassword"
//                 autoComplete="confirm-password"
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//                 onBlur={handleBlur("confirmPassword")}
//                 error={!!confirmPasswordError}
//                 helperText={touched.confirmPassword && confirmPasswordError}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <FormControlLabel
//                 control={
//                   <Checkbox
//                     value="allowExtraEmails"
//                     color="primary"
//                     checked={check}
//                     onChange={(e) => setCheck(e.target.checked)}
//                   />
//                 }
//                 label="I accept the terms and conditions"
//               />
//             </Grid>
//           </Grid>
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             sx={{ mt: 3, mb: 2 }}
//             disabled={isButtonDisabled}
//           >
//             Sign Up
//           </Button>
//           <Grid container justifyContent="flex-end">
//             <Grid item>
//               <Button component={Link} to="/">
//                 Already have an account? Sign in
//               </Button>
//             </Grid>
//           </Grid>
//         </Box>
//       </Box>
//     </Container>
//   );
// };

// export default SignUp;