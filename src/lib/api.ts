
import { SummaryModel } from '@/lib/types';

const API_URL = "https://summurize-api-5069ac36b480.herokuapp.com";

export interface SummaryResponse {
  title?: string;
  url?: string;
  resume: string;
  model: SummaryModel;
}

export const generateSummary = async (
  input: string,
  isUrl: boolean,
  model: SummaryModel
): Promise<SummaryResponse> => {
  try {
    const payload = isUrl 
      ? { url: input, model } 
      : { text: input, model };
      
    const response = await fetch(`${API_URL}/resume`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.detail || 'Une erreur est survenue lors de la génération du résumé');
    }

    return await response.json();
  } catch (error) {
    console.error('Error generating summary:', error);
    throw error;
  }
};
