import React from 'react';

interface FooterProps {
  id?: string;
}

const Footer: React.FC<FooterProps> = ({ id = 'footer' }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id={id}
      className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 text-white py-12"
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <img
              src="/quantum_leap_logo_trasparent.png"
              alt="Quantum Leaps"
              className="h-20 mb-6"
            />
            <p className="text-gray-200">
              Shaping the Future of Industries Through Cutting-Edge SaaS Solutions.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              {[
                { name: 'Evolv LIMS', link: '#features' },
                { name: 'My Visits', link: '#features' },
                { name: 'Enterprise Solutions', link: '#pricing' },
              ].map((product, index) => (
                <li key={index}>
                  <a href={product.link} className="text-gray-200 hover:text-white">
                    {product.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Office Location */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Office</h4>
            <address className="not-italic text-gray-200 space-y-2">
              <p>Quantum Leaps Corporation</p>
              <p>8700 Stonebrook Pkwy, #34, Frisco, TX 75034</p>
              <p>United States</p>
              <div className="mt-4">
                <p>Phone: +1 214 329 9859</p>
                <p>Email: contact@quantumleaps.com</p>
              </div>
            </address>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 mt-12 pt-8 text-center text-gray-200">
          <p> {currentYear} Quantum Leaps. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
