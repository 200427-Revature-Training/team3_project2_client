import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { kMaxLength } from 'buffer';


const useStyles = makeStyles({
  root: {
    maxWidth: kMaxLength,
    backgroundColor: '#f44336', 

  },
});

export const AboutComponent: React.FC = () => {
  const classes = useStyles();

  return (
    <section>
        <div> About US </div>
        <Card className={classes.root}>
        <CardActionArea>
            <CardMedia
            component="img"
            alt="covid"
            height="500"
            image={require("../../../images/fire.jpg")}
            title="covid"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                About US 
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            How GoFundMe Works
    GoFundMe is the best place to fundraise, whether you are an individual, group, or organization.
    How GoFundMe Works
    GoFundMe is the best place to fundraise, whether you are an individual, group, or organization.
    How GoFundMe Works
    GoFundMe is the best place to fundraise, whether you are an individual, group, or organization.
    How GoFundMe Works
    GoFundMe is the best place to fundraise, whether you are an individual, group, or organization.How GoFundMe Works
    GoFundMe is the best place to fundraise, whether you are an individual, group, or organization.
            </Typography>
            </CardContent>
        </CardActionArea>
        </Card>
            
    </section>
  );
}
