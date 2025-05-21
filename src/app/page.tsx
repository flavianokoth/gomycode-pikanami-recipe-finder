import { HeroSection } from "../components/home/HeroSection";
import RecipeDataSection from "../components/home/RecipeDataSection";
import RecipeTypesSection from "../components/home/RecipeTypesSection";
import AboutSection from "./about/page";

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection />
      {/* recipeetypesection */}
      <RecipeTypesSection />
      {/* recipes section */}
      <RecipeDataSection />
      {/* About section */}
      <section id="about" className="py-16">
  {/* About content here */}
  <AboutSection />
</section>

      
    </div>
  );
}
