import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { List, ListItem, Divider } from '@material-ui/core';
import { kMaxLength } from 'buffer';


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
      width: "500px"
  },
  image: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-end",
      width: "475px",
      height: "100%",
  },
  cover: {
      width: "500px",
      height: "591px",
      float: "right",
  },
});

export const FAQsComponent: React.FC = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            FAQs
          </Typography>
          <br/>
          <Typography variant="body1" color="textSecondary">
            <List>
                <Divider/>
                <br/>
                <Typography component="h6">What is Fund the Movement?</Typography>
                <ListItem>
                      Fund the Movement is a free online fundraising platform that allows users browse and donate to 
                      movements. Registered users can do the same and also create crowdfunding movements of their own.
                </ListItem>
                <Divider/>
                <br/>
                <Typography component="h6">What's a Movement?</Typography>
                <ListItem>
                      A movement is your own personal fundraiser. You can create one for any specific cause and set 
                      your goal funding amount.
                </ListItem>
                <Divider/>
                <br/>
                <Typography component="h6">How do I interact with Movements?</Typography>
                <ListItem>
                  There are two basic functionalities for interacting with movements. You can donate to a movement, 
                  upvote a movement, or both! We're currently working on adding features such as sharing Movements to 
                  other social media platforms, so stay tuned!
                </ListItem>
            </List>
          </Typography>
        </CardContent>
      </div>
      <div className={classes.image}>
        <CardMedia
            className={classes.cover}
            image="https://revature-bootcamp.s3.us-east-2.amazonaws.com/Project+2/youssef-naddam-iJ2IG8ckCpA-unsplash.jpg"
            title="hands reaching for each other, blue sky background"
        />
      </div>
    </Card>
  );
}
