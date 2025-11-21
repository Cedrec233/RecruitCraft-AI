import React, { useState } from 'react';
import { GeminiService } from '../services/geminiService';
import { RecruitmentKit, JobDescription, InterviewQuestion } from '../types';
import ThinkingReveal from './ThinkingReveal';
import { ICONS } from '../constants';

const KitGenerator: React.FC = () => {
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<RecruitmentKit | null>(null);
  const [activeTab, setActiveTab] = useState<'jd' | 'questions'>('jd');
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!input.trim()) return;
    
    setIsLoading(true);
    setError(null);
    setResult(null);

    try {
      const data = await GeminiService.generateRecruitmentKit(input);
      setResult(data);
    } catch (err) {
      console.error(err);
      setError("Failed to generate the kit. Please try again with more details.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-full flex flex-col md:flex-row gap-6 p-6 max-w-7xl mx-auto w-full">
      {/* Input Section */}
      <div className={`flex flex-col gap-4 transition-all duration-500 ${result ? 'md:w-1/3' : 'md:w-1/2 mx-auto'}`}>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 h-full flex flex-col">
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-indigo-100 p-2 rounded-lg text-indigo-600">
              <ICONS.Briefcase className="w-6 h-6" />
            </div>
            <h2 className="text-lg font-semibold text-slate-800">Input Raw Notes</h2>
          </div>
          <p className="text-sm text-slate-500 mb-4">
            Paste rough notes, requirements, or bullet points here. The AI will structure them into a formal document.
          </p>
          <textarea
            className="flex-1 w-full p-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all resize-none text-slate-700 placeholder-slate-400 outline-none"
            placeholder="- Senior React Dev needed&#10;- Must know TypeScript & Tailwind&#10;- Remote formatted&#10;- 5+ years exp&#10;- Good communicator..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={isLoading}
          />
          <button
            onClick={handleGenerate}
            disabled={isLoading || !input.trim()}
            className={`mt-4 w-full py-3 px-6 rounded-xl font-medium text-white shadow-lg transition-all flex items-center justify-center gap-2
              ${isLoading || !input.trim() 
                ? 'bg-slate-300 cursor-not-allowed shadow-none' 
                : 'bg-indigo-600 hover:bg-indigo-700 hover:shadow-indigo-500/30 active:transform active:scale-95'
              }`}
          >
            {isLoading ? (
              <>Processing...</>
            ) : (
              <>
                <ICONS.Sparkles className="w-5 h-5" />
                Generate Kit
              </>
            )}
          </button>
          {error && (
            <div className="mt-4 p-3 bg-red-50 text-red-600 text-sm rounded-lg">
              {error}
            </div>
          )}
        </div>
      </div>

      {/* Output Section */}
      {(result || isLoading) && (
        <div className="flex-1 bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col min-h-[500px]">
          {isLoading ? (
            <div className="flex-1 flex items-center justify-center">
              <ThinkingReveal isVisible={true} />
            </div>
          ) : result ? (
            <>
              {/* Tabs */}
              <div className="flex border-b border-slate-100">
                <button
                  onClick={() => setActiveTab('jd')}
                  className={`flex-1 py-4 text-sm font-medium transition-colors ${
                    activeTab === 'jd' 
                      ? 'text-indigo-600 border-b-2 border-indigo-600 bg-indigo-50/50' 
                      : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  Job Description
                </button>
                <button
                  onClick={() => setActiveTab('questions')}
                  className={`flex-1 py-4 text-sm font-medium transition-colors ${
                    activeTab === 'questions' 
                      ? 'text-indigo-600 border-b-2 border-indigo-600 bg-indigo-50/50' 
                      : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  Interview Guide
                </button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-8">
                {activeTab === 'jd' && <JDView jd={result.jobDescription} />}
                {activeTab === 'questions' && <QuestionsView questions={result.interviewGuide} />}
              </div>
            </>
          ) : null}
        </div>
      )}
    </div>
  );
};

const JDView: React.FC<{ jd: JobDescription }> = ({ jd }) => (
  <div className="space-y-8 animate-fadeIn">
    <div>
      <h1 className="text-2xl font-bold text-slate-900 mb-2">{jd.title}</h1>
      <div className="p-4 bg-slate-50 rounded-xl text-slate-600 leading-relaxed border border-slate-100">
        {jd.summary}
      </div>
    </div>

    <div>
      <h3 className="text-lg font-semibold text-slate-800 mb-3">Key Responsibilities</h3>
      <ul className="space-y-2">
        {jd.responsibilities.map((item, idx) => (
          <li key={idx} className="flex gap-3 text-slate-600">
            <span className="text-indigo-500 mt-1.5">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>

    <div>
      <h3 className="text-lg font-semibold text-slate-800 mb-3">Qualifications</h3>
      <ul className="space-y-2">
        {jd.qualifications.map((item, idx) => (
          <li key={idx} className="flex gap-3 text-slate-600">
            <span className="text-emerald-500 mt-1.5">✓</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
    
    {jd.benefits && jd.benefits.length > 0 && (
       <div>
       <h3 className="text-lg font-semibold text-slate-800 mb-3">Benefits</h3>
       <ul className="space-y-2">
         {jd.benefits.map((item, idx) => (
           <li key={idx} className="flex gap-3 text-slate-600">
             <span className="text-pink-500 mt-1.5">★</span>
             <span>{item}</span>
           </li>
         ))}
       </ul>
     </div>
    )}

    <div className="pt-6 border-t border-slate-100">
      <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2">Call to Action</h3>
      <p className="text-slate-700 italic">{jd.callToAction}</p>
    </div>
  </div>
);

const QuestionsView: React.FC<{ questions: InterviewQuestion[] }> = ({ questions }) => (
  <div className="space-y-6 animate-fadeIn">
    <div className="mb-6">
      <h2 className="text-xl font-bold text-slate-800">Behavioral Interview Guide</h2>
      <p className="text-slate-500">Suggested questions based on the generated job description.</p>
    </div>
    <div className="grid gap-4">
      {questions.map((q, idx) => (
        <div key={idx} className="p-5 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start gap-4 mb-2">
            <span className="bg-indigo-50 text-indigo-700 text-xs font-bold px-2 py-1 rounded uppercase tracking-wide">
              {q.targetedSkill}
            </span>
            <span className="text-slate-300 font-mono text-sm">#{idx + 1}</span>
          </div>
          <h4 className="text-slate-800 font-medium text-lg mb-3">{q.question}</h4>
          <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
            <span className="text-xs font-semibold text-slate-400 uppercase block mb-1">Evaluation Criteria</span>
            <p className="text-sm text-slate-600">{q.evaluationCriteria}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default KitGenerator;