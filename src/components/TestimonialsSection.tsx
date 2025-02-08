import React, { useState, useEffect } from 'react';

interface TestimonialsSectionProps {
  id?: string;
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ id = 'testimonials' }) => {
  const testimonials = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Laboratory Director',
      quote:
        '"Evolv LIMS has revolutionized our laboratory operations. The automation features have significantly reduced our processing time and improved accuracy."',
      avatar: '/doctor1.jpg',
      gradient: 'from-blue-100 to-purple-100',
    },
    {
      name: 'Michael Chen',
      role: 'Healthcare Administrator',
      quote:
        '"My Visits has streamlined our scheduling process and improved patient satisfaction. The analytics help us make data-driven decisions."',
      avatar: '/doctor2.jpg',
      gradient: 'from-purple-100 to-indigo-100',
    },
    {
      name: 'Dr. Robert Miller',
      role: 'Research Director',
      quote:
        '"The analytics capabilities have transformed how we interpret our data. The insights we gain help us make better decisions faster."',
      avatar: '/doctor3.jpg',
      gradient: 'from-indigo-100 to-pink-100',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section id={id} className="py-16 bg-gray-50">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            What Our Clients Say
          </span>
        </h2>
        <div className="relative max-w-3xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`transition-all duration-500 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0 absolute top-0 left-0 w-full'
              }`}
            >
              <div
                className={`
                  bg-gradient-to-br ${testimonial.gradient} 
                  p-8 
                  rounded-2xl 
                  shadow-xl 
                  hover:shadow-2xl 
                  transition-all 
                  duration-300 
                  relative 
                  overflow-hidden
                  border 
                  border-gray-100
                `}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -z-10 transform translate-x-1/2 -translate-y-1/2 blur-2xl"></div>

                <div className="flex flex-col h-full">
                  <div className="flex items-center mb-6">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-20 h-20 rounded-full mr-6 border-4 border-white/50 shadow-md"
                    />
                    <div>
                      <h4 className="text-2xl font-bold text-gray-800">{testimonial.name}</h4>
                      <p className="text-gray-700 text-base">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-800 italic mb-4 text-lg leading-relaxed">
                    {testimonial.quote}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* Slide indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`
                  w-3 h-3 
                  rounded-full 
                  transition-all 
                  duration-300 
                  ${
                    index === currentSlide ? 'bg-purple-600 w-6' : 'bg-gray-300 hover:bg-purple-300'
                  }
                `}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
