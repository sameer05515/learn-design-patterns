import { PatternDoc } from '../../models';

export const STATE_DOC: PatternDoc = {
  overview: 'Lets an object alter its behavior when its internal state changes by delegating to state objects.',
  keyIdeas: [
    'Context holds reference to current state implementation',
    'State transitions swap out the delegate',
    'Avoids sprawling switch statements on state enums',
  ],
  whenToUse: [
    'Objects have well-defined finite states with distinct behavior.',
    'Transitions should be explicit and enforced.',
    'Helps model workflows (media player, order lifecycle).',
  ],
  exampleScenario: 'Audio player toggling between Playing, Paused, and Stopped states.',
  codeExamples: [
    {
      language: 'java',
      code: `AudioPlayer player = new AudioPlayer();
player.play();
player.pause();`,
    },
    {
      language: 'javascript',
      code: `const player = new AudioPlayer();
player.play();
player.pause();`,
    },
    {
      language: 'python',
      code: `player = AudioPlayer()
player.play()
player.pause()`,
    },
  ],
};
