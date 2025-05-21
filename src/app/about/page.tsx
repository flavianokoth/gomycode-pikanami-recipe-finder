// components/AboutSection.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

const AboutSection: React.FC = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left: Text content */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Us</h2>
          <p className="text-lg text-gray-700 mb-4">
            Welcome to our recipe platform! We&apos;re passionate about making
            cooking simple, fun, and accessible to everyone.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Whether you're a beginner or a seasoned chef, our collection of
            curated recipes, cooking tips, and nutritional guides are here to
            support your culinary journey.
          </p>

          <Link
            href="/recipes"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-xl text-lg font-medium hover:bg-green-700 transition"
          >
            Discover Recipes
          </Link>
        </div>

        {/* Right: Chef Image */}
        <div className="w-full h-72 md:h-96 relative bg-inherit">
          <Image
            src="/chef.jpg"
            alt="Chef"
            fill
            className="object-cover rounded-none"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
