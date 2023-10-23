import * as React from "react";
import { alpha, styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
// import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import { Typography } from "@mui/material";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(2),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.mode === "light" ? "#F3F6F9" : "#1A2027",
    border: "1px solid",
    borderColor: theme.palette.mode === "light" ? "#E0E3E7" : "#2D3843",
    fontSize: 22,
    width: "auto",
    padding: "0px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

const StyledFormControl = styled(FormControl)`
  .MuiInputLabel-root {
    color: #a3a3a2;
    font-size: 12px;
    text-transform: uppercase;
  }
  margin-bottom: 1rem;
`;

export default function InterestRate() {
  return (
    <Box
      component="form"
      noValidate
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: "2rem",
      }}
    >
      <StyledFormControl variant="standard">
        <InputLabel shrink htmlFor="bootstrap-input">
          ENTER YOUR MORTGAGE AMOUNT
        </InputLabel>
        <BootstrapInput
          defaultValue="react-bootstrap"
          id="bootstrap-input"
          type="number"
        />
      </StyledFormControl>
      <StyledFormControl variant="standard">
        <InputLabel shrink htmlFor="bootstrap-input">
          INTEREST RATE
        </InputLabel>
        <BootstrapInput
          defaultValue="react-bootstrap"
          id="bootstrap-input"
          type="number"
        />
      </StyledFormControl>
      <StyledFormControl variant="standard">
        <InputLabel shrink htmlFor="bootstrap-input">
          AMORTIZATION PERIOD
        </InputLabel>
        <BootstrapInput
          defaultValue="react-bootstrap"
          id="bootstrap-input"
          type="number"
        />
      </StyledFormControl>
      <StyledFormControl variant="standard">
        <InputLabel shrink htmlFor="bootstrap-input">
          PAYMENT FREQUENCY
        </InputLabel>
        <BootstrapInput
          defaultValue="react-bootstrap"
          id="bootstrap-input"
          type="number"
        />
      </StyledFormControl>

      <Typography>
        Your monthly payment would be**
        <br /> $0
      </Typography>
    </Box>
  );
}
