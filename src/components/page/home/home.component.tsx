import { Link, Redirect, RouteComponentProps, withRouter, useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import tileData from './tileData';
import { Grid } from '@material-ui/core';
import * as searchbarRemote from '../../remotes/searchbar.remote';
import React, { useState, useEffect } from 'react';
import { User } from '../../models/User';
import { Movement } from '../../models/Movement';


const HomeComponent: React.FC<RouteComponentProps> = (props) => {



  //console.log(tileData[0].img);
  const classes = useStyles();

  const [user, setUsers] = useState<User[]>([]);
  const [movementlist, setMovements] = useState<Movement[]>([]);
  const [movementlist1, setMovements1] = useState<Movement[]>([]);
  const [movementlist2, setMovements2] = useState<Movement[]>([]);


  var m: Movement[] = props.location.state as Movement[];

  const history = useHistory();




  useEffect(() => {

    // render(movementlist2);

   // fresh();
    console.log("here");
   //setMovements(movementlist1.concat(movementlist2));
   

  }, [])

  const fresh = () => {

    if (movementlist.length == 0) {


      var m1: Movement[] = [];
      var m2: Movement[] = [];

   searchbarRemote.getMovementByStatus("Pending").then(movements => {
    setMovements1(movements);
        m1 = movements;
        searchbarRemote.getMovementByStatus("Authorized").then(movements => {

           setMovements2(movements);
           m2 =m1.concat(movements);
           setMovements(m2);

           console.log(m2);
          // console.log(m);

   
         });
      });
     

      //render(movementlist1.concat(movementlist2));
      //render(m);
    }
  
    return  render(movementlist);

  }



  const render = (movement: Movement[]) => {
    //console.log(movementlist);
   
    if (movement[0] != undefined) {

      // console.log(movement[0].image);
    //  console.log(movement);


      return (movement.map((tile) => (

        <GridListTile key={tile.id}>
          <img src={require(`${tile.image}`)} alt={tile.name} />
          <GridListTileBar
            title={tile.name}
            subtitle={<span>by: {(tile.author as User).firstName}</span>}
            actionIcon={
              <IconButton onClick={() => { goToMove(tile)}} aria-label={`info about ${tile.name}`} className={classes.icon}>
              
                <InfoIcon />
              </IconButton>
            }
          />
        </GridListTile>
      )))
    }

  }


  const goToMove = (movement: Movement) => {

    
        history.push("/Movement", movement);
      
      
    
  }




  return (

    <Grid container component="main" className={classes.root}>
    

      <div className={classes.root}>

        
        <GridList cellHeight={180} className={classes.gridList}>
          <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <div><React.Fragment>
        <h1>Welcome to Fund the Movement!</h1>
      </React.Fragment>
      </div>
            <ListSubheader component="div">Browse the Top Movements</ListSubheader>
          </GridListTile>
          
          {fresh()}
        </GridList>
      </div>
    </Grid>
  );

}

export default withRouter(HomeComponent);




const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: 'light-grey',
  },
  gridList: {
    width: 1100,
    height: 850,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

