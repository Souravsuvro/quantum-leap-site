import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import Home from './pages/Home';
import LabQFusionPage from './pages/LabQFusionPage';
import CareLinkAccessPage from './pages/CareLinkAccessPage';
import AboutPage from './pages/AboutPage';

// Import Error Pages
import NotFoundPage from './pages/ErrorPages/NotFoundPage';
import ServiceUnavailablePage from './pages/ErrorPages/ServiceUnavailablePage';
import GatewayTimeoutPage from './pages/ErrorPages/GatewayTimeoutPage';
import UnauthorizedPage from './pages/ErrorPages/UnauthorizedPage';

// Import Schema Markup
import { SchemaMarkup, QuantumLeapsSchema } from './utils/SchemaMarkup';

function App() {
  return (
    <HelmetProvider>
      <SchemaMarkup type="Organization" schemaProps={QuantumLeapsSchema.organization} />
      <SchemaMarkup type="WebSite" schemaProps={QuantumLeapsSchema.website} />
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/labq-fusion" element={<LabQFusionPage />} />
            <Route path="/carelink-access" element={<CareLinkAccessPage />} />
            <Route path="/about" element={<AboutPage />} />

            {/* Error Routes */}
            <Route path="/error/404" element={<NotFoundPage />} />
            <Route path="/error/503" element={<ServiceUnavailablePage />} />
            <Route path="/error/504" element={<GatewayTimeoutPage />} />
            <Route path="/error/401" element={<UnauthorizedPage />} />

            {/* Catch-all route for 404 */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
