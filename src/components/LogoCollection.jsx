import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Link } from "@mui/material";

const logoStyle = {
  width: "100px",
  height: "auto",
  margin: "0 32px",
  opacity: 0.9,
  borderRadius: "24px"
};

const LogoCollection = ({ headline, logos }) => {
  return (
    <Box id="logoCollection" sx={{ py: 4 }}>
      {headline && (
        <Typography component="h3" variant="h3" align="center">
          {headline}
        </Typography>
      )}
      <Grid container justifyContent="center" sx={{ mt: 4 }}>
        {logos.map((logo, index) => (
          <Grid
            item
            key={index}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              textAlign: "center",
              gap: 1
            }}
          >
            <img src={logo.src} alt={logo.alt} style={logoStyle} />
            {!logo.link && logo.subtitle && (
              <Typography variant="subtitle">{logo.subtitle}</Typography>
            )}
            {logo.link && logo.subtitle && (
              <Link href={logo.link}>
                {logo.subtitle}
              </Link>
            )}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default LogoCollection;
