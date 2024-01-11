import { RouterProvider } from "react-router-dom";

import { router } from "./Routes/route";

export default function App() {
  return <RouterProvider router={router} />;
}
