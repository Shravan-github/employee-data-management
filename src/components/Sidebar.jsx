import React from 'react';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <Drawer variant="permanent">
      <List>
        <ListItem  component={Link} to="/">
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/addEmployee">
          <ListItemText primary="Add Employee" />
        </ListItem>
        <ListItem button component={Link} to="/editEmployee">
          <ListItemText primary="Edit Employee" />
        </ListItem>
      </List>
    </Drawer>
  );
}

export default Sidebar;
