import React, { useMemo } from "react";
import { alpha, Box, Button } from "@mui/material";
import { NavLink as RouterLink } from "react-router-dom";

const buttonStyles = {
  width: "200px"
};

const CTABanner = ({ buttonContent }) => {
  const ctaButtons = useMemo(
    () =>
      buttonContent.map((item, index) =>
        item.icon ? (
          <Button
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.ariaLabel || item.label}
            startIcon={item.icon}
            variant={index % 2 ? "outlined" : "contained"}
            sx={index % 2 ? { buttonStyles, color: "#55A6F6" } : buttonStyles}
            size="large"
          >
            {item.label}
          </Button>
        ) : (
          <Button
            component={RouterLink}
            to={item.link}
            variant={index % 2 ? "outlined" : "contained"}
            sx={index % 2 ? { buttonStyles, color: "#55A6F6" } : buttonStyles}
            size="large"
          >
            {item.label}
          </Button>
        )
      ),
    []
  );
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
        {ctaButtons}
      </Box>
    </Box>
  );
};

export default CTABanner;
