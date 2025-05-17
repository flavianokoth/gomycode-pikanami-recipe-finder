import Link from "next/link";

export function HeroSection() {
  return (
    <section className="home-hero-bg h-full bg-cover bg-top">
      <div className="font-bold text-white container mx-40 my-50 mb-40">
        <h1 className="text-5xl ">
          BE THE CHEF OF YOUR
          <br />
          KITCHEN
        </h1>
        <h2 className="text-2xl my-3">
          From Breakfast to Dinner, We Have You Covered
        </h2>
        <Link
          href="/recipes"
          className="text-lg text-white uppercase font-semiboldn my-9px py-3px rounded"
        >
          Get cooking now
        </Link>
      </div>
    </section>
  );
}
