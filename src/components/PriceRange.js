/* eslint-disable react-hooks/exhaustive-deps */
import PropTypes from "prop-types";
import Slider, { SliderThumb } from "@mui/material/Slider";
import Box from "@mui/material/Box";
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
    padding: 6px 0px;
    color: ${theme.palette.secondary.main};
    font-weight: 300;
    font-size: 0.8rem;
    font-family: "new-atten", Arial, sans-serif !important;
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
    "& .airbnb-bar": {
      height: 9,
      width: 1,
      backgroundColor: "currentColor",
      marginLeft: 1,
      marginRight: 1,
    },
  },
}));

const PriceMinimumTextField = styled((props) => (
  <TextField
    InputProps={{
      disableUnderline: true,
      startAdornment: (
        <InputAdornment sx={{ paddingTop: "1rem" }} position="end">
          $
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
}));

const PriceMaximumTextField = styled((props) => (
  <TextField
    InputProps={{
      disableUnderline: true,
      startAdornment: (
        <InputAdornment sx={{ paddingTop: "1rem" }} position="end">
          $
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

function PriceRange({
  menuTitle,
  homes,
  handleSwitch,
  setTempHomes,
  handlePricerangeTickIcon,
  setPricerangeTickIcon,
  sliderValue,
  setSliderValue,
}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handlePriceSliderChange = (event, newValue) => {
    setSliderValue(newValue);
  };

  const handleMinimumPrice = (newValue) => {
    const newSliderValue = [...sliderValue];
    newSliderValue[0] = newValue;
    setSliderValue(newSliderValue);
  };

  const handleMaximumPrice = (newValue) => {
    const newSliderValue = [...sliderValue];
    newSliderValue[1] = newValue;
    setSliderValue(newSliderValue);
  };

  const tickIcon = [];

  const handleTickIcon = () => {
    if (sliderValue[0] > 1 || sliderValue[1] < 1000) {
      tickIcon.push(true);
    }
    const handleTick = tickIcon.find((tick) => {
      return tick === true;
    });
    setPricerangeTickIcon(handleTick);
  };

  useEffect(() => {
    const filteredArray = homes?.filter(
      (item) => item.price >= sliderValue[0] && item.price <= sliderValue[1]
    );
    handleTickIcon();
    setTempHomes(handleSwitch("featured", filteredArray));
  }, [sliderValue[0], sliderValue[1]]);

  return (
    <div>
      <StyledButton onClick={handleClick}>
        {menuTitle}
        {handlePricerangeTickIcon && <StyledCircleIcon fontSize="small" />}
        {anchorEl ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
      </StyledButton>
      <StyledMenu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <Typography variant="caption">{menuTitle}</Typography>
        <Box sx={{ width: 250 }}>
          <Box sx={{ m: 3 }} />
          <AirbnbSlider
            slots={{ thumb: AirbnbThumbComponent }}
            value={sliderValue}
            min={1}
            max={1000}
            onChange={handlePriceSliderChange}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <PriceMinimumTextField
            label="Minimum"
            value={sliderValue[0]}
            onChange={(e) => handleMinimumPrice(e.target.value)}
            variant="filled"
            style={{ marginRight: 11, marginTop: 11 }}
          />{" "}
          -{" "}
          <PriceMaximumTextField
            label="Maximum"
            value={sliderValue[1]}
            onChange={(e) => handleMaximumPrice(e.target.value)}
            id="reddit-input"
            variant="filled"
            style={{ marginLeft: 11, marginTop: 11 }}
          />
        </Box>
      </StyledMenu>
    </div>
  );
}

export default PriceRange;
