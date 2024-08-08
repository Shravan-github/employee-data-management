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

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:3636/login", {
        email,
        password,
      });

      if (response.data.success) {
       
        Cookies.set("clientKey", response.data.clientKey, { expires: 0.125 }); 
        Cookies.set(
          "expirationTime",
          new Date(Date.now() + 3 * 60 * 60 * 1000)
        ); 
        console.log("Login Successfully");

        // Navigate to home page after successful login
        navigate("/home");
      } else {
        alert("Invalid username or password");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("An error occurred during login. Please try again.");
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
