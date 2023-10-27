
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { styled } from "styled-components";
import { useState } from "react";
import { StyledButton } from "../containers/Homes";

const StyledMenu = styled(Menu)`
  .MuiPaper-root {
    min-width: 200px;
  }
  .MuiList-root {
    padding: 0.25rem;
  }
  .MuiButtonBase-root {
    padding: 8px 5px;
    color: ;
    font-weight: 300;
    font-size: 0.8rem;
    font-family: "new-atten", Arial, sans-serif !important;
  }
  .MuiTypography-root {
    font-weight: 700;
  }
`;

const sortyByValues = [
  { id: "featured", label: "Featured" },
  { id: "price", label: "Price: Low to High" },
  { id: "squareFeet", label: "Square Feet" },
  // { id: "dateAvailable", label: "Date Available" },
  { id: "newest", label: "Newest" },
  { id: "bedRooms", label: "Bedrooms" },
  { id: "bathRooms", label: "Bathrooms" },
];

function SortByFilters({ handleSortBy }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [sortBy, setSortBy] = useState("featured");
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const getSortBy = (e) => {
    handleSortBy(e.target.id);
    setSortBy(e.target.textContent);
    handleClose();
  };

  return (
    <div>
      <StyledButton onClick={handleClick}>
        Sort by: {sortBy}
        {anchorEl ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
      </StyledButton>
      <StyledMenu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {sortyByValues.map((sort, i) => (
          <MenuItem key={i} id={sort.id} onClick={getSortBy}>
            {sort.label}
          </MenuItem>
        ))}
      </StyledMenu>
    </div>
  );
}

export default SortByFilters;
