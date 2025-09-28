import React from 'react';

const Header = () => {
  // The scrollToSection function is no longer needed as navigation buttons are removed.
  // Keeping it for now in case future requirements reintroduce similar functionality.
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 w-full backdrop-blur-sm z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="https://aigoconsult.com/wp-content/uploads/2025/09/aigo-logo-clear.png"
              alt="AIGO Consult Logo"
              className="h-12 w-auto"
            />
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="https://form.jotform.com/252532719491057"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors font-semibold"
            >
              Book My FREE Strategy Call
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
