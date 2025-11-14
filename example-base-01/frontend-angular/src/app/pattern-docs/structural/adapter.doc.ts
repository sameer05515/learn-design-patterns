import { PatternDoc } from '../../models';

export const ADAPTER_DOC: PatternDoc = {
  overview: 'Bridges incompatible interfaces by translating requests between a client and a legacy or third-party service.',
  keyIdeas: [
    'Wraps an adapter around an existing implementation',
    'Can convert data formats or invocation styles',
    'Keeps client oblivious to legacy quirks',
  ],
  whenToUse: [
    'Migrating away from legacy APIs gradually.',
    'Integrating vendor SDKs with mismatched method names/signatures.',
    'Standardizing interfaces across modules.',
  ],
  exampleScenario: 'Adapting an old payment SOAP service to a modern REST contract.',
  codeExamples: [
    {
      language: 'java',
      code: `PaymentProcessor processor =
        new PaymentGatewayAdapter(new LegacyPaymentGateway());
processor.pay(499.0);`,
    },
    {
      language: 'javascript',
      code: `const processor = new PaymentGatewayAdapter(new LegacyPaymentGateway());
processor.pay(499.0);`,
    },
    {
      language: 'python',
      code: `processor = PaymentGatewayAdapter(LegacyPaymentGateway())
processor.pay(499.0)`,
    },
  ],
};
