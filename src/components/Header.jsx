import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@mui/material';
import { Home, AccountCircle } from '@mui/icons-material';

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          <img src="logo.png" alt="Logo" style={{ height: 40 }} />
        </Typography>
        <IconButton color="inherit">
          <Home />
        </IconButton>
        <IconButton color="inherit">
          <AccountCircle />
        </IconButton>
        <Button color="inherit">Logout</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
