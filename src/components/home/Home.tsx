import { Card, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import icon from "./coming-soon_046013-removebg-preview.png";

import "./home.css";
const Home: React.FC = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2025-06-01").getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Card variant="outlined" className="card-containers">
      <IconButton
        edge="start"
        color="inherit"
        aria-label="icon"
        className="img-icon"
      >
        <img src={icon}></img>
      </IconButton>
    </Card>
  );
};

export default Home;
