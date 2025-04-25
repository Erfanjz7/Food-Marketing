import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GalileoDesign } from "./screens/GalileoDesign/GalileoDesign";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <GalileoDesign />
  </StrictMode>,
);
