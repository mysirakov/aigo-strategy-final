import React from 'react';
import { Search, Map, Eye, Rocket } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "The \"Efficiency Audit\"",
      description: "We'll spot exactly where you're bleeding time and money"
    },
    {
      icon: <Map className="w-8 h-8" />,
      title: "Your Custom AI Blueprint",
      description: "A clear roadmap showing which processes to automate first"
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Real Industry Examples",
      description: "See exactly how businesses like yours are scaling with AI"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "The No-BS Implementation Plan",
      description: "What to do, when to do it, and how to measure success"
    }
  ];

  return (
    <section id="process" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              💡 Here's What Happens in Your <span className="text-blue-600">Free Strategy Call</span>
            </h2>
            <p className="text-xl text-gray-700 mb-4">30 minutes. Zero fluff. Maximum value.</p>
            <p className="text-lg text-gray-600">
              When you hop on a call with Stefan (our lead strategist and the guy who's automated workflows for 50+ businesses), here's exactly what you'll walk away with:
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {steps.map((step, index) => (
              <div key={index} className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                <div className="flex items-start space-x-4">
                  <div className="text-blue-600 bg-blue-100 p-3 rounded-lg">
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-700">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8 border border-orange-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              🎁 Bonus: Industry-Specific Insights
            </h3>
            <p className="text-gray-700 mb-4">
              If your business fits our criteria, we'll show you case studies from your exact industry and reveal the automation strategies that cut operational costs by 40-60%.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="bg-white px-4 py-2 rounded-full text-sm font-semibold text-gray-700">No sales pitch</span>
              <span className="bg-white px-4 py-2 rounded-full text-sm font-semibold text-gray-700">No generic advice</span>
              <span className="bg-white px-4 py-2 rounded-full text-sm font-semibold text-gray-700">Just a clear plan you can execute</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
