import React, { useMemo } from "react";

import { Container, Typography, Grid, Stack } from "@mui/material";

import Hero from "../components/Hero";
import FeaturedProjects from "../components/FeaturedProjects";
import { featuredProjects } from "../utils/Constants";

import PersonalImage from "../assets/Personal_Image.jpeg";

const Projects = () => {
  const projectCards = useMemo(
    () =>
      featuredProjects.map((item, index) => (
        <FeaturedProjects key={item.title + index} {...item} />
      )),
    []
  );

  return (
    <>
      <Hero
        title={"Projects"}
        paragraphContent="Welcome to my Projects page! Here, you’ll find a mix of ongoing 
          and past projects that highlight my work as a front-end developer. 
          I’ve included everything from polished web applications to fun and interactive user interfaces. Plus, I’ve thrown in some of my 
          personal game development projects where I let my creativity run wild. 
          Take a look around to see what I’ve been working on and how I blend coding with creativity to bring ideas to life."
        image={{
          src: PersonalImage,
          alt: "Robin standing on a pier",
          height: "400px",
          width: "auto"
        }}
      />
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: { xs: "center", sm: "start" },
          pb: { xs: 2, sm: 4 }
        }}
      >
        <Stack spacing={4} useFlexGap sx={{ width: "100%" }}>
          <Typography variant="h2" component="h2">
            Featured Projects
          </Typography>
          <Grid container spacing={4}>
            {projectCards}
          </Grid>
        </Stack>
      </Container>
    </>
  );
};

export default Projects;
