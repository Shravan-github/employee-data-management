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
// import logo from "../components/images/shravan_logo.jpg";
// import axios from "axios";

// const SignIn = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [emailError, setEmailError] = useState("");
//   const [passwordError, setPasswordError] = useState("");
//   const [isButtonDisabled, setIsButtonDisabled] = useState(true);
//   const [touched, setTouched] = useState({
//     email: "",
//     password: "",
//   });
//   const navigate = useNavigate();

//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//   useEffect(() => {
//     if (touched.email) {
//       if (!emailRegex.test(email)) {
//         setEmailError("Invalid email format");
//       } else {
//         setEmailError("");
//       }
//     }

//     if (touched.password) {
//       if (password === "") {
//         setPasswordError("Password is required");
//       } else {
//         setPasswordError("");
//       }
//     }

//     if (email && password && !emailError && !passwordError) {
//       setIsButtonDisabled(false);
//     } else {
//       setIsButtonDisabled(true);
//     }
//   }, [email, password, touched, emailError, passwordError]);

//   const handleBlur = (field) => (e) => {
//     setTouched({ ...touched, [field]: true });
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     axios
//       .post("http://localhost:3636/signin", touched)
//       .then((res) => alert(res.touched));

//     // const encodedDetails = Cookies.get("userDetails");
//     // if (encodedDetails) {
//     //   const userDetails = JSON.parse(window.atob(encodedDetails));
//     //   if (email === userDetails.email && password === userDetails.password) {
//     //     Cookies.set("clientKey", "someClientKey", { expires: 0.125 }); // 3 hours
//     //     Cookies.set("expirationTime", new Date(Date.now() + 3 * 60 * 60 * 1000)); // 3 hours from now
//     //     console.log("Login Successfully");
//     //     navigate("/home");
//     //   } else {
//     //     alert("Invalid username or password");
//     //   }
//     // } else {
//     //   alert("No user found with this email");
//     // // }
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
//           Sign In
//         </Typography>
//         <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
//           <TextField
//             margin="normal"
//             required
//             fullWidth
//             id="email"
//             label="Email Address"
//             name="email"
//             autoComplete="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             onBlur={handleBlur("email")}
//             autoFocus
//             error={!!emailError}
//             helperText={touched.email && emailError}
//           />
//           <TextField
//             margin="normal"
//             required
//             fullWidth
//             name="password"
//             label="Password"
//             type="password"
//             id="password"
//             autoComplete="current-password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             onBlur={handleBlur("password")}
//             error={!!passwordError}
//             helperText={touched.password && passwordError}
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
//               <Button component={Link} to="/forgot-password">
//                 Forgot password?
//               </Button>
//             </Grid>
//             <Grid item>
//               <Button component={Link} to="/sign-up">
//                 Don't have an account? Sign Up
//               </Button>
//             </Grid>
//           </Grid>
//         </Box>
//       </Box>
//     </Container>
//   );
// };

// export default SignIn;

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
// import logo from "../components/images/shravan_logo.jpg";
// import { decodeString } from "../utils/encoding";

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
//     const encodedDetails = Cookies.get("userDetails");
//     if (encodedDetails) {
//       const userDetails = JSON.parse(decodeString(encodedDetails));
//       if (email === userDetails.email && password === userDetails.password) {
//         Cookies.set("clientKey", "someClientKey", { expires: 0.125 }); // 3 hours
//         Cookies.set("expirationTime", new Date(Date.now() + 3 * 60 * 60 * 1000)); // 3 hours from now
//         console.log("Login Successfully");
//         navigate("/home");
//       } else {
//         alert("Invalid username or password");
//       }
//     } else {
//       alert("No user found with this email");
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

import React, { useState, useEffect, useRef } from "react";
import {
  Button,
  TextField,
  Grid,
  Box,
  Typography,
  Container,
  Avatar,
} from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
import logo from "../components/images/shravan_logo.jpg";
import axios from "axios";
import Cookies from "js-cookie";

const SignIn = () => {
  let emailInputRef = useRef();
  let PasswordInputRef = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [touched, setTouched] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  useEffect(() => {
    if (touched.email) {
      if (!emailRegex.test(email)) {
        setEmailError("Invalid email format");
      } else {
        setEmailError("");
      }
    }

    if (touched.password) {
      if (password === "") {
        setPasswordError("Password is required");
      } else {
        setPasswordError("");
      }
    }

    if (email && password && !emailError && !passwordError) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [email, password, touched, emailError, passwordError]);

  const handleBlur = (field) => (e) => {
    setTouched({ ...touched, [field]: true });
  };

  let validateSignin = async () => {
    let dataToSend = new FormData();
    dataToSend.append("email", emailInputRef.current.value);
    dataToSend.append("password", PasswordInputRef.current.value);

    let reqOptions = {
      method: "POST",
      body: dataToSend,
    };

    let JSONData = await fetch(
      "http://localhost:3636/validateSignin",
      reqOptions
    );

    let JSOData = await JSONData.json();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3636/signin", touched)
      .then((res) => alert(res.touched));

    const encodedDetails = Cookies.get("userDetails");
    if (encodedDetails) {
      const userDetails = JSON.parse(window.atob(encodedDetails));
      if (email === userDetails.email && password === userDetails.password) {
        Cookies.set("clientKey", "someClientKey", { expires: 0.125 }); // 3 hours
        Cookies.set(
          "expirationTime",
          new Date(Date.now() + 3 * 60 * 60 * 1000)
        ); // 3 hours from now
        console.log("Login Successfully");
        navigate("/home");
      } else {
        alert("Invalid username or password");
      }
    } else {
      alert("No user found with this email");
    }
  };

  return (
    <Container component="main" maxWidth="xs">
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
          Sign In
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            ref={emailInputRef}
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={handleBlur("email")}
            autoFocus
            error={!!emailError}
            helperText={touched.email && emailError}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            ref={PasswordInputRef}
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={handleBlur("password")}
            error={!!passwordError}
            helperText={touched.password && passwordError}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={isButtonDisabled}
            onClick={()=>{
              validateSignin()
            }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Button component={Link} to="/forgot-password">
                Forgot password?
              </Button>
            </Grid>
            <Grid item>
              <Button component={Link} to="/sign-up">
                Don't have an account? Sign Up
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default SignIn;
