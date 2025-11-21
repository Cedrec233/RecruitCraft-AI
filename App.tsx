import React from 'react';
import KitGenerator from './components/KitGenerator';
import ChatAssistant from './components/ChatAssistant';
import { ICONS } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* App Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-indigo-600 p-2 rounded-lg">
              <ICONS.Brain className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-slate-800 tracking-tight">
              Recruitment<span className="text-indigo-600">Sandbox</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
             <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
               Gemini 3 Pro Active
             </span>
          </div>
        </div>
      </header>

      {/* Main Workspace */}
      <main className="flex-1 flex flex-col">
        <KitGenerator />
      </main>

      {/* Floating Chat */}
      <ChatAssistant />
    </div>
  );
};

export default App;