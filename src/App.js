import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { HomeScreen, ProfileScreen } from "./screens";

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

  return <RouterProvider router={router} />;
}

export default App;
