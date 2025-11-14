package com.example.designpatterns.structural;

import com.example.designpatterns.shared.PatternCategory;
import com.example.designpatterns.shared.PatternDescriptor;
import com.example.designpatterns.shared.PatternExample;
import org.springframework.stereotype.Component;

@Component
public class BridgePattern implements PatternExample {

    @Override
    public PatternDescriptor descriptor() {
        return new PatternDescriptor("Bridge", PatternCategory.STRUCTURAL, "Decouple abstraction from implementation");
    }

    @Override
    public String demonstrate() {
        RemoteControl remote = new AdvancedRemote(new TvDevice());
        return remote.togglePower();
    }

    private interface Device {
        String enable();
        String disable();
    }

    private static class TvDevice implements Device {
        public String enable() { return "TV on"; }
        public String disable() { return "TV off"; }
    }

    private abstract static class RemoteControl {
        protected final Device device;
        protected RemoteControl(Device device) { this.device = device; }
        public abstract String togglePower();
    }

    private static class AdvancedRemote extends RemoteControl {
        private boolean on;
        AdvancedRemote(Device device) { super(device); }
        public String togglePower() {
            on = !on;
            return on ? device.enable() : device.disable();
        }
    }
}
