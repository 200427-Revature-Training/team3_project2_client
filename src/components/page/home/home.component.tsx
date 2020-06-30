import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import tileData from './tileData';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 900,
    height: 750,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

  const HomeComponent:React.FC=()=> {
    console.log(tileData[0].img); 
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <title> <h1>Welcome To Fund the Movement</h1> </title>
      <GridList cellHeight={180} className={classes.gridList}>
          <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">Browse the Top Movements</ListSubheader>
        </GridListTile>
        {tileData.map((tile) => (
          <GridListTile key={tile.id}>
            <img src={require(`${tile.img}`)} alt={tile.title} />
           <GridListTileBar
              title={tile.title}
              subtitle={<span>by: {tile.author}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );

}

export default HomeComponent;

