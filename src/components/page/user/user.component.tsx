import { Link, Redirect, RouteComponentProps, withRouter, useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import { Grid } from '@material-ui/core';
import * as userRemote from '../../remotes/user.remote';
import React, { useState, useEffect } from 'react';
import { User, User2 } from '../../models/User';
import { Movement } from '../../models/Movement';



const UserComponent: React.FC<RouteComponentProps> = (props) => {

    const history = useHistory();
    const classes = useStyles();
    var userMove : User2 = props.location.state as User2;
    const [movementlist, setMovements] = useState<Movement[]>([]);

   //console.log(userMove);
   const fresh = () => {

    if (movementlist.length == 0) { 

      userRemote.getMovementByUser(userMove.id as number).then(movements => {
    setMovements(movements);
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
      <div><React.Fragment>
        <h1>My Movements</h1>
      </React.Fragment>
      </div>

      <div className={classes.root}>
        <GridList cellHeight={180} className={classes.gridList}>
          <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
            <ListSubheader component="div">Browse the Top Movements</ListSubheader>
          </GridListTile>
          {fresh()}
        </GridList>
      </div>
    </Grid>
  );

}





   


export default withRouter(UserComponent); 


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