import React from "react";
import { Container, Divider } from "@mui/material";

import Hero from "../components/Hero";
import CTABanner from "../components/CTABanner";
import LogoCollection from "../components/LogoCollection";
import Features from "../components/Features";

import ProjectLogo from "../assets/Project_Ascension_Logo.png";
import GitHubIcon from "@mui/icons-material/GitHub";

import UnityLogo from "../assets/Unity_Logo.png";
import Csharp from "../assets/Csharp_Logo.png";

import ExploreIcon from '@mui/icons-material/Explore';
import PetsIcon from '@mui/icons-material/Pets';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';

import EnloreMap from "../assets/Enlore-Map-WIP.png";
import AscensionArt from "../assets/Project_Ascension_Cover_Art.png";
import Starters from "../assets/Starters.png";

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
    icon: <ExploreIcon />,
    title: "Explore the Enlore Region",
    description:
      "Venture into the vibrant and diverse Enlore region, a meticulously crafted world brimming with unique landscapes, hidden secrets, and dynamic environments. Each area is designed to offer a rich and immersive experience as you uncover its many wonders.",
    imageLight: EnloreMap,
    imageDark: EnloreMap,
    imageAlt: "A work-in-progress map of the Enlore region."
  },
  {
    icon: <PetsIcon />,
    title: "Discover 151 Unique Monsters",
    description:
      "Encounter and befriend a diverse array of 151 original monsters, each with distinct abilities and characteristics. These creatures are designed to add depth and excitement to your journey, offering endless possibilities for strategy and exploration.",
    imageLight: Starters,
    imageDark: Starters,
    imageAlt: "The three starting creatures for Project Ascension"
  },
  {
    icon: <TravelExploreIcon />,
    title: "Mysteries to Unravel",
    description:
      "Dive into a captivating narrative that unfolds as you explore the Enlore region. With a story full of twists and secrets, you’ll find yourself drawn into a quest that challenges your wits and curiosity, enriching your adventure with every discovery.",
    imageLight: AscensionArt,
    imageDark: AscensionArt,
    imageAlt: "Cover art for Project Ascension"
  }
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
        <Features
          headline="Planned Features"
          copy="Project Ascension is set to introduce a wide range of exciting 
          features as development continues. Expect dynamic gameplay enhancements, 
          expansive world-building, and an intriguing storyline, all designed to 
          enrich your adventure and engagement with the game."
          items={gameFeatures}
        />
      </Container>
    </>
  );
};
