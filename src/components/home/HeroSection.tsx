import Link from "next/link";

export function HeroSection() {
  return (
    <section
      className="w-full h-screen bg-[url('/background.jpg')] bg-cover bg-center bg-no-repeat flex items-center"
    >
      <div className="container mx-auto px-6 md:px-16 text-white text-right max-w-4xl ml-auto">
        <h1 className="text-3xl sm:text-5xl font-bold leading-tight mb-4">
          BE THE CHEF OF YOUR <br /> KITCHEN
        </h1>
        <h2 className="text-base sm:text-2xl font-medium mb-6">
          From Breakfast to Dinner, We Have You Covered
        </h2>
        <Link
          href="/recipes"
          className="inline-block bg-yellow-400 text-black text-sm sm:text-base font-semibold uppercase tracking-wide py-3 px-6 rounded-lg hover:bg-yellow-500 transition"
        >
          Get cooking now
        </Link>
      </div>
    </section>
  );
}
