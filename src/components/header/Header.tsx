import HomeIcon from "@mui/icons-material/Home";

import ContactIcon from "@mui/icons-material/Call";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import "./header.css";
import icon from "./icon.jpeg";
const Header: React.FC = () => {
  return (
    <AppBar position="static" className="site-header">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="icon"
          className="img-icon"
        >
          <a href="/">
            <img src={icon} style={{ width: "100px", height: "100px" }}></img>
          </a>
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}></Typography>
        <IconButton
          edge="end"
          color="inherit"
          aria-label="home"
          className="home-icon"
        >
          <a href="/">
            <HomeIcon />
          </a>
        </IconButton>
        &nbsp;&nbsp; &nbsp;&nbsp;
        <IconButton
          edge="end"
          color="inherit"
          aria-label="home"
          className="home-icon"
        >
          <a href="/contact-us">
            <ContactIcon />
          </a>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
