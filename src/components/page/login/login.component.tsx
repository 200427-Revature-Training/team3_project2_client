import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import  *  as LinkReact from 'react-router-dom';

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
 image : {
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


const LoginComponent:React.FC=()=>{
  const classes = useStyles();

  const initialState={
    email:"",
    password:"",
    emailError:"",
    passwordError:"",
    }

const [singinForm, setSigninForm]=useState(initialState); 

let { email,
      password,
      emailError,
      passwordError
    }= singinForm; 

/** change handler */
  const changeHandler=(e:any)=>{
    const target=e.target; 
    setSigninForm((prevState: any)=>({
      ...prevState, [target.name]:target.value
      }))
  }
/** submit handler */
const submitHandler =(e:any)=>{
  e.preventDefault(); 
  const isValidated = validate(); 
  console.log("isValidated", isValidated); 

  if(isValidated){
    console.log("SignupForm", singinForm); 
    /**  */

  }
}

/** Sign in Validation */
const validate =()=>{
  
  /* Email   */
  if(!email.includes("@") || !(email.length>10)){
    setSigninForm((previousState:any) => ({...previousState, emailError :"Please enter vaild Email! "})); 
    return false; 
  }else{
    setSigninForm((previousState:any) => ({...previousState, emailError :""}));
  }

  /* password  */
  if(!password){
    setSigninForm((previousState:any) => ({...previousState, passwordError:"Correct Password required"})); 
    return false; 
  }else {
    setSigninForm((previousState:any) => ({...previousState, passwordError:""})); 
  }

  return true; 
}


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
            Sign in
          </Typography>
          <form className={classes.form} noValidate  onSubmit={submitHandler}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={changeHandler}
            />
            <div style={{fontSize:12,color:"red"}} >{emailError}</div>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={changeHandler}
            />
            <div style={{fontSize:12,color:"red"}} >{passwordError}</div>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <LinkReact.Link to="/SignUp">
                  {"Don't have an account? Sign Up"}
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

export default LoginComponent; 
