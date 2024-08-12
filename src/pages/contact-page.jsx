import React from "react";
import Hero from "../components/Hero";

import { Container, Divider, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

import CTABanner from "../components/CTABanner";
import Form from "../components/Form";

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

const formFields = [
  {
    id: "1",
    label: "First Name",
    name: "firstName",
    required: true,
  },
  {
    id: "2",
    label: "Last Name",
    name: "lastName",
    required: true,
  },
  {
    id: "3",
    label: "Email",
    name: "email",
    required: true,
  },
  {
    id: "4",
    label: "Phone Number",
    name: "phoneNumber",
    required: false,
  },
  {
    id: "5",
    label: "Subject",
    name: "subject",
    fullWidth: true,
  },
  {
    id: "6",
    label: "Message",
    name: "message",
    multiline: true,
    required: true,
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
      <CTABanner buttonContent={contactCTAButtons} />
      <Container id="#contact-form"  sx={{ padding: 4 }}>
      <Typography
          variant="h2"
          component="h2"
          align="center"
          sx={{ padding: 2 }}
        >
          Contact Form
        </Typography>
        <Divider />
        <Typography align="center" sx={{pt: 2}}>
          Form fields with an asterisk "*" are required.
        </Typography>
        <Form formContent={formFields}/>
      </Container>
    </>
  );
};

export default ContactPage;
