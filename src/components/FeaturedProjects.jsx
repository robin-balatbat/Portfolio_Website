import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography
} from "@mui/material";

const FeaturedProjects = ({ title, description, imageSrc, imageAlt, cardLink}) => {

  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component="a" href={cardLink}>
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
            sx={{ width: 160, display: { xs: "none", sm: "block" } }}
            image={imageSrc}
            alt={imageAlt}
          />
        </Card>
      </CardActionArea>
    </Grid>
  );
};

export default FeaturedProjects;
