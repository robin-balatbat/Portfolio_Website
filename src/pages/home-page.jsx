import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "../components/Image";
import PersonalImage from "../assets/Personal_Image.jpeg";

export default function Home() {
  return (
    <>
      <Container className="banner">
        <Grid container gap={1}>
          <Grid item xs={8}>
            <Typography variant="h1">
              Welcome! My name is Robin Balatbat.
            </Typography>
            <p>
              Hi, I’m Robin Balatbat, a front-end engineer with a specialization
              in accessibility. I’m passionate about creating inclusive and
              user-friendly web experiences that ensure everyone can navigate
              and interact with digital content effortlessly. Explore my
              portfolio to see how my commitment to accessibility can enhance
              your projects, or get in touch to discuss how we can work together
              to make the web a more accessible place for all.
            </p>
          </Grid>
          <Grid item xs={4}>
            <Image
              src={PersonalImage}
              alt={"Robin at a pier in Vancouver, BC, Canada"}
              sx={{
                height: "500px",
                width: "auto",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
