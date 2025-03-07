
import { SummaryModel, SummaryResult } from './types';

// This is a mock function for demonstration purposes
export const summarizeContent = async (
  input: string, 
  isUrl: boolean, 
  model: SummaryModel
): Promise<SummaryResult> => {
  // Simulate API call with delay
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  // Generate mock data (in a real application, this would be an API call)
  const mockTitle = isUrl 
    ? "La Commission européenne présente son plan pour l'IA"
    : "Résumé de l'article saisi";
    
  const mockContent = "La Commission européenne a dévoilé mercredi sa stratégie pour encadrer l'intelligence artificielle, avec un double objectif : favoriser l'adoption de cette technologie tout en limitant ses risques. Le plan prévoit des investissements significatifs dans la recherche et l'innovation, ainsi qu'un cadre réglementaire gradué selon le niveau de risque des applications d'IA. Les systèmes à haut risque seront soumis à des contrôles stricts, tandis que les autres bénéficieront d'une approche plus souple. Cette initiative s'inscrit dans la volonté de l'UE de devenir un leader mondial de l'IA de confiance, face à la concurrence des États-Unis et de la Chine. Des experts saluent l'équilibre entre innovation et protection, mais certains s'inquiètent des possibles freins à la compétitivité européenne.";
  
  return {
    title: mockTitle,
    originalUrl: isUrl ? input : undefined,
    content: mockContent,
    model: model,
    dateGenerated: new Date()
  };
};
