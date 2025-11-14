import type { PatternDoc } from '../types';
import { CREATIONAL_DOCS } from './creational';
import { STRUCTURAL_DOCS } from './structural';
import { BEHAVIORAL_DOCS } from './behavioral';

const REF_GURU_BASE = 'https://refactoring.guru/design-patterns';

const REF_GURU_SLUGS: Record<string, string> = {
  'Singleton': 'singleton',
  'Factory Method': 'factory-method',
  'Abstract Factory': 'abstract-factory',
  'Builder': 'builder',
  'Prototype': 'prototype',
  'Object Pool': 'catalog',
  'Adapter': 'adapter',
  'Bridge': 'bridge',
  'Composite': 'composite',
  'Decorator': 'decorator',
  'Facade': 'facade',
  'Flyweight': 'flyweight',
  'Proxy': 'proxy',
  'Strategy': 'strategy',
  'Observer': 'observer',
  'Command': 'command',
  'Chain of Responsibility': 'chain-of-responsibility',
  'Template Method': 'template-method',
  'Iterator': 'iterator',
  'State': 'state',
  'Mediator': 'mediator',
  'Memento': 'memento',
  'Interpreter': 'interpreter',
  'Visitor': 'visitor',
};

const addReferenceSnippet = (name: string, doc: PatternDoc): PatternDoc => {
  const slug = REF_GURU_SLUGS[name];
  if (!slug) {
    return doc;
  }
  const referenceCode = `// Refactoring.Guru canonical example\n// ${REF_GURU_BASE}/${slug}`;
  const alreadyHasReference = doc.codeExamples.some(
    (example) => example.language === 'reference' && example.code.includes(REF_GURU_BASE),
  );
  if (alreadyHasReference) {
    return doc;
  }
  return {
    ...doc,
    codeExamples: [
      ...doc.codeExamples,
      {
        language: 'reference',
        code: referenceCode,
      },
    ],
  };
};

const withReferences = (docs: Record<string, PatternDoc>): Record<string, PatternDoc> =>
  Object.fromEntries(
    Object.entries(docs).map(([name, doc]) => [name, addReferenceSnippet(name, doc)]),
  );

const CREATIONAL_WITH_REF = withReferences(CREATIONAL_DOCS);
const STRUCTURAL_WITH_REF = withReferences(STRUCTURAL_DOCS);
const BEHAVIORAL_WITH_REF = withReferences(BEHAVIORAL_DOCS);

export const PATTERN_DOCS: Record<string, PatternDoc> = {
  ...CREATIONAL_WITH_REF,
  ...STRUCTURAL_WITH_REF,
  ...BEHAVIORAL_WITH_REF,
};

export type PatternDocCategory = 'creational' | 'structural' | 'behavioral';

export const BY_CATEGORY: Record<PatternDocCategory, Record<string, PatternDoc>> = {
  creational: CREATIONAL_WITH_REF,
  structural: STRUCTURAL_WITH_REF,
  behavioral: BEHAVIORAL_WITH_REF,
};

