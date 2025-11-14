import { PatternDoc } from '../../models';

export const MEDIATOR_DOC: PatternDoc = {
  overview: 'Centralizes complex communication between objects, reducing direct dependencies.',
  keyIdeas: [
    'Colleagues interact only with the mediator',
    'Mediator encapsulates coordination logic',
    'Useful for chat rooms, UI dialogs, or workflow orchestration',
  ],
  whenToUse: [
    'Many-to-many object interactions cause tight coupling.',
    'You need to change interaction rules without touching colleagues.',
    'Helps visualize/log communication paths centrally.',
  ],
  exampleScenario: 'Chat room broadcasting messages between users without direct references.',
  codeExamples: [
    {
      language: 'java',
      code: `ChatRoom room = new ChatRoom();
User alice = new User("Alice", room);
User bob = new User("Bob", room);
room.register(alice);
room.register(bob);
alice.send("Hi Bob");`,
    },
    {
      language: 'javascript',
      code: `const room = new ChatRoom();
const alice = new User('Alice', room);
const bob = new User('Bob', room);
room.register(alice);
room.register(bob);
alice.send('Hi Bob');`,
    },
    {
      language: 'python',
      code: `room = ChatRoom()
alice = User('Alice', room)
bob = User('Bob', room)
room.register(alice)
room.register(bob)
alice.send('Hi Bob')`,
    },
  ],
};
