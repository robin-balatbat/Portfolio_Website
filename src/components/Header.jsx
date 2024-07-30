import React from "react";
import { AppBar, Box, Link, Toolbar } from "@mui/material";
import { NavLink as RouterLink } from "react-router-dom";
import { navbarLinks } from "../utils/Constants";

const Header = () => {
  return (
    <AppBar
      position="sticky"
      color="primary"
      sx={{
        borderRadius: "15rem",
        maxWidth: "30%",
        margin: "1rem auto",
        boxShadow: "0px 2px 5px #919191",
      }}
    >
      <Toolbar disableGutters>
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
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
                textDecoration: 'none',
                fontSize: '1em',
                "&:hover": {
                  color: "#0FFFFF",
                  textDecoration: 'underline',
                  transition: 'all 0.5s ease-out'
                },
                "&:focus": {
                  color: "#0FFFFF",
                  textDecoration: 'underline',
                  transition: 'all 1s ease-out'
                },
                "&.active": {
                  color: "#00FFFF",
                  textDecoration: 'underline'
                },
              }}
            >
              {item.linkLabel}
            </Link>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
