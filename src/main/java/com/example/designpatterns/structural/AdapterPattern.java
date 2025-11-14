package com.example.designpatterns.structural;

import com.example.designpatterns.shared.PatternCategory;
import com.example.designpatterns.shared.PatternDescriptor;
import com.example.designpatterns.shared.PatternExample;
import org.springframework.stereotype.Component;

@Component
public class AdapterPattern implements PatternExample {

    @Override
    public PatternDescriptor descriptor() {
        return new PatternDescriptor("Adapter", PatternCategory.STRUCTURAL, "Convert one interface into another clients expect");
    }

    @Override
    public String demonstrate() {
        PaymentProcessor processor = new PaymentGatewayAdapter(new LegacyPaymentGateway());
        return processor.pay(42.0);
    }

    private interface PaymentProcessor {
        String pay(double amount);
    }

    private static class PaymentGatewayAdapter implements PaymentProcessor {
        private final LegacyPaymentGateway gateway;

        PaymentGatewayAdapter(LegacyPaymentGateway gateway) {
            this.gateway = gateway;
        }

        @Override
        public String pay(double amount) {
            return gateway.send(Math.round(amount));
        }
    }

    private static class LegacyPaymentGateway {
        String send(long cents) {
            return "legacy-paid:" + cents;
        }
    }
}
