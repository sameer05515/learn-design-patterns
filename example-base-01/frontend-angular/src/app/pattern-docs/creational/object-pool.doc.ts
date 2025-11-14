import { PatternDoc } from '../../models';

export const OBJECT_POOL_DOC: PatternDoc = {
  overview: 'Maintains a set of reusable instances to minimize the cost of expensive creation/destruction cycles.',
  keyIdeas: [
    'Pool tracks available vs in-use objects',
    'Often paired with limits/backpressure',
    'Requires clear lifecycle for acquiring/releasing',
  ],
  whenToUse: [
    'Initializing an object (e.g., DB connection) is expensive.',
    'You have bounded concurrency and need throttling.',
    'Garbage pressure from frequent allocations hurts performance.',
  ],
  exampleScenario: 'Managing HTTP client connections for an API gateway.',
  codeExamples: [
    {
      language: 'java',
      code: `ConnectionPool pool = new ConnectionPool(2);
Connection first = pool.acquire();
pool.release(first);
Connection reused = pool.acquire();`,
    },
    {
      language: 'javascript',
      code: `const pool = new ConnectionPool(2);
const first = pool.acquire();
pool.release(first);
const reused = pool.acquire();`,
    },
    {
      language: 'python',
      code: `pool = ConnectionPool(2)
first = pool.acquire()
pool.release(first)
reused = pool.acquire()`,
    },
  ],
};
