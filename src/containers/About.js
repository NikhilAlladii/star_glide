/* eslint-disable jsx-a11y/img-redundant-alt */
import { Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import "./Footer.js";
import "./About.css";
import Footer from "./Footer.js";
import theme from "../theme/theme.js";

function About() {
  const tabs = [
    {
      title: "Purchase Agreement",
      link: "https://www.tripointehomes.com/wp-content/uploads/tph-homejourneyguide-768x768-1.jpg",
      text: "When you sign your Purchase Agreement and select your structural options, if applicable, it puts the wheels in motion for your new homebuying journey. This agreement, and any applicable attachments, contains the legal information regarding the purchase of your new home, including the estimated closing date Your New Home Advisor and Community Team will continue to be a great resource even after you’ve signed your Purchase Agreement. Have questions? Ask away. Need clarification on something? No problem. That’s what we’re here for. We want to make sure you understand the process and are excited about this journey together.",
    },
    {
      title: "Financing",
      link: "https://www.tripointehomes.com/wp-content/uploads/Financing-1-1.jpg",
      text: "Working with Tri Pointe Connect®, our affiliated mortgage company, makes the financing process seamless and easy Your New Home Loan Consultant and New Home Advisor work together to make sure all of your questions are answered and your loan stays on track.",
    },
    {
      title: "Design Studio",
      link: "https://www.tripointehomes.com/wp-content/uploads/Design-Studio-1-scaled.jpg",
      text: "Your brand-new home is a blank canvas waiting for you to express your personal style. At our Design Studio, we’re here to make design easy, enjoyable and inspiring for you—whether you’re an interior design enthusiast or a total beginner. Our dedicated team of professional co-creators are mindful of your time and budget, and are committed to bringing the wow factor with an impressive array of styles and options for you to play with. So, in the end, your home feels unique—and uniquely you.",
    },
    {
      title: "Construction",
      link: "https://www.tripointehomes.com/wp-content/uploads/Design-Studio-1-scaled.jpg",
      text: "Your brand-new home is a blank canvas waiting for you to express your personal style. At our Design Studio, we’re here to make design easy, enjoyable and inspiring for you—whether you’re an interior design enthusiast or a total beginner. Our dedicated team of professional co-creators are mindful of your time and budget, and are committed to bringing the wow factor with an impressive array of styles and options for you to play with. So, in the end, your home feels unique—and uniquely you.",
    },
    {
      title: "Final Milestones",
      link: "https://www.tripointehomes.com/wp-content/uploads/Design-Studio-1-scaled.jpg",
      text: "Your brand-new home is a blank canvas waiting for you to express your personal style. At our Design Studio, we’re here to make design easy, enjoyable and inspiring for you—whether you’re an interior design enthusiast or a total beginner. Our dedicated team of professional co-creators are mindful of your time and budget, and are committed to bringing the wow factor with an impressive array of styles and options for you to play with. So, in the end, your home feels unique—and uniquely you.",
    },
    {
      title: "Closing",
      link: "https://www.tripointehomes.com/wp-content/uploads/Design-Studio-1-scaled.jpg",
      text: "Your brand-new home is a blank canvas waiting for you to express your personal style. At our Design Studio, we’re here to make design easy, enjoyable and inspiring for you—whether you’re an interior design enthusiast or a total beginner. Our dedicated team of professional co-creators are mindful of your time and budget, and are committed to bringing the wow factor with an impressive array of styles and options for you to play with. So, in the end, your home feels unique—and uniquely you.",
    },
    {
      title: "Welcome Home",
      link: "https://www.tripointehomes.com/wp-content/uploads/Design-Studio-1-scaled.jpg",
      text: "Your brand-new home is a blank canvas waiting for you to express your personal style. At our Design Studio, we’re here to make design easy, enjoyable and inspiring for you—whether you’re an interior design enthusiast or a total beginner. Our dedicated team of professional co-creators are mindful of your time and budget, and are committed to bringing the wow factor with an impressive array of styles and options for you to play with. So, in the end, your home feels unique—and uniquely you.",
    },
  ];

  const [selectedTab, setSelectedTab] = useState("Purchase Agreement");

  const handleTab = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <Box>
      {/* <Box className="about-image-container">
        <img
          src="https://www.tripointehomes.com/wp-content/uploads/2020/12/AU_06_RT.jpg"
          alt="home"
          className="about-image"
        />
        <Box className="about-image-text">
          <Typography color="#848484" variant="caption" fontWeight="600">
            LOVE A GOOD STORY? HERE’S OURS.
          </Typography>
          <Typography variant="h2" color="#848484" fontWeight="700">
            About Us
          </Typography>
        </Box>
      </Box> */}

      <Box className="image-container-one">
        <img
          src="https://www.tripointehomes.com/wp-content/uploads/2020/12/about-us-hero-1903x610-1.jpg"
          alt="Your Image"
          className="clipped-image"
        />
        <Box className="about-image-text">
          <Typography color="#BFBFC0" variant="caption">
            LOVE A GOOD STORY? HERE’S OURS.
          </Typography>
          <Typography variant="h2" color="rgb(207, 229, 72)" fontWeight="500">
            About Us
          </Typography>
        </Box>
      </Box>

      <Box>
        <Grid container sx={{ padding: "6rem 2rem 8rem 2rem" }}>
          <Grid item md={6} className="group-images">
            <img
              src="https://www.tripointehomes.com/wp-content/uploads/2020/12/579x748@2x-1.jpg"
              alt="about-home"
              className="about-home-one"
            />
            <Box className="image-building">
              <img
                src="https://www.tripointehomes.com/wp-content/uploads/about-us-tri-pointe-homes-life-changing.jpg"
                alt="home1"
                className="about-home-two"
              />
            </Box>
          </Grid>
          <Grid item md={6} color={theme.palette.primary.main}>
            <Typography variant="caption">ABOUT US</Typography>
            <Typography variant="h3">We’re in the</Typography>
            <Typography
              variant="h3"
              color="#cfe548"
              sx={{ marginBottom: "1.5rem" }}
            >
              life-changing business
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

      <Grid container>
        <Grid item md={5} className="center-box">
          <Typography color="rgb(132, 132, 132)" variant="h3">
            Local specialist on a
            <span style={{ color: "rgb(190, 211, 68)" }}>national scale</span>
          </Typography>
          <Typography variant="h6" margin="0.5rem 0rem">
            Our history
          </Typography>
          <Typography variant="body1" color="rgb(132, 132, 132)">
            Right from the start, Tri Pointe Homes delivered a unique
            experience: a new kind of customer-centric, design-driven
            homebuilding company had been born, and the homebuying public
            clearly appreciated its arrival. Tri Pointe Homes soon became a
            publicly traded company, and in 2014 another door opened when Tri
            Pointe Homes acquired five other distinctive regional homebuilding
            brands—some with nearly a century of service in their communities—to
            form TRI Pointe Group, one of the largest public homebuilding
            companies in the US.
          </Typography>
        </Grid>
        <Grid item md={7}>
          <img
            src="https://www.tripointehomes.com/wp-content/uploads/2020/12/about-us-960x960-1.jpg"
            alt="home"
            className="image-container"
          />
        </Grid>
      </Grid>

      <Grid container>
        <Grid item md={7}>
          <img
            src="https://www.tripointehomes.com/wp-content/uploads/about-us-tri-pointe-homes-tursted-relationships-e1649268035715.jpg"
            alt="home"
            className="image-container"
          />
        </Grid>
        <Grid item md={5} className="center-box">
          <Typography color="rgb(132, 132, 132)" variant="h3">
            Trusted community
            <span style={{ color: "rgb(190, 211, 68)" }}> relationships</span>
          </Typography>
          <Typography variant="h6" margin="0.5rem 0rem">
            Welcome Home
          </Typography>
          <Typography variant="body1" color="rgb(132, 132, 132)">
            Just six years later, TRI Pointe Group and its six regional
            homebuilding brands, consisting of Tri Pointe Homes in California,
            Colorado and the Carolinas; Maracay in Arizona; Pardee Homes in
            California and Nevada; Quadrant Homes in Washington; Trendmaker
            Homes in Texas; and Winchester Homes in Maryland and Northern
            Virginia had delighted more than 28,000 homeowners, establishing 330
            beautiful neighborhoods and 15 incredible masterplan communities,
            and winning over 270 separate awards, while supporting more than 150
            community causes.
          </Typography>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item md={5} className="center-box">
          <Typography color="rgb(132, 132, 132)" variant="h3">
            Big thinking with a
            <span style={{ color: "rgb(190, 211, 68)" }}>
              personal approach
            </span>
          </Typography>
          <Typography variant="h6" margin="0.5rem 0rem">
            The best of big and small
          </Typography>
          <Typography variant="body1" color="rgb(132, 132, 132)">
            Right from the start, Tri Pointe Homes delivered a unique
            experience: a new kind of customer-centric, design-driven
            homebuilding company had been born, and the homebuying public
            clearly appreciated its arrival. Tri Pointe Homes soon became a
            publicly traded company, and in 2014 another door opened when Tri
            Pointe Homes acquired five other distinctive regional homebuilding
            brands—some with nearly a century of service in their communities—to
            form TRI Pointe Group, one of the largest public homebuilding
            companies in the US.
          </Typography>
        </Grid>
        <Grid item md={7}>
          <img
            src="https://www.tripointehomes.com/wp-content/uploads/2020/12/AU_06_RT.jpg"
            alt="home"
            className="image-container"
          />
        </Grid>
      </Grid>

      <Box className="tabs-container">
        {tabs.map((tab) => (
          <Box sx={{ padding: "1rem 0rem" }}>
            <Typography
              variant="h6"
              className="each-tab"
              style={{
                color: tab.title === selectedTab ? theme.palette.secondary.main : "#a6a1a1",
                borderBottom:
                  tab.title === selectedTab
                    ? "2px solid #bed245"
                    : "2px solid #a6a1a1",
              }}
              onClick={() => handleTab(tab.title)}
            >
              {tab.title}
            </Typography>
          </Box>
        ))}
      </Box>

      {tabs.map((tab) => (
        <Box className="cards-container">
          {tab.title === selectedTab && (
            <Box sx={{ padding: "2rem 0rem 2rem 3rem", width: "50%" }}>
              <img src={tab.link} alt="home" className="about-image" />
            </Box>
          )}
          {tab.title === selectedTab && (
            <Box sx={{ padding: "2rem 3rem 2rem 0rem", width: "50%" }}>
              <Typography variant="body1" className="tab-text">
                {tab.text}
              </Typography>
              <a
                href="https://www.tripointehomes.com/"
                target="_blank"
                rel="noreferrer"
              >
                Learn more
              </a>
            </Box>
          )}
        </Box>
      ))}

      <Grid container sx={{ marginTop: "4rem" }}>
        <Grid item md={7}>
          <img
            src="https://www.tripointehomes.com/wp-content/uploads/tri-pointe-homes-leading-edge-design-video-cover.jpg"
            alt="home"
            className="image-container"
          />
        </Grid>
        <Grid item md={5} className="center-box">
          <Typography color="rgb(132, 132, 132)" variant="h3">
            Life-Changing <span style={{ color: "#cfe548" }}>Design</span>
          </Typography>
          <Typography variant="h6" margin="0.5rem 0rem">
            Experience
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
            FIND YOUR HOME
          </Typography>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item md={5} className="center-box">
          <Typography color="rgb(132, 132, 132)" variant="h3">
            Join the
            <span style={{ color: "#cfe548" }}>Tri Pointe team</span>
          </Typography>
          <Typography variant="h6" margin="0.5rem 0rem">
            LOVE WHAT YOU DO
          </Typography>

          <Typography variant="body1" color="rgb(132, 132, 132)" marginTop={2}>
            Our team members may come from different parts of the country and
            specialize in different areas of the industry, but we all share a
            passion for having a voice in shaping our company and for helping
            our home buyers achieve their dreams. Together we create a culture
            that achieves outstanding results by openly exchanging information,
            celebrating success and innovation and actively working to be a
            force for good in every community we touch. We’re always on the
            lookout for remarkable individuals that have the power to change the
            course of events. You’ll help advance our shared vision of
            homebuying, homebuilding and home ownership to the next level with
            integrity, drive and teamwork.
          </Typography>
          <Typography variant="body2" className="learn-more-button">
            FIND YOUR HOME
          </Typography>
        </Grid>
        <Grid item md={7}>
          <img
            src="https://www.tripointehomes.com/wp-content/uploads/about-us-tri-pointe-homes-team.jpg"
            alt="home"
            className="image-container"
          />
        </Grid>
      </Grid>

      <Grid container>
        <Grid item md={7}>
          <img
            src="https://www.tripointehomes.com/wp-content/uploads/7096f356-eb7a-4569-9581-124b961df147_with-white-boarder.jpg"
            alt="home"
            className="image-container"
          />
        </Grid>
        <Grid item md={5} className="center-box">
          <Typography color="rgb(132, 132, 132)" variant="h3">
            Great Place to Work®
          </Typography>

          <Typography variant="body1" color="rgb(132, 132, 132)" marginTop={2}>
            Tri Pointe Homes®️ was recognized as a{" "}
            <span style={{ color: "#cfe548" }}>
              Great Place to Work-Certified™️
            </span>{" "}
            company for 2021-2024.
          </Typography>

          <Typography variant="body1" color="rgb(132, 132, 132)" marginTop={2}>
            Tri Pointe Homes earned{" "}
            <span style={{ color: "#cfe548" }}>
              100 Best Companies to Work For®
            </span>{" "}
            recognition from Fortune Magazine and Great Place to Work® 2023.
          </Typography>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item md={7}>
          <img
            src="https://www.tripointehomes.com/wp-content/uploads/IMG_2424.jpg"
            alt="home"
            className="image-container"
          />
        </Grid>
        <Grid item md={5} className="center-box">
          <Typography color="rgb(132, 132, 132)" variant="h3">
            Builder of the year
          </Typography>

          <Typography variant="body1" color="rgb(132, 132, 132)" marginTop={2}>
            Awarded by Builder and Developer Magazine 2019 and Builder magazine
            2015
          </Typography>
          <Typography
            sx={{
              color: "#bed245",
              margin: "1rem 0rem",
            }}
          >
            Where We Build
          </Typography>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item md={7}>
          <img
            src="https://www.tripointehomes.com/wp-content/uploads/2021/01/aboutus_100_650x650.jpg"
            alt="home"
            className="image-container"
          />
        </Grid>
        <Grid item md={5} className="center-box">
          <Typography color="rgb(132, 132, 132)" variant="h3">
            100 Fastest-growing company
          </Typography>

          <Typography variant="body1" color="rgb(132, 132, 132)" marginTop={2}>
            Awarded by Fortune Magazine 2017
          </Typography>
        </Grid>
      </Grid>

      <Footer />
    </Box>
  );
}

export default About;
