import { SummaryModel } from '@/lib/types';

// L'URL de l'API proxy (n'inclut pas le domaine, car Vite s'en charge)
const API_URL = "/resume"; // Utilisation de /resume pour que le proxy gère le reste

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
      
    // Requête vers /resume (géré par Vite proxy)
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
      credentials: 'omit',
      mode: 'cors',
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ detail: 'Erreur lors de la génération du résumé' }));
      throw new Error(errorData.detail || 'Une erreur est survenue lors de la génération du résumé');
    }

    return await response.json();
  } catch (error) {
    console.error('Error generating summary:', error);
    throw error;
  }
};
