/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Form, Formik } from "formik";
import { auth } from "../../firebase/config.js";
import Customeinput from "../forms/Customeinput.jsx";

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

export default function SignInForm({ handleClose }) {
  const navigate = useNavigate();

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container  component="main" minWidth="xl">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "#1f2937" }}>
            <LockOutlinedIcon  sx={{color:"#fff"}}/>
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            onSubmit={(values, actions) => {
              signInWithEmailAndPassword(auth, values.email, values.password)
                .then((userCredential) => {
                  // Signed in
                  const user = userCredential.user;
                  navigate("/");

                  // ...
                })
                .catch((error) => {
                  const errorCode = error.code;
                  const errorMessage = error.message;
                });
            }}
          >
            {(props) => (
              <Form>
                <Customeinput
                  id="email"
                  label="Email Address"
                  name="email"
                  type="email"
                />

                <Customeinput
                  id="password"
                  label="Password"
                  name="password"
                  type="password"
                />

                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 ,bgcolor:"#1f2937"}}
                >
                  Sign In
                </Button>
              </Form>
            )}
          </Formik>
          <Link
            onClick={() => handleClose()}
            style={{ textDecoration: "none", color: "#1f2937" }}
            to="/register"
            variant="body2"
          >
            {"Don't have an account? Sign Up"}
          </Link>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
