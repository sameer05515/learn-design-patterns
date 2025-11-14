import { PatternDoc } from '../../models';
import { ABSTRACT_FACTORY_DOC } from './abstract-factory.doc';
import { BUILDER_DOC } from './builder.doc';
import { FACTORY_METHOD_DOC } from './factory-method.doc';
import { OBJECT_POOL_DOC } from './object-pool.doc';
import { PROTOTYPE_DOC } from './prototype.doc';
import { SINGLETON_DOC } from './singleton.doc';

export const CREATIONAL_DOCS: Record<string, PatternDoc> = {
  'Singleton': SINGLETON_DOC,
  'Factory Method': FACTORY_METHOD_DOC,
  'Abstract Factory': ABSTRACT_FACTORY_DOC,
  'Builder': BUILDER_DOC,
  'Prototype': PROTOTYPE_DOC,
  'Object Pool': OBJECT_POOL_DOC,
};
