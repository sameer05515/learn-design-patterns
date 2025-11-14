package com.example.designpatterns.creational;

import com.example.designpatterns.shared.PatternCategory;
import com.example.designpatterns.shared.PatternDescriptor;
import com.example.designpatterns.shared.PatternExample;
import org.springframework.stereotype.Component;

@Component
public class AbstractFactoryPattern implements PatternExample {

    @Override
    public PatternDescriptor descriptor() {
        return new PatternDescriptor("Abstract Factory", PatternCategory.CREATIONAL, "Create families of related objects");
    }

    @Override
    public String demonstrate() {
        UiFactory lightFactory = new LightUiFactory();
        UiFactory darkFactory = new DarkUiFactory();
        return lightFactory.button().render() + " & " + darkFactory.checkbox().render();
    }

    private interface Button { String render(); }
    private interface Checkbox { String render(); }

    private interface UiFactory {
        Button button();
        Checkbox checkbox();
    }

    private static class LightButton implements Button {
        @Override public String render() { return "Light button"; }
    }

    private static class DarkButton implements Button {
        @Override public String render() { return "Dark button"; }
    }

    private static class LightCheckbox implements Checkbox {
        @Override public String render() { return "Light checkbox"; }
    }

    private static class DarkCheckbox implements Checkbox {
        @Override public String render() { return "Dark checkbox"; }
    }

    private static class LightUiFactory implements UiFactory {
        public Button button() { return new LightButton(); }
        public Checkbox checkbox() { return new LightCheckbox(); }
    }

    private static class DarkUiFactory implements UiFactory {
        public Button button() { return new DarkButton(); }
        public Checkbox checkbox() { return new DarkCheckbox(); }
    }
}
