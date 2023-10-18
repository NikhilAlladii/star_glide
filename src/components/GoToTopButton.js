import React, { useState } from "react";
import "./GoToTopButton.css";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { Typography } from "@mui/material";

const GoToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <button
      className={`go-to-top-button ${isVisible ? "visible" : ""}`}
      onClick={scrollToTop}
    >
      <ArrowUpwardIcon fontSize="small"/>
      <Typography variant="caption"><b>Top</b></Typography>
    </button>
  );
};

export default GoToTopButton;
