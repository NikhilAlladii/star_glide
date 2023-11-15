/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Typography } from "@mui/material";
import { styled } from "styled-components";
import { StyledButton } from "../containers/Homes";
import theme from "../theme/theme";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

export const StyledMenu = styled(Menu)`
  .MuiPaper-root {
    min-width: 250px;
  }
  .MuiList-root {
    padding: 1.5rem;
  }
  .MuiButtonBase-root {
    padding: 6px 0px;
    color: ${theme.palette.primary.main};
    font-weight: 300;
    font-size: 0.8rem;
    font-family: "new-atten", Arial, sans-serif !important;
  }
  .MuiTypography-root {
    font-weight: 700;
  }
`;

const StyledCircleIcon = styled(CheckCircleOutlineIcon)`
  margin-left: 0.5rem;
  background-color: rgb(235 245 194);
  opacity: 0.7;
  width: 1rem !important;
  height: 1rem !important;
  padding: 0.1rem !important;
  border-radius: 50%;
`;

function AvailabilityFilterMenu({
  menuTitle,
  setTempHomes,
  homes,
  handleSwitch,
  availabilityFilterMenu,
  setAvailabilityFilterMenu,
  handleAvailabilityTickIcon,
  setAvailabilityTickHandleIcon,
}) {
  const [anchorEl, setAnchorEl] = React.useState(null);

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
    setAvailabilityFilterMenu([...availabilityFilterMenu]);
  };

  const tickIcon = [];

  useEffect(() => {
    availabilityFilterMenu.map((menu) => {
      tickIcon.push(menu.checked);
    });

    const handleTick = tickIcon.find((tick) => {
      return tick === true;
    });

    setAvailabilityTickHandleIcon(handleTick);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [availabilityFilterMenu]);

  // console.log("icon->", availabilityFilterMenu);

  return (
    <div>
      <StyledButton onClick={handleClick}>
        {menuTitle}
        {handleAvailabilityTickIcon && <StyledCircleIcon fontSize="small" />}
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
