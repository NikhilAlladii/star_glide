import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import "./IntrestList.css";

function IntrestList() {
  return (
    <Box sx={{ backgroundColor: "rgb(190, 211, 68)", padding: "7% 5%" }}>
      <Grid container>
        <Grid item md={12}>
          <Typography variant="caption" color="#ffffff">
            BE FIRST TO KNOW
          </Typography>
          <Typography variant="h3" color="#ffffff" padding="1.5rem 0rem">
            Join the <span style={{ color: "#545454" }}>interest list</span>
          </Typography>
        </Grid>
      </Grid>

      <Box className="intrest-list-box">
        <Box className="intrest-list-box-left">
          <Typography color="#545454">
            Join our neighborhood interest list to be among the first to receive
            neighborhood updates, available homes, pricing, upcoming events and
            more! This info will help guide you in your new home search, and
            trust us, you will love what’s ahead.
          </Typography>
        </Box>
        <Box className="intrest-button">
          <Typography variant="caption">JOIN THE INTEREST LIST</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default IntrestList;
