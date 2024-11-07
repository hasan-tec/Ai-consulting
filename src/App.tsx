import React from 'react';
import { useState } from 'react';
import LandingPage from './pages/LandingPage';
import ConsultingInterface from './pages/ConsultingInterface';

function App() {
  const [currentPage, setCurrentPage] = useState<'landing' | 'consulting'>('landing');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      {currentPage === 'landing' ? (
        <LandingPage onGetStarted={() => setCurrentPage('consulting')} />
      ) : (
        <ConsultingInterface onBack={() => setCurrentPage('landing')} />
      )}
      
      {/* Glowing Effects */}
      <div className="fixed top-1/4 -left-48 w-96 h-96 bg-blue-500 opacity-30 blur-[128px] animate-pulse" />
      <div className="fixed bottom-1/4 -right-48 w-96 h-96 bg-purple-500 opacity-20 blur-[128px] animate-pulse delay-1000" />
    </div>
  );
}

export default App;