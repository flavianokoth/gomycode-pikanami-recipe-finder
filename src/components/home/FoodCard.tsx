import Image from "next/image";
import React from "react";

interface FoodCardProps {
  src: string;
  alt?: string;
}

export function FoodCard({ src, alt }: FoodCardProps) {
  const imageName = src.split("/").pop()?.split(".")[0] ?? "Food";

  return (
    <div className="relative w-full aspect-[3/4]">
      <Image
        src={src}
        alt={alt || `${imageName} Image`}
        fill
        className="object-cover rounded-lg"
      />
    </div>
  );
}
