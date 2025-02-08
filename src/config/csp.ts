// Content Security Policy Configuration

export const CSP_NONCE_ATTRIBUTE = 'data-csp-nonce';

export interface CSPDirectives {
  [key: string]: string[];
}

export const getCSPDirectives = (nonce?: string): CSPDirectives => {
  const baseDirectives: CSPDirectives = {
    'default-src': ["'self'"],
    'script-src': [
      "'self'",
      "'unsafe-inline'", // Needed for inline scripts, consider removing
      'https://cdnjs.cloudflare.com', // For Font Awesome
      nonce ? `'nonce-${nonce}'` : '',
    ].filter(Boolean),
    'style-src': [
      "'self'",
      "'unsafe-inline'", // Needed for Tailwind, consider using a more strict approach
      'https://fonts.googleapis.com',
    ],
    'font-src': ["'self'", 'https://fonts.gstatic.com', 'https://cdnjs.cloudflare.com'],
    'img-src': ["'self'", 'data:', 'https:'],
    'connect-src': [
      "'self'",
      'https://api.quantumleaps.com', // Replace with your actual API domain
    ],
    'frame-src': ["'none'"],
    'object-src': ["'none'"],
    'base-uri': ["'self'"],
    'form-action': ["'self'"],
  };

  return baseDirectives;
};

export const generateCSPHeader = (nonce?: string): string => {
  const directives = getCSPDirectives(nonce);
  return Object.entries(directives)
    .map(([key, values]) => `${key} ${values.join(' ')}`)
    .join('; ');
};

export const generateNonce = (): string => {
  // Browser-compatible nonce generation
  const array = new Uint8Array(16);
  window.crypto.getRandomValues(array);
  return Array.from(array, (byte) => byte.toString(16).padStart(2, '0')).join('');
};
