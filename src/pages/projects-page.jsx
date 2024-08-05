import React from "react";

import { Container, Typography, Grid, Stack } from "@mui/material";

import Hero from "../components/Hero";
import FeaturedProjects from "../components/FeaturedProjects";
import { featuredProjects } from "../utils/Constants";

const Projects = () => {
  return (
    <>
      <Hero
        title={"Projects"}
        paragraphContent="Welcome to my Projects page! Here, you’ll find a mix of ongoing 
          and past projects that highlight my work as a front-end developer. 
          I’ve included everything from polished web applications to fun and interactive user interfaces. Plus, I’ve thrown in some of my 
          personal game development projects where I let my creativity run wild. 
          Take a look around to see what I’ve been working on and how I blend coding with creativity to bring ideas to life."
      />
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: { xs: "center", sm: "start" },
          pb: { xs: 2, sm: 4 }
        }}
      >
        <Stack spacing={4} useFlexGap sx={{ width: { xs: "100%", sm: "70%" } }}>
          <Typography variant="h2" component="h2">
            Featured Projects
          </Typography>
          <Grid container spacing={4}>
            {featuredProjects.map((item) => (
              <FeaturedProjects key={item.title} {...item} />
            ))}
          </Grid>
        </Stack>
      </Container>
    </>
  );
};

export default Projects;
