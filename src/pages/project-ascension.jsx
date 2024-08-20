import React from "react";
import { Box, Container, Divider, Typography } from "@mui/material";

import Hero from "../components/Hero";
import CTABanner from "../components/CTABanner";
import LogoCollection from "../components/LogoCollection";
import Features from "../components/Features";
import Highlights from "../components/Highlights";
import MediaCard from "../components/MediaCard";
import Carousel from "../components/Carousel";

import ProjectLogo from "../assets/Project_Ascension_Logo.png";
import GitHubIcon from "@mui/icons-material/GitHub";

import UnityLogo from "../assets/Unity_Logo.png";
import Csharp from "../assets/Csharp_Logo.png";

import ExploreIcon from "@mui/icons-material/Explore";
import PetsIcon from "@mui/icons-material/Pets";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import SwitchAccessShortcutAddIcon from "@mui/icons-material/SwitchAccessShortcutAdd";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import AltRouteIcon from "@mui/icons-material/AltRoute";
import ApiIcon from "@mui/icons-material/Api";
import NaturePeopleIcon from "@mui/icons-material/NaturePeople";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

import EnloreMap from "../assets/Enlore-Map-WIP.png";
import AscensionArt from "../assets/Project_Ascension_Cover_Art.png";
import Starters from "../assets/Starters.png";

import Bramaith from "../assets/Project_Ascension_Grass.jpg";
import Psyberus from "../assets/Project_Ascension_Fire.jpg";
import Tidebane from "../assets/Project_Ascension_Water.jpg";
import MoreCreatures from "../assets/Project_Ascension_More.jpg";
import Clash from "../assets/Project_Ascension_Clash.jpg";

import Overworld from "../assets/Project_Ascension_Main_Screenshot.png";
import BattleUI from "../assets/Project_Ascension_Battle_UI.png";
import Chase from "../assets/Project_Ascension_Chase.png";
import ChasePlayer from "../assets/Project_Ascension_Chase_Player.png";

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

const conceptArtCarouselItems = [
  <MediaCard
    title="The Enlore Region"
    src={EnloreMap}
    imageTitle="A map of the fictional Enlore region, a mountainous region that borders the ocean."
    copy={
      <>
        <Typography>
          Feast your eyes on the concept art of the Enlore region map, a
          sprawling and diverse landscape just waiting to be explored. This
          early design showcases the vast array of environments, hidden corners,
          and intriguing locations that promise countless adventures and
          mysteries. Get ready to uncover the secrets of Enlore and embark on an
          epic journey across its varied terrains!
        </Typography>
      </>
    }
  />,
  <MediaCard
    title="Clash"
    src={Clash}
    imageTitle="Concept art for Project Ascension, depicting two of the game's characters embroiled in conflict."
    copy={
      <>
        <Typography>
          Witness the dramatic concept art depicting the player character locked
          in a fierce battle with a formidable adversary. This dynamic scene
          captures the intensity of the combat and the strategic depth of
          Project Ascension. Prepare for thrilling confrontations and test your
          skills as you face off against challenging foes in this ever-evolving
          adventure.
        </Typography>
      </>
    }
  />,
  <MediaCard
    title="Meet Bramaith"
    src={Bramaith}
    imageTitle="Concept art for Bramaith, a grass-based, bipedal creature wielding a spear."
    copy={
      <>
        <Typography>
          Introducing Bramaith, a captivating starting creature with a rich
          backstory. Rumored to be a reincarnated warrior from Enlore’s ancient
          past, this enigmatic grass-type wields a wooden spear with grace and
          skill. With its mysterious aura and storied origins, Bramaith promises
          to be a compelling and powerful ally on your journey through Project
          Ascension.
        </Typography>
      </>
    }
  />,
  <MediaCard
    title="Meet Psyberus"
    src={Psyberus}
    imageTitle="Concept art for Psyberus, a three-headed canine creature. Two of the creature's heads are made entirely of flames."
    copy={
      <>
        <Typography>
          Introducing Psyberus, a striking canine creature with a fiery twist.
          This extraordinary being boasts three heads, two of which are ablaze
          with intense flames, creating a formidable and awe-inspiring presence.
          Psyberus combines fierce power with a mesmerizing, fiery appearance,
          making it a standout companion in Project Ascension’s diverse roster
          of creatures.
        </Typography>
      </>
    }
  />,
  <MediaCard
    title="Meet Tidebane"
    src={Tidebane}
    imageTitle="Concept art for Tidebane, a water-based horse creature with a shadowy mane."
    copy={
      <>
        <Typography>
          Introducing Tidebane, a majestic water-based horse creature that roams
          the hidden depths of Enlore's waterways. With its shadowy mane
          blending seamlessly into the dark aquatic realms, Tidebane moves with
          an ethereal grace. This elusive and enigmatic being embodies the
          mysterious beauty of the deep, making it a mesmerizing companion for
          those who venture into the heart of the region’s watery landscapes.
        </Typography>
      </>
    }
  />,
  <MediaCard
    title="More Creatures"
    src={MoreCreatures}
    imageTitle="More concept art for Project Ascension, depicting an assortment of creatures. Some are based off birds, others on bugs."
    copy={
      <>
        <Typography>
          Here’s a sneak peek at a variety of creatures you’ll encounter in
          Project Ascension. This assortment is just the beginning—many more
          unique and intriguing creatures are out there for you to discover and
          meet as you explore the world of Project Ascension.
        </Typography>
      </>
    }
  />
];

