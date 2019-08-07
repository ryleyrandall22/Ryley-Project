import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import { Route, Link } from "react-router-dom";
import { auth } from "./firebase";
import { Todo } from "./Components/Todo";

export function App(props) {
  const [drawer, setDrawer] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(u => {
      if (!u) {
        props.history.push("/");
      } else {
        setUser(u);
      }
    });
  });

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        console.log("User was Signed Out");
      })
      .catch(err => {
        console.log(err);
      });
  };

  if (!user) {
    return <div />;
  }

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            style={{ marginRight: 12 }}
            onClick={() => setDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1, color: "inherit" }}>
            Ryley's App
          </Typography>
          <Typography style={{ color: "inherit", marginRight: 10 }}>
            Hi! {user.email}
          </Typography>
          <Button onClick={handleSignOut} color="inherit">
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <Todo />

      <Drawer open={drawer} onClose={() => setDrawer(false)}>
        <div>
          <List>
            <ListItem button>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={"Here is Text"} />
            </ListItem>
          </List>
        </div>
      </Drawer>
    </div>
  );
}
