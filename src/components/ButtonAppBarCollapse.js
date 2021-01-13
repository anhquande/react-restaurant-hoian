import React from "react";
import {withStyles} from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";
import ListItem from '@material-ui/core/ListItem';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import PAGES from '../pages'

const styles = theme => ({
  buttonCollapse: {
    [theme.breakpoints.up("sm")]: {
      display: "none"
    },
    margin: "10px",
    boxShadow: "none"
  },
  list: {
    width: 200,
  },
  padding: {
    paddingRight: 30,
    cursor: "pointer",
  },

  sideBarIcon: {
    padding: 0,
    color: "white",
    cursor: "pointer",
  }

});

class ButtonAppBarCollapse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drawer: false,
    };
    this.sideList = this.sideList.bind(this);
    this.toggleDrawer = this.toggleDrawer.bind(this);
  }

  toggleDrawer = (close) => {
    this.setState({drawer: close});
  }

  sideList() {
    const {classes} = this.props;
    return (
      <div
        className={classes.list}
        role="presentation"
        onClick={() => this.toggleDrawer(false)}
        onKeyDown={() => this.toggleDrawer(false)}
      >
        <List>
          {PAGES.map((page) => (
            <ListItem button key={page.label}>
              {/*<ListItemIcon>{index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}</ListItemIcon>*/}
              <ListItemText primary={page.label}/>
            </ListItem>
          ))}
        </List>
      </div>
    );
  }

  render() {
    const {classes} = this.props;
    return (
      <div className={classes.buttonCollapse}>
        <IconButton onClick={() => {
          this.setState({drawer: true})
        }}>
          HOME
        </IconButton>
        <SwipeableDrawer
          open={this.state.drawer}
          onClose={() => this.toggleDrawer(false)}
          onOpen={() => this.toggleDrawer(true)}>
          {this.sideList()}
        </SwipeableDrawer>
      </div>
    );
  }
}

export default withStyles(styles)(ButtonAppBarCollapse);
