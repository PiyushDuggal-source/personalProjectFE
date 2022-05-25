import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useFormik } from "formik";
import { loginInitialValues } from "../../ValidateSchema&InitialValues/initialValues";
import { validateLoginSchema } from "../../ValidateSchema&InitialValues/validateSchemas";
import { login } from "../../services/auth.services";
import { Alert } from "@mantine/core";
import { BiErrorAlt } from "react-icons/bi";
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

export default function SignIn() {
  const [error, setError] = React.useState<string>();

  const formik = useFormik({
    initialValues: loginInitialValues,
    validationSchema: validateLoginSchema,

    onSubmit: async (data) => {
      try {
        const user = await login(data);
        if (user.data.error) {
          setError(user.data.error);
          return;
        }
        if (user.data.login) {
          window.location.href = "/";
        }
      } catch (error: any) {
        setError(error.response.data.error);
      }
    },
  });

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
      <Container component="main" maxWidth="xs">
        <CssBaseline />
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
            Sign in
          </Typography>
          <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              value={formik.values.email}
              onChange={formik.handleChange}
              helperText={formik.touched.email && formik.errors.email}
              error={formik.touched.email && Boolean(formik.errors.email)}
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              helperText={formik.touched.password && formik.errors.password}
              error={formik.touched.password && Boolean(formik.errors.password)}
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
            >
              Sign In
            </Button>
            <Grid container>
              {/* <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid> */}
              <Grid item>
                <Link to="/signup" className="link">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </motion.div>
  );
}
