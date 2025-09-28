import React from 'react';
import { Zap } from 'lucide-react';

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Zap className="w-8 h-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">AIGO Consult</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('problem')}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Problem
            </button>
            <button
              onClick={() => scrollToSection('solution')}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Solution
            </button>
            <button
              onClick={() => scrollToSection('process')}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Process
            </button>
            <button
              onClick={() => scrollToSection('results')}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Results
            </button>
            <a
              href="https://form.jotform.com/252532719491057"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors font-semibold"
            >
              Book Call
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
