import React from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import { Link } from "react-router-dom";
import { navbarLinks } from "../utils/Constants";

const Header = () => {
  return (
    <AppBar position="sticky" color="primary">
      <Container>
        <Toolbar disableGutters>
          <CatchingPokemonIcon
            sx={{
              mr: 1,
              transform: "rotate(180deg)",
            }}
          />
          <Typography
            sx={{
              textTransform: "uppercase",
            }}
          >
            Logo
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
            }}
          >
            {navbarLinks.map((item) => (
              <Button component={Link} to={item.link} key={item.linkLabel}>
                {item.linkLabel}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
