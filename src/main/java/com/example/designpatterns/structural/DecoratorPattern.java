package com.example.designpatterns.structural;

import com.example.designpatterns.shared.PatternCategory;
import com.example.designpatterns.shared.PatternDescriptor;
import com.example.designpatterns.shared.PatternExample;
import org.springframework.stereotype.Component;

@Component
public class DecoratorPattern implements PatternExample {

    @Override
    public PatternDescriptor descriptor() {
        return new PatternDescriptor("Decorator", PatternCategory.STRUCTURAL, "Add behavior to objects dynamically");
    }

    @Override
    public String demonstrate() {
        Coffee coffee = new MilkDecorator(new Espresso());
        return coffee.description();
    }

    private interface Coffee {
        String description();
    }

    private static class Espresso implements Coffee {
        public String description() { return "Espresso"; }
    }

    private abstract static class CoffeeDecorator implements Coffee {
        protected final Coffee delegate;
        protected CoffeeDecorator(Coffee delegate) { this.delegate = delegate; }
    }

    private static class MilkDecorator extends CoffeeDecorator {
        MilkDecorator(Coffee delegate) { super(delegate); }
        public String description() { return delegate.description() + "+Milk"; }
    }
}
