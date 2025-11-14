import { PatternDoc } from '../../models';

export const MEMENTO_DOC: PatternDoc = {
  overview: 'Captures and externalizes an object’s internal state so it can be restored later without breaking encapsulation.',
  keyIdeas: [
    'Originator creates mementos snapshots',
    'Caretaker stores and restores when needed',
    'Supports undo/redo, checkpoints, transactional edits',
  ],
  whenToUse: [
    'Need to rollback complex objects to previous states.',
    'Implementing undo/redo in editors or workflows.',
    'Auditing versions without leaking internals.',
  ],
  exampleScenario: 'Text editor snapshots enabling ctrl+z functionality.',
  codeExamples: [
    {
      language: 'java',
      code: `TextEditor editor = new TextEditor();
editor.write("Hello");
Memento snapshot = editor.save();
editor.write(" World");
editor.restore(snapshot);`,
    },
    {
      language: 'javascript',
      code: `const editor = new TextEditor();
editor.write('Hello');
const snapshot = editor.save();
editor.write(' World');
editor.restore(snapshot);`,
    },
    {
      language: 'python',
      code: `editor = TextEditor()
editor.write('Hello')
snapshot = editor.save()
editor.write(' World')
editor.restore(snapshot)`,
    },
  ],
};
