import PropTypes from "prop-types";
import Slider, { SliderThumb } from "@mui/material/Slider";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { InputAdornment, Typography } from "@mui/material";
import { styled } from "styled-components";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import { StyledButton } from "../containers/Homes";
import theme from "../theme/theme";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const StyledCircleIcon = styled(CheckCircleOutlineIcon)`
  margin-left: 0.5rem;
  background-color: rgb(235 245 194);
  opacity: 0.7;
  width: 1rem !important;
  height: 1rem !important;
  padding: 0.1rem !important;
  border-radius: 50%;
`;

const StyledMenu = styled(Menu)`
  .MuiPaper-root {
    min-width: 250px;
  }
  .MuiList-root {
    padding: 1.5rem;
  }
  .MuiButtonBase-root {
    color: ${theme.palette.secondary.main};
    border-radius: 0.8rem;
    border: 1px solid #c8c8c8;
    min-width: 0px;
    padding: 0px 8px;
    font-size: 1rem;
  }

  .MuiTypography-root {
    font-weight: 700;
  }
`;

const AirbnbSlider = styled(Slider)(() => ({
  color: `${theme.palette.secondary.main} !important`,
  marginLeft: "0.8rem",
  height: "1px !important",
  padding: "13px 0",
  "& .MuiSlider-thumb": {
    height: 27,
    width: 27,
    backgroundColor: "#fff",
    border: "1px solid currentColor",
    "&:hover": {
      boxShadow: "0 0 0 8px rgba(58, 133, 137, 0.16)",
    },
    "& .MuiSlider-root": {
      height: 1,
    },
    "& .airbnb-bar": {
      height: 9,
      width: 1,
      backgroundColor: "currentColor",
      marginLeft: 1,
      marginRight: 1,
    },
  },
}));

const RedditTextField = styled((props) => (
  <TextField
    InputProps={{
      disableUnderline: true,
      endAdornment: (
        <InputAdornment sx={{ fontSize: "20px" }} position="end">
          sq. ft.
        </InputAdornment>
      ),
    }}
    {...props}
  />
))(({ theme }) => ({
  width: "150px",
  "& .MuiFilledInput-root": {
    overflow: "hidden",
    border: "1px solid",
  },
  "& .MuiTypography-body1": {
    fontSize: "10px",
    paddingTop: "1rem",
  },
}));

function AirbnbThumbComponent(props) {
  const { children, ...other } = props;
  return (
    <SliderThumb {...other}>
      {children}
      <span className="airbnb-bar" />
      <span className="airbnb-bar" />
      <span className="airbnb-bar" />
    </SliderThumb>
  );
}

AirbnbThumbComponent.propTypes = {
  children: PropTypes.node,
};

