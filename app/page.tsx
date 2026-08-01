import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LatestEvents from "./components/LatestEvents";
import Profile from "./components/Profile";
import Trust from "./components/Trust";
import ShaktiPeeth from "./components/ShaktiPeeth";
import Courses from "./components/Courses";
import Donations from "./components/Donations";
import Gallery from "./components/Gallery";
import YouTube from "./components/YouTube";
import Social from "./components/Social";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollAnimations from "./components/ScrollAnimations";
import FloatingDiyas from "./components/FloatingDiyas";

export default function Home() {
  return (
    <>
      <FloatingDiyas />
      <Navbar />
      <Hero />
      <LatestEvents />
      <Profile />
      <Trust />
      <ShaktiPeeth />
      <Courses />
      <Donations />
      <Gallery />
      <YouTube />
      <Social />
      <Contact />
      <Footer />
      <a href="#home" className="back-to-top" title="Back to top">&#x0950;</a>
      <ScrollAnimations />
    </>
  );
}
