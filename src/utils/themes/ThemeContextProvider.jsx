import { createContext, useMemo, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material";

export const ThemeContext = createContext({
  switchColorMode: () => {},
});

const ThemeContextProvider = ({ children }) => {
  const [mode, setMode] = useState("light");

  const switchColorMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: mode,
        },
      }),
    [mode]
  );

  return (
    <ThemeContext.Provider value={{ switchColorMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
