import { Box, Grid, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import "./FinancingYourHome.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./Footer.js";
import Footer from "./Footer.js";
import InterestRate from "../components/IntrestRate";

function FinancingYourHome() {
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
            Financing<span style={{ color: "#848484" }}> Your Home</span>
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
          <Grid item md={6} color="#848484" className="right-container">
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
                color={eachTab.title === tab.title ? "#545454" : "#d2d0d0"}
              >
                <Typography
                  color={eachTab.title === tab.title ? "#545454" : "#d2d0d0"}
                  variant="h6"
                  marginBottom="1rem"
                >
                  {eachTab.title}
                </Typography>
                <Box
                  className="tab-text"
                  color={eachTab.title === tab.title ? "#545454" : "#d2d0d0"}
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
              <Typography variant="h3" color="#848484">
                The path{" "}
                <span style={{ color: "rgb(207, 229, 72)" }}>home</span>
              </Typography>
            </Grid>
            <Grid item md={7} color="#848484">
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
                <Typography color="#848484">{home.text}</Typography>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>

      <Box bgcolor="rgb(191, 191, 191)" padding="5.5rem 3.25rem">
        <Box>
          <Typography variant="caption" color="#FFFFFF">
            GET PRE-QUALIFIED
          </Typography>
          <Typography
            variant="h3"
            fontWeight="500"
            color="#FFFFFF"
            padding="1.5rem 0rem"
          >
            Take the next step
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Box width="60%">
            <Typography color="#545454">
              If you are serious about purchasing a new home from Tri Pointe
              Homes, and we think you are, getting pre-qualified and joining the
              priority group for your desired community will put you one step
              closer to homeownership.
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
                GET STARTED
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        bgcolor="rgb(132, 132, 132)"
        color="#FFFFFF"
        marginBottom="2rem"
        padding="5.5rem 3.25rem"
      >
        <Typography variant="body1">WHAT OUR HOMEOWNERS SAY</Typography>
        <Typography variant="h3" padding="1.5rem 0rem">
          "Our New Home Loan Consultant gets a super WOW! Obtaining loans and
          qualifying is a trying process, but she made it easy. She is a great
          communicator and caring person. Thank you for assigning her to us!"
        </Typography>
        <Typography variant="body1">- TRI POINTE HOMES HOMEOWNER</Typography>
      </Box>

      <Grid
        container
        marginBottom="5rem"
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

      <Box padding="4rem 3.25rem" margin="4rem 0rem">
        <Box>
          <Typography variant="h3" color="#545454" paddingBottom="1.5rem">
            Helpful 
            <span style={{ color: "rgb(207, 229, 72)" }}>
               &nbsp;financing resources
            </span>
          </Typography>
        </Box>
        <Box >
          <Typography variant="caption" color="#848484">HOMEBUYING GUIDES</Typography>
          {/* <Box borderTop="1px solid #545454"></Box> */}
        </Box>
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
            Advantages of using
            <br />
            <span style={{ color: "rgb(207, 229, 72)" }}>
              Tri Pointe Connect
            </span>
          </Typography>

          <Typography
            sx={{
              color: "#545454",
              margin: "1rem 0rem",
              width:"38%",
              borderBottom:"3px solid #bed245"
            }}
          >
            Download Resource
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
            Homebuyer mortgage
            <span style={{ color: "rgb(207, 229, 72)" }}>dos and don’ts</span>
          </Typography>

          <Typography
            sx={{
              color: "#545454",
              margin: "1rem 0rem",
              width:"38%",
              borderBottom:"3px solid #bed245"
            }}
          >
            Download Resource
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
            First time
            <br />
            <span style={{ color: "rgb(207, 229, 72)" }}>homebuyers guide</span>
          </Typography>

          <Typography
            sx={{
              color: "#545454",
              margin: "1rem 0rem",
              width:"38%",
              borderBottom:"3px solid #bed245"
            }}
          >
            Download Resource
          </Typography>
        </Grid>
      </Grid>

      <Footer />
    </Box>
  );
}

export default FinancingYourHome;
