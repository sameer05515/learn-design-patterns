package com.example.designpatterns.behavioral;

import com.example.designpatterns.shared.PatternCategory;
import com.example.designpatterns.shared.PatternDescriptor;
import com.example.designpatterns.shared.PatternExample;
import org.springframework.stereotype.Component;

@Component
public class StrategyPattern implements PatternExample {

    @Override
    public PatternDescriptor descriptor() {
        return new PatternDescriptor("Strategy", PatternCategory.BEHAVIORAL, "Encapsulate interchangeable algorithms");
    }

    @Override
    public String demonstrate() {
        PricingStrategy strategy = new DiscountStrategy();
        return "Price=" + strategy.apply(100);
    }

    private interface PricingStrategy {
        double apply(double base);
    }

    private static class DiscountStrategy implements PricingStrategy {
        public double apply(double base) { return base * 0.9; }
    }
}
