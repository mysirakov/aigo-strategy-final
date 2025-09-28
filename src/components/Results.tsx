import React from 'react';
import { Star, TrendingUp, Clock, Users, Palette } from 'lucide-react';

const Results = () => {
  const caseStudies = [
    {
      company: "NL Beauty",
      icon: <img src="https://aigoconsult.com/wp-content/uploads/2025/09/logo-nl-square.svg" alt="NL Beauty Logo" className="w-full h-full object-contain" />,
      subtitle: "From 80-Hour Weeks to Automated Growth",
      problem: "We were successful, but we were dying. Every order meant manual work. Every customer question ate into our day. We were growing, but we weren't living.",
      problemDetail: "This top cosmetics brand was manually handling everything - customer support, content creation, lead management, even ad personalization. Growth was killing their team.",
      solution: "Built an integrated AI system that handles support tickets, creates personalized campaigns, and nurtures leads automatically.",
      results: [
        { metric: "60% faster", description: "customer response times (happier customers)" },
        { metric: "30+ hours", description: "saved per week (team actually goes home now)" },
        { metric: "22% boost", description: "in customer acquisition (automated campaigns that actually convert)" }
      ],
      testimonial: "It's like we hired three experienced team members overnight - except they never get tired, never make mistakes, and work 24/7.",
      author: "Angel Dimitrov, CEO, NL Beauty"
    },
    {
      company: "Investclub",
      icon: <img src="https://aigoconsult.com/wp-content/uploads/2025/09/logo-ic-square.svg" alt="Investclub Logo" className="w-full h-full object-contain" />,
      subtitle: "Turning a Leaky Funnel Into a Revenue Engine",
      problem: "We were losing clients faster than we could onboard them. Our team was working harder than ever, but nothing was sticking.",
      problemDetail: "This financial education platform had a broken client journey. People got confused during onboarding, follow-ups were hit-or-miss, and nobody could see where prospects were dropping off.",
      solution: "Designed an intelligent automation system that guides clients from signup to success - with zero manual intervention.",
      results: [
        { metric: "25% higher", description: "client retention (clients actually finish what they start)" },
        { metric: "50% faster", description: "onboarding (from confusion to confidence in half the time)" },
        { metric: "Complete", description: "visibility into every stage of the client journey" }
      ],
      testimonial: "We went from fully reactive management with problems to having a system that just works. Our team can finally focus on helping clients instead of chasing paperwork.",
      author: "Tihomir, COO, Investclub"
    }
  ];

  return (
    <section id="results" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              🛠️ The Proof Is in the <span className="text-green-600">Results</span>
            </h2>
          </div>
          
          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    {/* Apply consistent styling for all logo containers */}
                    <div className="bg-white rounded-lg w-12 h-12 flex items-center justify-center">
                      {study.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{study.company}</h3>
                      <p className="text-gray-600">{study.subtitle}</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="border-l-4 border-orange-500 pl-4 mb-6">
                      <p className="text-lg text-gray-700 italic">"{study.problem}"</p>
                    </div>
                  </div>
                      
                  <div className="grid md:grid-cols-2 gap-8 mb-6">
                    <div>
                      <h4 className="text-lg font-semibold text-red-600 mb-3">The Problem:</h4>
                      <p className="text-gray-700">{study.problemDetail}</p>
                      
                      <h4 className="text-lg font-semibold text-blue-600 mb-3 mt-6">What We Did:</h4>
                      <p className="text-gray-700">{study.solution}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-green-600 mb-4">The Results:</h4>
                      <div className="space-y-3">
                        {study.results.map((result, resultIndex) => (
                          <div key={resultIndex} className="flex items-center space-x-3">
                            <div className="bg-green-100 p-1 rounded-full">
                              <Star className="w-4 h-4 text-green-600" />
                            </div>
                            <div>
                              <span className="font-semibold text-green-700">{result.metric}</span>
                              <span className="text-gray-600 ml-1">{result.description}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-6">
                    <blockquote className="text-lg text-gray-700 italic mb-3">
                      "{study.testimonial}"
                    </blockquote>
                    <cite className="text-sm font-semibold text-gray-900">— {study.author}</cite>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
