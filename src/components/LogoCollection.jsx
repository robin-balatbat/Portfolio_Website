import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const logoStyle = {
  width: "auto",
  height: "80px",
  margin: "0 32px",
  opacity: 0.9,
  borderRadius: "24px",
};

const LogoCollection = ({ headline, logos }) => {
  return (
    <Box id="logoCollection" sx={{ py: 4, }}>
      <Typography
        component="h2"
        variant="h2"
        align="center"
      >
        {headline}
      </Typography>
      <Grid container justifyContent="center" sx={{ mt: 4 }}>
        {logos.map((logo, index) => (
          <Grid item key={index}>
            <img src={logo.src} alt={logo.alt} style={logoStyle} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default LogoCollection;
