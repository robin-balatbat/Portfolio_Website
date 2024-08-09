import { Container, Divider, Typography } from "@mui/material";
import Hero from "../components/Hero";
import LogoCollection from "../components/LogoCollection";
import CTABanner from "../components/CTABanner";
import JapanImage from "../assets/Japan_Photo.jpg";

import Csharp from "../assets/Csharp_Logo.png";
import JavascriptLogo from "../assets/JavaScript-logo.png";
import ReactIcon from "../assets/React-icon.png";
import TypescriptLogo from "../assets/Typescript_logo_2020.png";
import UnityLogo from "../assets/Unity_Logo.png";

import AWSLogo from "../assets/aws-certified-cloud-practitioner.png";
import AzureLogo from "../assets/microsoft-certified-azure-fundamentals.png";
import GCPLogo from "../assets/cloud-digital-leader-certification.png";

const techLogos = [
  {
    src: JavascriptLogo,
    alt: "JavaScript",
    subtitle: "JavaScript"
  },
  {
    src: TypescriptLogo,
    alt: "TypeScript",
    subtitle: "TypeScript"
  },
  {
    src: ReactIcon,
    alt: "React",
    subtitle: "React"
  },
  {
    src: Csharp,
    alt: "C# logo",
    subtitle: "C#"
  },
  {
    src: UnityLogo,
    alt: "Unity",
    subtitle: "Unity"
  }
];

const certLogos = [
  {
    src: AWSLogo,
    alt: "AWS Certified Cloud Practitioner",
    subtitle: "AWS Certified",
    link: "https://www.credly.com/badges/13cc9706-a7b2-4588-bf95-6f1f3752a65e/public_url"
  },
  {
    src: GCPLogo,
    alt: "Google Cloud Digital Leader Certification",
    subtitle: "Google Cloud Certified",
    link: "https://www.credly.com/badges/28a0e06e-6669-4be6-961d-cf8d899b4e3f/public_url"
  },
  {
    src: AzureLogo,
    alt: "Microsoft Certified: Azure Fundamentals",
    subtitle: "Azure",
    link: "https://www.credly.com/badges/cfa9ab4b-55f6-46d0-a83f-eb5525830677/public_url"
  }
];

export default function Home() {
  return (
    <>
      <Hero
        title="Welcome"
        paragraphContent="Hi, I’m Robin Balatbat, a front-end engineer that specializes
            in accessibility. I’m passionate about creating inclusive and
            user-friendly web experiences that ensure everyone can navigate and
            interact with digital content effortlessly. Explore my portfolio to
            see how my commitment to accessibility can enhance your projects, or
            get in touch to discuss how we can work together to make the web a
            more accessible place for all."
        image={{
          src: JapanImage,
          alt: "Robin showing a shaka with some sushi chefs in Japan",
          height: "auto",
          width: "70%"
        }}
      />
      <CTABanner />
      <Container id="about-me" sx={{ padding: 4 }}>
        <Typography
          variant="h2"
          component="h2"
          align="center"
          sx={{ padding: 2 }}
        >
          About Me
        </Typography>
        <Divider />
        <LogoCollection headline="Certifications" logos={certLogos} />
        <LogoCollection headline="Technical Skills" logos={techLogos} />
      </Container>
    </>
  );
}
