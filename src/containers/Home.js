import React from "react";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { styled } from "styled-components";
import "./Home.css";

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 25%;
  border-right: 1px solid #c8c8c8;
  margin: 0.5rem 0rem;
`;

export const CenteredBox = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledTypography = styled(Typography)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function Home({ home }) {
  const {
    imageLink,
    address,
    price,
    minSqFt,
    maxSqFt,
    minBeds,
    maxBeds,
    garage,
    minBath,
    maxBath,
    name,
  } = home;
  return (
    <Box>
      <Card
        sx={{
          // maxWidth: 345,
          boxShadow: 0,
          marginRight: "20px",
          cursor: "pointer",
        }}
      >
        <Box className="image-container">
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={imageLink}
            className="zoomable-image"
          ></CardMedia>
          <div className="text">NOW SELLING</div>
          <div className="bottomText">Up to $7500k Closing Credit*</div>
        </Box>
        <CardContent sx={{ padding: "0.5rem" }}>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{ color: "#545454", fontWeight: 500, marginBottom: "0rem" }}
          >
            {name}
          </Typography>
          <Typography
            gutterBottom
            variant="caption"
            component="div"
            sx={{ color: "#545454", borderBottom: "0.5px solid #C8C8C8" }}
          >
            {address},CO | Priced from the high ${price}
          </Typography>

          <CenteredBox>
            <StyledBox>
              <Typography variant="caption">
                {minSqFt}-{maxSqFt}
              </Typography>
              <Typography variant="caption">SQ. FT.</Typography>
            </StyledBox>
            <StyledBox>
              <Typography variant="caption">
                {minBeds} - {maxBeds}
              </Typography>
              <Typography variant="caption">BED</Typography>
            </StyledBox>
            <StyledBox>
              <Typography variant="body2">
                {minBath} - {maxBath}
              </Typography>
              <Typography variant="caption">BATH</Typography>
            </StyledBox>
            <StyledBox
              sx={{
                borderRight: "0px solid white !important",
              }}
            >
              <Typography variant="caption">{garage}</Typography>
              <Typography variant="caption">GARAGE</Typography>
            </StyledBox>
          </CenteredBox>

          <StyledTypography
            variant="button"
            // className="styledButton"
            className="custom-button"
          >
            VIEW DETAILS
          </StyledTypography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Home;
