import { HeroSection } from "../components/home/HeroSection";

export default function HomePage() {
  return (
    <div className="border border-red-600 flex flex-col">
      {/* Hero Section */}
      <HeroSection />
      <section className="bg-blue-300">
        <div className="background-image: url('/favicon.png') bg-cover bg-center bg-no-repeat h-screen "></div>
      </section>
    </div>
  );
}
