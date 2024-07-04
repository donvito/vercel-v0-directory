import React from 'react';
import BlogCard from './BlogCard';

const BlogsPage = () => {
  // This is just sample data. In a real application, you'd fetch this from an API or database
  const blogs = [
    { "id": 1, "title": "First Blog Post", "excerpt": "This is a short excerpt of the first blog post..." },
    { "id": 2, "title": "Second Blog Post", "excerpt": "This is a short excerpt of the second blog post..." },
    { "id": 3, "title": "Third Blog Post", "excerpt": "This is a short excerpt of the third blog post..." },
    { "id": 4, "title": "Fourth Blog Post", "excerpt": "This is a short excerpt of the fourth blog post..." },
    { "id": 5, "title": "Fifth Blog Post", "excerpt": "This is a short excerpt of the fifth blog post..." }
];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Our Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} title={blog.title} excerpt={blog.excerpt} />
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;
