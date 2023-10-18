import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import "./PathHome.css";

function PathHome() {
  return (
    <Box sx={{ margin: "3.25rem 2rem" }}>
      <Grid container color="#848484" sx={{ paddingBottom: "3rem" }}>
        <Grid item md={5}>
          <Typography variant="caption">TAKE THE NEXT STEP</Typography>
          <Typography variant="h3">
            The path <span style={{ color: "rgb(190, 211, 68)" }}>home</span>
          </Typography>
        </Grid>
        <Grid item md={7}>
          <Typography>
            If you are you serious about becoming a Tri Pointe Homes homeowner,
            and we think that you are, getting pre-qualified and joining the
            interest list will put you one step closer to homeownership.
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2} color="#848484">
        <Grid item md={4}>
          <img
            src="https://www.tripointehomes.com/wp-content/uploads/2021/01/TPH-step1-neighborhood.jpg"
            alt="home"
            className="path-image"
          />
          <Typography variant="h6" className="path-title">
            1. Join the interest list
          </Typography>
          <Typography>
            If you haven’t already done so, be sure to sign up on our Interest
            List. You will be notified on any community updates and important
            information.
          </Typography>
        </Grid>
        <Grid item md={4}>
          <img
            src="https://www.tripointehomes.com/wp-content/uploads/2021/01/tph-prequal440.jpg"
            alt="home"
            className="path-image"
          />
          <Typography variant="h6" className="path-title">
            2. Look out for updates
          </Typography>
          <Typography>
            New information comes out frequently as we get closer to the grand
            opening of our community. Make sure to keep a lookout for updates
            regarding the priority group process.
          </Typography>
        </Grid>
        <Grid item md={4}>
          <img
            src="https://www.tripointehomes.com/wp-content/uploads/2021/01/TPH-step3-neighborhood.jpg"
            alt="home"
            className="path-image"
          />
          <Typography variant="h6" className="path-title">
            3. Join the priority group
          </Typography>
          <Typography>
            We will notify you via email when the priority group process will
            start. You may not join the priority group or get pre-qualified
            early.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default PathHome;
