import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const LabQFusionPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const navigate = useNavigate();

  const handleContactUs = () => {
    navigate('/#contact');
  };

  const tabs = [
    {
      id: 'overview',
      title: 'Overview',
      content: (
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Comprehensive Laboratory Transformation
          </h2>

          <div className="max-w-4xl mx-auto text-center space-y-6">
            <p className="text-xl text-gray-700 leading-relaxed">
              LabQFusion is a revolutionary Laboratory Information Management System (LIMS) designed
              to transform laboratory operations across healthcare, research, and diagnostic
              industries.
            </p>

            <p className="text-lg text-gray-600">
              By combining cutting-edge technology with intuitive design, LabQFusion empowers
              laboratories to achieve unprecedented levels of efficiency, accuracy, and innovation.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'features',
      title: 'Features',
      content: (
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Advanced Features of LabQFusion
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all">
              <div className="bg-primary-100 rounded-full p-4 inline-block mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-primary-600"
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
              <h4 className="font-bold text-primary-600 text-xl mb-3">
                Intelligent Sample Tracking
              </h4>
              <p className="text-gray-700">
                Real-time tracking of samples from collection to analysis with advanced barcode and
                RFID technologies, ensuring complete traceability and minimizing errors.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all">
              <div className="bg-secondary-100 rounded-full p-4 inline-block mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-secondary-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M13 5a2 2 0 00-2-2h-2a2 2 0 00-2 2m8 0a2 2 0 00-2-2h-2a2 2 0 00-2 2m0 0h6m-6 0v8a2 2 0 002 2h2a2 2 0 002-2v-8"
                  />
                </svg>
              </div>
              <h4 className="font-bold text-secondary-600 text-xl mb-3">Advanced Analytics</h4>
              <p className="text-gray-700">
                Powerful data analysis tools with AI-driven insights, predictive modeling, and
                comprehensive reporting capabilities to accelerate research and diagnostics.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all">
              <div className="bg-purple-100 rounded-full p-4 inline-block mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-purple-600"
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
              <h4 className="font-bold text-purple-600 text-xl mb-3">Robust Security</h4>
              <p className="text-gray-700">
                Enterprise-grade security with end-to-end encryption, comprehensive access controls,
                and compliance with HIPAA, GDPR, and other international standards.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'benefits',
      title: 'Benefits',
      content: (
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Key Benefits of LabQFusion
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all">
              <div className="bg-green-100 rounded-full p-4 inline-block mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-green-600"
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
              <h4 className="font-bold text-green-600 text-xl mb-3">Operational Efficiency</h4>
              <p className="text-gray-700">
                Streamline laboratory workflows, reduce manual processes, and significantly improve
                overall operational productivity.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all">
              <div className="bg-blue-100 rounded-full p-4 inline-block mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-blue-600"
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
              <h4 className="font-bold text-blue-600 text-xl mb-3">Data Integrity</h4>
              <p className="text-gray-700">
                Ensure accurate and reliable data management with comprehensive validation,
                tracking, and audit trail capabilities.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all">
              <div className="bg-indigo-100 rounded-full p-4 inline-block mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-indigo-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a1 1 0 01-1-1V7a1 1 0 011-1h1a2 2 0 100-4H4a1 1 0 01-1-1V4a1 1 0 011-1h3a1 1 0 011 1v1z"
                  />
                </svg>
              </div>
              <h4 className="font-bold text-indigo-600 text-xl mb-3">Scalability</h4>
              <p className="text-gray-700">
                Flexible and adaptable solution that grows with your laboratory, supporting diverse
                research and diagnostic needs.
              </p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="labqfusion-page min-h-screen flex flex-col bg-gray-50">
      <Helmet>
        <title>LabQFusion - Advanced Laboratory Management System</title>
        <meta
          name="description"
          content="LabQFusion: A comprehensive LIMS solution transforming laboratory operations through intelligent workflow management, advanced analytics, and robust security."
        />
      </Helmet>

      <Navbar />

      {/* Responsive Hero Section */}
      <div className="bg-gradient-to-br from-primary-100 to-secondary-100 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            LabQFusion
          </h1>
          <p className="text-lg md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
            Revolutionizing Laboratory Operations Through Intelligent Management
          </p>
        </div>
      </div>

      {/* Responsive Tabs Container */}
      <div className="flex-grow container mx-auto px-4 py-12 md:py-16 bg-white shadow-sm">
        {/* Responsive Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-8 space-x-2 md:space-x-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                px-3 py-2 md:px-4 md:py-2 rounded-lg text-sm md:text-base transition-colors 
                ${
                  activeTab === tab.id
                    ? 'bg-primary-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }
              `}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {/* Responsive Tab Content */}
        <div className="bg-white p-4 md:p-12 rounded-lg shadow-md">
          {tabs.find((tab) => tab.id === activeTab)?.content}
        </div>
      </div>

      {/* Unique Contact Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Transform Your Laboratory with LabQFusion
            </h2>
            <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Discover a comprehensive solution that streamlines your laboratory workflows, enhances
              data integrity, and accelerates scientific breakthroughs.
            </p>
            <button
              onClick={handleContactUs}
              className="bg-white text-indigo-600 hover:bg-gray-100 px-10 py-4 rounded-full 
                         font-semibold text-lg shadow-xl transform transition 
                         duration-300 ease-in-out hover:scale-105 focus:outline-none 
                         focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Schedule a Personalized Demo
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LabQFusionPage;
