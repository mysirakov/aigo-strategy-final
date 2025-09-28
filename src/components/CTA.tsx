import React from 'react';
import { Clock, AlertTriangle, CheckCircle, X, Plus } from 'lucide-react';

const CTA = () => {
  const losses = [
    "Another month of your team burning out on busywork",
    "More leads slipping through the cracks",
    "Watching competitors scale while you stay stuck",
    "Missing the AI revolution while it's still giving early adopters an unfair advantage"
  ];

  const gains = [
    "A clear roadmap to automated operations",
    "30+ hours back in your week",
    "Systems that scale WITH you, not against you",
    "The competitive edge you've been looking for"
  ];

  return (
    <section id="cta" className="py-16 bg-gradient-to-br from-blue-600 to-indigo-700">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold mb-8 animate-pulse-glow shadow-lg">
            <Clock className="w-4 h-4" />
            <span>Only 5 Strategy Calls Left This Month</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            ⚡ Only 12 Strategy Calls Available This Month
          </h2>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 text-white">
            <p className="text-xl mb-4">Here's the deal:</p>
            <p className="text-lg mb-4">
              Stefan only takes 12 strategy calls per month. That's it.
            </p>
            <p className="text-lg mb-4">
              Why? Because each call is completely customized to your business. No cookie-cutter advice. No generic recommendations. Just a detailed roadmap designed specifically for your situation.
            </p>
            <p className="text-xl font-semibold text-orange-300">
              7 spots are already taken.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 mb-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              🎯 Book Your Free Strategy Call with Stefan
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="text-lg font-semibold text-red-600 mb-4 flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2" />
                  What you have to lose:
                </h4>
                <ul className="space-y-2 text-left">
                  {losses.map((loss, index) => (
                    <li key={index} className="flex items-start">
                      <X className="w-5 h-5 text-red-500 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{loss}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-green-600 mb-4 flex items-center">
                  <Plus className="w-5 h-5 mr-2" />
                  What you have to gain:
                </h4>
                <ul className="space-y-2 text-left">
                  {gains.map((gain, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{gain}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <a
              href="https://form.jotform.com/252532719491057"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg text-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl mb-4 inline-block"
            >
              Book My Free Strategy Call Now - Last Spot Available
            </a>
            <p className="text-sm text-gray-600">The call is free. The strategy is priceless. The results speak for themselves.</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">💭 Still Thinking It Over?</h3>
            <div className="space-y-4 text-lg">
              <p>Look, you already know your current way of doing things isn't sustainable.</p>
              <p>You already know AI is the future.</p>
              <p>You already know your competitors are getting ahead.</p>
              <p className="font-semibold text-orange-300">
                The question isn't WHETHER to automate. It's WHEN.
              </p>
              <p>And every day you wait is another day they pull further ahead.</p>
            </div>
            
            <div className="mt-8">
              <a
                href="https://form.jotform.com/252532719491057"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-block"
              >
                👇 Stop waiting. Start winning.
              </a>
              <p className="text-sm mt-3 text-white/80">Zero pressure. Maximum value. Let's see what's possible.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
