import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { kMaxLength } from 'buffer';
import { Paper } from '@material-ui/core';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles({
  root: {
    maxWidth: kMaxLength,
    backgroundColor: '#bdbdbd', 

  },
  p: {
    fontSize: '18px',
    fontStyle: "italic",
    fontWeight: "bold",
  },
  head: {
    fontSize: '24px',
  },
  paper: {
    backgroundColor: '#bdbdbd',
  }
});

export const AboutComponent: React.FC = () => {
  const classes = useStyles();

  return (
    <section>
        <Paper className={classes.paper}>
          <Box>
            <h1 className={classes.head}>Our Mission</h1>
          </Box>
          <Box mx={1} display="flex" justifyContent="flex-start">
            <p className={classes.p}>Our goal with this platform is simple: To help people help each other.</p>
          </Box>
          <Box mx={1}>
            <p className={classes.p}>Everyone can use a helping hand sometimes. We offer a platform making it easy to extend just that.</p>
          </Box>
          <Box mx={1} display="flex" justifyContent="flex-end">
            <p className={classes.p}>With the strong belief that we can always accomplish more, together.</p>
          </Box>
        </Paper>
        <Card className={classes.root}>
          <CardMedia
          component="img"
          alt="covid"
          height="500"
          image="https://revature-bootcamp.s3.us-east-2.amazonaws.com/Project+2/perry-grone-lbLgFFlADrY-unsplash.jpg"
          title="hands together, team"
          />
        </Card>
            
    </section>
  );
}
