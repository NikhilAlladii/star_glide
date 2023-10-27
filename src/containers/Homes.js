/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Grid,
  Menu,
  Paper,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Home from "./Home";
import { styled } from "styled-components";
import AvailabilityFilterMenu from "../components/AvailabilityFilterMenu";
import PriceRange from "../components/PriceRange";
import MoreFilters from "../components/MoreFilters";
import SortByFilters from "../components/SortByFilters";
import HomeDetails from "../components/HomeDetails";
import Search from "../components/Search";
import { useDispatch, useSelector } from "react-redux";
import { fetchHome, fetchHomes } from "../redux/homes/homeActions";
import GoogleMaps from "./GoogleMaps";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import MenuItem from "@mui/material/MenuItem";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import indianStates from "../constants/States";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import statesAndCities from "../constants/StatesandCities";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import "./Homes.css";
import theme from "../theme/theme";

const StyledMenu = styled(Menu)``;

const StyledBox = styled(Box)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)) !important;
  margin-left: 1rem;
`;

export const StyledButton = styled(Button)`
  font-weight: 300 !important;
`;

const StyledSelectTypography = styled(Typography)`
  font-weight: 500 !important;
`;

const StyledFilterMenu = styled(Box)`
  display: flex;
  align-items: center;
  font-weight: 400;
  justify-content: space-between;
  .MuiButton-text {
    color: black;
    text-transform: none;
  }
`;

const StyledAccordion = styled(Accordion)`
  .Mui-expanded {
    margin: 0px !important;
    min-height: 0px;
  }

  .MuiAccordionSummary-contentGutters {
    margin: 0px;
  }
`;

const StyledTabs = styled(Box)`
  font-size: 20px;
  font-weight: 500 !important;
