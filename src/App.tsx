import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout';
import PlacasMorelosPage from './pages/PlacasMorelosPage';
import RefrendoMorelosPage from './pages/RefrendoMorelosPage';
import Index from './pages/Index';
import NotFound from './pages/NotFound';

import './App.css';

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/placas-morelos" element={<PlacasMorelosPage />} />
            <Route path="/refrendo-morelos" element={<RefrendoMorelosPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;
