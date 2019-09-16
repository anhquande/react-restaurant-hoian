import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import AppBarCollapse from './AppBarCollapse';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  navigation: {},
  toggleDrawer: {},
  appTitle: {}
}));

export const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.navigation}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Menu"
            className={classes.toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="title"
            color="inherit"
            className={classes.appTitle}
          >
            Restaurant Hoi An
          </Typography>
          <AppBarCollapse />
        </Toolbar>
      </AppBar>
    </div>
  );
}
