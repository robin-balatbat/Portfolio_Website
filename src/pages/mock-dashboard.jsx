import React from "react";
import { Box, Container, Divider, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

import ReactIcon from "../assets/React-icon.png";
import TypescriptLogo from "../assets/Typescript_logo_2020.png";
import MUILogo from "../assets/MUI_Logo.png";
import JestLogo from "../assets/Jest.png";

import LandingImage from "../assets/Mock_Dashboard_Landing.png";
import DashboardModal from "../assets/Dashboard_Modal.png";
import ExpandedDashboard from "../assets/Expanded_Dashboard_Table.png";

import Hero from "../components/Hero";
import CTABanner from "../components/CTABanner";
import LogoCollection from "../components/LogoCollection";
import Highlights from "../components/Highlights";
import LargeMedia from "../components/MediaCard";
import Carousel from "../components/Carousel";

import AutoFixHighRoundedIcon from "@mui/icons-material/AutoFixHighRounded";
import ConstructionRoundedIcon from "@mui/icons-material/ConstructionRounded";
import QueryStatsRoundedIcon from "@mui/icons-material/QueryStatsRounded";
import SettingsSuggestRoundedIcon from "@mui/icons-material/SettingsSuggestRounded";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";
import ThumbUpAltRoundedIcon from "@mui/icons-material/ThumbUpAltRounded";

const items = [
  {
    icon: <SupportAgentRoundedIcon />,
    title: "Accessibility in Mind",
    description:
      "Ensured the dashboard adhered to accessibility standards, making it usable for individuals with diverse needs and disabilities."
  },
  {
    icon: <ConstructionRoundedIcon />,
    title: "Custom Components",
    description:
      "Designed and implemented reusable components tailored to the client's unique needs."
  },
  {
    icon: <SettingsSuggestRoundedIcon />,
    title: "Resolved Performance Issues",
    description:
      "Identified and addressed performance bottlenecks, resulting in a smoother and more responsive user experience."
  },
  {
    icon: <AutoFixHighRoundedIcon />,
    title: "Speedy Delivery",
    description:
      "Delivered the initial MVP requirements within six weeks, enabling the implementation of additional features and enhancements."
  },
  {
    icon: <QueryStatsRoundedIcon />,
    title: "Ahead of Schedule",
    description:
      "Contributed to the project’s early completion, finishing a quarter ahead of the planned timeline through effective management and execution."
  },
  {
    icon: <ThumbUpAltRoundedIcon />,
    title: "Widespread Adoption",
    description:
      "The dashboard is now used by thousands of developers at the client organization, demonstrating its effectiveness and value in a real-world setting."
  }
];

const projectCTAButtons = [
  {
    link: "https://github.com/robin-balatbat/mock-dashboard",
    label: "Request access on GitHub",
    icon: <GitHubIcon />,
    ariaLabel: "Request access on GitHub (opens in new tab)"
  }
];

const techLogos = [
  {
    src: ReactIcon,
    alt: "React",
    label: "React"
  },
  {
    src: TypescriptLogo,
    alt: "TypeScript",
    label: "TypeScript"
  },
  {
    src: MUILogo,
    alt: "Material UI",
    label: "MUI"
  },
  {
    src: JestLogo,
    alt: "Jest",
    label: "Jest"
  }
];

const carouselItems = [
  <LargeMedia
    title={"The Dashboard"}
    src={LandingImage}
    imageTitle="Screenshot of the table view of the dashboard. 
              It displays a summarized set of results from tests in a table format."
    copy={
      <>
        <Typography>
          The image shows a mocked dashboard designed for developers to track
          and manage test results. The interface is modern, clean, and
          efficient, improving on an outdated UI with better performance.
        </Typography>
        <Typography>Key Features:</Typography>
        <ul>
          <li>
            <b>Filter Options:</b> Users can filter by username, branch, test
            status, test result, and date range. There's also an option to
            display only direct tests.
          </li>
          <li>
            <b>Test Information Table:</b> The table displays rows of tests with
            details such as the test name, username, branch, and date. Each row
            provides the status of the test (e.g., "3/6 complete"), the results
            (e.g., "3/6 passed"), and options for more details or external
            links.
          </li>
          <li>
            <b>Pagination:</b> The dashboard supports pagination, allowing users
            to navigate through numerous pages of test results.
          </li>
        </ul>
      </>
    }
  />,
  <LargeMedia
    title={"Expanded Views"}
    src={ExpandedDashboard}
    imageTitle="Another screenshot of the dashboard, this time with rows expanded and displaying more detailed information."
    copy={
      <>
        <Typography>
          The image shows an expanded view of the mocked dashboard from the
          previous image. In this view, specific rows have been expanded to
          reveal more detailed tables containing additional information about
          the test results.
        </Typography>
        <Typography>Key Features:</Typography>
        <ul>
          <li>
            <b>Expanded Rows:</b> Rows can be expanded, revealing additional
            tables with detailed information organized under "DIRECT" and
            "INDIRECT" sections. Each section is broken down by test levels:
            local, cluster, and group.
          </li>
          <li>
            <b>Comprehensive Breakdown:</b> For each level, the expanded view
            displays:
            <ul>
              <li>
                <b>Status:</b> Indicates whether the test was completed.
              </li>
              <li>
                <b>Results:</b> Shows whether the test passed or failed.
              </li>
              <li>
                <b>Suites and Plans:</b> Lists the number of test suites and
                plans executed.
              </li>
              <li>
                <b>Additional Links:</b> Provides options to view further
                details in a modal.
              </li>
            </ul>
          </li>
          <li>
            <b>In-Depth Analysis:</b> The expanded tables offer a more detailed
            examination of test results, allowing developers to track the
            success or failure of tests across various levels (Local, Cluster,
            Global) for both direct and indirect test categories.
          </li>
        </ul>
      </>
    }
  />,
  <LargeMedia
    title={"Modal Details"}
    src={DashboardModal}
    imageTitle="Another screenshot of the dashboard, with a modal revealing a detailed summary of test suites run and plans performed."
    copy={
      <>
        <Typography>
          The image highlights a modal window within the application, offering a
          detailed view of a specific test run. This modal enhances the user
          experience by allowing developers to easily access and review specific
          aspects of a test run, all within a well-organized, tabbed interface.
        </Typography>
        <Typography>Key Features:</Typography>
        <ul>
          <li>
            <b>In-Depth Test Details</b> The modal, titled "Test Details,"
            provides a focused, in-depth look at the specifics of a particular
            set of plans and suites for a selected level.
          </li>
          <li>
            <b>Tabbed Navigation:</b> The modal features a set of tabs, allowing
            users to switch between different types of information. The active
            tab is displayed.
          </li>
        </ul>
      </>
    }
  />
];

const MockDashboard = () => {
  return (
    <>
      <Hero
        title="Mocked Dashboard"
        paragraphContent="Rebuilt from scratch using React, this project showcases my 
        ability to create high-fidelity prototypes from client specifications. 
        While anonymized for privacy, the dashboard reflects my attention to detail and 
        expertise in creating dynamic, user-friendly interfaces. Additionally, I ensured that the project remained accessible, 
        adhering to best practices for inclusivity and usability."
        image={{
          src: LandingImage,
          alt: "Screenshot of the landing page for the Mocked Dashboard.",
          height: "auto",
          width: "60%"
        }}
      />
      <CTABanner buttonContent={projectCTAButtons} />
      <Highlights
        headline="Project Highlights"
        copy=" This project demonstrates my commitment to delivering high-quality
        results through innovative solutions and attention to detail. 
        Here are some key achievements that highlight the strengths and impact of the dashboard:"
        items={items}
      />
      <Container>
        <LogoCollection
          headline="Technologies Used"
          subtitle="For this project, I used React to create a dynamic, 
          responsive UI and TypeScript to ensure type safety and code quality. 
          Material UI provided a modern design system, while Jest was used for thorough 
          testing to guarantee functionality and reliability."
          logos={techLogos}
        />
        <Box
          sx={{ paddingTop: { md: 6, sm: 4, xs: 1 }, paddingBottom: { md: 8, sm: 4, xs: 1 } }}
        >
          <Divider>
            <Typography component="h3" variant="h3" align="center">
              Screenshots
            </Typography>
          </Divider>
          <Typography
            component="p"
            variant="body"
            sx={{
              maxWidth: { xs: "100%", md: "70%" },
              margin: "0 auto",
              paddingTop: 2
            }}
            align="center"
          >
            Dive into the visual details of the project through the following
            screenshots. Each image showcases key features and the overall
            design of the dashboard, offering insight into the user interface
            and functionality. Explore and get a closer look at how the design
            and features come together in this project.
          </Typography>
          <Carousel cardItems={carouselItems} />
        </Box>
      </Container>
    </>
  );
};

export default MockDashboard;
