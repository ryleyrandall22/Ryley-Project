import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";

export function Todo(props) {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Paper
        style={{ width: "100%", maxWidth: 600, marginTop: 30, padding: 10 }}
      >
        <Typography variant="h5">Todo List</Typography>
        <div style={{ display: "flex", margin: 25, alignItems: "center" }}>
          <TextField
            label="New Todo"
            style={{ flexGrow: 1, marginRight: 10 }}
          />
          <div>
            <Button color="primary" variant="contained">
              Add
            </Button>
          </div>
        </div>
        <div style={{ marginTop: 10 }}>
          <List>
            <ListItem key={1} dense>
              <ListItemIcon>
                <Checkbox />
              </ListItemIcon>
              <ListItemText primary={"Finish my report"} />
              <ListItemSecondaryAction>
                <IconButton>
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
            <ListItem key={2}>
              <ListItemIcon>
                <Checkbox />
              </ListItemIcon>
              <ListItemText primary={"Complete United Way Deck"} />
              <ListItemSecondaryAction>
                <IconButton>
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          </List>
        </div>
      </Paper>
    </div>
  );
}
