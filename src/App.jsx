import React from "react";
import { RouterProvider } from "react-router-dom";
import rout from "./Router";
import { Provider } from "react-redux";
import { store } from "./redux/store";
const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={rout} />
    </Provider>
  );
};

export default App;
