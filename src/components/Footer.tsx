import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <img
              src="https://aigoconsult.com/wp-content/uploads/2025/09/aigo-logo-light.svg"
              alt="AIGO Consult Logo"
              className="h-24 w-auto"
            />
          </div>
          <p className="text-gray-400 mb-6">
            Transforming businesses through intelligent automation. One system at a time.
          </p>
          <div className="border-t border-gray-800 pt-6">
            <p className="text-gray-500 text-sm">
              © 2025 AIGO Consult. All rights reserved. Ready to automate your success?
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
