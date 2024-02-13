import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/index.scss";
import { ApiContext } from "./context/ApiContext.jsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./router.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApiContext.Provider value="https://restapi.fr/api/ctApp">
      <RouterProvider router={router} />
    </ApiContext.Provider>
  </React.StrictMode>
);
