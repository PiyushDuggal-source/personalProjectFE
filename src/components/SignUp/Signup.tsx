import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { BiErrorAlt } from "react-icons/bi";
import Typography from "@mui/material/Typography";
import { Alert } from "@mantine/core";
import Container from "@mui/material/Container";
import { useFormik } from "formik";
import { IconButton, MenuItem } from "@mui/material";
import { signUpInitialValues } from "../../ValidateSchema&InitialValues/initialValues";
import { validateSignUpSchema } from "../../ValidateSchema&InitialValues/validateSchemas";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import { createNewUser } from "../../services/auth.services";
import { omit } from "lodash";
import { useNavigate } from "react-router-dom";
import { LoginInfo } from "../../App";
import { motion } from "framer-motion";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link className="link" color="inherit" to="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function SignUp() {
  const login = React.useContext(LoginInfo);
  console.log(login);
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: signUpInitialValues,
    validationSchema: validateSignUpSchema,
    onSubmit: (values) => {
      createNewUser(omit(values, ["confirmPassword"])).then((response) => {
        const { created, error } = response.data;
        console.log(response);
        if (error) {
          setError(error);
        }
        console.log(created);
        if (created) {
          navigate("/");
        }
      });
    },
  });

  const [values, setValues] = useState(false);
  const handleClickShowPassword = () => {
    setValues(!values);
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const ggender = [{ value: "Male" }, { value: "Female" }, { value: "Others" }];
  const spring = {
    type: "spring",
    damping: 20,
    stiffness: 100,
  };
  return (
    <motion.div
      initial={{ scale: 0.5 }}
      transition={spring}
      animate={{ scale: 1 }}
    >
      <Container className="animate" component="main" maxWidth="xs">
        {error && (
          <Alert
            icon={<BiErrorAlt size={16} />}
            title="Bummer!"
            color="red"
            radius="md"
            variant="outline"
          >
            {error}
          </Alert>
        )}
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={formik.handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="userName"
                  required
                  fullWidth
                  id="userName"
                  label="User Name"
                  value={formik.values.userName}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.userName && Boolean(formik.errors.userName)
                  }
                  helperText={formik.touched.userName && formik.errors.userName}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.firstName && Boolean(formik.errors.firstName)
                  }
                  helperText={
                    formik.touched.firstName && formik.errors.firstName
                  }
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.lastName && Boolean(formik.errors.lastName)
                  }
                  helperText={formik.touched.lastName && formik.errors.lastName}
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
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </Grid>
              <Grid
                item
                xs={12}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <TextField
                  fullWidth
                  required
                  name="password"
                  id="password"
                  type={values ? "text" : "password"}
                  sx={{ marginRight: 2 }}
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  label="Password"
                />
                <TextField
                  fullWidth
                  required
                  name="confirmPassword"
                  id="confirmPassword"
                  type={values ? "text" : "password"}
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                  label="confirm Password"
                />
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </Grid>
              <Grid item>
                <TextField
                  required
                  sx={{ margin: 1, width: 400 }}
                  select
                  label="Gender"
                  fullWidth
                  name="gender"
                  id="gender"
                  value={formik.values.gender}
                  error={formik.touched.gender && Boolean(formik.errors.gender)}
                  helperText={formik.touched.gender && formik.errors.gender}
                  onChange={formik.handleChange}
                >
                  {ggender.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.value}
                    </MenuItem>
                  ))}
                </TextField>
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
                <Link className="link" to="/login">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </motion.div>
  );
}
