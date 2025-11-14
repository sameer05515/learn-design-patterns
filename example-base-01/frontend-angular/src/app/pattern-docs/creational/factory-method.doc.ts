import { PatternDoc } from '../../models';

export const FACTORY_METHOD_DOC: PatternDoc = {
  overview: 'Delegates object creation to subclasses or helper classes, allowing code to work with abstractions.',
  keyIdeas: [
    'Creator defines a method that subclasses override',
    'Client code depends on interfaces, not concrete classes',
    'Promotes open/closed principle for new product types',
  ],
  whenToUse: [
    'You need to extend creation logic without touching existing client code.',
    'Products share an interface but have different setups.',
    'You want to encapsulate complex creation steps.',
  ],
  exampleScenario: 'Notification service that picks SMS, Push, or Email senders at runtime.',
  codeExamples: [
    {
      language: 'java',
      code: `NotificationCreator creator = new SmsNotificationCreator();
Notification sms = creator.create();
sms.send("OTP 4321");`,
    },
    {
      language: 'javascript',
      code: `let creator = new SmsNotificationCreator();
const sms = creator.create();
sms.send('OTP 4321');`,
    },
    {
      language: 'python',
      code: `creator = SmsNotificationCreator()
sms = creator.create()
sms.send('OTP 4321')`,
    },
  ],
};
