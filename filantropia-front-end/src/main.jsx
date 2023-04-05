import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* // Se envuelve la aplicacion del provider de rutas */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
