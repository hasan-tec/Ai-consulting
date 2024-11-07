import React from 'react';
import { Settings, History, User } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 w-full max-w-md">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-white">Dashboard</h2>
        <button className="text-blue-400 hover:text-blue-300 transition-colors">
          <Settings size={20} />
        </button>
      </div>

      <div className="space-y-4">
        <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg">
          <div className="p-3 bg-blue-500/20 rounded-full">
            <User size={24} className="text-blue-400" />
          </div>
          <div>
            <h3 className="text-white font-medium">John Doe</h3>
            <p className="text-gray-400 text-sm">Premium Account</p>
          </div>
        </div>

        <div className="p-4 bg-white/5 rounded-lg">
          <div className="flex items-center space-x-2 mb-3">
            <History size={18} className="text-blue-400" />
            <h3 className="text-white font-medium">Recent Sessions</h3>
          </div>
          <div className="space-y-2">
            {[
              { date: '2024-03-15', duration: '45 min' },
              { date: '2024-03-14', duration: '30 min' },
              { date: '2024-03-12', duration: '60 min' },
            ].map((session, index) => (
              <div
                key={index}
                className="flex items-center justify-between text-sm p-2 hover:bg-white/5 rounded transition-colors"
              >
                <span className="text-gray-300">{session.date}</span>
                <span className="text-blue-400">{session.duration}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}