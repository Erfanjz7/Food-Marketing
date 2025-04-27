import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GalileoDesign } from "./screens/GalileoDesign/GalileoDesign";
import { GalileoDesign2 } from "./screens/GalileoDesign/GalileoDesign2";
import App from "./App";
import '../fonts.css';


createRoot(document.getElementById("app")).render(
  <StrictMode>
    <GalileoDesign />
  </StrictMode>,
);
