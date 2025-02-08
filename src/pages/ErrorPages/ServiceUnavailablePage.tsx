import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const ServiceUnavailablePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 text-center">
          <div>
            <h1 className="text-6xl font-extrabold text-yellow-600">503</h1>
            <h2 className="mt-4 text-3xl font-bold text-gray-900">Service Unavailable</h2>
            <p className="mt-4 text-lg text-gray-600">
              Our servers are temporarily overloaded or under maintenance. Please try again later.
            </p>
          </div>
          <div className="mt-8 space-y-4">
            <button
              onClick={() => window.location.reload()}
              className="w-full flex justify-center py-3 px-6 border border-transparent 
                         rounded-md shadow-sm text-base font-medium text-white 
                         bg-yellow-600 hover:bg-yellow-700 transition-colors"
            >
              Reload Page
            </button>
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600">
                If the problem persists,{' '}
                <Link to="/contact" className="text-yellow-600 hover:underline">
                  contact our support team
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ServiceUnavailablePage;
