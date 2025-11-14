package com.example.designpatterns.behavioral;

import com.example.designpatterns.shared.PatternCategory;
import com.example.designpatterns.shared.PatternDescriptor;
import com.example.designpatterns.shared.PatternExample;
import org.springframework.stereotype.Component;

@Component
public class CommandPattern implements PatternExample {

    @Override
    public PatternDescriptor descriptor() {
        return new PatternDescriptor("Command", PatternCategory.BEHAVIORAL, "Encapsulate requests as objects");
    }

    @Override
    public String demonstrate() {
        Light light = new Light();
        Command on = new ToggleCommand(light, true);
        Command off = new ToggleCommand(light, false);
        return on.execute() + " then " + off.execute();
    }

    private interface Command { String execute(); }

    private static class Light {
        String on() { return "Light on"; }
        String off() { return "Light off"; }
    }

    private static class ToggleCommand implements Command {
        private final Light light;
        private final boolean enable;
        ToggleCommand(Light light, boolean enable) { this.light = light; this.enable = enable; }
        public String execute() { return enable ? light.on() : light.off(); }
    }
}
