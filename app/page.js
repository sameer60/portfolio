import Contact from "./components/Contact";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Projects />
      <Testimonials />
      <Contact />
    </>
  );
}
