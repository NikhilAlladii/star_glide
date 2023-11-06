import { Box, Card, Grid, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import "./FinancingYourHome.css";
import "./DesignStudio.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./Footer.js";
import Footer from "./Footer.js";
import InterestRate from "../components/IntrestRate";
import theme from "../theme/theme";
import FAQ from "../components/FAQ.js";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

function DesignStudio() {
  const tabs = [
    {
      title: "Dedicated to you",
      imageLink:
        "https://www.tripointehomes.com/wp-content/uploads/tph-homejourneyguide-768x768-1.jpg",
      text: "Tri Pointe Connect provides a team of New Home Loan Consultants that work exclusively with customers purchasing a new home from Tri Pointe Homes.",
    },
    {
      title: "At your service",
      imageLink:
        "https://www.tripointehomes.com/wp-content/uploads/Financing-1-1.jpg",
      text: "You’ll have access to our team of Tri Pointe Connect New Home Loan Consultants throughout the homebuilding process. We offer in-person traditional paper documentation appointments as well as secure online services designed to streamline the new home financing process. Our secure digital application and information collection process provides one of the most convenient ways for you to experience the mortgage process. We also offer financing education and loan options to help make the homebuying experience easy and efficient.",
    },
    {
      title: "Array of financing options",
      imageLink:
        "https://www.tripointehomes.com/wp-content/uploads/Design-Studio-1-scaled.jpg",
      text: "Conventional, FHA, VA, and Jumbo loan programs are just some of the areas where we offer expertise. Fixed and Adjustable Rate Mortgages are available on most programs. And don’t forget to ask about temporary or permanent buy-down options.",
    },
    {
      title: "Extended rate locks",
      imageLink:
        "https://www.tripointehomes.com/wp-content/uploads/Design-Studio-1-scaled.jpg",
      text: "To eliminate fluctuations in interest rates during construction, we offer Extended Rate Lock programs. Long term locks are available for six months or longer on most loans. Long term locks with Float Down options may also be available.",
    },
  ];

  const homes = [
    {
      title: "Apply to pre-qualify",
      imageLink:
        "https://www.tripointehomes.com/wp-content/uploads/2020/12/Apply-to-pre-qualify-2048x1365.jpeg",
      text: "Submit your pre-qualification application to join the priority group for your desired community",
    },
    {
      title: "Personal consultation",
      imageLink:
        "https://www.tripointehomes.com/wp-content/uploads/F_08B-Crop-Personal-Consultation.jpg",
      text: "Your personal New Home Loan Consultant will reach out to you to discuss loan options and provide you with a pre-qualification letter",
    },
    {
      title: "Get formal",
      imageLink:
        "https://www.tripointehomes.com/wp-content/uploads/2020/12/Get-Formal-2048x1366.jpg",
      text: "Execute your new home purchase agreement with Tri Pointe Homes and complete your loan application with Tri Pointe Connect",
    },
    {
      title: "Bringing it home",
      imageLink:
        "https://www.tripointehomes.com/wp-content/uploads/Design-Studio-1-scaled.jpg",
      text: "Your personal New Home Loan Consultant will guide you through the process for final loan approval, loan funding and receiving keys to your new home",
    },
  ];

  const areas = [
    "Phoenix Metro",
    "Bay Area",
    "Inland Empire",
    "Las Vegas",
    "Orange County-Los Angeles",
    "Sacramento",
    "San Diego",
    "Inland Empire",
    "Las Vegas",
  ];

  const areas1 = ["Phoenix Metro", "Bay Area", "Inland Empire", "Las Vegas"];

  const areas2 = ["Phoenix Metro", "Bay Area", "Las Vegas"];

  const [tab, setTab] = useState(tabs[0]);

  console.log("tab", tabs[0].text.slice(0, 150));

  return (
    <Box>
      <Box className="your-home-image-container-one">
        <img
          src="https://www.tripointehomes.com/wp-content/uploads/2020/12/about-us-hero-1903x610-1.jpg"
          alt="Your Images"
          className="home-clipped-image"
        />
        <Box className="about-image-text">
          <Typography color="#BFBFC0" variant="caption">
            HOME FINANCING. TAILORED TO YOU.
          </Typography>
          <Typography variant="h3" color="rgb(207, 229, 72)" fontWeight="600">
            Design
            <span style={{ color: theme.palette.primary.main }}> Studio</span>
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
          <Grid
            item
            md={6}
            color={theme.palette.primary.main}
            className="right-container"
          >
            <Typography variant="body1">
              THE FINANCING YOU NEED, ALL UNDER ONE ROOF
            </Typography>
            <Typography variant="h3">Financing Made</Typography>
            <Typography
              variant="h3"
              color="#cfe548"
              sx={{ marginBottom: "1.5rem" }}
            >
              Friendly
            </Typography>
            <Typography>
              Buying a new construction home from Tri Pointe Homes®? Think
              financing your new home has to be difficult? Not with Tri Pointe
              Connect®! We are the affiliated mortgage company of Tri Pointe
              Homes, and, as such, seamlessly integrate financing into the
              homebuying and homebuilding process to make the whole experience
              easier and more enjoyable for you.
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Box>
        <Grid container color="rgb(132, 132, 132)">
          <Grid item md={6} className="center-box-one">
            <Typography variant="body1" color="#bfbfc0">
              BENEFITS OF TRI POINTE CONNECT
            </Typography>
            <Typography
              color="rgb(132, 132, 132)"
              variant="h3"
              padding="1rem 0rem 3rem 0rem"
            >
              Financing
              <br />
              <span style={{ color: "#cfe548" }}> tailored to you</span>
            </Typography>

            {tabs.map((eachTab, i) => (
              <Box
                key={i}
                className="each-tab-styling"
                onClick={() => setTab(eachTab)}
                color={
                  eachTab.title === tab.title
                    ? theme.palette.secondary.main
                    : "#d2d0d0"
                }
              >
                <Typography
                  color={
                    eachTab.title === tab.title
                      ? theme.palette.secondary.main
                      : "#d2d0d0"
                  }
                  variant="h6"
                  marginBottom="1rem"
                >
                  {eachTab.title}
                </Typography>
                <Box
                  className="tab-text"
                  color={
                    eachTab.title === tab.title
                      ? theme.palette.secondary.main
                      : "#d2d0d0"
                  }
                >
                  <Typography>
                    {tab.text === eachTab.text
                      ? eachTab.text
                      : eachTab.text.slice(0, 80) + "......"}
                  </Typography>
                  <Box className="arrow-box">
                    <ArrowForwardIcon fontSize="small" />
                  </Box>
                </Box>
              </Box>
            ))}
          </Grid>
          <Grid item md={6} sx={{ heigh: "auto" }}>
            <img
              src={tab?.imageLink ? tab?.imageLink : tabs[0]?.imageLink}
              alt="home"
              className="image-container-new-home"
            />
          </Grid>
        </Grid>
      </Box>

      <Box padding="4rem 3.25rem" margin="4rem 0rem">
        <Box>
          <Grid container color="#bfbfc0" paddingBottom="3rem">
            <Grid item md={5}>
              <Typography variant="body1">
                FINANCING IN FOUR EASY STEPS
              </Typography>
              <Typography variant="h3" color={theme.palette.primary.main}>
                The path{" "}
                <span style={{ color: "rgb(207, 229, 72)" }}>home</span>
              </Typography>
            </Grid>
            <Grid item md={7} color={theme.palette.primary.main}>
              <Typography>
                Because Tri Pointe Connect is the affiliated mortgage company of
                Tri Pointe Homes, we offer the benefit of an easy-to-understand,
                4-step process that’s seamlessly integrated with the
                construction and delivery of your new home.
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Grid container spacing={4}>
            {homes.map((home, i) => (
              <Grid item key={i} md={3}>
                <img
                  src={home.imageLink}
                  alt={home.title}
                  className="financing-grid-images"
                />
                <Typography variant="h6" color="balck" marginBottom="0.5rem">
                  {i + 1}. {home.title}
                </Typography>
                <Typography color={theme.palette.primary.main}>
                  {home.text}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>

      <Box bgcolor=" rgb(190, 211, 68)" padding="5.5rem 3.25rem">
        <Box>
          <Typography variant="caption" color="#FFFFFF">
            FURNISH AND FINISH
          </Typography>
          <Typography
            variant="h3"
            fontWeight="500"
            color="#FFFFFF"
            padding="1.5rem 0rem"
          >
            Shop our
            <span style={{ color: theme.palette.secondary.main }}>
              {" "}
              model homes
            </span>
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Box width="60%">
            <Typography color={theme.palette.secondary.main} variant="caption">
              If you are serious about purchasing a new home from Tri Pointe
              Homes, and we think you are, getting pre-qualified and joining the
              priority group for your desired community will put you one step
              closer to homeownership attainable for your own space. Purchase a
              few pieces from the designer-curated collections or work with a
              complimentary interior designer to select furniture, art, and
              accessories that reflect your personal style.
            </Typography>
          </Box>
          <Box>
            <Box>
              <Typography
                bgcolor="#fff"
                padding="15px 55px 12px"
                fontSize="14px"
                borderRadius="4px"
              >
                LEARN MORE
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      <Grid
        container
        className="form-container"
        padding="8rem 0rem 0rem 0rem"
        bgcolor="#FAFAFA"
      >
        <Grid item md={6} className="center-box-financing">
          <Typography color="#bfbfc0">PAYMENT CALCULATOR</Typography>
          <Typography
            color="rgb(132, 132, 132)"
            variant="h3"
            marginBottom="3rem"
          >
            Estimate your
            <br />
            <span style={{ color: "rgb(190, 211, 68)" }}>monthly payment</span>
          </Typography>
          <Typography variant="h6" margin="0.5rem 0rem 1.5rem 0.5rem">
            Your monthly payment would be** $0
          </Typography>
          <Box sx={{ paddingRight: "20%" }}>
            <Typography
              variant="body1"
              color="rgb(132, 132, 132)"
              paddingBottom="5rem !important"
            >
              To put the price of your new home—and all the features you’ve
              chosen—in perspective, it’s helpful to have a sense of what you’ll
              owe each month. Use this interactive calculator to get a quick
              estimate of your monthly payment, so you can see how that amount
              fits your budget and your lifestyle.
            </Typography>
            <Typography variant="caption">
              **This mortgage calculator is for illustrative purposes only and
              is not a guarantee. The monthly payment illustration on this tool
              does not include amounts for property taxes, insurance premiums,
              homeowner’s association dues, or other factors that potentially
              could affect your monthly payment. Therefore, your actual monthly
              payment will be higher. Interest rates change frequently and
              without notice. Financing availability and terms will depend on
              your situation. Assumes you are purchasing a single family home
              and primary residence. Rate is fixed. Debt-to-income ratio is less
              than 41% and excellent credit. These assumptions are subject to
              change without notice.
            </Typography>
          </Box>
        </Grid>
        <Grid item md={6}>
          <img
            src="https://www.tripointehomes.com/wp-content/uploads/calculator-estimate-payments.jpg"
            alt="home"
            className="image-container-financing"
          />
        </Grid>

        <Box className="inside-form">
          <Paper sx={{ boxShadow: "none" }}>
            <InterestRate />
          </Paper>
        </Box>
      </Grid>

      <Box className="contact-homes">
        <Box className="inside-contact-homes">
          <Box display="flex" flexDirection="column" alignItems="center">
            <Typography variant="h4" paddingBottom="1rem">
              Contact Tri Pointe Homes
            </Typography>
            <Typography variant="body2">
              If you’re interested in visiting our design studio, please contact
              the the design studio in your
              <br />
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {" "}
                region.
              </span>
            </Typography>
          </Box>

          <Box width="80%" display="flex" margin="auto" alignItems="center">
            <Grid container spacing={4} margin="2% 0%">
              <Grid item md={4}>
                <Card
                  sx={{
                    width: "100%",
                    padding: "10px 30px",
                    minHeight: "72vh",
                  }}
                >
                  <Typography variant="h5" padding="3% 0%" color="#bed245">
                    West Coast
                  </Typography>
                  <Box marginBottom="1rem">
                    {areas.map((area, i) => (
                      <Box
                        key={i}
                        display="flex"
                        justifyContent="space-between"
                        padding="3% 0%"
                        borderBottom={
                          areas.length === i + 1 ? "none" : "1px solid #e0e0e0"
                        }
                        sx={{ cursor: "pointer" }}
                      >
                        <Typography variant="caption">{area}</Typography>
                        <ArrowRightAltIcon fontSize="small" />
                      </Box>
                    ))}
                  </Box>
                </Card>
              </Grid>

              <Grid item md={4}>
                <Card
                  sx={{
                    width: "100%",
                    padding: "10px 30px",
                    minHeight: "72vh",
                  }}
                >
                  <Typography variant="h5" padding="3% 0%" color="#bed245">
                    Central
                  </Typography>
                  <Box marginBottom="1rem">
                    {areas1.map((area, i) => (
                      <Box
                        key={i}
                        display="flex"
                        justifyContent="space-between"
                        padding="3% 0%"
                        borderBottom={
                          areas1.length === i + 1 ? "none" : "1px solid #e0e0e0"
                        }
                        sx={{ cursor: "pointer" }}
                      >
                        <Typography variant="caption">{area}</Typography>
                        <ArrowRightAltIcon fontSize="small" />
                      </Box>
                    ))}
                  </Box>
                </Card>
              </Grid>

              <Grid item md={4}>
                <Card
                  sx={{
                    width: "100%",
                    padding: "10px 30px",
                    minHeight: "72vh",
                  }}
                >
                  <Typography variant="h5" padding="3% 0%" color="#bed245">
                    East Coast
                  </Typography>
                  <Box marginBottom="1rem">
                    {areas2.map((area, i) => (
                      <Box
                        key={i}
                        display="flex"
                        justifyContent="space-between"
                        padding="3% 0%"
                        borderBottom={
                          areas2.length === i + 1 ? "none" : "1px solid #e0e0e0"
                        }
                        sx={{ cursor: "pointer" }}
                      >
                        <Typography variant="caption">{area}</Typography>
                        <ArrowRightAltIcon fontSize="small" />
                      </Box>
                    ))}
                  </Box>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>

      <FAQ />

      <Footer />
    </Box>
  );
}

export default DesignStudio;
