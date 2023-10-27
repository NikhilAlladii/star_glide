import React, { useState } from "react";
import "./LivingSmart.css";
import { Box, Grid, Typography } from "@mui/material";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import HomeIcon from "@mui/icons-material/Home";
import WaterDropOutlinedIcon from "@mui/icons-material/WaterDropOutlined";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import Footer from "./Footer";
import theme from "../theme/theme";

function LivingSmart() {
  const tabs = [
    {
      title: "EnergySmart",
      icon: <LightbulbIcon fontSize="small" />,
      iconColor: "#F7B808",
      link: "https://www.tripointehomes.com/wp-content/uploads/tph-homejourneyguide-768x768-1.jpg",
      text: "When you sign your Purchase Agreement and select your structural options, if applicable, it puts the wheels in motion for your new homebuying journey. This agreement, and any applicable attachments, contains the legal information regarding the purchase of your new home, including the estimated closing date Your New Home Advisor and Community Team will continue to be a great resource even after you’ve signed your Purchase Agreement. Have questions? Ask away. Need clarification on something? No problem. That’s what we’re here for. We want to make sure you understand the process and are excited about this journey together.",
    },
    {
      title: "HealthSmart",
      icon: <FavoriteBorderIcon fontSize="small" />,
      iconColor: "#EF5343",
      link: "https://www.tripointehomes.com/wp-content/uploads/Financing-1-1.jpg",
      text: "Working with Tri Pointe Connect®, our affiliated mortgage company, makes the financing process seamless and easy Your New Home Loan Consultant and New Home Advisor work together to make sure all of your questions are answered and your loan stays on track.",
    },
    {
      title: "HomeSmart",
      icon: <HomeIcon fontSize="small" />,
      iconColor: "#5CBFAF",
      link: "https://www.tripointehomes.com/wp-content/uploads/Design-Studio-1-scaled.jpg",
      text: "Your brand-new home is a blank canvas waiting for you to express your personal style. At our Design Studio, we’re here to make design easy, enjoyable and inspiring for you—whether you’re an interior design enthusiast or a total beginner. Our dedicated team of professional co-creators are mindful of your time and budget, and are committed to bringing the wow factor with an impressive array of styles and options for you to play with. So, in the end, your home feels unique—and uniquely you.",
    },
    {
      title: "WaterSmart",
      icon: <WaterDropOutlinedIcon fontSize="small" />,
      iconColor: "#00A6E0",
      link: "https://www.tripointehomes.com/wp-content/uploads/Design-Studio-1-scaled.jpg",
      text: "Your brand-new home is a blank canvas waiting for you to express your personal style. At our Design Studio, we’re here to make design easy, enjoyable and inspiring for you—whether you’re an interior design enthusiast or a total beginner. Our dedicated team of professional co-creators are mindful of your time and budget, and are committed to bringing the wow factor with an impressive array of styles and options for you to play with. So, in the end, your home feels unique—and uniquely you.",
    },
    {
      title: "EarthSmart",
      icon: <LocalFloristIcon fontSize="small" />,
      iconColor: "#BED344",
      link: "https://www.tripointehomes.com/wp-content/uploads/Design-Studio-1-scaled.jpg",
      text: "Your brand-new home is a blank canvas waiting for you to express your personal style. At our Design Studio, we’re here to make design easy, enjoyable and inspiring for you—whether you’re an interior design enthusiast or a total beginner. Our dedicated team of professional co-creators are mindful of your time and budget, and are committed to bringing the wow factor with an impressive array of styles and options for you to play with. So, in the end, your home feels unique—and uniquely you.",
    },
  ];

  const [selectedTab, setSelectedTab] = useState("EnergySmart");

  const handleTab = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <Box>
      <Box className="image-container-one">
        <img
          src="https://www.tripointehomes.com/wp-content/uploads/2020/12/about-us-hero-1903x610-1.jpg"
          alt="Living Smart"
          className="clipped-image"
        />
        <Box className="about-image-text">
          <Typography variant="h3" color={theme.palette.primary.main} fontWeight="500">
            LivingSmart
          </Typography>
        </Box>
      </Box>

      <Box>
        <Grid container>
          <Grid item md={5} className="center-box">
            <Typography color="rgb(132, 132, 132)" variant="h3">
              Durability,
              <span style={{ color: "rgb(190, 211, 68)" }}>
                Comfort, Savings
              </span>
            </Typography>
            <Typography variant="h6" margin="0.5rem 0rem">
              LivingSmart®
            </Typography>
            <Typography variant="body1" color="rgb(132, 132, 132)">
              LivingSmart®️ encompasses the latest in energy-saving features,
              materials and equipment that help improve your home’s indoor air
              quality, smart technology, and systems to help conserve water and
              our natural resources.
            </Typography>
            <br />
            <Typography variant="body1" color="rgb(132, 132, 132)">
              Each component is designed to improve your home’s comfort and
              operating costs, your well-being, and the Earth.
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
      </Box>

      <Box>
        <Grid container padding="4rem 3.25rem" margin="4rem 0rem">
          <Grid item md={5}>
            <Typography variant="body1" color={theme.palette.primary.main}>
              LIVINGSMART®
            </Typography>
            <Typography variant="h3" color={theme.palette.primary.main}>
              Well-Being
              <br />
              <span style={{ color: "rgb(207, 229, 72)" }}>by Design</span>
            </Typography>
          </Grid>
          <Grid item md={7}>
            <Typography color={theme.palette.primary.main}>
              We’ve been a leader in green building for over 20 years and our
              commitment is always expanding. It always will, with a steadfast
              passion for improving the quality of life for our home owners and
              the legacy we’ll all leave on this amazing planet. New materials,
              technologies and features are constantly being incorporated into
              our LivingSmart® program that includes five specific areas of
              advancement: EnergySmart®, HealthSmart®, HomeSmart®, WaterSmart®,
              and EarthSmart®.
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Box className="tabs-container">
        {tabs.map((tab) => (
          <Box sx={{ padding: "1rem 0rem" }} display="flex" alignItems="center">
            <Box paddingRight="0.5rem" color={tab.iconColor}>
              {tab.icon}
            </Box>
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
            <Box sx={{ padding: "2rem 3rem 2rem 3%", width: "50%" }}>
              <Typography variant="h5" color={tab.iconColor}>
                {tab.title}
              </Typography>
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

      <Box bgcolor="rgb(190, 211, 68)" color="#FFFFFF" padding="5.5rem 3.25rem">
        <Typography variant="body1">WHAT OUR HOMEOWNERS SAY</Typography>
        <Typography variant="h3" padding="1.5rem 0rem">
          “We are really impressed with the quality of the homes, the energy
          efficiency, and the features that came included. They have exceeded
          our expectations.”
        </Typography>
        <Typography variant="body1">
          -WENDY P, LOMA AT AVANCE HOMEOWNER
        </Typography>
      </Box>

      <Box>
        <Grid container>
          <Grid item md={6} className="center-box">
            <Typography variant="body1" margin="0.5rem 0rem" color={theme.palette.primary.main}>
              EXPERIENCE LIVINGSMART®
            </Typography>
            <Typography color="rgb(132, 132, 132)" variant="h3">
              Smarter in every <br /> room,
              <br />
              <span style={{ color: "rgb(190, 211, 68)" }}>
                a LivingSmart virtual tour
              </span>
            </Typography>

            <Typography variant="body1" color={theme.palette.primary.main} margin="1rem 0rem">
              Take an immersive walk through a Tri Pointe Homes floorplan with
              LivingSmart®. Keep an eye out for “Easter Eggs” along the way that
              will highlight the many innovative features that make a
              LivingSmart® home so smart.
            </Typography>
            <Typography variant="body2" className="learn-more-button">
              TAKE THE VIRTUAL TOUR
            </Typography>
          </Grid>
          <Grid item md={6}>
            <img
              src="https://www.tripointehomes.com/wp-content/uploads/2021/01/livingsmart-tour.jpg"
              alt="home"
              className="image-container"
            />
          </Grid>
        </Grid>
      </Box>

      <Box>
        <Grid container>
          <Grid item md={6}>
            <img
              src="https://www.tripointehomes.com/wp-content/uploads/2021/01/cutaway.jpg"
              alt="home"
              className="image-container"
            />
          </Grid>
          <Grid item md={6} className="center-box">
            <Typography variant="body1" margin="0.5rem 0rem" color={theme.palette.primary.main}>
              BETTER INSIDE AND OUT
            </Typography>
            <Typography color="rgb(132, 132, 132)" variant="h3">
              Built differently
              <span style={{ color: "rgb(190, 211, 68)" }}>
                to live differently
              </span>
            </Typography>

            <Typography variant="body1" color={theme.palette.primary.main} margin="1rem 0rem">
              Take a glimpse through the walls to see examples of how
              LivingSmart® features improve everyday life for years to come.
              LivingSmart® features may vary by community.
            </Typography>
            <Typography variant="body2" className="learn-more-button">
              TAKE A PEEK
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Box>
        <Grid container>
          <Grid item md={7}>
            <img
              src="https://www.tripointehomes.com/wp-content/uploads/LivingSmart-A-green-pioneer.png"
              alt="home"
              className="image-container"
            />
          </Grid>
          <Grid item md={5} className="center-box">
            <Typography color="rgb(132, 132, 132)" variant="h3">
              A green
              <span style={{ color: "rgb(190, 211, 68)" }}>pioneer</span>
            </Typography>

            <Typography variant="body1" color={theme.palette.primary.main} margin="1rem 0rem">
              🞂 2003-2006 EPA Energy Star® Partner of the Year 1 <br />
              🞂 2004 “Zero Energy Home” showcased at International Builders Show
              <br /> 🞂 2005 First builder to receive CA Governor’s Environmental
              and Economic Leadership Award <br />
              🞂 2006 NAHB Green Building Project of the Year: Santa Rosa <br />
              🞂 2010 NAHB Green Building Corporate Advocate of the Year <br />
              🞂 2011 NAHB Research Center’s National Green Building Standard
              Gold Certification
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Box>
        <Grid container>
          <Grid item md={7}>
            <img
              src="https://www.tripointehomes.com/wp-content/uploads/2020/12/05_NEIGHBORHOOD_RT.jpg"
              alt="home"
              className="image-container"
            />
          </Grid>
          <Grid item md={5} className="center-box">
            <Typography color="rgb(132, 132, 132)" variant="h3">
              Turning
              <span style={{ color: "rgb(190, 211, 68)" }}> green to gold</span>
            </Typography>

            <Typography variant="body1" color={theme.palette.primary.main} margin="1rem 0rem">
              🞂 2003-2006 EPA Energy Star® Partner of the Year 1 <br />
              🞂 2004 “Zero Energy Home” showcased at International Builders Show
              <br /> 🞂 2005 First builder to receive CA Governor’s Environmental
              and Economic Leadership Award <br />
              🞂 2006 NAHB Green Building Project of the Year: Santa Rosa <br />
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Box>
        <Grid container>
          <Grid item md={7}>
            <img
              src="https://www.tripointehomes.com/wp-content/uploads/LivingSmart-from-gold-to-green.png"
              alt="home"
              className="image-container"
            />
          </Grid>
          <Grid item md={5} className="center-box">
            <Typography color="rgb(132, 132, 132)" variant="h3">
              The ultimate win-win
            </Typography>

            <Typography variant="body1" color={theme.palette.primary.main} margin="1rem 0rem">
              🞂 2020 Indoor airPLUS Leader Award
              <br />
              🞂 2020 LEED Homes Power Builder
              <br />
              🞂 2020 NGBS Green Partner of Excellence
              <br />
              🞂 2021 Indoor airPLUS Leader Award
              <br />
              🞂 2021 LEED Homes Power Builder
              <br />
              🞂 2022 LEED Homes Power Builder
              <br />
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Box>
        <Grid container>
          <Grid item md={7}>
            <img
              src="https://www.tripointehomes.com/wp-content/uploads/LivingSmart-from-gold-to-green.png"
              alt="home"
              className="image-container"
            />
          </Grid>
          <Grid item md={5} className="center-box">
            <Typography variant="body1" margin="0.5rem 0rem" color={theme.palette.primary.main}>
              EXPERIENCE LIVINGSMART®
            </Typography>
            <Typography color="rgb(132, 132, 132)" variant="h3">
              Smarter in every <br /> room,
              <br />
              <span style={{ color: "rgb(190, 211, 68)" }}>
                a LivingSmart virtual tour
              </span>
            </Typography>

            <Typography variant="body1" color={theme.palette.primary.main} margin="1rem 0rem">
              Take an immersive walk through a Tri Pointe Homes floorplan with
              LivingSmart®. Keep an eye out for “Easter Eggs” along the way that
              will highlight the many innovative features that make a
              LivingSmart® home so smart.
            </Typography>
            <Typography variant="body2" className="livingsmart-more-button">
              DOWNLOAD OUR 2022 ESG REPORT
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Box>
        <Grid container>
          <Grid item md={7}>
            <img
              src="https://www.tripointehomes.com/wp-content/uploads/2021/01/hers-tph.jpg"
              alt="home"
              className="image-container"
            />
          </Grid>
          <Grid item md={5} className="center-box">
            <Typography color="rgb(132, 132, 132)" variant="h3">
              Proof is in the
              <br />
              <span style={{ color: "rgb(190, 211, 68)" }}>rating</span>
            </Typography>

            <Typography variant="body1" margin="0.5rem 0rem" color={theme.palette.primary.main}>
              Measuring success
            </Typography>

            <Typography variant="body1" color={theme.palette.primary.main} margin="1rem 0rem">
              We use the HERS (Home Energy Rating System) rating metric to
              measure our LivingSmart® building performance. A HERS rating is a
              standard measurement of a home’s energy efﬁciency. A typical
              resale home is in the 130 range on the scale. A new home, closer
              to 100. We’re striving to make that number even lower in our new
              homes.
            </Typography>
            <Typography variant="caption" fontSize="10px" lineHeight="11px">
              This Home Energy Scale may be displayed on a model home or
              utilized in other marketing materials for homes within this
              community, illustrating a projected “HERS” Score Rating and
              potential utility savings. Energy efficiency ratings may be
              expressed as a HERS (Home Energy Rating System) Index rating. A
              HERS rating is a standard measurement of a home’s energy
              efficiency. HERS ratings were developed and regulated under the
              administration of the Residential Energy Services Network
              (RESNET). While the HERS reference scales are modified from time
              to time, according to RESNET, the U. S. Department of Energy has
              found that a “typical existing home” offered in the resale market
              has a HERS Index rating of 130, and the HERS reference home, the
              “typical new home” has a rating of 100, assuming that the home is
              built to the specifications of the 2006 International Energy
              Conservation Code. More information about the RESNET HERS Index
              rating can be found on RESNET’s website at
              http://www.resnet.us/energy-rating. Except as otherwise specified,
              an estimated rating is based a single test of a model of a
              floorplan similar to this home. Seller retains certified
              independent HERS energy raters to provide energy efficiency
              ratings for homes as designed pursuant to the applicable floor
              plan. The energy efficiency comparisons illustrated in this Home
              Energy Scale are based upon the average energy performance for
              specified home categories as determined by an independent HERS
              rater. Energy efficient features will vary depending upon the
              floor plans, elevations, design amenities/upgrades and the
              location of the home. Seller does not represent, warrant, or
              guarantee all homes sold by Seller have been individually rated.
              Further an energy rating score may or may not factor in all
              options and/or upgrades available to be installed in the home.
              Actual energy costs and/or energy usage are dependent on a number
              of factors, including utility rates, energy consumption, home
              maintenance, size of household, energy conservation practices,
              home orientation, and surrounding climate and weather conditions.
              Seller does not guarantee any specific level of electric and/or
              gas energy utility costs or savings. Seller has no business
              interest in any home energy efficiency evaluation organization or
              system, software program or rater. Seller reserves the right to
              modify or vary features or components so long as they are
              constructed in accordance with applicable laws. Information
              contained herein is based upon data obtained from third parties
              and should not be used as the only source of information when
              making purchasing decisions, investment decisions or tax
              decisions, or when executing other binding agreements.
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </Box>
  );
}

export default LivingSmart;
