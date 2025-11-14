import { PatternDoc } from '../../models';
import { ADAPTER_DOC } from './adapter.doc';
import { BRIDGE_DOC } from './bridge.doc';
import { COMPOSITE_DOC } from './composite.doc';
import { DECORATOR_DOC } from './decorator.doc';
import { FACADE_DOC } from './facade.doc';
import { FLYWEIGHT_DOC } from './flyweight.doc';
import { PROXY_DOC } from './proxy.doc';

export const STRUCTURAL_DOCS: Record<string, PatternDoc> = {
  'Adapter': ADAPTER_DOC,
  'Bridge': BRIDGE_DOC,
  'Composite': COMPOSITE_DOC,
  'Decorator': DECORATOR_DOC,
  'Facade': FACADE_DOC,
  'Flyweight': FLYWEIGHT_DOC,
  'Proxy': PROXY_DOC,
};
