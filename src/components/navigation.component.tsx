import * as userRemote from './remotes/user.remote';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createStyles, makeStyles, Theme, fade } from '@material-ui/core/styles';
import { Modal, Form } from 'react-bootstrap';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import './navigation.component.css';
import { Movement } from './models/Movement';


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
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }),
);

const NavigationComponent: React.FC = () => {
  //Needs a user to detect if logged in and to make movement with
  const classes = useStyles();
  let loggedin = true;
  const [modalVisible, setModalVisible] = useState(false);
  const [moveName, setMoveName] = useState('');
  const [moveGoal, setMoveGoal] = useState(0);
  const [moveDescription, setMoveDescription] = useState('');
  const [moveType, setMoveType] = useState('');
  const [moveImage, setMoveImage] = useState('');


  const renderMovementForm = () => {
    if (loggedin == true) {
      return (<Button color="default" className="NewMovementButton" onClick={() => setModalVisible(true)}> New Movement </Button>)
    }
  }


  const saveMovement = () => {
    var typeid = 0;
    switch (moveType) {
      case "Educational": {
        typeid = 1;
        break;
      }
      case "Memorial": {
        typeid = 2;
        break;
      }
      case "Emergency": {
        typeid = 3;
        break;
      }
      case "Celebration": {
        typeid = 4;
        break;
      }
      case "Self-Centered": {
        typeid = 5;
        break;
      }
      case "Other": {
        typeid = 6;
        break;
      }
      default: {
        typeid = 6;
        break;
      }
    }

    let m: Movement = {
      
      id: 0,
      goal: moveGoal,
      current: 0,
      start: new Date().toISOString(),
      description: moveDescription,
      author: 1,
      status: 1,
      type: typeid,
      image: './images/flood.jpg',
      name: moveName     
    
    };

    console.log(m);
    if(moveName != ""){
    userRemote.makeNewMovement(m);
    }
    setModalVisible(false)
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Fund the Movement
            <Button color="primary"> <Link to="/" className="HomeButton"> Home </Link> </Button>
            <Button color="primary"> <Link to="/Movement" className="MovementButton"> Movement </Link> </Button>
            <Button color="primary"> <Link to="/Help" className="HelpButton"> Help </Link> </Button>
          </Typography>

          {renderMovementForm()}
          <div>
            <Modal show={modalVisible} onHide={() => setModalVisible(false)}>
              <Modal.Header>
                <Modal.Title>New Ticket</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group>
                    <Form.Label>Movement Name:</Form.Label>
                    <Form.Control type="text" value={moveName} onChange={(e) => setMoveName(e.target.value)} />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Goal:</Form.Label>
                    <Form.Control type="text" value={moveGoal} onChange={(e) => setMoveGoal(parseInt(e.target.value))} />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Type:</Form.Label>
                    <Form.Control as="select" value={moveType} onChange={(e) => setMoveType(e.target.value)} >
                      <option>Educational</option>
                      <option>Memorial</option>
                      <option>Emergency</option>
                      <option>Celebration</option>
                      <option>Self-Centered</option>
                      <option>Other</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Image:</Form.Label>
                    <Form.Control as="select" value={moveImage} onChange={(e) => setMoveImage(e.target.value)} >
                      <option>Flood</option>
                      <option>Fire</option>
                      <option>Covid</option>
                      <option>Puppies</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Description:</Form.Label>
                    <Form.Control as="textarea" rows={3} value={moveDescription} onChange={(e) => setMoveDescription(e.target.value)} />
                  </Form.Group>

                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={() => setModalVisible(false)}>Close</Button>
                <Button onClick={() => saveMovement()}>Submit</Button>
              </Modal.Footer>
            </Modal>
          </div>


          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <Button color="primary" > <Link to="/Login" className="SingInButton"> Sign-in </Link> </Button>
          <Button color="primary"> <Link to="/SignUp" className="SingUpButton"> Sign-up </Link> </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavigationComponent; 
