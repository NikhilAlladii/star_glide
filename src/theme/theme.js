import { createTheme } from "@mui/material/styles";
import colors from "../constants/colors";

// creates a custom theme
const theme = createTheme({
  palette: {
    common: {
      blue: colors.blue,
      orange: colors.orange,
    },
    primary: {
      main: "#848484",
    },
    secondary: {
      main: "#545454",
    },
    text: {
      main: "rgb(190,211,68)",
    },
    border:{
      main:"rgb(235,235,235)"
    }
  },
});

export default theme;
