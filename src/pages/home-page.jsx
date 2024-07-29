import React from "react";
import { Box, Container, Typography } from "@mui/material";

function Home() {
  return (
    <>
      <Container variant="main">
        <Box className="banner">
          <Box>
            <Typography variant="h1">
              Welcome! My name is Robin Balatbat.
            </Typography>
            <p>TODO - Work on basic verbiage.</p>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default Home;
