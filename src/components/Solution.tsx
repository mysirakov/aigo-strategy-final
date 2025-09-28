import React from 'react';
import { CheckCircle, Zap, Target, BarChart3 } from 'lucide-react';

const Solution = () => {
  const benefits = [
    {
      icon: <CheckCircle className="w-8 h-8" />, 
      title: "Customer support tickets resolving themselves",
      subtitle: "with happier customers"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lead nurturing that never sleeps",
      subtitle: "converting prospects while you sleep"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Reports that actually tell you what to do next",
      subtitle: "no more guesswork"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Team members focused on strategy, not busy work",
      subtitle: "finally working ON your business"
    }
  ];

  return (
    <section id="solution" className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              🧠 What If Your Business Could <span className="text-blue-600">Run Itself</span>?
            </h2>
            <p className="text-xl text-gray-700">
              Imagine walking into your office tomorrow and seeing:
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="text-green-600">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                       {benefit.title}
                    </h3>
                    <p className="text-gray-600">{benefit.subtitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="text-center mb-6">
              <p className="text-xl font-semibold text-gray-800 mb-4">
                That's not fantasy. That's what happens when AI works FOR you instead of against you.
              </p>
            </div>
            
            <div className="space-y-4 text-gray-700">
              <p className="text-center">
                We don't just recommend tools. We build your entire automated ecosystem using proven AI/Automation solutions that just work.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mt-6">
                <div className="text-center">
                  <div className="text-green-600 font-semibold">✓ No developer drama</div>
                </div>
                <div className="text-center">
                  <div className="text-green-600 font-semibold">✓ No system crashes</div>
                </div>
                <div className="text-center">
                  <div className="text-green-600 font-semibold">✓ No learning curves</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
