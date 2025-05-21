'use client';
import React, { useState } from 'react';

function Search({ setName, setData }) {
  const [search, setSearch] = useState('');

  const onSearch = async () => {
    if (setName) setName(search);

    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
    if (!res.ok) return;

    const data = await res.json();
    if (setData) setData(data.meals); // Only meals array
  };

  return (
    <div className="flex items-center gap-2">
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border border-gray-300 bg-white h-10 px-4 rounded-lg text-sm focus:outline-none w-full"
        placeholder="Search meals..."
      />
      <button
        onClick={onSearch}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded"
      >
        Search
      </button>
    </div>
  );
}

export default Search;
