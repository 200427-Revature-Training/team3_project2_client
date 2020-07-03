import React from 'react';
import { makeStyles, Card, Divider, CardContent, CardMedia, Typography, List, ListItem, Toolbar } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        marginTop: "1rem",
        backgroundColor: '#bdbdbd',
    },
    subheader: {
        fontSize: 18,
    },
    li: {
        fontSize: 15,
    }
})

export const ManagingYourAccount: React.FC = () => {
    const classes = useStyles();

    return(
        <Card className={classes.root}>
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                Managing Your Account
            </Typography>
            <Typography className={classes.subheader} variant="body2" color="textSecondary" component="p">
                Our goal is to make helping one another as easy as possible for our users. So we keep the functions 
                of this app as simple as possible. Here are a few tips and tricks to make sure you have the best user experience.
                <br/>
                <br/>
                <List>
                    <Divider/>
                    <ListItem className={classes.li}>
                        Keep an accurate and up to date email address associated with your account. 
                        This will be used if your password is forgotten.
                    </ListItem>
                    <Divider/>
                    <ListItem className={classes.li}>
                        You can select any one of our provided images to use as a profile picture on your account. 
                        Don't worry, ability to upload your own will be added in the near future!
                    </ListItem>
                    <Divider/>
                    <ListItem className={classes.li}>
                        You can toggle certain pieces of information that you do or do not wish to display on your account. 
                        This can easily be done just by clicking the button displayed on your profile next to some of your 
                        personal information.
                    </ListItem>
                </List>
            </Typography>
            </CardContent>
        <CardMedia
        component="img"
        alt="make a change"
        height="500"
        image="https://revature-bootcamp.s3.us-east-2.amazonaws.com/Project+2/kat-yukawa-K0E6E0a0R3A-unsplash.jpg"
        title="hands holding coins, 'make a change'"
        />
        </Card>
    );
}