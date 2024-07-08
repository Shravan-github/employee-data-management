import React, { useState } from "react";
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
import { Link } from "react-router-dom";
import axios from "axios";
import logo from "../components/images/shravan_logo.jpg";

const defaultTheme = createTheme();

function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [check, setCheck] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (firstName === " ") {
      alert("First Name is required");
    } else if (lastName === " ") {
      alert("Last Name is required");
    } else if (email === " ") {
      alert("Email is required");
    } else if (password === " ") {
      alert("Password is required");
    } else if (confirmPassword === " ") {
      alert("confirmPassword is required");
    } else {
      localStorage.setItem("firstName", firstName);
      localStorage.setItem("lastName", lastName);

      localStorage.setItem("email", email);

      localStorage.setItem("password", password);
      localStorage.setItem("confirmPassword", confirmPassword);

      localStorage.setItem("terms", check);
      console.log("User Data Saved Succefully");
    }
  };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   const userData = {
  //     firstName: data.get("firstName"),
  //     lastName: data.get("lastName"),
  //     email: data.get("email"),
  //     password: data.get("password"),
  //   };

  //   try {
  //     const response = await axios.post(
  //       "http://localhost:5000/signup",
  //       userData
  //     );
  //     console.log("User signed up:", response.data);
  //   } catch (error) {
  //     console.error("Error signing up:", error);
  //   }
  // };

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
          <Typography
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
          </Typography>
          {/* <Avatar sx={{ m: 2, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
            <Typography variant="h6" noWrap component="div" className="logo">
              <img src={logo} alt="logo" height="50px" />
            </Typography>
          </Avatar> */}
          <Avatar>
            <Typography variant="h6" noWrap component="div" className="logo">
              <img src={logo} alt="logo" height="50px" />
            </Typography>
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
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
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                  autoFocus
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
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                  autoComplete="family-name"
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
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
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
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="confirm password"
                  label="Confirm Password"
                  type="confirm password"
                  id="confirm password"
                  autoComplete="confirm-password"
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      value="allowExtraEmails"
                      color="primary"
                      checked={check}
                      onChange={(e) => {
                        setCheck(e.target.value);
                      }}
                    />
                  }
                  label="I  Agree on Consent to store my personal information with this website. "
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
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
    </ThemeProvider>
  );
}

export default SignUp;
