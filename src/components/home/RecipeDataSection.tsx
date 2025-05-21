'use client';

import { useRef, useState } from 'react';
import { RecipeeCard } from './RecipeCard';
import { useRouter } from 'next/navigation';

export default function RecipeDataSection() {
  const router = useRouter();
  const scrollRef = useRef<HTMLDivElement>(null);
  const cardsPerPage = 3;
  const [activePage, setActivePage] = useState(0);

  const recipedata = [
    {
      title: "Spaghetti Carbonara",
      src: "/spahgeti cabrona.jpg",
      rating: 5,
      difficulty: 2,
      creator: "Chef Mario"
    },
    {
      title: "Vegan Buddha Bowl",
      src: "/budha.jpg",
      rating: 4,
      difficulty: 1,
      creator: "Plant Power"
    },
    {
      title: "Classic Cheeseburger",
      src: "/cheeseburger.jpg",
      rating: 4,
      difficulty: 2,
      creator: "Grill Master"
    },
    {
      title: "Chicken Tikka Masala",
      src: "/chicken.jpg",
      rating: 5,
      difficulty: 3,
      creator: "Curry King"
    },
    {
      title: "Avocado Toast",
      src: "/avocado.jpg",
      rating: 3,
      difficulty: 1,
      creator: "Health Bites"
    },
    {
      title: "Blueberry Pancakes",
      src: "/pancakes.jpg",
      rating: 5,
      difficulty: 1,
      creator: "Breakfast Pro"
    }
  ];

  const totalPages = Math.ceil(recipedata.length / cardsPerPage);

  const scrollToPage = (pageIndex: number) => {
    const container = scrollRef.current;
    if (container) {
      const scrollX = container.offsetWidth * pageIndex;
      container.scrollTo({ left: scrollX, behavior: 'smooth' });
      setActivePage(pageIndex);
    }
  };

  return (
    <section className="p-6 space-y-6">
      {/* Header and Button */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Browse Our Featured Recipes</h2>
        <button
          onClick={() => router.push('/recipes')}
          className="bg-orange-500 text-white px-4 py-2 rounded-xl hover:bg-orange-600 transition"
        >
          Discover More
        </button>
      </div>

      {/* Scrollable Cards */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-hidden scroll-smooth"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {recipedata.map((food, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 scroll-snap-align-start"
          >
            <RecipeeCard
              title={food.title}
              src={food.src}
              rating={food.rating}
              difficulty={food.difficulty}
              creator={food.creator}
            />
          </div>
        ))}
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center gap-2 mt-2">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToPage(i)}
            className={`w-3 h-3 rounded-full ${
              activePage === i ? 'bg-orange-500' : 'bg-gray-300'
            } transition`}
          />
        ))}
      </div>
    </section>
  );
}
