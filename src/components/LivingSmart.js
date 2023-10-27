import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import "./LivingSmart.css";
import theme from "../theme/theme";

function LivingSmart() {
  return (
    <Box>
      <Grid container>
        <Grid item md={5} className="center-box">
          <Typography color="rgb(132, 132, 132)" variant="h3">
            LivingSmart&nbsp;
            <span style={{ color: "rgb(190, 211, 68)" }}>
              at Whispering Hills
            </span>
          </Typography>
          <Typography variant="h6" margin="0.5rem 0rem">
            LIVINGSMART®
          </Typography>
          <Typography variant="body1" color="rgb(132, 132, 132)">
            LivingSmart® in its entirety is all about health and well-being for
            you and your family, as well as the planet. It’s the ultimate
            win-win that improves everyday life for years to come, constantly
            evolving as we all become smarter together.
          </Typography>
          <Typography variant="body2" className="learn-more-button">
            LEARN MORE
          </Typography>
        </Grid>
        <Grid item md={7}>
          <img
            src="https://www.tripointehomes.com/wp-content/uploads/2020/12/livingsmart-neighborhood.jpg"
            alt="home"
            className="image-container"
          />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item md={7}>
          <img
            src="https://www.tripointehomes.com/wp-content/uploads/tri-pointe-homes-leading-edge-design-video-cover.jpg"
            alt="home"
            className="image-container"
          />
        </Grid>
        <Grid item md={5} className="center-box">
          <Typography color="rgb(132, 132, 132)" variant="h3">
            Life-Changing Design
          </Typography>

          <Typography variant="body1" color="rgb(132, 132, 132)" marginTop={2}>
            At Tri Pointe Homes, we believe people and places should grow
            together. Our passion for innovation is based on an unwavering
            commitment to leading-edge design to help homebuyers create not only
            a better living environment but also maintain an active lifestyle in
            the vibrant communities we build. We invite you to discover our
            innovative, design-forward homes.
          </Typography>
          <Typography variant="body2" className="learn-more-button">
            WATCH THE VIDEO
          </Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item md={7}>
          <img
            src="https://www.tripointehomes.com/wp-content/uploads/School-Raising-Hands-640.jpg"
            alt="home"
            className="image-container"
          />
        </Grid>
        <Grid item md={5} className="center-box">
          <Typography color="rgb(132, 132, 132)" variant="h3">
            Whispering Hills{" "}
            <span style={{ color: "rgb(190, 211, 68)" }}>Schools</span>
          </Typography>

          <Typography paddingTop={1}>
            <b>Laveen School District</b>
          </Typography>
          <Typography>Laveen Elementary</Typography>
          <Typography>Cheatham Elementary School</Typography>
          <Typography>
            <b>Phoenix Union High School District</b>
          </Typography>
          <Typography>Cesar Chavez High School</Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item md={5} className="center-box">
          <Typography color="rgb(132, 132, 132)" variant="h3">
            Tax&
            <span style={{ color: "rgb(190, 211, 68)" }}>HOA</span>
          </Typography>
          <Typography variant="h6" color={theme.palette.secondary.main} margin="0.5rem 0rem">
            Homeowners Association Dues $150/ mo Tax Rate 1%
          </Typography>
          <Typography variant="caption" color="rgb(132, 132, 132)">
            *All calculations are estimates and provided for informational
            purposes only. Actual amounts may vary.
          </Typography>
        </Grid>
        <Grid item md={7}>
          <img
            src="https://www.tripointehomes.com/wp-content/uploads/South-Mountain-Web-640-Bikes.jpg"
            alt="home"
            className="image-container"
          />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item md={7}>
          <img
            src="https://www.tripointehomes.com/wp-content/uploads/Park-Girl-Dog-Web-640.jpg"
            alt="home"
            className="image-container"
          />
        </Grid>
        <Grid item md={5} className="center-box">
          <Typography color="rgb(190, 211, 68)" variant="h3">
            Whispering Hills
            <span style={{ color: "rgb(132, 132, 132)" }}> Amenities</span>
          </Typography>

          <Typography variant="body1" color="rgb(132, 132, 132)" marginTop={2}>
            Parks
          </Typography>
          <Typography variant="body1" color="rgb(132, 132, 132)">
            Nearby trails at South Mountain Park
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default LivingSmart;
