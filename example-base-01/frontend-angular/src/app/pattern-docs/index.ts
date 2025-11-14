import type { PatternDoc } from '../models';
import { CREATIONAL_DOCS } from './creational';
import { STRUCTURAL_DOCS } from './structural';
import { BEHAVIORAL_DOCS } from './behavioral';

export const PATTERN_DOCS: Record<string, PatternDoc> = {
  ...CREATIONAL_DOCS,
  ...STRUCTURAL_DOCS,
  ...BEHAVIORAL_DOCS,
};

export type PatternDocCategory = 'creational' | 'structural' | 'behavioral';

export const BY_CATEGORY: Record<PatternDocCategory, Record<string, PatternDoc>> = {
  creational: CREATIONAL_DOCS,
  structural: STRUCTURAL_DOCS,
  behavioral: BEHAVIORAL_DOCS,
};

