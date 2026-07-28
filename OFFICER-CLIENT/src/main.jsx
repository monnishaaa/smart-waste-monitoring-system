import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { WasteProvider } from "./context/WasteContext";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <WasteProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </WasteProvider>
  </React.StrictMode>
);