import React from 'react';

import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'
import { Drawer, CssBaseline, Toolbar, List, ListItem, ListItemText } from '@material-ui/core'
import { useState } from 'react';
import { AboutComponent } from './about';
import { UsingFundAll } from './using.fundall';
import { ManagingYourAccount } from './mng.account';
import { FAQsComponent } from './faq';
import { RulesAndPolicies } from './rules.policies';
import { ContactComponent } from './contact';
 
const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
      marginTop: 64,
      backgroundColor: '#bdbdbd',
    },
    drawerContainer: {
      overflow: 'auto',

    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    title: {
        flexGrow: 1,
    }
  }),
);

export const ClippedDrawer = () => {
  const classes = useStyles();

  const [mainSection, setMainSection] = useState(<AboutComponent />);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            {['About', 'Using Fund All', 'Managing Your Account', 'FAQs', 'Rules & Policies', 'Contact Us'].map((text, index) => (
              <ListItem button key={text} 
              onClick={() => {switch(index){
                case 0:
                    setMainSection(<AboutComponent />);
                    break;
                case 1:
                    setMainSection(<UsingFundAll />);
                    break;
                case 2:
                    setMainSection(<ManagingYourAccount />);
                    break;
                case 3:
                    setMainSection(<FAQsComponent />);
                    break;
                case 4:
                    setMainSection(<RulesAndPolicies />);
                    break;
                case 5:
                    setMainSection(<ContactComponent />);
                    break;
              }}}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        {mainSection}
      </main>
    </div>
  );
}