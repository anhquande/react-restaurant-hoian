/**
 * Code from the below medium post, only updated for latest material UI, using a
 * Menu for the popup and with breakpoints that work.
 *
 * https://medium.com/@habibmahbub/create-appbar-material-ui-responsive-like-bootstrap-1a65e8286d6f
 */
import React from "react";
import { Button, MenuItem } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import ButtonAppBarCollapse from "./ButtonAppBarCollapse";
import Link from '@material-ui/core/Link';
import PAGES from '../pages'
const styles = theme => ({
  root: {
    position: "absolute",
    right: 0
  },
  buttonBar: {
    [theme.breakpoints.down("xs")]: {
      display: "none"
    },
    margin: "10px",
    paddingLeft: "16px",
    right: 0,
    position: "relative",
    width: "100%",
    background: "transparent"
  }
});

const AppBarCollapse = props => (
  <div className={props.classes.root}>
    <ButtonAppBarCollapse/>
    <div className={props.classes.buttonBar} id="appbar-collapse">
      {PAGES.map(page=>{
        if (page.navigationOptions.topbar){
          return (
            <Button href={page.path}>{page.label}</Button>
          )
        }
      })}
    </div>
  </div>
);

export default withStyles(styles)(AppBarCollapse);
