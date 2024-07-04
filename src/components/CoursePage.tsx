import React from 'react';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';

const CoursePage = () => {
  const courseContent = [
    { title: "Section 1: Introduction", lessons: 4, duration: "9min" },
    { title: "Section 2: Getting Started", lessons: 3, duration: "7min" },
    { title: "Section 3: Structure Your Course", lessons: 7, duration: "18min" },
    { title: "Section 4: Create Your Content", lessons: 10, duration: "32min" },
  ];

  return (
    <div className="flex flex-col h-screen bg-base-200">
      <header className="bg-base-100 p-4 shadow-md">
        <h1 className="text-2xl font-bold">How to Create an Online Course: The Official Udemy Course</h1>
      </header>
      
      <div className="flex flex-1 overflow-hidden">
        <aside className="w-1/3 bg-base-100 overflow-y-auto">
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-4">Course content</h2>
            {courseContent.map((section, index) => (
              <div key={index} className="mb-4">
                <h3 className="font-medium">{section.title}</h3>
                <p className="text-sm text-base-content/70">
                  {section.lessons} / {section.lessons} | {section.duration}
                </p>
              </div>
            ))}
          </div>
        </aside>
        
        <main className="flex-1 flex flex-col">
          <div className="relative flex-1 bg-black">
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="btn btn-circle btn-lg">
                <Play size={32} />
              </button>
            </div>
            <div className="absolute bottom-0 left-0 right-0 flex justify-between p-4">
              <button className="btn btn-circle btn-sm">
                <ChevronLeft />
              </button>
              <button className="btn btn-circle btn-sm">
                <ChevronRight />
              </button>
            </div>
          </div>
          <div className="bg-base-100 p-4">
            <h2 className="text-xl font-semibold mb-2">Overview</h2>
            <p>Use our recommended best practices to plan, produce, and publish a well-designed, high quality Udemy course</p>
            <div className="mt-4 flex items-center space-x-4">
              <div className="rating">
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked readOnly />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked readOnly />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked readOnly />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked readOnly />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
              </div>
              <span className="text-lg font-semibold">4.6</span>
              <span className="text-base-content/70">(4,952 ratings)</span>
            </div>
            <div className="mt-2 text-sm text-base-content/70">
              <span>133,620 students</span>
              <span className="mx-2">•</span>
              <span>1.5 hours total</span>
            </div>
            <p className="mt-2 text-sm text-base-content/70">Last updated January 2022</p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CoursePage;