import { Card, IconButton } from "@mui/material";
import React from "react";
import icon from "./../../images/coming-soon.png";
import "./home.css";

const Home: React.FC = () => {
  return (
    <Card variant="outlined" className="card-containers">
      <IconButton
        edge="start"
        color="inherit"
        aria-label="icon"
        className="home-icon"
      >
        <img src={icon}></img>
      </IconButton>
    </Card>
  );
};

export default Home;
