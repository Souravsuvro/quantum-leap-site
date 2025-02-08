import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const GatewayTimeoutPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 text-center">
          <div>
            <h1 className="text-6xl font-extrabold text-red-600">504</h1>
            <h2 className="mt-4 text-3xl font-bold text-gray-900">Gateway Timeout</h2>
            <p className="mt-4 text-lg text-gray-600">
              We&apos;re experiencing a timeout. Please try again later.
            </p>
          </div>
          <div className="mt-8 space-y-4">
            <button
              onClick={() => window.location.reload()}
              className="w-full flex justify-center py-3 px-6 border border-transparent 
                         rounded-md shadow-sm text-base font-medium text-white 
                         bg-red-600 hover:bg-red-700 transition-colors"
            >
              Try Again
            </button>
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600">
                Check your internet connection or{' '}
                <Link to="/contact" className="text-red-600 hover:underline">
                  contact support
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

export default GatewayTimeoutPage;
