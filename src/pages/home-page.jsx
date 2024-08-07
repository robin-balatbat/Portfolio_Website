import Hero from "../components/Hero";
import JapanImage from "../assets/Japan_Photo.jpg";

export default function Home() {
  return (
    <Hero
      title="Welcome"
      paragraphContent="Hi, I’m Robin Balatbat, a front-end engineer with a specialization
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
  );
}
