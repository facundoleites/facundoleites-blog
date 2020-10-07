import React from "react";
import "tailwindcss/base.css";
import "tailwindcss/components.css";
import "tailwindcss/utilities.css";
import { ThemeWrapper } from "./src/context/Theme/Wrapper";

export const wrapRootElement = ({ element }) => (
  <ThemeWrapper>{element}</ThemeWrapper>
);