const gameScreenshotsCarouselItems = [
  <MediaCard
    title="Overworld Exploration"
    src={Overworld}
    imageTitle="An in-game screenshot for Project Ascension, depicting the player character standing in the vibrant overworld."
    copy={
      <>
        <Typography>
          Here we see the player character standing in the expansive overworld
          of Project Ascension. This screenshot highlights the unique blend of
          pixel art and 3D environment, showcasing how the retro-inspired
          character design interacts with a richly detailed 3D world.
        </Typography>
      </>
    }
  />,
  <MediaCard
    title="Battle UI"
    src={BattleUI}
    imageTitle="In-game screenshot for Project Ascension, depicting the battle user interface."
    copy={
      <>
        <Typography>
          Here’s a glimpse of the evolving battle UI for Project Ascension! It
          might remind you of the classic Pokémon games, but don’t get too
          attached—just like a Pokémon evolving, our UI is constantly changing
          and improving. Stay tuned as I refine it into something truly unique!
        </Typography>
      </>
    }
  />,
  <MediaCard
    title="Interactive Wildlife"
    src={Chase}
    imageTitle="In-game screenshot for Project Ascension, with one creature fleeing while another gives chase."
    copy={
      <>
        <Typography>
          This screenshot captures a moment of lively action, with one creature
          playfully fleeing while another chases it through the overworld. This
          vibrant interaction is just a glimpse of what’s to come, as I'm
          planning to add even more behaviors to simulate a rich, natural
          environment where creatures interact in engaging and realistic ways.
        </Typography>
      </>
    }
  />,
  <MediaCard
    title="Thrilling Encounters"
    src={ChasePlayer}
    imageTitle="In-game screenshot for Project Ascension, with a creature chasing the player character."
    copy={
      <>
        <Typography>
          In this screenshot, a creature is hot on the heels of the player
          character, clearly preparing for an attack. This showcases the game's
          dynamic encounter system, where creatures actively pursue and
          challenge the player, adding a thrilling edge to your journey in
          Project Ascension.
        </Typography>
      </>
    }
  />
];

export const ProjectAscension = () => {
  return (
    <>
      <Hero
        title="Project Ascension"
        paragraphContent="I’m thrilled to share one of my most exciting
        ongoing projects: Project Ascension. Originally conceived as a
        fangame inspired by Pokémon, it has since evolved into a unique
        and original title. Over the past two years, I’ve been deeply immersed
        in developing this game in Unity, infusing it with distinctive
        features and an expansive world of its own. As Project Ascension
        continues to develop, I invite you to follow its journey and witness
        the transformation of this ambitious project firsthand."
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
      <Container>
        <Box
          sx={{
            paddingTop: { md: 6, sm: 4, xs: 1 },
            paddingBottom: { md: 8, sm: 4, xs: 1 }
          }}
        >
          <Divider>
            <Typography component="h3" variant="h3" align="center">
              Game Screenshots
            </Typography>
          </Divider>
          <Typography
            component="p"
            variant="body"
            sx={{
              maxWidth: { xs: "100%", md: "75%" },
              margin: "0 auto",
              paddingTop: 2
            }}
            align="center"
          >
            Explore the vibrant world of Project Ascension through these dynamic
            screenshots, which offer a sneak peek into the game's evolving
            environments and design. Please note that the game is still in
            active development, so some assets, UI elements, and other aspects
            are not yet finalized and may change as development progresses.
            Enjoy this early look at the adventure that’s taking shape!
          </Typography>
          <Carousel cardItems={gameScreenshotsCarouselItems} />
        </Box>
        <Box
          sx={{
            paddingTop: { md: 6, sm: 4, xs: 1 },
            paddingBottom: { md: 8, sm: 4, xs: 1 }
          }}
        >
          <Divider>
            <Typography component="h3" variant="h3" align="center">
              Concept Art
            </Typography>
          </Divider>
          <Typography
            component="p"
            variant="body"
            sx={{
              maxWidth: { xs: "100%", md: "75%" },
              margin: "0 auto",
              paddingTop: 2
            }}
            align="center"
          >
            Delve into the creative process behind Project Ascension with my
            collection of concept art. These early sketches and designs offer a
            behind-the-scenes look at the evolution of the game’s world,
            characters, and key elements. Witness the artistic vision that laid
            the foundation for the immersive experience you’ll soon explore.
          </Typography>
          <Carousel cardItems={conceptArtCarouselItems} />
        </Box>
      </Container>
    </>
  );
};
