import { createBrowserRouter } from "react-router-dom";
import Error from "./containers/Error";
import Homes from "./containers/Homes";
import IndividualHomeDetails from "./containers/IndividualHomeDetails";
import About from "./containers/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homes />,
    errorElement: <Error />,
  },
  {
    path: "/home/:id",
    element: <IndividualHomeDetails />,
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <Error />,
  },
]);

export default router;
