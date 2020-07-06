import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import tileData from '../home/tileData';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Movement } from '../../models/Movement';
import { User } from '../../models/User';

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

const MovementComponent: React.FC<RouteComponentProps> = (props) => {
  //console.log(tileData[0].img); 
  const classes = useStyles();
  var tile: Movement = props.location.state as Movement;
  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">Movement Page: Test Page</ListSubheader>
        </GridListTile>
        {

          <GridListTile key={tile.id}>
            <img src={require(`${'../home/images/flood.jpg'}`)} alt={tile.name} />
            <GridListTileBar
              title={tile.name}
              subtitle={<span>by: {(tile.author as User).firstName}</span>}
              
            />
          </GridListTile>
        }
      </GridList>
    </div>
  );

}
export default withRouter(MovementComponent);
