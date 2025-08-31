import AboutMe from "../AboutMe";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import MyPortfolio from "../MyPortfolio";
import MySkills from "../myskills";





export default function Home() {
  return (
    <>
      <HeroSection /> {/*MAj in function nmae is important to be an element in react */}
      <MySkills />
      <AboutMe />
      <MyPortfolio />
      <ContactMe />
      <Footer />
      
    </>
  );
}