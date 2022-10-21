import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";

import { routes } from "./Routes/Routes";

function App() {
  return (
    <div className="">
      <RouterProvider router={routes} />
      <Toaster />
    </div>
  );
}

export default App;
