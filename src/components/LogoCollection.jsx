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

const LogoCollection = ({ headline, subtitle, logos }) => {
  return (
    <Box id="logoCollection" sx={{ py: 4 }}>
      {headline && (
        <Typography component="h3" variant="h3" align="center">
          {headline}
        </Typography>
      )}
      {subtitle && (
        <Typography
          component="p"
          variant="body"
          sx={{
            maxWidth: { xs: "100%", md: "70%" },
            margin: "0 auto",
            padding: 1
          }}
          align="center"
        >
          {subtitle}
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
            {!logo.link && logo.label && (
              <Typography variant="subtitle">{logo.label}</Typography>
            )}
            {logo.link && logo.label && (
              <Link href={logo.link} target="_blank">
                {logo.label}
              </Link>
            )}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default LogoCollection;
