import React from "react";
import { RouterProvider } from "react-router-dom";
import rout from "./Router";

const App = () => {
  return (
    <div>
      <RouterProvider router={rout} />
    </div>
  );
};

export default App;
