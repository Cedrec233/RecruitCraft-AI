export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}

export interface InterviewQuestion {
  question: string;
  targetedSkill: string;
  evaluationCriteria: string;
}

export interface JobDescription {
  title: string;
  summary: string;
  responsibilities: string[];
  qualifications: string[];
  benefits: string[];
  callToAction: string;
}

export interface RecruitmentKit {
  jobDescription: JobDescription;
  interviewGuide: InterviewQuestion[];
}

// Navigation/View types
export type ViewMode = 'generator' | 'chat';