export type PatternCategory = 'CREATIONAL' | 'STRUCTURAL' | 'BEHAVIORAL';

export type Pattern = {
  name: string;
  category: PatternCategory;
  intent: string;
  demo: string;
};

export type PatternDoc = {
  overview: string;
  keyIdeas: string[];
  whenToUse: string[];
  exampleScenario: string;
  codeExamples: Array<{ language: string; code: string }>;
};

