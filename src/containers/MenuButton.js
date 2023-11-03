import React from "react";
import "./MenuButton.css";
import { Box, Grid, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Dialog from "@mui/material/Dialog";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "styled-components";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import DialogSearch from "../components/DialogSearch";
import { useNavigate } from "react-router-dom";

const StyledDialog = styled(Dialog)`
  .MuiDialog-paperScrollPaper {
    background-color: #505050 !important;
    padding: 2rem;
  }
`;

function MenuButton() {
  const navigate = useNavigate();

  const imageLink =
    "data:image/png;base64,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";

  const dialogImage =
    "data:image/png;base64,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";
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const gotoFinancePage = () => {
    navigate("/");
    handleClose();
  };

  const gotoAboutPage = () => {
    navigate("/about");
    handleClose();
  };

  const gotoYourHomePage = () => {
    navigate("/your-new-home");
    handleClose();
  };

  const gotoFinanceHomePage = () => {
    navigate("/financing-your-home");
    handleClose();
  };

  const gotoLivingSmartPage = () => {
    navigate("/livingsmart");
    handleClose();
  };

  const gottoDesignStudioPage = () => {
    navigate("/design-studio");
    handleClose();
  };

  const gotoBlog = () => {
    navigate("/blog");
    handleClose();
  };

  const states = [
    {
      state: "Arizona",
      cities: [
        {
          name: "Phoenix Metro",
        },
      ],
    },
    {
      state: "California",
      cities: [
        {
          name: "Bay Area",
        },
        {
          name: "Los Angeless Country",
        },
        {
          name: "Orange Country",
        },
        {
          name: "Riverside Country",
        },
        {
          name: "Sacramento",
        },
        {
          name: "San Berrnardino Country",
        },
        {
          name: "San Diego Country",
        },
      ],
    },
    {
      state: "Colorado",
      cities: [
        {
          name: "Denver Metro",
        },
      ],
    },
    {
      state: "District Of Columbia",
      cities: [
        {
          name: "Washington D.C",
        },
      ],
    },
    {
      state: "Maryland",
      cities: [
        {
          name: "Montgomery Country",
        },
      ],
    },
    {
      state: "Nevada",
      cities: [
        {
          name: "Las Vegas",
        },
      ],
    },
    {
      state: "North Carolina",
      cities: [
        {
          name: "Charlotte",
        },
        {
          name: "Raleigh",
        },
      ],
    },
    {
      state: "South Carolina",
      cities: [
        {
          name: "York Country",
        },
      ],
    },
    {
      state: "Texas",
      cities: [
        {
          name: "Austin",
        },
        {
          name: "Dallas-Fort Worth",
        },
        {
          name: "Houston",
        },
      ],
    },
    {
      state: "Virginia",
      cities: [
        {
          name: "Alexandria",
        },
        {
          name: "Loudoun County",
        },
      ],
    },
    {
      state: "Washington",
      cities: [
        {
          name: "Greater Seattle Area",
        },
      ],
    },
  ];

  const footer_links = [
    "Tri Pointe Solutions",
    "LiveAbility",
    "Homeowners",
    "Brokers",
    "Careers",
    "Trade Partners",
    "Investors",
    "Contact Us",
  ];

  return (
    <Box sx={{ position: "relative" }}>
      <Box className="header-parent">
        <Box className="header-menu">
          <img src={imageLink} alt="company" />
          <MenuIcon
            fontSize="large"
            sx={{ marginLeft: "1rem" }}
            onClick={handleClickOpen}
          />
        </Box>
      </Box>

      <Box>
        <StyledDialog
          fullScreen
          open={open}
          onClose={handleClose}
          className="dialog-content"
        >
          <Grid md={12}>
            <Box display="flex" justifyContent="space-between">
              <Box></Box>
              <Box className="dialog-home-parent">
                <img src={dialogImage} alt="company" className="dialog-home" />
                <CloseIcon
                  fontSize="large"
                  sx={{ marginLeft: "1rem", color: "#fff" }}
                  onClick={handleClose}
                />
              </Box>
            </Box>
          </Grid>

          <Box>
            <Grid container spacing={8} marginTop="1rem">
              <Grid item md={9}>
                <Typography variant="h3" color="#fff" marginBottom="1rem">
                  <span style={{ color: "rgb(163 193 68)" }}>Where</span> do you
                  want to live?
                </Typography>
                <Box marginBottom="1.5rem">
                  <DialogSearch />
                </Box>
                <Box>
                  <Grid container spacing={4}>
                    <Grid item md={3}>
                      {states.slice(0, 2).map((state) => (
                        <Box>
                          <Typography className="dialog-state">
                            <b>{state.state}</b>
                          </Typography>
                          <Box>
                            {state.cities.map((city) => (
                              <Typography className="dialog-city">
                                {city.name}
                              </Typography>
                            ))}
                          </Box>
                        </Box>
                      ))}
                    </Grid>
                    <Grid item md={3}>
                      {states.slice(2, 6).map((state) => (
                        <Box>
                          <Typography className="dialog-state">
                            <b>{state.state}</b>
                          </Typography>
                          <Box>
                            {state.cities.map((city) => (
                              <Typography className="dialog-city">
                                {city.name}
                              </Typography>
                            ))}
                          </Box>
                        </Box>
                      ))}
                    </Grid>
                    <Grid item md={3}>
                      {states.slice(6, 9).map((state) => (
                        <Box>
                          <Typography className="dialog-state">
                            <b>{state.state}</b>
                          </Typography>
                          <Box>
                            {state.cities.map((city) => (
                              <Typography className="dialog-city">
                                {city.name}
                              </Typography>
                            ))}
                          </Box>
                        </Box>
                      ))}
                    </Grid>
                    <Grid item md={3}>
                      {states.slice(9).map((state) => (
                        <Box>
                          <Typography className="dialog-state">
                            <b>{state.state}</b>
                          </Typography>
                          <Box>
                            {state.cities.map((city) => (
                              <Typography className="dialog-city">
                                {city.name}
                              </Typography>
                            ))}
                          </Box>
                        </Box>
                      ))}
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
              <Grid item md={3}>
                <Box>
                  <Box
                    className="dialog-text-centered"
                    onClick={gotoFinancePage}
                  >
                    <Typography variant="h5">Find Your Home</Typography>
                    <ChevronRightIcon />
                  </Box>
                  <Box className="dialog-text-centered" onClick={gotoAboutPage}>
                    <Typography variant="h5">About Us</Typography>
                    <ChevronRightIcon />
                  </Box>
                  <Box
                    className="dialog-text-centered"
                    onClick={gotoYourHomePage}
                  >
                    <Typography variant="h5">Your New Home</Typography>
                    <ChevronRightIcon />
                  </Box>
                  <Box
                    className="dialog-text-centered"
                    onClick={gotoFinanceHomePage}
                  >
                    <Typography variant="h5">Finanacing Your Home</Typography>
                    <ChevronRightIcon />
                  </Box>
                  <Box
                    className="dialog-text-centered"
                    onClick={gotoLivingSmartPage}
                  >
                    <Typography variant="h5">Living Smart</Typography>
                    <ChevronRightIcon />
                  </Box>
                  <Box
                    className="dialog-text-centered"
                    onClick={gottoDesignStudioPage}
                  >
                    <Typography variant="h5">Design Studio</Typography>
                    <ChevronRightIcon />
                  </Box>
                  <Box className="dialog-text-centered" onClick={gotoBlog}>
                    <Typography variant="h5">Blog</Typography>
                    <ChevronRightIcon />
                  </Box>
                </Box>

                <Typography variant="body2" className="signin-button">
                  SIGN IN
                </Typography>

                <Typography variant="body2" marginTop="2rem" color="#ffffff">
                  Create Account
                </Typography>
              </Grid>
            </Grid>
          </Box>

          <Grid item md={12} marginTop="2rem">
            {footer_links.map((each_link) => (
              <Typography variant="caption" className="dialog-footer-links">
                {each_link}
              </Typography>
            ))}
          </Grid>
        </StyledDialog>
      </Box>
    </Box>
  );
}

export default MenuButton;
