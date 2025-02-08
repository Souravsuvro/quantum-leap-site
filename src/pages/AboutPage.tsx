import React from 'react';
import { Helmet } from 'react-helmet-async';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutPage: React.FC = () => {
  // Team members data
  const teamMembers = [
    {
      name: 'Dr. Elena Rodriguez',
      role: 'Chief Executive Officer',
      image: '/images/team/elena.jpg',
      bio: 'Pioneering healthcare technology innovation with over 15 years of experience.',
    },
    {
      name: 'Michael Chen',
      role: 'Chief Technology Officer',
      image: '/images/team/michael.jpg',
      bio: 'Expert in AI and machine learning applications in healthcare.',
    },
    {
      name: 'Sarah Thompson',
      role: 'Head of Product Design',
      image: '/images/team/sarah.jpg',
      bio: 'Transforming complex healthcare challenges into intuitive user experiences.',
    },
    {
      name: 'Dr. James Williams',
      role: 'Chief Medical Officer',
      image: '/images/team/james.jpg',
      bio: 'Bridging clinical expertise with technological innovation.',
    },
  ];

  return (
    <div className="about-page min-h-screen flex flex-col bg-gray-50">
      <Helmet>
        <title>About Quantum Leaps - Transforming Healthcare Technology</title>
        <meta
          name="description"
          content="Learn about Quantum Leaps' mission to revolutionize healthcare through innovative technology solutions."
        />
      </Helmet>

      <Navbar />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-100 to-secondary-100 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            About Quantum Leaps
          </h1>
          <p className="text-lg md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
            Pioneering Intelligent Healthcare Solutions
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="container mx-auto px-4 py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8">Our Mission</h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            At Quantum Leaps, we are dedicated to transforming healthcare through cutting-edge
            technology. Our mission is to empower healthcare providers with intelligent, intuitive
            solutions that enhance patient care, streamline operations, and drive medical
            innovation.
          </p>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-gray-100 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-900 mb-12">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-primary-100 rounded-full p-4 inline-block mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-primary-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Innovation</h3>
              <p className="text-gray-700">
                Continuously pushing the boundaries of healthcare technology.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-secondary-100 rounded-full p-4 inline-block mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-secondary-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Security</h3>
              <p className="text-gray-700">
                Protecting patient data with the highest security standards.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-purple-100 rounded-full p-4 inline-block mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-purple-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Empathy</h3>
              <p className="text-gray-700">
                Designing solutions that truly improve patient and provider experiences.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="container mx-auto px-4 py-16 md:py-24 bg-white">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Leadership</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our diverse and talented team is dedicated to pushing the boundaries of healthcare
            technology.
          </p>
        </div>

        {/* Team Members */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-xl p-4 md:p-6 shadow-lg hover:shadow-2xl transition-all"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full rounded-lg mb-4 shadow-md"
              />
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{member.role}</p>
                <p className="text-gray-500 text-xs">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-br from-primary-500 to-secondary-500 py-12 md:py-16 text-center">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Join Our Mission</h3>
          <p className="text-base md:text-lg text-white max-w-2xl mx-auto mb-6">
            Are you passionate about transforming healthcare through technology? Explore career
            opportunities with Quantum Leaps.
          </p>
          <a
            href="/careers"
            className="bg-white text-primary-600 hover:bg-primary-100 px-6 py-3 rounded-full text-base md:text-lg font-semibold transition-colors"
          >
            View Open Positions
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutPage;