function HomeDetails({
  menuTitle,
  setTempHomes,
  homes,
  handleSwitch,
  handleHomeDetailsTickIcon,
  sethandleHomeDetailsTickIcon,
  bathRoomData,
  setBathRoomData,
  homeDetailsBedRoomData,
  setHomeDetailsBedRoomData,
  garageData,
  setGarageData,
  homeDetailsSliderValue,
  setHomeDetailsSliderValue,
}) {
  const [anchorEl, setAnchorEl] = useState(null);
  // const [bathRoomData, setBathRoomData] = useState("");
  // const [homeDetailsBedRoomData, setHomeDetailsBedRoomData] = useState("");
  // const [garageData, setGarageData] = useState("");
  // const [homeDetailsSliderValue, setHomeDetailsSliderValue] = useState([
  //   0, 2000,
  // ]);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const rooms = [1, 2, 3, 4, 5, 6, 7];
  const baths = [1, 2, 3, 4, 5, 6, 7];
  const garages = [1, 2, 3, 4, 5, 6];

  const toggleBathroom = (bathRoom) => {
    setBathRoomData(bathRoom);
    if (bathRoom === bathRoomData) {
      setBathRoomData("");
    } else {
      setBathRoomData(bathRoom);
    }
  };

  const toggleBedroom = (bedRoom) => {
    setHomeDetailsBedRoomData(bedRoom);
    if (bedRoom === homeDetailsBedRoomData) {
      setHomeDetailsBedRoomData("");
    } else {
      setHomeDetailsBedRoomData(bedRoom);
    }
  };

  const toggleGarage = (garage) => {
    setGarageData(garage);
    if (garage === garageData) {
      setGarageData("");
    } else {
      setGarageData(garage);
    }
  };

  const handleMinimumPrice = (newValue) => {
    const newSliderValue = [...homeDetailsSliderValue];
    newSliderValue[0] = newValue;
    setHomeDetailsSliderValue(newSliderValue);
  };

  const handleMaximumPrice = (newValue) => {
    const newSliderValue = [...homeDetailsSliderValue];
    newSliderValue[1] = newValue;
    setHomeDetailsSliderValue(newSliderValue);
  };

  const handlePriceSliderChange = (event, newValue) => {
    setHomeDetailsSliderValue(newValue);
  };
  const tickIcon = [];

  function handleHomeDetails() {
    let filteredHomes = homes;
    if (bathRoomData >= 1) {
      tickIcon.push(true);
      filteredHomes = homes?.filter((home) => home.minBath >= bathRoomData);
      filteredHomes = handleSwitch("featured", filteredHomes);
    }
    if (homeDetailsBedRoomData >= 1) {
      tickIcon.push(true);
      filteredHomes = filteredHomes?.filter(
        (home) => home.minBeds >= homeDetailsBedRoomData
      );
    }
    if (garageData >= 1) {
      tickIcon.push(true);
      filteredHomes = filteredHomes.filter((home) => home.garage >= garageData);
    }
    if (homeDetailsSliderValue[0] >= 1) {
      tickIcon.push(true);
      filteredHomes = filteredHomes?.filter(
        (item) =>
          item.minSqFt >= homeDetailsSliderValue[0] &&
          item.minSqFt <= homeDetailsSliderValue[1]
      );
    }
    setTempHomes(handleSwitch("featured", filteredHomes));
    const handleTick = tickIcon.find((tick) => {
      return tick === true;
    });

    sethandleHomeDetailsTickIcon(handleTick);
  }

  useEffect(() => {
    handleHomeDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    bathRoomData,
    homeDetailsBedRoomData,
    garageData,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    homeDetailsSliderValue[0],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    homeDetailsSliderValue[1],
  ]);

  return (
    <div>
      <StyledButton onClick={handleClick}>
        {menuTitle}
        {handleHomeDetailsTickIcon && <StyledCircleIcon fontSize="small" />}
        {anchorEl ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
      </StyledButton>
      <StyledMenu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <Typography variant="caption">Square Footage</Typography>
        <Box sx={{ width: 250 }}>
          <Box sx={{ m: 3 }} />
          <AirbnbSlider
            min={0}
            max={2000}
            slots={{ thumb: AirbnbThumbComponent }}
            value={homeDetailsSliderValue}
            onChange={handlePriceSliderChange}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <RedditTextField
            label="Minimum"
            value={homeDetailsSliderValue[0]}
            onChange={(e) => handleMinimumPrice(e.target.value)}
            variant="filled"
            style={{ marginRight: 11, marginTop: 11 }}
          />{" "}
          -{" "}
          <RedditTextField
            label="Maximum"
            value={homeDetailsSliderValue[1]}
            onChange={(e) => handleMaximumPrice(e.target.value)}
            variant="filled"
            style={{ marginLeft: 11, marginTop: 11 }}
          />
        </Box>

        <Box sx={{ marginTop: "1rem" }}>
          <Typography variant="caption" sx={{ marginBottom: "0.5rem" }}>
            Bedrooms
          </Typography>
          <br />
          {rooms.map((room, i) => (
            <Button
              variant="outlined"
              key={i}
              sx={{
                margin: "0.5rem 1rem 1rem 0rem",
                backgroundColor: `${
                  homeDetailsBedRoomData === room ? "#DFF498" : ""
                }`,
              }}
              onClick={() => toggleBedroom(room)}
            >
              {room}+
            </Button>
          ))}
        </Box>

        <Box>
          <Typography variant="caption" sx={{ marginBottom: "0.5rem" }}>
            Bathrooms
          </Typography>
          <br />
          {baths.map((bathRoom, i) => (
            <Button
              variant="outlined"
              key={i}
              sx={{
                margin: "0.5rem 1rem 1rem 0rem",
                backgroundColor: `${
                  bathRoomData === bathRoom ? "#DFF498" : ""
                }`,
              }}
              onClick={() => toggleBathroom(bathRoom)}
            >
              {bathRoom}+
            </Button>
          ))}
        </Box>

        <Box>
          <Typography variant="caption" sx={{ marginBottom: "0.5rem" }}>
            Garages
          </Typography>
          <br />
          {garages.map((garage, i) => (
            <Button
              variant="outlined"
              key={i}
              sx={{
                margin: "0.5rem 1rem 0rem 0rem",
                backgroundColor: `${garageData === garage ? "#DFF498" : ""}`,
              }}
              onClick={() => toggleGarage(garage)}
            >
              {garage}+
            </Button>
          ))}
        </Box>
      </StyledMenu>
    </div>
  );
}

export default HomeDetails;
