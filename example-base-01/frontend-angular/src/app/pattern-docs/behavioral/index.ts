import { PatternDoc } from '../../models';
import { CHAIN_OF_RESPONSIBILITY_DOC } from './chain-of-responsibility.doc';
import { COMMAND_DOC } from './command.doc';
import { INTERPRETER_DOC } from './interpreter.doc';
import { ITERATOR_DOC } from './iterator.doc';
import { MEDIATOR_DOC } from './mediator.doc';
import { MEMENTO_DOC } from './memento.doc';
import { OBSERVER_DOC } from './observer.doc';
import { STATE_DOC } from './state.doc';
import { STRATEGY_DOC } from './strategy.doc';
import { TEMPLATE_METHOD_DOC } from './template-method.doc';
import { VISITOR_DOC } from './visitor.doc';

export const BEHAVIORAL_DOCS: Record<string, PatternDoc> = {
  'Strategy': STRATEGY_DOC,
  'Observer': OBSERVER_DOC,
  'Command': COMMAND_DOC,
  'Chain of Responsibility': CHAIN_OF_RESPONSIBILITY_DOC,
  'Template Method': TEMPLATE_METHOD_DOC,
  'Iterator': ITERATOR_DOC,
  'State': STATE_DOC,
  'Mediator': MEDIATOR_DOC,
  'Memento': MEMENTO_DOC,
  'Interpreter': INTERPRETER_DOC,
  'Visitor': VISITOR_DOC,
};
