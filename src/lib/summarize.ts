
import { SummaryModel, SummaryResult } from './types';
import { generateSummary } from './api';

export const summarizeContent = async (
  input: string,
  isUrl: boolean,
  model: SummaryModel
): Promise<SummaryResult> => {
  try {
    const result = await generateSummary(input, isUrl, model);
    
    return {
      title: result.title || 'Résumé généré',
      originalUrl: result.url,
      content: result.resume,
      model: result.model,
      dateGenerated: new Date()
    };
  } catch (error) {
    console.error('Error in summarizeContent:', error);
    throw error;
  }
};
