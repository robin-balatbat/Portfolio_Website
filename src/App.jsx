import React from "react";

import { CssBaseline } from "@mui/material";
import RouterContextProvider from "./utils/routes/RouterContextProvider";

const App = () => {
  return (
    <>
      <RouterContextProvider />
      <CssBaseline enableColorScheme />
    </>
  );
};

export default App;
