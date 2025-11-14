package com.example.designpatterns.creational;

import com.example.designpatterns.shared.PatternCategory;
import com.example.designpatterns.shared.PatternDescriptor;
import com.example.designpatterns.shared.PatternExample;
import org.springframework.stereotype.Component;

@Component
public class SingletonPattern implements PatternExample {

    private static final Configuration CONFIG = Configuration.getInstance();

    @Override
    public PatternDescriptor descriptor() {
        return new PatternDescriptor("Singleton", PatternCategory.CREATIONAL, "Ensure a class has only one instance");
    }

    @Override
    public String demonstrate() {
        Configuration first = Configuration.getInstance();
        Configuration second = Configuration.getInstance();
        return "Same instance? " + (first == second) + ", value=" + CONFIG.getValue();
    }

    private static final class Configuration {
        private static final Configuration INSTANCE = new Configuration();
        private final String value = "cached-settings";

        private Configuration() {}

        static Configuration getInstance() {
            return INSTANCE;
        }

        String getValue() {
            return value;
        }
    }
}
