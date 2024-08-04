import { CssBaseline } from "@mui/material";
import RouterContextProvider from "./utils/routes/RouterContextProvider";
import ThemeContextProvider from "./utils/themes/ThemeContextProvider";

const App = () => {
  return (
    <ThemeContextProvider>
      <RouterContextProvider />
      <CssBaseline enableColorScheme />
    </ThemeContextProvider>
  );
};

export default App;
