import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { inject } from "@vercel/analytics";

inject(); // 👈 THIS enables analytics

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

