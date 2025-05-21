
import { FoodCard } from "./FoodCard";

export default function RecipeTypesSection() {
  const recipeTypes=[
    {
      src:'/bread.webp',
      alt:'Bread Menu'
    },
     {
      src:'/pies.webp',
      // alt:'Pie Menu'
    },
     {
      src:'/Dessert.avif',
      alt:'Dessert Menu'
    },
     {
      src:'/cake.webp',
      alt:'cake Menu'
    },

  ]
  return (
    <div className="flex w-full">
       {
        recipeTypes.map((food, index)=><FoodCard key={index} src={food.src} alt={food.alt} />)
       }
    </div>
  )
}
