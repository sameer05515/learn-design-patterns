import { PatternDoc } from '../../models';

export const PROXY_DOC: PatternDoc = {
  overview: 'Acts as a placeholder controlling access to another object (lazy loading, security, caching, remoting).',
  keyIdeas: [
    'Implements same interface as the real subject',
    'Can defer instantiation or add cross-cutting behavior',
    'Variants: virtual, remote, protection, caching proxies',
  ],
  whenToUse: [
    'Heavy objects should load lazily.',
    'Need ACL checks before executing operations.',
    'Remote service calls should look like local ones.',
  ],
  exampleScenario: 'Virtual image viewer that loads the real image only when first displayed.',
  codeExamples: [
    {
      language: 'java',
      code: `Image image = new ImageProxy("photo.jpg");
image.display();`,
    },
    {
      language: 'javascript',
      code: `const image = new ImageProxy('photo.jpg');
image.display();`,
    },
    {
      language: 'python',
      code: `image = ImageProxy('photo.jpg')
image.display()`,
    },
  ],
};
