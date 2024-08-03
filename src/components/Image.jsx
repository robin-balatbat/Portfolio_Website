import { Box } from "@mui/material";

import React from "react";

const Image = ({ src, alt, sx }) => {
  return <Box sx={sx} alt={alt} src={src} component="img" />;
};

export default Image;
