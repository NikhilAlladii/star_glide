import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { RouterProvider } from "react-router-dom";
import theme from "./theme/theme";
import router from "./Router";
import { Provider } from "react-redux";
import store from "./redux/store";
import GoToTopButton from "./components/GoToTopButton";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
        <GoToTopButton />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
