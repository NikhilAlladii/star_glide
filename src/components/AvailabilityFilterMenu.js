/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Typography } from "@mui/material";
import { styled } from "styled-components";
import { StyledButton } from "../containers/Homes";

export const StyledMenu = styled(Menu)`
  .MuiPaper-root {
    min-width: 250px;
  }
  .MuiList-root {
    padding: 1.5rem;
  }
  .MuiButtonBase-root {
    padding: 6px 0px;
    color: #545454;
    font-weight: 300;
    font-size: 0.8rem;
    font-family: "new-atten", Arial, sans-serif !important;
  }
  .MuiTypography-root {
    font-weight: 700;
  }
`;

function AvailabilityFilterMenu({
  menuTitle,
  setTempHomes,
  homes,
  handleSwitch,
}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [availabilityFilterMenu, setAvailabilityFilterMenu] = useState([
    {
      label: "Move In Ready",
      id: "moveInReady",
      checked: false,
      value: "moveInReady",
    },
    {
      label: "Ready To Build",
      id: "readyToBuild",
      checked: false,
      value: "readyToBuild",
    },
  ]);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleAvailabilityChange = (e) => {
    const targetIndex = availabilityFilterMenu.findIndex(
      (obj) => obj.value === e.target.value
    );
    if (targetIndex !== -1) {
      availabilityFilterMenu[targetIndex].checked = e.target.checked;
    }
    const filteredArray = homes?.filter(
      (item) =>
        item.moveInReady === availabilityFilterMenu[0].checked &&
        item.readyToBuild === availabilityFilterMenu[1].checked
    );
    setTempHomes(handleSwitch("featured", filteredArray));
  };

  return (
    <div>
      <StyledButton onClick={handleClick}>
        {menuTitle}
        {anchorEl ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
      </StyledButton>
      <StyledMenu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <Typography variant="caption">{menuTitle}</Typography>
        {availabilityFilterMenu?.map((availability, i) => (
          <MenuItem key={i} onClick={handleClose}>
            <input
              type="checkbox"
              checked={availability?.checked}
              value={availability?.value}
              onChange={(e) => handleAvailabilityChange(e)}
            />
            {availability.label}
          </MenuItem>
        ))}
      </StyledMenu>
    </div>
  );
}

export default AvailabilityFilterMenu;
