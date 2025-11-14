import { PatternDoc } from '../../models';

export const OBSERVER_DOC: PatternDoc = {
  overview: 'Establishes a publish/subscribe relationship so observers react to subject state changes.',
  keyIdeas: [
    'Subjects maintain a list of observers',
    'Observers implement a notification method',
    'Promotes loose coupling for event propagation',
  ],
  whenToUse: [
    'Many components depend on shared state changes.',
    'Need runtime subscription/unsubscription.',
    'Implementing event buses or reactive UIs.',
  ],
  exampleScenario: 'News agency pushing alerts to multiple device clients.',
  codeExamples: [
    {
      language: 'java',
      code: `NewsAgency agency = new NewsAgency();
agency.register(new MobileClient());
agency.register(new TabletClient());
agency.publish("Storm warning");`,
    },
    {
      language: 'javascript',
      code: `const agency = new NewsAgency();
agency.register(new MobileClient());
agency.register(new TabletClient());
agency.publish('Storm warning');`,
    },
    {
      language: 'python',
      code: `agency = NewsAgency()
agency.register(MobileClient())
agency.register(TabletClient())
agency.publish('Storm warning')`,
    },
  ],
};
