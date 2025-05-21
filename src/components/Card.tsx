import Image from 'next/image'
import Link from 'next/link'

function Card({meal}) {
  return (
    <Link href={`/recipe/${meal?.idMeal}`}>
    <div className='max-w-sm bg-brown-600 border-2 border-gray-300 cursor-pointer hover:border-black'>
        <Image src={meal?.strMealThumb} width={300} height={150} alt='meal image'/>
        <h1 className='bg-white py-4 text-black-500 font-semibold text-2xl text-center'>{meal?.strMeal}</h1> 
    </div>
    </Link>
  )
}

export default Card