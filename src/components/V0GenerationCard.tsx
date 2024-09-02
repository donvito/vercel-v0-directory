import React from 'react';
import Image from 'next/image';
import { MdOpenInNew } from "react-icons/md";

interface V0GenerationProps {
  title: string;  
  generationId: string;
  author: string;
  authorV0ProfileId: string;
}

export default function V0GenerationCard({title, generationId, author, authorV0ProfileId}: V0GenerationProps) {

  const image = `https://v0.dev/api/${generationId}/image`;
  const generationLink = `https://v0.dev/t/${generationId}`;
  const profileLink = `https://v0.dev/${authorV0ProfileId}`;

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <a target="_blank" rel="noopener noreferrer" href={generationLink}>
        <Image src={image} alt={title} className="w-full max-h-64 object-cover" width={700} height={475} />
      </a>
      <div className="p-6 relative flex items-center justify-between">        
        <div>
          <p className="text-gray-600">{title.length > 100 ? `${title.substring(0, 100)}...` : title}</p>
          <p className="text-gray-600 pt-4">by <strong><a href={profileLink} target="_blank" rel="noopener noreferrer">@{authorV0ProfileId}</a></strong></p>
        </div>
        <MdOpenInNew className="text-gray-600 hover:text-gray-800 cursor-pointer text-2xl" onClick={() => window.open(generationLink, '_blank')} />
      </div>
    </div>
  );
};
