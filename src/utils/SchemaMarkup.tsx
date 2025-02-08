import React from 'react';
import { Helmet } from 'react-helmet-async';

// Interface for Organization Schema
export interface OrganizationSchemaProps {
  name: string;
  url: string;
  logo: string;
  description: string;
  contactPoint?: {
    telephone?: string;
    email?: string;
    contactType?: string;
  };
  socialMedia?: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
  };
}

// Interface for WebSite Schema
export interface WebSiteSchemaProps {
  name: string;
  url: string;
  description: string;
  searchAction?: string;
}

// Interface for LocalBusiness Schema
export interface LocalBusinessSchemaProps {
  name: string;
  description: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  telephone?: string;
  email?: string;
  priceRange?: string;
  openingHours?: string[];
}

// Utility component for adding schema markup
export const SchemaMarkup: React.FC<{
  type: 'Organization' | 'WebSite' | 'LocalBusiness';
  schemaProps: OrganizationSchemaProps | WebSiteSchemaProps | LocalBusinessSchemaProps;
}> = ({ type, schemaProps }) => {
  const generateSchema = () => {
    switch (type) {
      case 'Organization':
        return {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: (schemaProps as OrganizationSchemaProps).name,
          url: (schemaProps as OrganizationSchemaProps).url,
          logo: (schemaProps as OrganizationSchemaProps).logo,
          description: (schemaProps as OrganizationSchemaProps).description,
          ...((schemaProps as OrganizationSchemaProps).contactPoint && {
            contactPoint: {
              '@type': 'ContactPoint',
              ...(schemaProps as OrganizationSchemaProps).contactPoint,
            },
          }),
          ...((schemaProps as OrganizationSchemaProps).socialMedia && {
            sameAs: Object.values((schemaProps as OrganizationSchemaProps).socialMedia || {}),
          }),
        };

      case 'WebSite':
        return {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: (schemaProps as WebSiteSchemaProps).name,
          url: (schemaProps as WebSiteSchemaProps).url,
          description: (schemaProps as WebSiteSchemaProps).description,
          ...((schemaProps as WebSiteSchemaProps).searchAction && {
            potentialAction: {
              '@type': 'SearchAction',
              target: (schemaProps as WebSiteSchemaProps).searchAction,
            },
          }),
        };

      case 'LocalBusiness':
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: (schemaProps as LocalBusinessSchemaProps).name,
          description: (schemaProps as LocalBusinessSchemaProps).description,
          address: {
            '@type': 'PostalAddress',
            ...(schemaProps as LocalBusinessSchemaProps).address,
          },
          ...((schemaProps as LocalBusinessSchemaProps).telephone && {
            telephone: (schemaProps as LocalBusinessSchemaProps).telephone,
          }),
          ...((schemaProps as LocalBusinessSchemaProps).email && {
            email: (schemaProps as LocalBusinessSchemaProps).email,
          }),
          ...((schemaProps as LocalBusinessSchemaProps).priceRange && {
            priceRange: (schemaProps as LocalBusinessSchemaProps).priceRange,
          }),
          ...((schemaProps as LocalBusinessSchemaProps).openingHours && {
            openingHoursSpecification: {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: (schemaProps as LocalBusinessSchemaProps).openingHours,
            },
          }),
        };
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(generateSchema())}</script>
    </Helmet>
  );
};

// Predefined schemas for quick use
export const QuantumLeapsSchema = {
  organization: {
    name: 'Quantum Leaps',
    url: 'https://www.quantumleaps.com',
    logo: 'https://www.quantumleaps.com/logo.png',
    description: 'Innovative Healthcare Technology Solutions',
    contactPoint: {
      telephone: '+1-555-QUANTUM',
      email: 'support@quantumleaps.com',
      contactType: 'Customer Support',
    },
    socialMedia: {
      facebook: 'https://facebook.com/quantumleaps',
      twitter: 'https://twitter.com/quantumleaps',
      linkedin: 'https://linkedin.com/company/quantumleaps',
    },
  },
  website: {
    name: 'Quantum Leaps Healthcare Solutions',
    url: 'https://www.quantumleaps.com',
    description: 'Cutting-edge healthcare technology and solutions',
    searchAction: 'https://www.quantumleaps.com/search?q={search_term_string}',
  },
};
