import React from 'react';
import { Shield, Target, TrendingUp, CheckCircle } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Industry Expertise That Actually Matters",
      description: "We've automated workflows in your exact situation before"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Implementation That Won't Break Your Business",
      description: "We deploy gradually, test everything, and keep your operations running smoothly"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "ROI You Can Measure",
      description: "Every automation pays for itself within 90 days or we keep working until it does"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              👋 Why Choose <span className="text-blue-600">AIGO Consult</span>?
            </h2>
          </div>
          
          <div className="bg-gray-50 rounded-2xl p-8 mb-8">
            <div className="space-y-4 text-lg text-gray-700">
              <p>We're not another SaaS company trying to sell you software.</p>
              <p>We're not an agency that disappears after delivering a pretty report.</p>
              <p className="font-semibold text-gray-900">
                We're the team that rolls up our sleeves and builds your automated future - with you, not for you.
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4 bg-blue-50 p-6 rounded-xl border border-blue-100">
                <div className="text-blue-600 bg-blue-100 p-2 rounded-lg mt-1">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
