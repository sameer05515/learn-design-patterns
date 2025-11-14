import { PatternDoc } from '../../models';

export const ITERATOR_DOC: PatternDoc = {
  overview: 'Provides a uniform way to traverse aggregates without exposing their internal representation.',
  keyIdeas: [
    'Iterator tracks traversal state',
    'Multiple iterators can operate concurrently',
    'Supports custom iteration orders or filters',
  ],
  whenToUse: [
    'Custom collections that shouldn’t leak internals.',
    'Need lazy traversal across large data sets.',
    'Expose sequence-like APIs for complex structures.',
  ],
  exampleScenario: 'Streaming paginated API results while hiding cursor logic.',
  codeExamples: [
    {
      language: 'java',
      code: `CustomCollection collection = new CustomCollection(new int[]{1,2,3});
Iterator<Integer> iterator = collection.iterator();
while (iterator.hasNext()) {
    iterator.next();
}`,
    },
    {
      language: 'javascript',
      code: `const collection = new CustomCollection([1, 2, 3]);
const iterator = collection.iterator();
while (iterator.hasNext()) {
  iterator.next();
}`,
    },
    {
      language: 'python',
      code: `collection = CustomCollection([1, 2, 3])
iterator = iter(collection)
for value in iterator:
    _ = value`,
    },
  ],
};
