import React from "react";
import { Container, Divider, } from "@mui/material";

import Hero from "../components/Hero";
import CTABanner from "../components/CTABanner";
import LogoCollection from "../components/LogoCollection";
import Features from "../components/Features";

import ProjectLogo from "../assets/Project_Ascension_Logo.png";
import GitHubIcon from "@mui/icons-material/GitHub";

import UnityLogo from "../assets/Unity_Logo.png";
import Csharp from "../assets/Csharp_Logo.png";

import DevicesRoundedIcon from '@mui/icons-material/DevicesRounded';
import EdgesensorHighRoundedIcon from '@mui/icons-material/EdgesensorHighRounded';
import ViewQuiltRoundedIcon from '@mui/icons-material/ViewQuiltRounded';

import EnloreMap from "../assets/Enlore-Map-WIP.png"

const projectCTA = [
  {
    link: "https://github.com/robin-balatbat/Project-Ascension",
    label: "Request access on GitHub",
    icon: <GitHubIcon />,
    ariaLabel: "Request access on GitHub (opens in new tab)"
  }
];

const techLogos = [
  {
    src: UnityLogo,
    alt: "Unity"
  },
  {
    src: Csharp,
    alt: "C# logo"
  }
];

const gameFeatures = [
  {
    icon: <ViewQuiltRoundedIcon />,
    title: 'Dashboard',
    description:
      'This item could provide a snapshot of the most important metrics or data points related to the product.',
    imageLight: EnloreMap,
    imageDark: EnloreMap,
    imageAlt: "A map of the Enlore region."
  },
  {
    icon: <EdgesensorHighRoundedIcon />,
    title: 'Mobile integration',
    description:
      'This item could provide information about the mobile app version of the product.',
    imageLight: 'url("/static/images/templates/templates-images/mobile-light.png")',
    imageDark: 'url("/static/images/templates/templates-images/mobile-dark.png")',
  },
  {
    icon: <DevicesRoundedIcon />,
    title: 'Available on all platforms',
    description:
      'This item could let users know the product is available on all platforms, such as web, mobile, and desktop.',
    imageLight: 'url("/static/images/templates/templates-images/devices-light.png")',
    imageDark: 'url("/static/images/templates/templates-images/devices-dark.png")',
  },
];

export const ProjectAscension = () => {
  return (
    <>
      <Hero
        title="Project Ascension"
        paragraphContent="I’m thrilled to share one of my most exciting ongoing projects: 
        Project Ascension. For the past two years, I’ve been deeply immersed in 
        developing this game in Unity, inspired by classics like Pokémon but with 
        unique twists and an expansive world of its own. As Project Ascension is 
        still actively in development, I invite you to follow its journey and witness 
        the evolution of this ambitious project firsthand."
        image={{
          src: ProjectLogo,
          alt: "Project Ascension Logo",
          height: "auto",
          width: "60%"
        }}
      />
      <CTABanner buttonContent={projectCTA} />
      <Container>
        <LogoCollection
          subtitle="This game is being made with Unity and C#."
          logos={techLogos}
        />
        <Divider />
        <Features headline="Planned Features" copy="Test text" items={gameFeatures}/>
      </Container>
    </>
  );
};
