
export type InputType = 'url' | 'text';

export type SummaryModel = 'gpt-4o' | 'gpt-4o-mini' | 'pegasus' | 'bart';

export interface SummaryResult {
  title: string;
  originalUrl?: string;
  content: string;
  model: SummaryModel;
  dateGenerated: Date;
}
