import { createBrowserRouter } from "react-router-dom";
import Response from "../components/Response";
import Sign from "../components/Sign";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Sign />,
  },
  {
    path: "response",
    element: <Response />,
  },
]);
