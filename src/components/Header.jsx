import { AppBar, Box, Link, Toolbar } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { NavLink as RouterLink } from "react-router-dom";
import { navbarLinks } from "../utils/Constants";
import ThemeSelector from "./ThemeSelector";

const Header = () => {
  const theme = useTheme();

  return (
    <AppBar
      position="sticky"
      color="primary"
      sx={{
        borderRadius: "4px",
        margin: "1rem auto",
        boxShadow: "0px 2px 5px #919191",
        width: "75%",
        padding: '2px'
      }}
    >
      <Toolbar disableGutters>
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            justifyContent: "center",
            gap: "1rem"
          }}
        >
          {navbarLinks.map((item) => (
            <Link
              color="inherit"
              component={RouterLink}
              to={item.link}
              key={item.linkLabel}
              variant="button"
              sx={{
                textDecoration: "none",
                fontSize: "1em",
                "&:hover": {
                  textDecoration: "underline",
                  transition: "all 0.5s ease-out"
                },
                "&:focus": {
                  textDecoration: "underline",
                  transition: "all 1s ease-out"
                },
                "&.active": {
                  textDecoration: "underline"
                }
              }}
            >
              {item.linkLabel}
            </Link>
          ))}
          <ThemeSelector />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
