import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme/theme";
import { Provider } from "react-redux";
import store from "./redux/store";
import GoToTopButton from "./components/GoToTopButton";
import "./App.css";
import MenuButton from "./containers/MenuButton";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Homes from "./containers/Homes";
import IndividualHomeDetails from "./containers/IndividualHomeDetails";
import About from "./containers/About";
import YourNewHome from "./components/YourNewHome";
import FinancingYourHome from "./containers/FinancingYourHome";
import LivingSmart from "./containers/LivingSmart";
import Error from "./containers/Error";
import DesignStudio from "./containers/DesignStudio";
import Blog from "./containers/Blog";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Routes>
            <Route path="/" element={<Homes />} />
            <Route path="/home/:id" element={<IndividualHomeDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/your-new-home" element={<YourNewHome />} />
            <Route
              path="/financing-your-home"
              element={<FinancingYourHome />}
            />
            <Route path="/livingsmart" element={<LivingSmart />} />
            <Route path="/design-studio" element={<DesignStudio />} />
            <Route path="/blog" element={<Blog />}/>
            <Route path="*" element={<Error />} />
          </Routes>

          <MenuButton />
        </Router>
        <GoToTopButton />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
