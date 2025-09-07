export interface AppIdea {
  id: string;
  name: string;
  description: string;
  category: string;
  targetAudience: string;
  keyFeatures: string[];
  monetizationModel: string[];
  technicalRequirements: string[];
  marketPotential: 'Low' | 'Medium' | 'High' | 'Very High';
  developmentComplexity: 'Simple' | 'Moderate' | 'Complex' | 'Very Complex';
  estimatedTimeframe: string;
  competitorAnalysis: string;
  uniqueSellingPoints: string[];
  createdAt: Date;
}

export interface AppCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
}

export interface GenerationFilters {
  category: string;
  complexity: string;
  targetAudience: string;
  monetization: string;
}

export interface AppIdeaTemplate {
  nameTemplates: string[];
  descriptionTemplates: string[];
  features: string[];
  audiences: string[];
  monetizationModels: string[];
  techRequirements: string[];
  uniquePoints: string[];
}

export interface ExportOptions {
  format: 'json' | 'text' | 'markdown';
  includeMetadata: boolean;
  selectedFields: string[];
}