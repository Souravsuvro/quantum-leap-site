import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 text-center">
          <div>
            <h1 className="text-6xl font-extrabold text-primary-600">404</h1>
            <h2 className="mt-4 text-3xl font-bold text-gray-900">Page Not Found</h2>
            <p className="mt-4 text-lg text-gray-600">
              We&apos;re sorry, but we can&apos;t find the page you&apos;re looking for.
            </p>
          </div>
          <div className="mt-8 space-y-4">
            <Link
              to="/"
              className="w-full flex justify-center py-3 px-6 border border-transparent 
                         rounded-md shadow-sm text-base font-medium text-white 
                         bg-primary-600 hover:bg-primary-700 transition-colors"
            >
              Return to Homepage
            </Link>
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600">
                Need help?{' '}
                <Link to="/contact" className="text-primary-600 hover:underline">
                  Contact Support
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

export default NotFoundPage;
