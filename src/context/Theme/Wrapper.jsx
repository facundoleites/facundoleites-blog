import React, { useState } from "react";
import { ThemeContext } from "./Context";

export const ThemeWrapper = React.memo((props) => {
  const [theme, setTheme] = useState("dark");
  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
      {...props}
    />
  );
});
