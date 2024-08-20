import * as React from "react";
import { Box, Card, Grid, Typography } from "@mui/material";

export default function MediaCard({ src, imageTitle, title, copy }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#000",
          width: "100%",
          display: "flex",
          borderRadius: "12px",
          border: "1px solid #55A6F6"
        }}
      >
        <img
          src={src}
          alt={imageTitle}
          style={{
            maxHeight: 600,
            width: "auto",
            margin: "0 auto"
          }}
        />
      </Box>
      <Box sx={{ padding: 2 }} component={Card} variant="outlined">
        <Typography gutterBottom variant="h5" component="p">
          {title}
        </Typography>
        {copy}
      </Box>
    </Box>
  );
}
