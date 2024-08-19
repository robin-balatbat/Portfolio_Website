import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function MediaCard({ src, imageTitle, title, copy }) {
  return (
    <Card sx={{ maxWidth: {md: 900, sm: 600, xs: 400} }}>
      <CardMedia
        sx={{ height: {md: 600, sm: 400, xs: 300} }}
        image={src}
        title={imageTitle}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        {copy}
      </CardContent>
    </Card>
  );
}
