import React from "react";
import { alpha, Box, Button } from "@mui/material";
import { NavLink as RouterLink } from "react-router-dom";

const buttonStyles = {
  width: "180px"
};

const CTABanner = () => {
  return (
    <Box
      sx={{
        padding: 8,
        bgcolor: "#06090a",
        backgroundImage: `linear-gradient(#02294F, ${alpha("#090E10", 0.0)})`
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          gap: 2
        }}
      >
        <Button
          component={RouterLink}
          to={"/contact"}
          variant="contained"
          sx={buttonStyles}
          size="large"
        >
          Get in contact
        </Button>
        <Button
          component={RouterLink}
          to={"/projects"}
          variant="outlined"
          sx={{ buttonStyles, color: "#55A6F6" }}
          size="large"
        >
          Explore my projects
        </Button>
      </Box>
    </Box>
  );
};

export default CTABanner;
