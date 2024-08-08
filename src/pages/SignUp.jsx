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
import axios from "axios";

const SignUp = () => {
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [check, setCheck] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const navigate = useNavigate();

  const firstNameRegex = /^[a-zA-Z ]+$/;
  const lastNameRegex = /^[a-zA-Z ]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  useEffect(() => {
    const { firstName, lastName, email, password, confirmPassword } = data;

    const newErrors = {
      firstName: firstName && !firstNameRegex.test(firstName) ? "First Name is invalid" : "",
      lastName: lastName && !lastNameRegex.test(lastName) ? "Last Name is invalid" : "",
      email: email && !emailRegex.test(email) ? "Invalid email format" : "",
      password: password && !passwordRegex.test(password)
        ? "Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character"
        : "",
      confirmPassword: confirmPassword && confirmPassword !== password ? "Passwords do not match" : "",
    };

    if (JSON.stringify(errors) !== JSON.stringify(newErrors)) {
      setErrors(newErrors);
    }

    const shouldDisableButton = !(
      firstName &&
      lastName &&
      email &&
      password &&
      confirmPassword === password &&
      check &&
      !Object.values(newErrors).some(error => error)
    );

    if (isButtonDisabled !== shouldDisableButton) {
      setIsButtonDisabled(shouldDisableButton);
    }
  }, [data, check, errors, isButtonDisabled]);

  const changeHandler = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isButtonDisabled) return;

    try {
      const response = await axios.post("http://localhost:3636/signup", data);
      alert(response.data);
      navigate("/");
    } catch (error) {
      console.error("There was an error making the request:", error.response);
      if (error.response) {
        alert(`Error: ${error.response.data}`);
      } else if (error.request) {
        alert("Network error: No response received from server");
      } else {
        alert(`Error: ${error.message}`);
      }
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
          <Grid container spacing={2} onChange={changeHandler}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                value={data.firstName}
                error={!!errors.firstName}
                helperText={errors.firstName}
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
                value={data.lastName}
                error={!!errors.lastName}
                helperText={errors.lastName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={data.email}
                error={!!errors.email}
                helperText={errors.email}
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
                value={data.password}
                error={!!errors.password}
                helperText={errors.password}
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
                value={data.confirmPassword}
                error={!!errors.confirmPassword}
                helperText={errors.confirmPassword}
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
