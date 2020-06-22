import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
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
  paper: {
    marginTop: theme.spacing(8),
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignupComponent:React.FC=()=>{
  const classes = useStyles();

  const initialState={
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    verifyPassword:"",
    userRoleId:"",
    firstNameError:"",
    lastNameError:"",
    emailError:"",
    passwordError:"",
    verifyPasswordError:"",
    userRoleIdError:""
}

const [singupForm, setSignupForm]=useState(initialState); 

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
      userRoleIdError}= singupForm;
      
  /** change handler */
  const changeHandler=(e:any)=>{
    const target=e.target; 
    setSignupForm((prevState: any)=>({
      ...prevState, [target.name]:target.value
      }))

   
  }

  const submitHandler=(e:any)=>{
    e.preventDefault();
  
    const validation =validate(); 
    if(validation){
      console.log("SignupForm", singupForm);

      /** add remote*/

    }
  
  }

  /** VALIDATE */
    
  const validate =()=>{
      /** first name  */
      if(!firstName){
        setSignupForm((previousState:any) => ({...previousState, firstNameError:"first name is required "})); 
        return false; 
      }else {
        setSignupForm((previousState:any) => ({...previousState, firstNameError:""})); 
      }
      /** last name  */
      if(!lastName){
        setSignupForm((previousState:any) => ({...previousState, lastNameError:"last name is required "})); 
        return false; 
      }else {
        setSignupForm((previousState:any) => ({...previousState, lastNameError:""}));
      }

      /* Email   */
      if(!email){
        setSignupForm((previousState:any) => ({...previousState, emailError :" email is required "})); 
        return false; 
      }else{
        setSignupForm((previousState:any) => ({...previousState, emailError :""}));
      }

      /* password  */
      if(!password){
        setSignupForm((previousState:any) => ({...previousState, passwordError:" password is required "})); 
        return false; 
      }else {
        setSignupForm((previousState:any) => ({...previousState, passwordError:""})); 
      }

      /** verify password  */
      if(!verifyPassword){
        setSignupForm((previousState:any) => ({...previousState, verifyPasswordError:" verified password is required "})); 
        return false; 
      }else{
        setSignupForm((previousState:any) => ({...previousState, verifyPasswordError:""})); 
      }
      /** verify password match  */
      if(verifyPassword!==password){
        setSignupForm((previousState:any) => ({...previousState, verifyPasswordError:" verified password does not match your password! "})); 
        return false; 
      }else{
        setSignupForm((previousState:any) => ({...previousState, verifyPasswordError:""})); 
      }

      /** role id   */
      if(!userRoleId){
        setSignupForm((previousState:any) => ({...previousState, userRoleIdError:" Role is required "})); 
        return false; 
      }else{
        setSignupForm((previousState:any) => ({...previousState, userRoleIdError:""})); 
      }
 
      /** add condition to verify password match. */

      return true; 
}

  /** sign up role:  */
  const signUpRole =['admin', 'user']; 

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate onSubmit={submitHandler}>
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
              <div style={{fontSize:12,color:"red"}} >{ firstNameError}</div>
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
              <div style={{fontSize:12,color:"red"}} >{ lastNameError}</div>
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
              <div style={{fontSize:12,color:"red"}} >{emailError}</div>
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
                <div style={{fontSize:12,color:"red"}} >{ passwordError}</div>
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
              <div style={{fontSize:12,color:"red"}} >{ verifyPasswordError}</div>
            </Grid>
            <Grid item xs={12}>
              <FormControl style={{backgroundColor:'white',width:200,marginBottom:20}} >
                <InputLabel id="demo-simple-select-label" ><b> role:</b></InputLabel>
                <Select labelId="demo-simple-select-label" id="demo-simple-select" value={userRoleId} name="userRoleId"
                  onChange={changeHandler} > {signUpRole.map((signRoleValue) => 
                (<MenuItem key={signRoleValue} value={signRoleValue}  >{signRoleValue} </MenuItem>))}
        
                </Select>
 
              </FormControl>
       
           <div style={{fontSize:12,color:"red"}} >{userRoleIdError}</div>
        </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}

export default SignupComponent; 