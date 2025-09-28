import React from 'react';
import { Clock, Users, TrendingUp } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-pulse-glow shadow-lg">
            <Clock className="w-4 h-4" />
            <span>Only 12 Spots Left This Month</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            🚀 Save <span className="text-blue-600">30+ Hours</span> Per Week With Custom AI Automation
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
            Transform operational chaos into a well-oiled machine
          </p>
          
          <div className="mb-12">
            <a
              href="https://form.jotform.com/252532719491057"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg text-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-block"
            >
              Book My FREE Strategy Call Now
            </a>
            <p className="text-sm text-gray-600 mt-2">Zero pressure. Maximum value. 30-minute call.</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
            <p className="text-lg text-gray-800 mb-6 font-medium">
              Here's the brutal truth: Your competitors aren't just using AI anymore. They're scaling faster, working smarter, and leaving you behind.
            </p>
            <p className="text-gray-700 leading-relaxed">
              While you're drowning in manual tasks and juggling disconnected tools, they're automating everything and focusing on what actually grows their business. At AIGO Consult, we help ambitious founders like you turn operational chaos into a well-oiled machine - without the tech headaches.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="flex items-center justify-center space-x-2 text-blue-600">
              <TrendingUp className="w-5 h-5" />
              <span className="font-semibold">40-60% Cost Reduction</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-blue-600">
              <Clock className="w-5 h-5" />
              <span className="font-semibold">30+ Hours Saved Weekly</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-blue-600">
              <Users className="w-5 h-5" />
              <span className="font-semibold">50+ Businesses Automated</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
