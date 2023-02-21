import "./config/redux-store";

import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import { HomeScreen, ProfileScreen } from "./screens";
import Store from "./store";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeScreen />,
    },
    {
      path: "/profile",
      element: <ProfileScreen />,
    },
  ]);

  return (
    <Provider store={Store.getStore()}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
