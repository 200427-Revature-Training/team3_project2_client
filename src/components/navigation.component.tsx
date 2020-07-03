import React from 'react';
import { Link } from 'react-router-dom';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import './navigation.component.css';

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
            Fund the Movement  
            <Button color="primary"> <Link to="/" className="HomeButton"> Home </Link> </Button>
            <Button color="primary" > <Link to="/Help"  className="HelpButton"> Help </Link> </Button>
          </Typography>
          <Button color="primary" > <Link to="/Login" className="SingInButton"> Sign-in |</Link> </Button>
          <Button color="primary"> <Link to="/SignUp" className="SingUpButton"> Sing-up </Link> </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavigationComponent; 
