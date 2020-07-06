import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Movement, Movement2 } from '../../models/Movement';
import { User } from '../../models/User';
import { Card, CardMedia, TextField, Button } from '@material-ui/core';
import * as adminRemote from '../../remotes/admin.remote';

// keeping old styles for old component just in case
// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     justifyContent: 'space-around',
//     overflow: 'hidden',
//     backgroundColor: theme.palette.background.paper,
//   },
//   gridList: {
//     width: 900,
//     height: 750,
//   },
//   icon: {
//     color: 'rgba(255, 255, 255, 0.54)',
//   },
// }));

const useStyles = makeStyles((theme) => ({
  root: {
    width: "50%"
  },
  image: {
    height: 300,
    width: "100%"
  },
  pic: {
    height: 300,
    width: "100%",
    objectFit: "cover",
  },
}));

const MovementComponent: React.FC<RouteComponentProps> = (props) => {
  //console.log(tileData[0].img); 
  const classes = useStyles();
  var tile: Movement2 = props.location.state as Movement2;
  const [currentAmount, setCurrentAmount] = useState(tile.current);
  const [donation, setDonation] = useState(0);

  useEffect(() => {
    
  }, [tile.current])
  
  const updateMovement = async () => {
    const startDate = new Date(tile.start);
    const payload = {
      id: tile.id,
      goal: tile.goal,
      current: tile.current,
      start: startDate,
      expire: tile.expire,
      description: tile.description,
      author: tile.author,
      approver: tile.approver,
      status: tile.status,
      type: tile.type,
      image: tile.image,
      name: tile.name
    };
    try {
      await adminRemote.changeStatus(payload);
      alert('change sent! return to home page!')
    } catch {
      alert('Invalid request data!')
    }
  }


  return (

    <div>
      <Card className={classes.image}>
        <CardMedia>
          <img className={classes.pic} src={require(`${tile.image}`)} alt={tile.name}/>
        </CardMedia>
      </Card>
      <form>
        <div>
          <TextField id="status" label="Movement Status" defaultValue={tile.status.movementStatus}
           InputProps={{readOnly : true}} variant="filled" />
           
          <TextField id="id" label="Movement Id" defaultValue={tile.id}
           InputProps={{readOnly : true}} variant="filled" />
        </div>
        <br/>
        <div>
          <TextField id="title" label="Movement Title" defaultValue={tile.name}
            InputProps={{readOnly : true}} variant="filled" />

          <TextField id="type" label="Movement Type" defaultValue={tile.type.movementType}
            InputProps={{readOnly : true}} variant="filled" />

          <TextField id="goal" label="Target Amount" defaultValue={tile.goal}
            InputProps={{readOnly : true}} variant="filled" />

          <TextField id="current" label="Current Amount" defaultValue={tile.current}
            InputProps={{readOnly : true}} variant="filled" />
        </div>
        <br/>
        <div>
          <TextField id="description" label="Movement Description" multiline defaultValue={tile.description}
           InputProps={{readOnly : true}} />
        </div>
        <br/>
        <div>
          <TextField id="startDate" label="Movement Start Date" defaultValue={tile.start}
           InputProps={{readOnly : true}} variant="filled" />

          <TextField id="expireDate" label="Movement Expiration Date" defaultValue={tile.expire}
           InputProps={{readOnly : true}} variant="filled" />
        </div>
        <br/>
        <div>
          Enter amount here then click "Donate" button to donate now!
        </div>
        <div>
          <TextField id="donate" label="Enter Donation Amount" variant="filled" 
           type="number" onChange={(e) => setDonation(+e.target.value)} />
        </div>
        <br/>
        <div>
          <TextField id="author" label="Movement Author" defaultValue={tile.author.firstName}
           InputProps={{readOnly : true}} variant="filled" />

          <TextField id="approver" label="Movement Approver" defaultValue={tile.approver?.firstName}
           InputProps={{readOnly : true}} variant="filled" />
        </div>
        <br/>
      </form>
      <Button variant="contained" color="primary" onClick={() => {
        tile.current += donation;
        updateMovement();
      }} >Donate</Button>
    </div>

    //Old code just returns one image tile of movement
    // <div className={classes.root}>
    //   <GridList cellHeight={180} className={classes.gridList}>
    //     <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
    //       <ListSubheader component="div">Movement Page: Test Page</ListSubheader>
    //     </GridListTile>
    //     {

    //       <GridListTile key={tile.id}>
    //         <img src={require(`${tile.image}`)} alt={tile.name} />
    //         <GridListTileBar
    //           title={tile.name}
    //           subtitle={<span>by: {(tile.author as User).firstName}</span>}
              
    //         />
    //       </GridListTile>
    //     }
    //   </GridList>
    // </div>
  );

}
export default withRouter(MovementComponent);
