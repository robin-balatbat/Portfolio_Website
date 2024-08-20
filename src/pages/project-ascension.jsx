import React from "react";
import { Container, Divider } from "@mui/material";

import Hero from "../components/Hero";
import CTABanner from "../components/CTABanner";
import LogoCollection from "../components/LogoCollection";
import Features from "../components/Features";
import Highlights from "../components/Highlights";

import ProjectLogo from "../assets/Project_Ascension_Logo.png";
import GitHubIcon from "@mui/icons-material/GitHub";

import UnityLogo from "../assets/Unity_Logo.png";
import Csharp from "../assets/Csharp_Logo.png";

import ExploreIcon from "@mui/icons-material/Explore";
import PetsIcon from "@mui/icons-material/Pets";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import SwitchAccessShortcutAddIcon from '@mui/icons-material/SwitchAccessShortcutAdd';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import AltRouteIcon from '@mui/icons-material/AltRoute';
import ApiIcon from '@mui/icons-material/Api';
import NaturePeopleIcon from '@mui/icons-material/NaturePeople';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

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

const gameHighlights = [
  {
    icon: <AutoAwesomeIcon />,
    title: "Stunning 2.5D Visuals",
    description:
      "Dive into a unique visual experience where classic pixel art is seamlessly integrated into a dynamic 3D environment. This blend of retro aesthetics with modern 3D elements creates a distinctive and captivating look that enhances the game's charm and depth."
  },
  {
    icon: <NaturePeopleIcon />,
    title: "Dynamic World Interactions",
    description:
      "Experience a living, breathing world where creatures and elements interact seamlessly. Watch as monsters react to each other and the environment, making the overworld feel dynamic and responsive to your presence."
  },
  {
    icon: <ApiIcon />,
    title: "Endless Dungeon Adventures",
    description:
      "Explore procedurally generated dungeons that offer a fresh challenge with each playthrough. These ever-changing environments keep the adventure exciting and unpredictable, providing new experiences every time you delve into the depths."
  },
  {
    icon: <SwitchAccessShortcutAddIcon />,
    title: "Scaling Game Difficulty",
    description:
      "Face challenges that evolve with your skills and progress. The game adjusts its difficulty based on your experience, ensuring a balanced and engaging challenge that grows with your abilities."
  },
  {
    icon: <AltRouteIcon />,
    title: "Player-Driven Gameplay",
    description:
      "Make decisions that shape your journey and influence the world around you. Your choices will affect gameplay, story outcomes, and interactions, creating a personalized adventure tailored to your decisions."
  },
  {
    icon: <AutoStoriesIcon />,
    title: "Beyond the Main Quest",
    description:
      "Discover a wealth of extra content that extends your adventure beyond the main storyline. Engage in side quests, collectibles, and hidden secrets that enrich the game world and provide additional layers of exploration."
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
          headline="Adventure Awaits"
          copy="Project Ascension is set to introduce a wide range of exciting 
          features as development continues. Expect dynamic gameplay enhancements, 
          expansive world-building, and an intriguing storyline, all designed to 
          enrich your adventure and engagement with the game."
          items={gameFeatures}
        />
      </Container>
      <Highlights
        headline="Game Features"
        copy="Project Ascension delivers a captivating blend of 
        innovative features that elevate the gameplay experience. With its 
        unique pixel art style set in a dynamic 3D world, the game offers a rich,
        immersive environment enhanced by interactive elements, adaptive difficulty,
        and meaningful player choices. Additionally, expansive extra content ensures that
        every adventure remains fresh and engaging."
        items={gameHighlights}
      />
    </>
  );
};
