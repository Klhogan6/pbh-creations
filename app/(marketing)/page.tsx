import Nav from "@/components/marketing/Nav";
import Hero from "@/components/marketing/Hero";

// Additional sections added on their own feature branches:
// Problem/Solution + How It Works — feature/problem-how-it-works
// Pricing — feature/pricing
// Why PBH + Contact + Footer — feature/why-contact-footer

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        {/* More sections coming on feature branches */}
      </main>
    </>
  );
}
