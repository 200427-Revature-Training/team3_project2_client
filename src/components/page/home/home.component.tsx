import { Link, Redirect } from 'react-router-dom';
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


const HomeComponent: React.FC = () => {



  //console.log(tileData[0].img);
  const classes = useStyles();

  const [user, setUsers] = useState<User[]>([]);
  const [movementlist, setMovements] = useState<Movement[]>([]);


  var m: Movement[] = [{
    id: 0,
    goal: 1,
    current: 0,
    start: "0",
    description: "test",
    author: {
      id: 0,
      email: 'string',
      password: 'string',
      firstName: 'string',
      lastName: 'string',
      roleId: { id: 1, userRole: "2" }
    },
    approver: "User | string | number; ",
    status: { id: 1, movementStatus: "2" },
    type: { id: 1, movementType: "2" },
    image: './images/flood.jpg',
    name: 'name'

  }];



  if (movementlist.length == 0) {
    searchbarRemote.getAllMovements().then(movements => {
      setMovements(movements);
    });
  }
  useEffect(() => {

    render(movementlist);


  }, [])


  const render = (movement: Movement[]) => {
    if (movement[0] != undefined) {
      console.log(movement);

      console.log(movement[0].image);

      return (movement.map((tile) => (
        <GridListTile key={tile.id}>
          <img src={require(`${tile.image}`)} alt={tile.name} />
          <GridListTileBar
            title={tile.name}
            subtitle={<span>by: {tile.author.firstName}</span>}
            actionIcon={
              <IconButton onClick={() => { }} aria-label={`info about ${tile.name}`} className={classes.icon}>
                <Link to="/Movement" className="MovementButton"> View Page </Link>
                <InfoIcon />
              </IconButton>
            }
          />
        </GridListTile>
      )))
    }

  }





  return (

    <Grid container component="main" className={classes.root}>
      <div><React.Fragment>
        <h1>Welcome to Fund the Movement!</h1>
      </React.Fragment>
      </div>

      <div className={classes.root}>
        <GridList cellHeight={180} className={classes.gridList}>
          <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
            <ListSubheader component="div">Browse the Top Movements</ListSubheader>
          </GridListTile>
          {render(movementlist)}
        </GridList>
      </div>
    </Grid>
  );

}

export default HomeComponent;




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

