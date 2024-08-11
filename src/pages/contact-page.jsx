import React from "react";
import Hero from "../components/Hero";

import { Container, Divider } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

import CTABanner from "../components/CTABanner";

import ReactIcon from "../assets/React-icon.png";

const contactCTAButtons = [
  {
    link: "https://www.linkedin.com/in/robin-balatbat/",
    label: "Visit my LinkedIn",
    icon: <LinkedInIcon />,
    ariaLabel: "Visit my LinkedIn (opens in new tab)"
  },
  {
    link: "https://github.com/robin-balatbat",
    label: "Check out my GitHub",
    icon: <GitHubIcon />,
    ariaLabel: "Visit my LinkedIn (opens in new tab)"
  }
];

const ContactPage = () => {
  return (
    <>
      <Hero
        title="Contact Me"
        paragraphContent="Got a question or just want to say hi? 
        I’d love to hear from you! Drop me a message using the form below, 
        or feel free to reach out through email. I’ll get back to you as soon as I can. 
        Looking forward to connecting!"
        image={{
          src: ReactIcon,
          alt: "React Icon",
          height: "auto",
          width: "40%"
        }}
      />
      <CTABanner buttonContent={contactCTAButtons}/>
      <Container>
        <Divider />
      </Container>
    </>
  );
};

export default ContactPage;
