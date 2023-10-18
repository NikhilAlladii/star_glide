/* eslint-disable no-unused-vars */
import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./IndividualHomeDetails.css";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import { fetchHome, fetchHomes } from "../redux/homes/homeActions";
import WestIcon from "@mui/icons-material/West";
import Home from "./Home";
import Footer from "./Footer";
import PathHome from "../components/PathHome";
import IntrestList from "../components/IntrestList";
import LivingSmart from "../components/LivingSmart";
import FAQ from "../components/FAQ";

const StyledBox = styled(Box)`
  .MuiTypography-h3 {
    color: #848484;
    font-weight: 500;
  }
  .MuiTypography-caption {
    padding: 8px 16px 6px;
    margin: 0px 14px 10px 0px;
    border-radius: 4px;
    border: 1px solid #9eb50d;
    color: #9eb50d;
    line-height: 1.1;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 10px;
  }
  .MuiTypography-body1 {
    font-size: 14px;
    color: rgb(132, 132, 132);
    line-height: 1.57142;
  }
`;

const StyledBoxHomeDetails = styled(Box)`
  .MuiTypography-body1 {
    font-size: 24px;
    font-weight: 500;
    line-height: 1.57142;
  }
  .MuiTypography-caption {
    font-weight: 700;
    color: #bfbfc0;
    margin-top: 0.8rem;
  }
`;
const AddressBox = styled(Grid)`
  .MuiTypography-h4 {
    font-size: 40px;
    color: rgb(191, 191, 191);
    letter-spacing: -0.02em;
    line-spacing: 1.2;
    font-weight: 200;
  }
  .MuiTypography-caption {
    color: rgb(191, 191, 191);
    font-size: 12px;
  }
  .MuiTypography-body1 {
    color: rgb(36, 36, 36);
    padding-top: 12px;
  }
  .MuiTypography-body2 {
    color: #242424;
  }
  .MuiButton-textPrimary {
    color: #242424;
  }
`;

