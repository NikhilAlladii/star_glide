/* eslint-disable react-hooks/exhaustive-deps */
import { Box, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, {  useState } from "react";
import { styled } from "styled-components";

const StyledBox = styled(Box)`
  .MuiInputBase-formControl {
    background: rgb(247 247 247);
  }
  .MuiOutlinedInput-notchedOutline {
    border: none;
  }
  .MuiOutlinedInput-input {
    height: 2em;
  }
  .MuiInputBase-input {
    color: rgb(84 84 84) !important;
  }
`;

const StyledTextBox = styled(TextField)``;

function DialogSearch({ homes, handleSwitch, setTempHomes }) {
  const [searchInput, setSearchInput] = useState("");

  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  //   useEffect(() => {
  //     if (searchInput.length > 0) {
  //       const filteredData = homes.filter((item) => {
  //         const neighbourhoodMatch = item.neighbourHood.some((neighbourhood) => {
  //           return (
  //             neighbourhood.label
  //               .toLowerCase()
  //               .includes(searchInput.toLowerCase()) && neighbourhood.checked
  //           );
  //         });
  //         const amenitiesMatch = item.amenties.some((amenity) => {
  //           return (
  //             amenity.label.toLowerCase().includes(searchInput.toLowerCase()) &&
  //             amenity.checked
  //           );
  //         });

  //         return neighbourhoodMatch || amenitiesMatch;
  //       });

  //       // Print the filtered data

  //       setTempHomes(handleSwitch("featured", filteredData));
  //     }
  //   }, [searchInput]);


  return (
    <StyledBox>
      <StyledTextBox
        id="outlined-basic"
        variant="outlined"
        value={searchInput}
        onChange={handleInputChange}
        placeholder="Search by state, city, metro, or zip code"
        sx={{ minWidth: "100%" }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </StyledBox>
  );
}

export default DialogSearch;
