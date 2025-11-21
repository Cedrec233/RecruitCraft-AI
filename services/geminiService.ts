import { GoogleGenAI, Type } from "@google/genai";
import { MODEL_NAME } from "../constants";
import { RecruitmentKit } from "../types";

// Ensure API key is available
if (!process.env.API_KEY) {
  console.error("API_KEY is missing in the environment variables.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const GeminiService = {
  /**
   * Generates a Recruitment Kit (JD + Interview Questions) using Thinking Mode.
   */
  async generateRecruitmentKit(rawNotes: string): Promise<RecruitmentKit> {
    const prompt = `
      You are an expert technical recruiter and hiring manager. 
      Your task is to take the following raw notes about a job opening and transform them into a professional recruitment kit.
      
      The kit must include:
      1. A polished, correctly formatted Job Description suitable for LinkedIn.
      2. An Interview Guide with 10 behavioral interview questions specifically targeting the skills in the JD.

      Raw Notes:
      "${rawNotes}"

      Think deeply about the implications of the raw notes to infer missing details, required soft skills, and cultural fit.
    `;

    const response = await ai.models.generateContent({
      model: MODEL_NAME,
      contents: prompt,
      config: {
        thinkingConfig: {
          thinkingBudget: 32768, // Max budget for deep reasoning
        },
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            jobDescription: {
              type: Type.OBJECT,
              properties: {
                title: { type: Type.STRING },
                summary: { type: Type.STRING },
                responsibilities: {
                  type: Type.ARRAY,
                  items: { type: Type.STRING }
                },
                qualifications: {
                  type: Type.ARRAY,
                  items: { type: Type.STRING }
                },
                benefits: {
                  type: Type.ARRAY,
                  items: { type: Type.STRING }
                },
                callToAction: { type: Type.STRING }
              },
              required: ['title', 'summary', 'responsibilities', 'qualifications', 'callToAction']
            },
            interviewGuide: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  question: { type: Type.STRING },
                  targetedSkill: { type: Type.STRING },
                  evaluationCriteria: { type: Type.STRING }
                },
                required: ['question', 'targetedSkill', 'evaluationCriteria']
              }
            }
          },
          required: ['jobDescription', 'interviewGuide']
        }
      }
    });

    if (response.text) {
      return JSON.parse(response.text) as RecruitmentKit;
    }
    throw new Error("No content generated");
  },

  /**
   * Streams a chat response from the model.
   */
  async *streamChat(history: { role: string; parts: { text: string }[] }[], newMessage: string) {
    const chat = ai.chats.create({
      model: MODEL_NAME,
      history: history,
      config: {
        systemInstruction: "You are a helpful recruitment assistant. You help recruiters refine JDs, suggest sourcing strategies, and draft communications.",
        // For standard chat, we generally don't enforce a massive thinking budget unless requested, 
        // but to ensure high quality answers consistent with the 'Pro' model, we let the model decide or use a modest budget if needed.
        // We will leave thinkingConfig undefined here to let the model default behavior take over, which is usually optimal for chat.
      },
    });

    const result = await chat.sendMessageStream({ message: newMessage });
    
    for await (const chunk of result) {
      yield chunk.text;
    }
  }
};