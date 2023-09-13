import { AgentSummary } from './AgentSummary';

export type InsightData = {
  aiSummary: string;
  aiReplies: string[];
  recommendations: string;
  agentSummary: AgentSummary;
};
