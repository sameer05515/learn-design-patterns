package com.example.designpatterns.structural;

import com.example.designpatterns.shared.PatternCategory;
import com.example.designpatterns.shared.PatternDescriptor;
import com.example.designpatterns.shared.PatternExample;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.Map;

@Component
public class FlyweightPattern implements PatternExample {

    @Override
    public PatternDescriptor descriptor() {
        return new PatternDescriptor("Flyweight", PatternCategory.STRUCTURAL, "Share objects to support large numbers efficiently");
    }

    @Override
    public String demonstrate() {
        ParticleFactory factory = new ParticleFactory();
        Particle first = factory.get("smoke");
        Particle second = factory.get("smoke");
        return "Shared instance? " + (first == second) + ", cacheSize=" + factory.size();
    }

    private static class ParticleFactory {
        private final Map<String, Particle> cache = new HashMap<>();

        Particle get(String type) {
            return cache.computeIfAbsent(type, Particle::new);
        }

        int size() { return cache.size(); }
    }

    private record Particle(String type) {}
}
