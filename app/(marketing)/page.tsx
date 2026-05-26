import Nav from "@/components/marketing/Nav";
import Hero from "@/components/marketing/Hero";
import ProblemSolution from "@/components/marketing/ProblemSolution";
import HowItWorks from "@/components/marketing/HowItWorks";

// Additional sections added on their own feature branches:
// Pricing — feature/pricing
// Why PBH + Contact + Footer — feature/why-contact-footer

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ProblemSolution />
        <HowItWorks />
        {/* More sections coming on feature branches */}
      </main>
    </>
  );
}
