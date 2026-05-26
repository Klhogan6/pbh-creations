import Nav from "@/components/marketing/Nav";
import Hero from "@/components/marketing/Hero";
import ProblemSolution from "@/components/marketing/ProblemSolution";
import HowItWorks from "@/components/marketing/HowItWorks";
import Pricing from "@/components/marketing/Pricing";
import WhyPBH from "@/components/marketing/WhyPBH";
import Contact from "@/components/marketing/Contact";
import Footer from "@/components/marketing/Footer";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ProblemSolution />
        <HowItWorks />
        <Pricing />
        <WhyPBH />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
