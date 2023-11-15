/* eslint-disable array-callback-return */
import React, { useEffect } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Box, Typography } from "@mui/material";
import { styled } from "styled-components";
import { StyledButton } from "../containers/Homes";
import theme from "../theme/theme";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

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

const StyledCircleIcon = styled(CheckCircleOutlineIcon)`
  margin-left: 0.5rem;
  background-color: rgb(235 245 194);
  opacity: 0.7;
  width: 1rem !important;
  height: 1rem !important;
  padding: 0.1rem !important;
  border-radius: 50%;
`;

function MoreFilters({
  menuTitle,
  homes,
  handleSwitch,
  setTempHomes,
  setAmentiesFilterMenu,
  amentiesFilterMenu,
  setNeighbourHoodFilterMenu,
  neighbourHoodFilterMenu,
  setTourOptionsFilterMenu,
  tourOptionsFilterMenu,
  handleMoreFiltersTickIcon,
  setMoreFiltersTickHandleIcon,
}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleTourOptions = (e) => {
    const targetIndex = tourOptionsFilterMenu.findIndex(
      (obj) => obj.value === e.target.value
    );
    const newArray = [...tourOptionsFilterMenu];
    newArray[targetIndex]["checked"] = e.target.checked;
    setTourOptionsFilterMenu(newArray);
  };

  const handlNeighBourHoodOptions = (e) => {
    const targetIndex = neighbourHoodFilterMenu.findIndex(
      (obj) => obj.value === e.target.value
    );
    const newArray = [...neighbourHoodFilterMenu];
    newArray[targetIndex]["checked"] = e.target.checked;
    setNeighbourHoodFilterMenu(newArray);
  };

  const handleAmentiesOptions = (e) => {
    const targetIndex = amentiesFilterMenu.findIndex(
      (obj) => obj.value === e.target.value
    );
    const newArray = [...amentiesFilterMenu];
    newArray[targetIndex]["checked"] = e.target.checked;
    setAmentiesFilterMenu(newArray);
  };

  const handleMoreDetails = () => {


    let filteredHomes = homes;
    if (tourOptionsFilterMenu.length >= 0) {
      filteredHomes = homes?.filter(
        (item) =>
          item.tourOptions[0].virtualOptions ===
          tourOptionsFilterMenu[0].checked
      );
      filteredHomes = handleSwitch("featured", filteredHomes);
    }

    if (neighbourHoodFilterMenu.length >= 0) {
      // filteredHomes = filteredHomes?.filter((item) => {
      //   return neighbourHoodFilterMenu.every((filterItem) => {
      //     return !filterItem.checked || item.neighbourHood[0][filterItem.value];
      //   });
      // });

      filteredHomes = filteredHomes.filter((item) => {
        return neighbourHoodFilterMenu.every((filter) => {
          return (
            item.neighbourHood.find(
              (neighbor) => neighbor.value === filter.value
            )?.checked === filter.checked
          );
        });
      });
      filteredHomes = handleSwitch("featured", filteredHomes);
    }

    if (amentiesFilterMenu.length >= 0) {
      // filteredHomes = filteredHomes?.filter((item) => {
      //   return amentiesFilterMenu.every((filterItem) => {
      //     return !filterItem.checked || item.amenties[0][filterItem.value];
      //   });
      // });

      filteredHomes = filteredHomes.filter((item) => {
        return amentiesFilterMenu.every((filter) => {
          return (
            item.amenties.find((amenti) => amenti.value === filter.value)
              ?.checked === filter.checked
          );
        });
      });
    }
    setTempHomes(handleSwitch("featured", filteredHomes));
  };

  useEffect(() => {
    handleMoreDetails();

    const tickIcon = [];

    amentiesFilterMenu.map((menu) => {
      tickIcon.push(menu.checked);
    });

    neighbourHoodFilterMenu.map((menu) => {
      tickIcon.push(menu.checked);
    });

    tourOptionsFilterMenu.map((menu) => {
      tickIcon.push(menu.checked);
    });

    const handleTick = tickIcon.find((tick) => {
      return tick === true;
    });

    setMoreFiltersTickHandleIcon(handleTick);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tourOptionsFilterMenu, neighbourHoodFilterMenu, amentiesFilterMenu]);

  return (
    <div>
      <StyledButton onClick={handleClick}>
        {menuTitle}{" "}
        {handleMoreFiltersTickIcon && <StyledCircleIcon fontSize="small" />}
        {anchorEl ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
      </StyledButton>
      <StyledMenu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box>
            <Typography variant="caption">Tour Options</Typography>
            {tourOptionsFilterMenu?.map((tour, i) => (
              <MenuItem key={i} onClick={handleClose}>
                <input
                  type="checkbox"
                  checked={tour?.checked}
                  value={tour?.value}
                  onChange={(e) => handleTourOptions(e)}
                />
                {tour.label}
              </MenuItem>
            ))}
          </Box>
          <Box sx={{ marginTop: "1rem" }}>
            <Typography variant="caption">Neighborhood Type</Typography>
            {neighbourHoodFilterMenu?.map((neighbourHood, i) => (
              <MenuItem key={i} onClick={handleClose}>
                <input
                  type="checkbox"
                  checked={neighbourHood?.checked}
                  value={neighbourHood?.value}
                  onChange={(e) => handlNeighBourHoodOptions(e)}
                />
                {neighbourHood.label}
              </MenuItem>
            ))}
          </Box>
          <Box sx={{ marginTop: "1rem" }}>
            <Typography variant="caption">Amenities</Typography>
            {amentiesFilterMenu?.map((amenties, i) => (
              <MenuItem key={i} onClick={handleClose}>
                <input
                  type="checkbox"
                  checked={amenties?.checked}
                  value={amenties?.value}
                  onChange={(e) => handleAmentiesOptions(e)}
                />
                {amenties.label}
              </MenuItem>
            ))}
          </Box>
          {/* <Box>
            <Typography variant="caption">School District</Typography>
            <MenuItem onClick={handleClose}>
              <input type="checkbox" /> Aurora Public Schools
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <input type="checkbox" />
              Brighttom SD27j
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <input type="checkbox" />
              Douglas Co SD Re-1
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <input type="checkbox" />
              Jefferson Co SD R-1
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <input type="checkbox" />
              St Vrain School District
            </MenuItem>
          </Box> */}
        </Box>
      </StyledMenu>
    </div>
  );
}

export default MoreFilters;
