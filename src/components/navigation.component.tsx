import React from 'react';
import { Link } from 'react-router-dom';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { colors } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

const NavigationComponent:React.FC=()=>{
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            GOFundMe 
            <Button color="primary"> <Link to="/"> Home </Link> </Button>
            <Button color="primary" > <Link to="/Help"> Help </Link> </Button>
          </Typography>
          <Button color="primary" > <Link to="/Login"> Sign-in |</Link> </Button>
          <Button color="primary"> <Link to="/SignUp"> Sing-up </Link> </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavigationComponent; 

/*
const NavigationComponent:React.FC=()=>{
    
    return (
        <div> 
            <div> this is navation : </div>
            <Link to="/"> </Link>
             <Link to="/SignUp"> SignUp</Link>
             <Link to="/Login"> Login</Link>
             <Link to="/Help"> help</Link>
        </div>
       
    )
}


*/