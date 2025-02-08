import React, { useState } from 'react';

interface ContactSectionProps {
  id?: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({ id = 'contact' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log('Form submitted:', formData);
  };

  return (
    <section
      id={id}
      className="py-24 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden"
    >
      {/* Background blur effects */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-200 rounded-full filter blur-3xl opacity-50"></div>
      <div className="absolute top-1/2 -right-10 w-40 h-40 bg-purple-200 rounded-full filter blur-3xl opacity-50"></div>
      <div className="absolute -bottom-10 left-1/2 w-40 h-40 bg-indigo-200 rounded-full filter blur-3xl opacity-50"></div>

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-white p-8 rounded-2xl shadow-xl backdrop-blur-lg bg-opacity-90 transform hover:scale-105 transition-all duration-300">
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
              Get in Touch
            </h2>
            <p className="text-gray-600 mb-8">
              Have questions about our solutions? Our team is here to help.
            </p>
            <div className="space-y-6 text-gray-600 hover:cursor-pointer">
              {[
                { icon: 'envelope', text: 'contact@quantumleaps.com', color: 'blue' },
                { icon: 'phone', text: '+1 214 329 9859', color: 'purple' },
                {
                  icon: 'map-marker-alt',
                  text: '8700 Stonebrook Pkwy, #34, Frisco, TX 75034',
                  color: 'indigo',
                },
              ].map((contact, index) => (
                <div key={index} className="flex items-center">
                  <i
                    className={`fas fa-${contact.icon} text-${contact.color}-600 text-2xl w-8 transform transition-all duration-300 hover:scale-110`}
                  ></i>
                  <span>{contact.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-xl backdrop-blur-lg bg-opacity-90 transform hover:scale-105 transition-all duration-300">
            <form
              onSubmit={handleSubmit}
              className="space-y-6 transform transition-all duration-300"
            >
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                ></textarea>
              </div>
              <button
                type="submit"
                className="!rounded-lg w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 font-medium transform transition hover:scale-105 shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
