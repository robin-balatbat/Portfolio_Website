import React from "react";
import { NavLink as RouterLink } from "react-router-dom";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography
} from "@mui/material";

const FeaturedProjects = ({
  title,
  description,
  imageSrc,
  imageAlt,
  cardLink
}) => {
  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component={RouterLink} to={cardLink}>
        <Card sx={{ display: "flex" }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h3" variant="h5">
              {title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {description}
            </Typography>
            <Typography variant="subtitle1" color="primary">
              Continue reading...
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            sx={{
              width: "auto",
              height: "80px",
              display: { xs: "none", sm: "block" },
              padding: 2
            }}
            image={imageSrc}
            alt={imageAlt}
          />
        </Card>
      </CardActionArea>
    </Grid>
  );
};

export default FeaturedProjects;
