package com.example.designpatterns.behavioral;

import com.example.designpatterns.shared.PatternCategory;
import com.example.designpatterns.shared.PatternDescriptor;
import com.example.designpatterns.shared.PatternExample;
import org.springframework.stereotype.Component;

@Component
public class ChainOfResponsibilityPattern implements PatternExample {

    @Override
    public PatternDescriptor descriptor() {
        return new PatternDescriptor("Chain of Responsibility", PatternCategory.BEHAVIORAL, "Pass requests along chain of handlers");
    }

    @Override
    public String demonstrate() {
        Handler level1 = new LevelHandler("Tier1", 1);
        Handler level2 = new LevelHandler("Tier2", 2);
        level1.next(level2);
        return level1.handle(2);
    }

    private interface Handler {
        String handle(int severity);
        void next(Handler next);
    }

    private static class LevelHandler implements Handler {
        private final String name;
        private final int capability;
        private Handler next;

        LevelHandler(String name, int capability) {
            this.name = name;
            this.capability = capability;
        }

        public String handle(int severity) {
            if (severity <= capability) {
                return name + " resolved";
            }
            return next != null ? next.handle(severity) : "Escalated";
        }

        public void next(Handler next) {
            this.next = next;
        }
    }
}
