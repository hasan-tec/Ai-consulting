import React from 'react';
import { Brain, Sparkles, MessageSquare, Zap } from 'lucide-react';

interface LandingPageProps {
  onGetStarted: () => void;
}

export default function LandingPage({ onGetStarted }: LandingPageProps) {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 w-full bg-black/20 backdrop-blur-lg z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-blue-400" />
              <h1 className="text-2xl font-bold text-white">AI Accelerator</h1>
            </div>
            <button
              onClick={onGetStarted}
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors"
            >
              Get Started
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Your AI Consulting
            <span className="text-blue-400"> Partner</span>
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Experience the future of consulting with our AI-powered platform.
            Get instant insights and expert guidance through natural conversations.
          </p>
          <button
            onClick={onGetStarted}
            className="bg-blue-500 hover:bg-blue-600 text-white text-lg px-8 py-3 rounded-lg transition-colors inline-flex items-center space-x-2"
          >
            <span>Start Consulting</span>
            <Sparkles className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <MessageSquare className="w-8 h-8 text-blue-400" />,
                title: 'Natural Conversations',
                description: 'Engage in fluid, context-aware discussions with our AI consultant.'
              },
              {
                icon: <Brain className="w-8 h-8 text-blue-400" />,
                title: 'Expert Knowledge',
                description: 'Access deep insights across multiple domains and industries.'
              },
              {
                icon: <Zap className="w-8 h-8 text-blue-400" />,
                title: 'Real-time Solutions',
                description: 'Get immediate answers and actionable recommendations.'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/20 transition-colors"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}