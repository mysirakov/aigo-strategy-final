import React from 'react';
import { AlertTriangle, Clock, Users, TrendingDown } from 'lucide-react';

const Problem = () => {
  const painPoints = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "You're still manually doing work that should take seconds:",
      items: [
        "Processing orders one by one",
        "Copy-pasting data between systems",
        "Responding to the same customer questions over and over",
        "Creating reports that nobody reads"
      ]
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Your team is burning out on busywork:",
      items: [
        "Jumping between 15 different apps just to complete one task",
        "Missing leads because follow-ups fall through the cracks",
        "Making decisions based on gut feelings instead of real data"
      ]
    },
    {
      icon: <TrendingDown className="w-6 h-6" />,
      title: "You know something needs to change, but:",
      items: [
        "Hiring developers costs a fortune (and takes forever)",
        '"AI solutions" sound too good to be true',
        "You've been burned by consultants who overpromise and underdeliver"
      ]
    }
  ];

  return (
    <section id="problem" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              😩 It's Not You. It's Your <span className="text-red-600">Broken Systems</span>.
            </h2>
            <p className="text-xl text-gray-700 font-medium">Sound familiar?</p>
          </div>
          
          <div className="space-y-8 mb-12">
            {painPoints.map((section, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="text-red-600 mt-1">
                    {section.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {section.title}
                    </h3>
                    <ul className="space-y-2">
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <div className="bg-red-100 p-0.5 rounded-full mr-3 mt-1"> {/* Removed animate-pulse-glow, reduced padding */}
                            <div className="w-3 h-3 bg-red-600 rounded-full"></div> {/* Smaller red circle */}
                          </div>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
            <div className="flex items-start">
              <AlertTriangle className="w-6 h-6 text-red-600 mt-1 mr-3" />
              <div>
                <h4 className="text-lg font-semibold text-red-800 mb-2">
                  Here's what nobody tells you:
                </h4>
                <p className="text-red-700">
                  Your business has outgrown its backend. And every day you wait, the gap gets wider.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
