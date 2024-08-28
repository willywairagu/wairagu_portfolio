import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import "./App.css";  // Ensure this line is present to import the global CSS

const root = createRoot(document.getElementById("root"));
root.render(<App />);