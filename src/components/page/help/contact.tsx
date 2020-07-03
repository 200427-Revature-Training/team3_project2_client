
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { kMaxLength } from 'buffer';
import { Divider } from '@material-ui/core';


const useStyles = makeStyles({
  root: {
    maxWidth: kMaxLength,
    backgroundColor: '#bdbdbd', 
    marginTop: "1rem",
  },
  content: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cards: {
    width: "50%",
  },
  subheader: {
    fontSize: 19,
  }
});

export const ContactComponent: React.FC = () => {
  const classes = useStyles();

  return (
    <section>
        <Card className={classes.root}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
            Contact Us
            </Typography>
            <br/>
            <Typography className={classes.content} variant="body2" color="textSecondary" component="p">
              <div className={classes.cards}>
                <Typography className={classes.subheader} variant="h5" >
                  Email
                </Typography>
                <Divider/>
                <Typography>
                  fundthemovement@fakemail.com
                  <br/>
                  24/7
                </Typography>
              </div>
              <div className={classes.cards}>
                <Typography className={classes.subheader} variant="h5">
                  Phone Number
                </Typography>
                <Divider/>
                <Typography>
                  (325)368-6237
                  <br/>
                  Mon-Fri, 9am-5pmET
                </Typography>
              </div>
            </Typography>
          </CardContent>
          <CardMedia
          component="img"
          alt="covid"
          height="300"
          image="https://revature-bootcamp.s3.us-east-2.amazonaws.com/Project+2/kelly-sikkema-fvpgfw3IF1w-unsplash.jpg"
          title="thank you"
          />
        </Card>
    </section>
  );
}

