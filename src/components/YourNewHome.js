/* eslint-disable jsx-a11y/img-redundant-alt */
import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import "./YourNewHome.css";
import Footer from "../containers/Footer";

function YourNewHome() {
  return (
    <Box>
      <Box className="your-home-image-container-one">
        <img
          src="https://www.tripointehomes.com/wp-content/uploads/2020/12/about-us-hero-1903x610-1.jpg"
          alt="Your Image"
          className="home-clipped-image"
        />
        <Box className="about-image-text">
          <Typography variant="h2" color="rgb(207, 229, 72)" fontWeight="500">
            <span style={{ color: "#848484" }}>Your</span> New Home
          </Typography>
        </Box>
      </Box>

      <Box>
        <Grid container sx={{ padding: "6rem 2rem 8rem 2rem" }}>
          <Grid item md={6} className="group-images">
            <img
              src="https://www.tripointehomes.com/wp-content/uploads/2020/12/YNH_02.jpg"
              alt="about-home"
              className="about-home-one"
            />
            <Box className="image-building">
              <img
                src="https://www.tripointehomes.com/wp-content/uploads/2020/12/YNH_03_RT.jpg"
                alt="home1"
                className="about-home-two"
              />
            </Box>
          </Grid>
          <Grid item md={6} color="#848484">
            <Typography variant="caption">YOUR NEW HOME</Typography>
            <Typography variant="h3">We’ve got your back,</Typography>
            <Typography
              variant="h3"
              color="#cfe548"
              sx={{ marginBottom: "1.5rem" }}
            >
              every step of the way
            </Typography>
            <Typography>
              We’re a leading new home builder, known for setting trends and
              paving new paths forward. One of the nation’s largest
              homebuilders, we create homes and neighborhoods that make a
              premium lifestyle possible for our customers—whatever their price
              point or life stage.
            </Typography>
            <br />
            <Typography>
              As local specialists on a national scale, we are customer-driven
              and committed to environmentally responsible business practices
              and enduring craftmanship. We don’t just focus on life inside the
              home—we believe in building community in every sense of the word,
              from the connected locations we select to our commitment to social
              responsibility.
            </Typography>
            <br />
            <Typography>
              Our passion for design and innovation and our people-first
              philosophy are recognized throughout the industry and prized by
              our team members.
            </Typography>
            <br />
            <Typography>
              Tri Pointe Homes exists to exceed our homebuyers’ expectations and
              truly enhance their lives
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Box>
        <Grid container color="rgb(132, 132, 132)">
          <Grid item md={5} className="center-box-one">
            <Typography color="rgb(132, 132, 132)" variant="h3">
              Shopping
              <span style={{ color: "#cfe548" }}> for your new home</span>
            </Typography>
            <Typography variant="h6" margin="0.5rem 0rem"></Typography>

            <Typography>
              We’re a leading new home builder, known for setting trends and
              paving new paths forward. One of the nation’s largest
              homebuilders, we create homes and neighborhoods that make a
              premium lifestyle possible for our customers—whatever their price
              point or life stage.
            </Typography>
            <br />
            <Typography>
              As local specialists on a national scale, we are customer-driven
              and committed to environmentally responsible business practices
              and enduring craftmanship. We don’t just focus on life inside the
              home—we believe in building community in every sense of the word,
              from the connected locations we select to our commitment to social
              responsibility.
            </Typography>
            <br />
            <Typography>
              Our passion for design and innovation and our people-first
              philosophy are recognized throughout the industry and prized by
              our team members.
            </Typography>
            <Typography
              variant="body2"
              color="black"
              className="learn-more-button"
            >
              GET STARTED
            </Typography>
          </Grid>
          <Grid item md={7} sx={{ heigh: "auto" }}>
            <img
              src="https://www.tripointehomes.com/wp-content/uploads/about-us-tri-pointe-homes-team.jpg"
              alt="home"
              className="image-container-new-home"
            />
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ padding: "4rem 3rem", margin: "4rem 0rem" }}>
        <Box>
          <Typography
            variant="h2"
            color="rgb(132, 132, 132)"
            paddingBottom="2%"
          >
            Digital Home
            <span style={{ color: "rgb(207, 229, 72)" }}> Shopping Tools</span>
          </Typography>
        </Box>
        <Box>
          <Grid container display="flex" alignItems="center">
            <Grid item md={6}>
              <Typography
                color="#bfbfc0"
                variant="h6"
                paddingRight="15px"
                fontSize="18px"
              >
                SIX DIGITAL TOOLS FOR YOUR FAVORITE NEIGHBORHOOD
              </Typography>
            </Grid>
            <Grid item md={6} borderTop="1px solid #bfbfc0"></Grid>
          </Grid>
        </Box>
      </Box>

      <Box>
        <Grid container color="rgb(132, 132, 132)">
          <Grid item md={7}>
            <img
              src="https://www.tripointehomes.com/wp-content/uploads/interactive-floorplan.svg"
              alt="home"
              className="image-container-new-home-one"
            />
          </Grid>

          <Grid item md={5} className="center-box-two">
            <Typography color="rgb(132, 132, 132)" variant="h3">
              Interactive
              <br />
              <span style={{ color: "#cfe548" }}>Floorplans</span>
            </Typography>
            <Typography variant="h6" margin="0.5rem 0rem"></Typography>

            <Typography>
              The Interactive Floorplan tool allows you to go even deeper when
              deciding which floorplan will best suit your needs. Here, you can
              configure your home with flex-design options such as generational
              suites, extra bedrooms, a home office or enlarged doors to the
              backyard. Once you’re finished, save your top three floor plan
              layouts and our team of experts will help you narrow it down from
              there—and help you understand pricing related to your choices.
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Box>
        <Grid container color="rgb(132, 132, 132)">
          <Grid item md={6} className="center-box-one">
            <Typography color="rgb(132, 132, 132)" variant="h3">
              Virtual
              <span style={{ color: "#cfe548" }}> Tours</span>
            </Typography>
            <Typography variant="h6" margin="0.5rem 0rem"></Typography>

            <Typography>
              Once you’ve figured out which neighborhood you’re interested in,
              the virtual home tours tool will let you get a feel for our many
              floor plan options. You can do a 3D “walk-through” to get a sense
              of the way the different spaces are designed to accommodate modern
              lifestyles
            </Typography>
            <br />
            <Typography>
              Since you’re doing all of this virtually, you’ll be able to tour a
              lot more houses in a lot less time. Once you’ve narrowed it down,
              there will most likely be model homes or move-in-ready homes you
              want to see in person, and if that’s the case, come on in! Some
              move-in-ready homes offer self-guided tours from dawn until dusk.
              All you have to do is text the phone number on the door and follow
              the instructions for an entry code.
            </Typography>

            <Typography
              variant="body2"
              color="black"
              className="learn-more-button"
            >
              LAUNCH THE TOUR
            </Typography>
          </Grid>
          <Grid item md={6} sx={{ heigh: "auto" }}>
            <img
              src="https://www.tripointehomes.com/wp-content/uploads/2020/11/Avance-19-081-06-Alta-P2-Great-Room-Overall-960.jpg"
              alt="home"
              className="image-container-new-home"
            />
          </Grid>
        </Grid>
      </Box>

      <Box>
        <Grid container color="rgb(132, 132, 132)">
          <Grid item md={7}>
            <img
              src="https://www.tripointehomes.com/wp-content/uploads/virtual.png"
              alt="home"
              className="image-container-new-home-one"
            />
          </Grid>

          <Grid item md={5} className="center-box-two">
            <Typography color="rgb(132, 132, 132)" variant="h3">
              Online
              <span style={{ color: "#cfe548" }}>Design Studio</span>
            </Typography>
            <Typography variant="h6" margin="0.5rem 0rem"></Typography>

            <Typography>
              Let your inner designer loose and browse personalization choices
              for your new home. Think of our Online Design Studio as your
              vision board for the products and finishing touches you’d like to
              see throughout your favorite floorplan. Take as much time as you
              need to make your desired selections online and put products into
              your wish-list so our team of expert Design Studio Consultants can
              get a better idea of your personal style and preferences before
              your first meeting (either virtually or in-person) at the Design
              Studio. Your New Home Advisor can provide you with a quote for
              your design wish-list to figure into your new home purchase.
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Box>
        <Grid container color="rgb(132, 132, 132)">
          <Grid item md={6} className="center-box-one">
            <Typography color="rgb(132, 132, 132)" variant="h3">
              Interactive
              <span style={{ color: "#cfe548" }}> Community Map</span>
            </Typography>
            <Typography variant="h6" margin="0.5rem 0rem"></Typography>

            <Typography>
              Once you’ve figured out which neighborhood you’re interested in,
              the virtual home tours tool will let you get a feel for our many
              floor plan options. You can do a 3D “walk-through” to get a sense
              of the way the different spaces are designed to accommodate modern
              lifestyles
            </Typography>
            <br />
            <Typography>
              Since you’re doing all of this virtually, you’ll be able to tour a
              lot more houses in a lot less time. Once you’ve narrowed it down,
              there will most likely be model homes or move-in-ready homes you
              want to see in person, and if that’s the case, come on in! Some
              move-in-ready homes offer self-guided tours from dawn until dusk.
              All you have to do is text the phone number on the door and follow
              the instructions for an entry code.
            </Typography>

            <Typography
              variant="body2"
              color="black"
              className="learn-more-button"
            >
              TRY IT OUT
            </Typography>
          </Grid>
          <Grid item md={6} sx={{ heigh: "auto" }}>
            <img
              src="https://www.tripointehomes.com/wp-content/uploads/isp.png"
              alt="home"
              className="image-container-new-home"
            />
          </Grid>
        </Grid>
      </Box>

      <Box>
        <Grid container color="rgb(132, 132, 132)">
          <Grid item md={7}>
            <img
              src="https://www.tripointehomes.com/wp-content/uploads/tph-prequal2-768x768-1.jpg"
              alt="home"
              className="image-container-new-home-one"
            />
          </Grid>

          <Grid item md={5} className="center-box-two">
            <Typography color="rgb(132, 132, 132)" variant="h3">
              Quick & Easy
              <br />
              <span style={{ color: "#cfe548" }}>Pre-Qualification</span>
            </Typography>
            <Typography variant="h6" margin="0.5rem 0rem"></Typography>

            <Typography>
              Completing the online pre-qualification application through our
              affiliated mortgage company, Tri Pointe Connect®, will provide you
              with valuable information about financing options to suit your
              situation, whether you’re just starting to explore or you’re ready
              to purchase. As soon as you submit your online pre-qualification
              application, you’ll be one step closer to joining the Priority
              Group for your desired neighborhood and having an opportunity to
              purchase the new home of your dreams.
            </Typography>

            <Typography
              variant="body2"
              color="black"
              className="learn-more-button"
            >
              TRY IT OUT
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Box>
        <Grid container color="rgb(132, 132, 132)">
          <Grid item md={6} className="center-box-one">
            <Typography color="rgb(132, 132, 132)" variant="h3">
              Schedule
              <span style={{ color: "#cfe548" }}> a Tour</span>
            </Typography>
            <Typography variant="h6" margin="0.5rem 0rem"></Typography>

            <Typography>
              Making an on-site or virtual tour appointment is as easy as
              filling out a simple form on the neighborhood webpage. We’ll reach
              out to confirm your appointment, and one of our experienced New
              Home Advisors will meet you on-site (or at your virtual
              appointment).
            </Typography>
          </Grid>
          <Grid item md={6} sx={{ heigh: "auto" }}>
            <img
              src="https://www.tripointehomes.com/wp-content/uploads/2021/01/tph-schedule2.jpg"
              alt="home"
              className="image-container-new-home"
            />
          </Grid>
        </Grid>
      </Box>

      <Box>
        <Grid container color="rgb(132, 132, 132)">
          <Grid item md={7}>
            <img
              src="https://www.tripointehomes.com/wp-content/uploads/LasVegas-NHS-TeamPhoto.jpg"
              alt="home"
              className="image-container-new-home-one"
            />
          </Grid>

          <Grid item md={5} className="center-box-two">
            <Typography color="rgb(132, 132, 132)" variant="h3">
              Your
              <span style={{ color: "#cfe548" }}> New Home Specialist</span>
            </Typography>
            <Typography variant="h6" margin="0.5rem 0rem">
              At your service
            </Typography>

            <Typography>
              Completing the online pre-qualification application through our
              affiliated mortgage company, Tri Pointe Connect®, will provide you
              with valuable information about financing options to suit your
              situation, whether you’re just starting to explore or you’re ready
              to purchase. As soon as you submit your online pre-qualification
              application, you’ll be one step closer to joining the Priority
              Group for your desired neighborhood and having an opportunity to
              purchase the new home of your dreams.
            </Typography>

            <Typography
              variant="body2"
              color="black"
              className="learn-more-button"
            >
              GET STARTED
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ padding: "4rem 3rem", margin: "4rem 0rem" }}>
        <Typography variant="h2" color="rgb(132, 132, 132)">
          Additional Resources for{" "}
          <span style={{ color: "rgb(207, 229, 72)" }}>
            Your Home Buying Journey
          </span>
        </Typography>
      </Box>

      <Grid container sx={{ backgroundColor: "#F7F7F7" }}>
        <Grid item md={7}>
          <img
            src="https://www.tripointehomes.com/wp-content/uploads/2020/12/337x453@2x-2.jpg"
            alt="home"
            className="image-container"
          />
        </Grid>
        <Grid item md={5} className="center-box">
          <Typography color="rgb(132, 132, 132)" variant="h3">
            Design Studio
          </Typography>

          <Typography variant="body1" color="rgb(132, 132, 132)" marginTop={2}>
            Think of the Design Studio as the creative playground where your
            house becomes a home. You’ll find a curated collection of product
            choices with interactive displays and resources to help you and your
            Design Consultant craft a home that fits your lifestyle and budget.
            Find out more about the Tri Pointe Homes Design Studio in your
            location here:
          </Typography>

          <Typography
            sx={{
              color: "#bed245",
              margin: "1rem 0rem",
            }}
          >
            Find Locations
          </Typography>
        </Grid>
      </Grid>

      <Grid container sx={{ backgroundColor: "#F7F7F7" }}>
        <Grid item md={7}>
          <img
            src="https://www.tripointehomes.com/wp-content/uploads/2020/12/1090x855-2A.jpg"
            alt="home"
            className="image-container"
          />
        </Grid>
        <Grid item md={5} className="center-box">
          <Typography color="rgb(132, 132, 132)" variant="h3">
            Homeowner Resources
          </Typography>

          <Typography variant="body1" color="rgb(132, 132, 132)" marginTop={2}>
            Your one-stop hub for the resources you need from purchasing to
            closing and beyond
          </Typography>

          <Typography
            sx={{
              color: "#bed245",
              margin: "1rem 0rem",
            }}
          >
            Learn More
          </Typography>
        </Grid>
      </Grid>

      <Grid container sx={{ backgroundColor: "#F7F7F7" }}>
        <Grid item md={7}>
          <img
            src="https://www.tripointehomes.com/wp-content/uploads/2020/12/HR_03_RT.jpg"
            alt="home"
            className="image-container"
          />
        </Grid>
        <Grid item md={5} className="center-box">
          <Typography color="rgb(132, 132, 132)" variant="h3">
            Warranty Portal
          </Typography>

          <Typography variant="body1" color="rgb(132, 132, 132)" marginTop={2}>
            If you’re already a Tri Pointe Homes homeowner, submit your warranty
            requests and check status here.
          </Typography>

          <Typography
            sx={{
              color: "#bed245",
              margin: "1rem 0rem",
            }}
          >
            Submit Request
          </Typography>
        </Grid>
      </Grid>

      <Footer />
    </Box>
  );
}

export default YourNewHome;