`;

function Homes() {
  const dispatch = useDispatch();
  const newHomes = useSelector((state) => state.homes);

  const [homes, setHomes] = useState(newHomes);
  const [tempHomes, setTempHomes] = useState(newHomes);

  const [selectedState, setSelecetedState] = useState({
    latitude: 18.1124,
    longitude: 79.0193,
  });

  const [expanded, setExpanded] = useState(true);

  const [bedRoomData, setBedRoomData] = useState("");

  const [tab, setTab] = useState("neighbourHood");

  const isScreenSmall = useMediaQuery("(max-width:800px)");

  useEffect(() => {
    dispatch(fetchHomes());
  }, [dispatch]);

  useEffect(() => {
    setHomes(newHomes);
    setTempHomes(newHomes);
  }, [newHomes]);

  const handleSortBy = (value) => {
    setTempHomes(handleSwitch(value, [...homes]));
  };

  const handleSwitch = (value, homes) => {
    // eslint-disable-next-line default-case
    switch (value) {
      case "featured":
        return homes;

      case "price":
        const sortByPriceHomes = homes.sort((a, b) => a.price - b.price);
        return sortByPriceHomes;

      case "squareFeet":
        const sortBySquareFeetHomes = homes.sort(
          (a, b) => a.minSqFt - b.minSqFt
        );
        return sortBySquareFeetHomes;

      case "newest":
        const newHomes = homes;
        const newestDateObjects = newHomes.sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );

        return newestDateObjects;

      case "bedRooms":
        const sortByBedrooms = homes.sort((a, b) => a.minBeds - b.minBeds);
        return sortByBedrooms;

      case "bathRooms":
        const sortByBathRooms = homes.sort((a, b) => a.minBaths - b.minBaths);
        return sortByBathRooms;
      default:
        return homes;
    }
  };

  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNeighbourHoodTab = () => {
    setTab("neighbourHood");
  };

  const handleHomeTab = () => {
    setTab("home");
  };

  const handleAccordionChange = () => {
    setExpanded(!expanded);
  };



  const handleSelecetdState = (state) => {
    setSelecetedState(state.coordinates);
    setBedRoomData(state.state);
    if (state.state === bedRoomData) {
      setBedRoomData("");
    } else {
      setBedRoomData(state.state);
    }
  };

  const navigate = useNavigate();

  const handleHomeClick = (homeId) => {
    navigate(`/home/${homeId}`);
    dispatch(fetchHome(homeId));
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

  return (
    <Box className="container">
      <Grid container>
        <Grid
          item
          xs={12}
          // md={isScreenSmall ? 12 : 7}
          md={12}
          sx={{ paddingLeft: "1.5rem" }}
          className="box-1"
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 500,
              lineHeight: "1.2",
              color: theme.palette.secondary.main,
              marginLeft: "1rem",
              marginTop: "2.5rem",
            }}
          >
            Find Your Home in
          </Typography>
          <Box>
            <StyledSelectTypography
              onClick={handleClick}
              sx={{
                fontWeight: 500,
                lineHeight: "1.2",
                color: theme.palette.text.main,
                marginLeft: "1rem",
                marginTop: "0.5rem",
                display: "flex",
              }}
              variant="h3"
            >
              <span
                style={{
                  borderBottom: `1px solid ${theme.palette.border.main}`,
                }}
              >
                Denver Metro, CO
              </span>

              <Box>
                <CreateOutlinedIcon
                  sx={{
                    color: "black",
                    marginLeft: "1rem",
                    fontSize: "15px",
                    marginBottom: "0.3rem",
                    cursor: "pointer",
                  }}
                />
              </Box>
            </StyledSelectTypography>
            <StyledMenu anchorEl={anchorEl} open={open} onClose={handleClose}>
              <Box>
                <Grid container spacing={4} padding="1rem">
                  <Grid item md={3}>
                    {states.slice(0, 2).map((state, i) => (
                      <Box key={i} onClick={handleClose} className="homes-menu">
                        <Typography className="homes-state">
                          <b>{state.state}</b>
                        </Typography>
                        <Box>
                          {state.cities.map((city) => (
                            <Typography className="homes-city">
                              {city.name}
                            </Typography>
                          ))}
                        </Box>
                      </Box>
                    ))}
                  </Grid>
                  <Grid item md={3}>
                    {states.slice(2, 6).map((state, i) => (
                      <Box key={i} onClick={handleClose} className="homes-menu">
                        <Typography className="homes-state">
                          <b>{state.state}</b>
                        </Typography>
                        <Box>
                          {state.cities.map((city) => (
                            <Typography className="homes-city">
                              {city.name}
                            </Typography>
                          ))}
                        </Box>
                      </Box>
                    ))}
                  </Grid>
                  <Grid item md={3}>
                    {states.slice(6, 9).map((state, i) => (
                      <Box key={i} onClick={handleClose} className="homes-menu">
                        <Typography className="homes-state">
                          <b>{state.state}</b>
                        </Typography>
                        <Box>
                          {state.cities.map((city) => (
                            <Typography className="homes-city">
                              {city.name}
                            </Typography>
                          ))}
                        </Box>
                      </Box>
                    ))}
                  </Grid>
                  <Grid item md={3}>
                    {states.slice(9).map((state, i) => (
                      <Box key={i} onClick={handleClose} className="homes-menu">
                        <Typography className="homes-state">
                          <b>{state.state}</b>
                        </Typography>
                        <Box>
                          {state.cities.map((city) => (
                            <Typography className="homes-city">
                              {city.name}
                            </Typography>
                          ))}
                        </Box>
                      </Box>
                    ))}
                  </Grid>
                </Grid>
              </Box>
            </StyledMenu>
          </Box>
          <Box
            sx={{
              marginLeft: "0.8rem",
              marginRight: "0.8rem",
              padding: "2rem 0rem",
            }}
          >
            <Paper
              sx={{
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              }}
            >
              <StyledAccordion sx={{ boxShadow: "none" }} expanded={expanded}>
                <AccordionSummary
                  expandIcon={
                    <ExpandMoreIcon onClick={handleAccordionChange} />
                  }
                >
                  <Box>
                    <Typography
                      sx={{
                        fontSize: "1.1rem",
                        fontWeight: 300,
                        color: theme.palette.secondary.main,
                      }}
                    >
                      Where We Build in Denver Metro, CO
                    </Typography>
                    {expanded && (
                      <Typography
                        variant="caption"
                        sx={{ color: theme.palette.secondary.main }}
                      >
                        Select as many as you'd like
                      </Typography>
                    )}
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  {indianStates?.map((state, i) => (
                    <Button
                      key={i}
                      className="styled-button"
                      startIcon={
                        bedRoomData === state.state && (
                          <CheckCircleOutlineIcon
                            sx={{ fontSize: "15px !important" }}
                          />
                        )
                      }
                      sx={{
                        color: theme.palette.primary.main,
                        backgroundColor: `${
                          bedRoomData === state.state
                            ? "#BED344"
                            : "rgb(235,235,235)"
                        }`,
                        margin: "0.4rem",
                        fontSize: "0.6rem",
                        fontWeight: 700,
                      }}
                      onClick={() => handleSelecetdState(state)}
                    >
                      {state?.state}
                    </Button>
                  ))}
                </AccordionDetails>
              </StyledAccordion>
            </Paper>
          </Box>
          <Box>
            <Search
              homes={homes}
              setTempHomes={setTempHomes}
              handleSwitch={handleSwitch}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              marginLeft: "0.8rem",
              marginRight: "1rem",
              paddingTop: "2rem",
              borderBottom: "1px solid rgb(235 235 235)",
            }}
          >
            <Box
              onClick={handleNeighbourHoodTab}
              sx={{
                borderBottom:
                  tab === "neighbourHood"
                    ? "4px solid rgb(190 211 68)"
                    : "4px solid #FFFFFF",
                padding: "8px 0px",
                marginRight: "1rem",
                cursor: "pointer",
                color:
                  tab === "neighbourHood" ? theme.palette.secondary.main : "#8c8c8c !important",
              }}
            >
              <StyledTabs>12 Neighbourhoods</StyledTabs>
            </Box>
            <Box
              onClick={handleHomeTab}
              sx={{
                borderBottom:
                  tab === "home"
                    ? "4px solid rgb(190 211 68)"
                    : "4px solid #ffffff",
                padding: "8px 0px",
                cursor: "pointer",
                color: tab === "home" ? theme.palette.secondary.main : "#8c8c8c !important",
              }}
            >
              <StyledTabs >
                91 Homes & Floorplans
              </StyledTabs>
            </Box>
          </Box>

          <StyledFilterMenu sx={{ margin: "1rem" }}>
            <Box sx={{ display: "flex" }}>
              <AvailabilityFilterMenu
                menuTitle="Status & Availability"
                homes={homes}
                setTempHomes={setTempHomes}
                handleSwitch={handleSwitch}
              />
              <HomeDetails
                menuTitle="Home Detials"
                homes={homes}
                setTempHomes={setTempHomes}
                handleSwitch={handleSwitch}
              />
              <PriceRange
                menuTitle="Price Range"
                homes={homes}
                setHomes={setHomes}
                handleSwitch={handleSwitch}
                setTempHomes={setTempHomes}
              />
              <MoreFilters
                menuTitle="More"
                homes={homes}
                setTempHomes={setTempHomes}
                handleSwitch={handleSwitch}
              />
            </Box>
            <Box>
              <SortByFilters handleSortBy={handleSortBy} />
            </Box>
          </StyledFilterMenu>
          <StyledBox className="eachHome">
            {tempHomes?.length > 0 ? (
              tempHomes?.map((home, i) => (
                <Box onClick={() => handleHomeClick(home._id)} key={i}>
                  <Home home={home} key={i} />
                </Box>
              ))
            ) : (
              <Typography variant="h6">No Homes Available</Typography>
            )}
          </StyledBox>
        </Grid>
        {/* <Grid item xs={12} md={5} className="box-2">
          <Box className="map">
            <GoogleMaps selectedState={selectedState} />
          </Box>
        </Grid> */}
      </Grid>

      <Footer />
    </Box>
  );
}

export default Homes;
