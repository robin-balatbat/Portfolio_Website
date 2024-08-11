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
    label: "JavaScript"
  },
  {
    src: TypescriptLogo,
    alt: "TypeScript",
    label: "TypeScript"
  },
  {
    src: ReactIcon,
    alt: "React",
    label: "React"
  },
  {
    src: Csharp,
    alt: "C# logo",
    label: "C#"
  },
  {
    src: UnityLogo,
    alt: "Unity",
    label: "Unity"
  }
];

const certLogos = [
  {
    src: AWSLogo,
    alt: "AWS Certified Cloud Practitioner",
    label: "AWS Certified",
    link: "https://www.credly.com/badges/13cc9706-a7b2-4588-bf95-6f1f3752a65e/public_url"
  },
  {
    src: GCPLogo,
    alt: "Google Cloud Digital Leader Certification",
    label: "Google Cloud Certified",
    link: "https://www.credly.com/badges/28a0e06e-6669-4be6-961d-cf8d899b4e3f/public_url"
  },
  {
    src: AzureLogo,
    alt: "Microsoft Certified: Azure Fundamentals",
    label: "Azure",
    link: "https://www.credly.com/badges/cfa9ab4b-55f6-46d0-a83f-eb5525830677/public_url"
  }
];

const homePageCTA = [
  {
    link: "/contact",
    label: "Contact Me"
  },
  {
    link: "/projects",
    label: "View my Projects"
  }
];

export default function HomePage() {
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
      <CTABanner buttonContent={homePageCTA}/>
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
        <LogoCollection
          headline="Certifications"
          subtitle="In the past two years, I’ve earned the AWS Certified Cloud Practitioner, 
          Google Cloud Digital Leader, and Microsoft Azure Fundamentals 
          certifications. I actively stay on top of the latest tech trends 
          and continuously grow my skills. The links in this section open in
          a new tab to view my credentials on Credly."
          logos={certLogos}
        />
        <LogoCollection
          headline="Technical Skills"
          subtitle="I’m most familiar with a range of languages and frameworks that
           power my development work. On the front-end side, I have extensive 
           experience with JavaScript, TypeScript, and React. 
           For game development, I’m well-versed in C# and Unity, which I use to 
           create engaging and interactive experiences."
          logos={techLogos}
        />
      </Container>
    </>
  );
}
