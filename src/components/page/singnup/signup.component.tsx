import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import *  as LinkReact from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import * as loginRemote from '../../remotes/login.remote';
import { User } from '../../models/User';
import { useHistory } from "react-router-dom";



function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Revature training
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


const SignupComponent: React.FC = () => {
  const history = useHistory();
  const classes = useStyles();
  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    verifyPassword: "",
    userRoleId: "",
    firstNameError: "",
    lastNameError: "",
    emailError: "",
    passwordError: "",
    verifyPasswordError: "",
    userRoleIdError: ""
  }

  const [singupForm, setSignupForm] = useState(initialState);

  let {
    firstName,
    lastName,
    email,
    password,
    verifyPassword,
    userRoleId,
    firstNameError,
    lastNameError,
    emailError,
    passwordError,
    verifyPasswordError,
    userRoleIdError } = singupForm;

  /** change handler */
  const changeHandler = (e: any) => {
    const target = e.target;
    setSignupForm((prevState: any) => ({
      ...prevState, [target.name]: target.value
    }))

  }

  const submitHandler = (e: any) => {
    e.preventDefault();
    const isValidated = validate();
    if (isValidated) {
      let role = 1;
      if(singupForm.userRoleId == 'user'){
        role = 1;
      }
      else if(singupForm.userRoleId == 'admin'){
        role = 2;
      }

      /** add remote*/
      const user: User = {
        id: 0,
        email: singupForm.email,
        password: singupForm.password,
        firstName: singupForm.firstName,
        lastName: singupForm.lastName,
        role: role

      }
      loginRemote.signup(user);
      //Add prop to home component to accept new user
      history.push("/");
    }
  }
  /** VALIDATE */

  const validate = () => {
    /** first name  */
    if (!firstName) {
      setSignupForm((previousState: any) => ({ ...previousState, firstNameError: "first name is required " }));
      return false;
    } else {
      setSignupForm((previousState: any) => ({ ...previousState, firstNameError: "" }));
    }
    /** last name  */
    if (!lastName) {
      setSignupForm((previousState: any) => ({ ...previousState, lastNameError: "last name is required " }));
      return false;
    } else {
      setSignupForm((previousState: any) => ({ ...previousState, lastNameError: "" }));
    }

    /* Email   */
    if (!email.includes("@") || !(email.length > 10)) {
      setSignupForm((previousState: any) => ({ ...previousState, emailError: " email is invalid, email:should be at least 10 characters and includes @ " }));
      return false;
    } else {
      setSignupForm((previousState: any) => ({ ...previousState, emailError: "" }));
    }

    /* password  */
    if (!(password.length >= 8)) {
      setSignupForm((previousState: any) => ({ ...previousState, passwordError: " password is required, should be at least 8 characters. " }));
      return false;
    } else {
      setSignupForm((previousState: any) => ({ ...previousState, passwordError: "" }));
    }

    /** verify password match  */
    if (verifyPassword !== password) {
      setSignupForm((previousState: any) => ({ ...previousState, verifyPasswordError: " verified password does not match your password! " }));
      return false;
    } else {
      setSignupForm((previousState: any) => ({ ...previousState, verifyPasswordError: "" }));
    }

    /** role id   */
    if (!userRoleId) {
      setSignupForm((previousState: any) => ({ ...previousState, userRoleIdError: " Role is required " }));
      return false;
    } else {
      setSignupForm((previousState: any) => ({ ...previousState, userRoleIdError: "" }));
    }

    /** add condition to verify password match. */

    return true;
  }

  /** sign up role:  */
  const signUpRole = ['admin', 'user'];

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
        </Typography>
          <form className={classes.form} noValidate >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  value={firstName}
                  onChange={changeHandler}
                  autoFocus
                />
                <div style={{ fontSize: 12, color: "red" }} >{firstNameError}</div>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  value={lastName}
                  onChange={changeHandler}
                  autoComplete="lname"
                />
                <div style={{ fontSize: 12, color: "red" }} >{lastNameError}</div>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  value={email}
                  onChange={changeHandler}
                  autoComplete="email"
                />
                <div style={{ fontSize: 12, color: "red" }} >{emailError}</div>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  value={password}
                  onChange={changeHandler}
                />
                <div style={{ fontSize: 12, color: "red" }} >{passwordError}</div>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="verifyPassword"
                  label="Verify password"
                  type="password"
                  id="verifyPassword"
                  value={verifyPassword}
                  onChange={changeHandler}
                />
                <div style={{ fontSize: 12, color: "red" }} >{verifyPasswordError}</div>
              </Grid>
              <Grid item xs={12}>
                <FormControl style={{ backgroundColor: 'white', width: 200, marginBottom: 20 }} >
                  <InputLabel id="demo-simple-select-label" ><b> role:</b></InputLabel>
                  <Select labelId="demo-simple-select-label" id="demo-simple-select" value={userRoleId} name="userRoleId"
                    onChange={changeHandler} > {signUpRole.map((signRoleValue) =>
                      (<MenuItem key={signRoleValue} value={signRoleValue}  >{signRoleValue} </MenuItem>))}

                  </Select>

                </FormControl>

                <div style={{ fontSize: 12, color: "red" }} >{userRoleIdError}</div>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={submitHandler}
            >
              Sign Up
          </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <LinkReact.Link to="/Login">
                  Already have an account? Sign in
              </LinkReact.Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}

export default SignupComponent; 