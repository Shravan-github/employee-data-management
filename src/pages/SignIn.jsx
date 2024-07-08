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

    // const data = new FormData(event.currentTarget);
    // const userData = {
    //   email: data.get("email"),
    //   password: data.get("password"),
    // };

    // try {
    //   const response = await axios.post(
    //     "http://localhost:5000/signin",
    //     userData
    //   );
    //   console.log("User signed in:", response.data);
    //   setIsAuthenticated(true);
    // } catch (error) {
    //   console.error("Error signing in:", error);
    // }
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
