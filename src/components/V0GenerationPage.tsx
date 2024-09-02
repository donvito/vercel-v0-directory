'use client'

import React, { useEffect, useState } from 'react';
import V0GenerationCard from '@/components/V0GenerationCard';

export default function V0GenerationPage() {
  
  const [generations, setGenerations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/generations-supa');
      console.log(response);
      const data = await response.json();
      setGenerations(data);
    };

    fetchData();
  }, []);

  const [searchTerm, setSearchTerm] = useState('');
  const filteredGenerations = generations.filter((g: { title: string, author: string }) => 
    g.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    g.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-5xl font-bold mb-2 text-center">Curated v0.dev Generations</h1>
      <h2 className="text-1xl mb-6 text-center">
        I made this tool so we can easily discover really good <a href="https://v0.dev" className="text-blue-500 underline">v0.dev</a> generations.
        <br/>Share your generation in X with and I&apos;ll add it here.
      </h2>
      <div className="flex justify-center mb-6">
        <input 
          type="text" 
          placeholder="Search v0 generations" 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)} 
          className="p-4 border border-gray-300 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-1/2"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredGenerations.map((g : { title: string, author: string, generationId: string, authorV0ProfileId: string }) => (
          <V0GenerationCard key={g.generationId} title={g.title} generationId={g.generationId} author={g.author} authorV0ProfileId={g.authorV0ProfileId} />
        ))}
      </div>
    </div>
  );
};
