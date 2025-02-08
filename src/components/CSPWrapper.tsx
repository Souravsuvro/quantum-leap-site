import React, { useEffect } from 'react';

import { CSP_NONCE_ATTRIBUTE, generateNonce, generateCSPHeader } from '../config/csp';

interface CSPWrapperProps {
  children: React.ReactNode;
}

const CSPWrapper: React.FC<CSPWrapperProps> = ({ children }) => {
  useEffect(() => {
    // Generate and apply nonce to all script and style tags
    const nonce = generateNonce();
    const metaTag = document.createElement('meta');
    metaTag.setAttribute('http-equiv', 'Content-Security-Policy');
    metaTag.setAttribute('content', generateCSPHeader(nonce));
    document.head.appendChild(metaTag);

    // Apply nonce to existing scripts and styles
    document.querySelectorAll('script, style').forEach((el) => {
      el.setAttribute(CSP_NONCE_ATTRIBUTE, nonce);
    });

    return () => {
      // Clean up meta tag
      document.head.removeChild(metaTag);
    };
  }, []);

  return <>{children}</>;
};

export default CSPWrapper;
