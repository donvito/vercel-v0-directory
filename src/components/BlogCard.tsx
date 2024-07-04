import React from 'react';

interface BlogCardProps {
  title: string;
  excerpt: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, excerpt }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600">{excerpt}</p>
        <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Read More
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
