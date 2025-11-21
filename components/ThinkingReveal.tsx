import React from 'react';
import { ICONS } from '../constants';

interface ThinkingRevealProps {
  isVisible: boolean;
}

const ThinkingReveal: React.FC<ThinkingRevealProps> = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="flex flex-col items-center justify-center p-12 space-y-6 animate-pulse">
      <div className="relative">
        <div className="absolute -inset-1 rounded-full thinking-gradient blur opacity-75"></div>
        <div className="relative bg-white p-4 rounded-full">
          <ICONS.Brain className="w-12 h-12 text-indigo-600" />
        </div>
      </div>
      <div className="text-center">
        <h3 className="text-xl font-semibold text-slate-800">Analyzing Requirements...</h3>
        <p className="text-slate-500 mt-2 max-w-sm">
          Gemini 3 Pro is using its extended thinking budget to craft the perfect recruitment kit.
        </p>
      </div>
    </div>
  );
};

export default ThinkingReveal;