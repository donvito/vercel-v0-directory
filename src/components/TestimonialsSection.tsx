import React from 'react';
import { Star } from 'lucide-react';

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "CEO, TechCorp",
      content: "This product has revolutionized our workflow. It's intuitive, powerful, and has saved us countless hours.",
      rating: 5,
      highlighted: true,
    },
    {
      id: 2,
      name: "Sarah Lee",
      role: "Freelance Designer",
      content: "As a freelancer, this tool has been a game-changer. It's helped me manage my projects more efficiently.",
      rating: 4,
      highlighted: false,
    },
    {
      id: 3,
      name: "Mike Brown",
      role: "Marketing Manager",
      content: "The customer support is outstanding. They've been incredibly helpful in customizing the solution for our needs.",
      rating: 5,
      highlighted: false,
    },
  ];

  const renderStars = (rating) => {
    return Array(5).fill().map((_, index) => (
      <Star key={index} className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`} />
    ));
  };

  return (
    <div className="bg-base-200 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className={`card ${testimonial.highlighted ? 'bg-primary text-primary-content' : 'bg-base-100'} shadow-xl`}>
              <div className="card-body">
                <div className="flex items-center mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="text-lg mb-4">{testimonial.content}</p>
                <div className="flex items-center">
                  <div className="avatar placeholder mr-4">
                    <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
                      <span className="text-xl">{testimonial.name.charAt(0)}</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm opacity-70">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;