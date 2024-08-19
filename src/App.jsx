import RouterContextProvider from "./utils/routes/RouterContextProvider";
import ThemeContextProvider from "./utils/themes/ThemeContextProvider";
import { CssBaseline } from "@mui/material";

const App = () => {
  return (
    <ThemeContextProvider>
      <RouterContextProvider />
      <CssBaseline enableColorScheme />
    </ThemeContextProvider>
  );
};

export default App;
