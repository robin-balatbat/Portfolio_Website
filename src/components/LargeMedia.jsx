import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function MediaCard({ src, imageTitle, title, copy }) {
  return (
    <Card sx={{ maxWidth: 900 }}>
      <CardMedia
        sx={{ height: 600 }}
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
