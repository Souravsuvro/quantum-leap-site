import React from 'react';
import { useNavigate } from 'react-router-dom';

interface FeaturesSectionProps {
  id?: string;
}

const FeaturesSection: React.FC<FeaturesSectionProps> = ({ id = 'features' }) => {
  const navigate = useNavigate();

  const features = [
    {
      icon: 'flask',
      title: 'LabQFusion',
      color: 'blue',
      description:
        'Comprehensive laboratory information management system for streamlined operations, enhanced efficiency, with advanced analytics and enterprise-grade security.',
      details: [
        'Advanced data analytics',
        'Workflow optimization',
        'Comprehensive reporting',
        'Secure data management',
        'Compliance tracking',
      ],
      onClick: () => navigate('/labq-fusion'),
    },
    {
      icon: 'calendar-check',
      title: 'CareLinkAccess',
      color: 'custom', // Using custom color for specific hex
      description:
        'All-in-one healthcare provider solution for seamless scheduling, enhanced efficiency, with powerful analytics and robust security features.',
      details: [
        'Intelligent scheduling',
        'Patient management',
        'Real-time analytics',
        'Custom report generation',
        'Audit trail logging',
      ],
      onClick: () => navigate('/carelink-access'),
    },
    {
      icon: 'shield-alt',
      title: 'EMRVault',
      color: 'green',
      description: 'Secure Electronic Medical Records management system.',
      details: [
        'Centralized patient data management',
        'Secure data storage and transmission',
        'Compliance with regulatory standards',
        'Role-based access control',
        'Audit trail logging',
      ],
      comingSoon: true,
    },
    {
      icon: 'file-medical-alt',
      title: 'DocuHealth',
      color: 'indigo',
      description: 'Comprehensive healthcare documentation and compliance tracking platform.',
      details: [
        'Automated document management',
        'Compliance tracking and reporting',
        'Secure data storage and transmission',
        'Role-based access control',
        'Audit trail logging',
      ],
      comingSoon: true,
    },
  ];

  return (
    <section id={id} className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Our Solutions
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Innovative SaaS solutions transforming healthcare and laboratory operations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              onClick={feature.onClick}
              className={`
                bg-white p-6 rounded-lg shadow-md 
                transform transition-all duration-300 
                hover:scale-105 hover:shadow-xl 
                relative 
                ${feature.comingSoon ? 'opacity-75' : 'cursor-pointer'}
                ${
                  feature.color === 'custom'
                    ? 'border border-[#9333EA]/20'
                    : `border border-${feature.color}-100`
                } 
                relative overflow-hidden
              `}
            >
              {feature.comingSoon && (
                <span className="absolute top-2 right-2 bg-yellow-500 text-white text-xs px-2 py-1 rounded-full">
                  Coming Soon
                </span>
              )}
              <div
                className={`
                absolute -right-20 -top-20 w-40 h-40 
                ${feature.color === 'custom' ? 'bg-[#9333EA]' : `bg-${feature.color}-600`}
                rounded-full opacity-50 blur-2xl
              `}
              ></div>
              <div className="flex flex-col items-center mb-6 relative z-10">
                <i
                  className={`
                  fas fa-${feature.icon} 
                  ${feature.color === 'custom' ? 'text-[#9333EA]' : `text-${feature.color}-600`} 
                  text-5xl mb-4 transform transition-all duration-300 hover:scale-110
                `}
                ></i>
                <h3
                  className={`
                  text-2xl font-bold 
                  ${feature.color === 'custom' ? 'text-[#9333EA]' : `text-${feature.color}-600`} 
                  mb-2
                `}
                >
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-600 mb-6">{feature.description}</p>
              <ul className="space-y-4 text-left">
                {feature.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-center text-gray-600">
                    <svg
                      className={`
                        w-4 h-4 mr-2 
                        ${
                          feature.color === 'custom'
                            ? 'text-[#9333EA]'
                            : `text-${feature.color}-500`
                        }
                      `}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
