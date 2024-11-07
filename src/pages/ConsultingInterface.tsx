import React from 'react';
import { Brain, ArrowLeft } from 'lucide-react';
import NotesPanel from '../components/NotesPanel';

interface ConsultingInterfaceProps {
  onBack: () => void;
}

export default function ConsultingInterface({ onBack }: ConsultingInterfaceProps) {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 w-full bg-black/20 backdrop-blur-lg z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <button
                onClick={onBack}
                className="mr-2 text-gray-400 hover:text-white transition-colors"
                title="Back to Home"
              >
                <ArrowLeft className="h-6 w-6" />
              </button>
              <Brain className="h-8 w-8 text-blue-400" />
              <h1 className="text-2xl font-bold text-white">AI Accelerator</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 pt-24 pb-12 flex flex-col lg:flex-row gap-8 items-start">
        {/* Left Column - Widget Container */}
        <div className="w-full lg:w-1/2 lg:sticky lg:top-24">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 aspect-[4/3] relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <iframe
                id="audio_iframe"
                src="https://widget.synthflow.ai/widget/v2/1730975475902x279681980959339840/1730975475821x961340320830973700"
                allow="microphone"
                className="w-full h-full"
                style={{
                  border: 'none',
                  background: 'transparent',
                }}
              />
            </div>
          </div>
        </div>
        
        {/* Right Column - Notes Panel */}
        <div className="w-full lg:w-1/2">
          <NotesPanel />
        </div>
      </main>
    </div>
  );
}