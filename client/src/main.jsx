import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import GameWrapper from "./components/GameWrapper.jsx";
import Scores from "./pages/Scores.jsx";
import Manual from "./pages/Manual.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: (
      <h1>Can be replcaed with actual error page or just return this</h1>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/game",
        element: <GameWrapper />,
      },
      {
        path: "/manual",
        element: <Manual />,
      },
      {
        path: "/scores",
        element: <Scores />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
