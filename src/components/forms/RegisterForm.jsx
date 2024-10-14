/* eslint-disable no-unused-vars */
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { Form, Formik } from "formik";
import { auth } from "../../firebase/config.js";
import Customeinput from "../forms/Customeinput.jsx";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { registerSchema } from "../../validation/RegisterSchema.js";
import Button from "@mui/material/Button";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" to="/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function RegisterForm() {
  const navigate = useNavigate();

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs" sx={{minHeight:"100vh"}}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "#1f2937" }}>
            <LockOutlinedIcon sx={{ color: "#fff" }} />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <Formik
            initialValues={{
              firstname: "",
              lastname: "",
              email: "",
              password: "",
              confirmpassword: "",
            }}
            validationSchema={registerSchema}
            onSubmit={(values, actions) => {
              createUserWithEmailAndPassword(
                auth,
                values.email,
                values.password,
                values.firstname,
                values.lastname
              )
                .then((userCredential) => {
                  // Signed up
                  const user = userCredential.user;
                  user.displayName = values.firstname;
                  navigate("/");
                  // ...
                })
                .catch((error) => {
                  const errorCode = error.code;
                  const errorMessage = error.message;
                  // ..
                });
            }}
          >
            {(props) => (
              <Form>
                <Customeinput
                  id="firstname"
                  name="firstname"
                  label="First Name"
                  type="text"
                  placeholder="Enter Your First Name"
                />
                <Customeinput
                  name="lastname"
                  label="Last Name"
                  type="text"
                  placeholder="Enter Your Last Name"
                />
                <Customeinput
                  id="email"
                  name="email"
                  label="Email"
                  type="email"
                  placeholder="Enter Your Email Address"
                />
                <Customeinput
                  id="password"
                  name="password"
                  label="Password"
                  type="password"
                  placeholder="Enter Your Password"
                />
                <Customeinput
                  id="confirmpassword"
                  name="confirmpassword"
                  label="Confirm password"
                  type="password"
                  placeholder="Re Enter Your Password"
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, bgcolor: "#1f2937" }}
                >
                  Sign Up
                </Button>
              </Form>
            )}
          </Formik>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
