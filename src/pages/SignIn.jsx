// import React, { useState, useEffect } from "react";
// import {
//   Button,
//   TextField,
//   Grid,
//   Box,
//   Typography,
//   Container,
//   Avatar,
// } from "@mui/material";
// import { useNavigate, Link } from "react-router-dom";
// import Cookies from "js-cookie";
// // import { useAuth } from '../AuthContext';
// import logo from "../components/images/shravan_logo.jpg";

// const SignIn = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [emailError, setEmailError] = useState("");
//   const [passwordError, setPasswordError] = useState("");
//   const [isButtonDisabled, setIsButtonDisabled] = useState(true);
//   const [touched, setTouched] = useState({
//     email: false,
//     password: false,
//   });
//   //   const { login } = useAuth();
//   const navigate = useNavigate();

//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   const passwordRegex =
//     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

//   useEffect(() => {
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

//     if (email && password && !emailError && !passwordError) {
//       setIsButtonDisabled(false);
//     } else {
//       setIsButtonDisabled(true);
//     }
//   }, [email, password, emailError, passwordError, touched]);

//   const handleBlur = (field) => (e) => {
//     setTouched({ ...touched, [field]: true });
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     // Assuming userName and userPassword are fetched from a secure source
//     const userName = "user@example.com";
//     const userPassword = "Password123";

//     if (email === userName && password === userPassword) {
//       Cookies.set("clientKey", "someClientKey", { expires: 0.125 }); // 3 hours
//       Cookies.set("expirationTime", new Date(Date.now() + 3 * 60 * 60 * 1000)); // 3 hours from now
//       console.log("Login Successfully");
//       navigate("/home");
//     } else {
//       alert("Invalid username or password");
//     }
//   };

//   return (
//     <Container component="main" maxWidth="xs">
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
//           Sign in
//         </Typography>
//         <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
//           <TextField
//             margin="normal"
//             required
//             fullWidth
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             onBlur={handleBlur("email")}
//             label="Email Address"
//             name="email"
//             autoComplete="email"
//             autoFocus
//             error={!!emailError}
//             helperText={touched.email && emailError}
//           />
//           <TextField
//             margin="normal"
//             required
//             fullWidth
//             name="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             onBlur={handleBlur("password")}
//             label="Password"
//             type="password"
//             id="password"
//             autoComplete="current-password"
//             error={!!passwordError}
//             helperText={
//               touched.password &&
//               "Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character"
//             }
//           />
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             sx={{ mt: 3, mb: 2 }}
//             disabled={isButtonDisabled}
//           >
//             Sign In
//           </Button>
//           <Grid container>
//             <Grid item xs>
//               {/* <Link href="#" variant="body2">
//                 Forgot password?
//               </Link> */}
//               <Button component={Link} to="#">
//                 Forgot password?
//               </Button>
//             </Grid>
//             <Button component={Link} to="/sign-up">
//               Don't have an account? Sign Up
//             </Button>
//           </Grid>
//         </Box>
//       </Box>
//     </Container>
//   );
// };

// export default SignIn;

import React, { useRef, useState } from "react";
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
import { LockOutlined as LockOutlinedIcon } from "@mui/icons-material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "../components/images/shravan_logo.jpg";

const defaultTheme = createTheme();

function SignIn({ setIsAuthenticated }) {
  // let emailInputRef = useRef();
  // let passwordInputRef = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //getting email password from local storage
  const userName = localStorage.getItem("email")
    ? localStorage.getItem("email")
    : "shravan@gmail.com";
  const userPassword = localStorage.getItem("password")
    ? localStorage.getItem("password")
    : "Shravan";

  let navigate = useNavigate();

  //submit function edhi
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (email === userName && password === userPassword) {
      console.log("Login Successfully");
      navigate("/home");
    } else {
      alert("invalid username or password");
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
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
          {/* <Typography
            variant="h6"
            noWrap
            component="div"
            className="logo"
            sx={{
              m: 1,
              bgcolor: "secondary.main",
              padding: "10px",
              borderRadius: "20px",
            }}
          >
            <img src={logo} alt="logo" height="50px" />
          </Typography> */}

          <Avatar sx={{ width: 100, height: 100 }}>
            <Typography variant="h6" noWrap component="div" className="logo">
              <img src={logo} alt="logo" height="30px"  />
            </Typography>
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              // ref={emailInputRef}
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              // ref={passwordInputRef}
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => {
                // if (emailInputRef.current.value === "shravan@gmail.com") {
                //   if (passwordInputRef.current.value === "Shrvan") {
                //     navigate("/home");
                //   }else{
                //     alert("Invalid password")
                //   }
                // }else{
                //   alert("Invalid username")
                // }
                //handleSubmit()
                // navigate("/home");
              }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              {/* <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid> */}

              <Grid item>
                <Button component={Link} to="/sign-up">
                  Don't have an account? Sign Up
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default SignIn;