const StyledBoxHomes = styled(Box)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)) !important;
`;

function IndividualHomeDetails() {
  const newHome = useSelector((state) => state.home);

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const newHomes = useSelector((state) => state.homes);

  const [homes, setHomes] = useState(newHomes);
  const [tempHomes, setTempHomes] = useState(newHomes);

  useEffect(() => {
    dispatch(fetchHomes());
  }, [dispatch]);

  useEffect(() => {
    setHomes(newHomes);
    setTempHomes(newHomes);
  }, [newHomes]);

  const handleHomeClick = (homeId) => {
    navigate(`/home/${homeId}`);
    dispatch(fetchHome(homeId));
  };

  const goToHomePage = () => {
    navigate(`/`);
  };

  const [isHovered4, setHovered4] = useState(false);

  const handleBox4Hover = () => {
    setHovered4(true);
  };

  const handleBox4Leave = () => {
    setHovered4(false);
  };

  return (
    <Box className="your-target-element">
      <Box className="image-container">
        <img
          src="https://www.tripointehomes.com/wp-content/uploads/Whispering-Hills-5411-C-SCH10-Header-1.jpg"
          alt="home"
          className="each-home-image"
        />
        <Box className="card-bottom-text">
          <Box className="bottom-left-content" sx={{ height: "100%" }}>
            <Typography className="bottom-left-text">Floorplans</Typography>
            <Typography className="bottom-left-text">Neighborhood</Typography>
            <Typography className="bottom-left-text">Gallery</Typography>
            <Typography className="bottom-left-text">
              Neighborhood Map
            </Typography>
          </Box>
          <Box className="bottom-right-content">
            <Box
              className={` row-text row-text-first box ${
                isHovered4 ? "hovered-box" : ""
              }`}
              onMouseEnter={handleBox4Hover}
              onMouseLeave={handleBox4Leave}
            >
              <Box>
                <Typography className="top-text">
                  Join the Interest List
                </Typography>
                <Typography variant="caption">Stay in the know</Typography>
              </Box>
              <Box></Box>
            </Box>
            <Box className="row-text row-text-second">
              <Box>
                <Typography sx={{ marginRight: "2rem" }}>
                  Get in Touch
                </Typography>
                <Typography variant="caption" sx={{ marginRight: "2rem" }}>
                  Call or chat with us
                </Typography>
              </Box>
              <Box>
                <img
                  src="https://www.tripointehomes.com/wp-content/uploads/Jacqueline-Irina-Web-2022.jpg"
                  alt="employee"
                  className="employee-image"
                />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className="top-button">
          <WestIcon fontSize="small" sx={{ marginRight: "8px" }} />
          <Typography
            className="top-button-text"
            variant="caption"
            onClick={goToHomePage}
          >
            Whispering Hills
          </Typography>
        </Box>

        <Box className="centered-box">
          <Typography variant="caption" color="#ffffff" fontSize="12px">
            RIDGE COLLECTION AT WHISPERING HILLS
          </Typography>
          <Typography variant="h2" className="centered-box-text">
            A mountain of adventure{" "}
            <span style={{ color: "#cfe548" }}>awaits</span>
          </Typography>
        </Box>
      </Box>

      <Box className="home-div">
        <StyledBox>
          <strong>
            <Typography variant="h3">
              Ridge Collection at
              <br /> Whispering Hills
            </Typography>
          </strong>
          <Box sx={{ margin: "1rem 0.9rem 0.8rem 0px" }}>
            <Typography variant="caption">Priority Group Forming</Typography>
          </Box>
          <Typography variant="body1">
            New homes in Laveen, Arizona. Priced from the mid $500s
          </Typography>
        </StyledBox>
        <StyledBoxHomeDetails className="home-details-div">
          <Box className="each-home-details-div">
            <Typography variant="body1">2,346 - 2,987</Typography>
            <Typography variant="caption">SQ. FOOTAGE</Typography>
          </Box>
          <Box className="each-home-details-div">
            <Typography variant="body1">3 - 4</Typography>
            <Typography variant="caption">BEDROOMS</Typography>
          </Box>
          <Box className="each-home-details-div">
            <Typography variant="body1">2.5 - 3.5</Typography>
            <Typography variant="caption">BATHROOMS</Typography>
          </Box>
          <Box className="each-home-details" sx={{ margin: "0rem 1rem" }}>
            <Typography variant="body1">3</Typography>
            <Typography variant="caption">GARAGE</Typography>
          </Box>
        </StyledBoxHomeDetails>
      </Box>

      <AddressBox
        container
        sx={{ display: "flex", padding: "27px 51px 20px 51px" }}
      >
        <Grid item md={9}>
          <Typography variant="h4">
            The northern most neighborhood at Whispering Hills include 80
            homesites. The Ridge Collection is single-story
          </Typography>
          <Box sx={{ display: "flex", padding: "56px 0px 22px 0px" }}>
            <Box>
              <img
                src="https://www.tripointehomes.com/wp-content/uploads/Jacqueline-Irina-Web-2022.jpg"
                alt="employee"
                className="employee-image"
              />
            </Box>
            <Box padding="0.8rem 0px 0px 2rem">
              <Typography variant="caption">
                CONTACT OUR NEW HOME SPECIALISTS
              </Typography>
              <Typography variant="body1">Jacqueline & Irina</Typography>
              <a
                href="https://www.tripointehomes.com/"
                className="number-link"
                target="_blank"
                rel="noreferrer"
              >
                480.847.5344
              </a>
            </Box>
          </Box>
        </Grid>
        <Grid item md={3}>
          <Box className="address-box">
            <Typography className="address-text" variant="caption">
              ADDRESS
            </Typography>
            <Typography className="house-number-text" variant="body2">
              3824 W. Whispering Hills Dr., Laveen, Arizona 85339
            </Typography>
            <Typography className="house-number-text" variant="body2">
              Get Directions
            </Typography>
          </Box>
          <Box>
            <Typography className="hours-text">DAILY HOURS</Typography>
            <Typography variant="body2">Coming Fall 2023</Typography>
            <Typography variant="body2">Join the Priority Group</Typography>
          </Box>
          <Box marginTop="47px" width="100%">
            <Button className="qualified-button">Get pre-qualified</Button>
          </Box>
        </Grid>
      </AddressBox>

      <Box padding="60px" margin="60px 0px">
        <Typography className="home-plans-text" variant="caption">
          HOME PLANS
        </Typography>
        <Typography className="find-home-text" variant="h3" marginBottom="54px">
          Find your dream <span className="home-text">home</span>
        </Typography>

        <StyledBoxHomes className="eachHome">
          {tempHomes?.length > 0 ? (
            tempHomes?.map((home, i) => (
              <Box onClick={() => handleHomeClick(home._id)}>
                <Home home={home} key={i} />
              </Box>
            ))
          ) : (
            <Typography variant="h6">No Homes Available</Typography>
          )}
        </StyledBoxHomes>
      </Box>

      <IntrestList />
      <img
        src="https://www.tripointehomes.com/wp-content/uploads/Drone-Whispering-Hills.jpg"
        alt="home"
        className="home-background-image"
      />

      <PathHome />

      <LivingSmart />
      <FAQ />

      <Footer />
    </Box>
  );
}

export default IndividualHomeDetails;
