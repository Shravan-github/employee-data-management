import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

function Footer() {
  return (
    <AppBar position="static" style={{ marginLeft:'calc(64px + 1px)' }}>
      <Toolbar>
        <Typography variant="body1" color="inherit">
        Copyright © 2024 , designed & developed by Shravan Sunkari
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Footer;

