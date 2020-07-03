import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Toolbar } from '@material-ui/core';
import { Card, CardContent, Typography, CardMedia, List, ListItem } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        marginTop: "1rem",
        backgroundColor: '#bdbdbd',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        width: "400px"
    },
    image: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        width: "100%",
        height: "100%",
    },
    cover: {
        width: "500px",
        height: "584px",
        float: "right",
    },
  });

export const UsingFundAll: React.FC = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            Using Fund the Movement
          </Typography>
          <br/>
          <Typography variant="body1" color="textSecondary">
            Fund the Movement serves the purpose of making it easy to help others. So it only makes sense for it to come with a smooth,
            easy to use, interface. There are a few main functionalities you should be aware of.
            <List>
                <ListItem>
                    It's our hope that this platform can help it's users move towards a positive change, whatever it may be. 
                    We use Movements to accomplish this!
                </ListItem>
                <ListItem>
                    You can create a Movement from your profile page at any moment! Simply click the "New Movement" button 
                    and then fill in the necessary fields
                </ListItem>
                <ListItem>
                    Donating is just as easy as creating a movement of your own! Click the "Donate" button on any movement 
                    you'd like to contribute too and follow the prompt!
                </ListItem>
            </List>
          </Typography>
        </CardContent>
      </div>
      <div className={classes.image}>
        <CardMedia
            className={classes.cover}
            image="https://revature-bootcamp.s3.us-east-2.amazonaws.com/Project+2/shane-rounce-DNkoNXQti3c-unsplash.jpg"
            title="hands together on tree"
        />
      </div>
    </Card>
  );
}