import React from "react";

import Hero from "../components/Hero";
import CTABanner from "../components/CTABanner";

import ProjectLogo from "../assets/Project_Ascension_Logo.png";
import GitHubIcon from "@mui/icons-material/GitHub";

const projectCTA = [
  {
    link: "https://github.com/robin-balatbat/Project-Ascension",
    label: "Request access on GitHub",
    icon: <GitHubIcon />,
    ariaLabel: "Request access on GitHub (opens in new tab)"
  }
]

export const ProjectAscension = () => {
  return (
    <>
      <Hero
        title="Project Ascension"
        paragraphContent="Personal game project"
        image={{
          src: ProjectLogo,
          alt: "Project Ascension Logo",
          height: "350px",
          width: "auto"
        }}
      />
      <CTABanner buttonContent={projectCTA}/>
    </>
  );
};
