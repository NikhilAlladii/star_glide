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
      main: colors.blue,
    },
    secondary: {
      main: colors.orange,
    },
    text:{
      main:colors.white
    }
  },
});

export default theme;
