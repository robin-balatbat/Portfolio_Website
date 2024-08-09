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
    headline: "JavaScript"
  },
  {
    src: TypescriptLogo,
    alt: "TypeScript",
    headline: "TypeScript"
  },
  {
    src: ReactIcon,
    alt: "React",
    headline: "React"
  },
  {
    src: Csharp,
    alt: "C# logo",
    headline: "C#"
  },
  {
    src: UnityLogo,
    alt: "Unity",
    headline: "Unity"
  }
];

const certLogos = [
  {
    src: AWSLogo,
    alt: "AWS Certified Cloud Practitioner",
    headline: "AWS"
  },
  {
    src: GCPLogo,
    alt: "Google Cloud Digital Leader Certification",
    headline: "Google Cloud"
  },
  {
    src: AzureLogo,
    alt: "Microsoft Certified: Azure Fundamentals",
    headline: "Azure"
  }
]

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
      <LogoCollection headline="Certifications" logos={certLogos}/>
      <LogoCollection headline="Technical Skills" logos={techLogos} />
    </>
  );
}
