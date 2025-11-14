package com.example.designpatterns.api;

import com.example.designpatterns.shared.PatternCategory;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Set;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
class PatternServiceTest {

    @Autowired
    private PatternService patternService;

    @Test
    void describePatternsReturnsAllTwentyFourEntries() {
        var responses = patternService.describePatterns();

        assertThat(responses)
                .hasSize(24)
                .extracting(PatternResponse::name)
                .containsExactlyInAnyOrder(
                        "Singleton", "Factory Method", "Abstract Factory",
                        "Builder", "Prototype", "Object Pool",
                        "Adapter", "Bridge", "Composite", "Decorator",
                        "Facade", "Flyweight", "Proxy",
                        "Strategy", "Observer", "Command",
                        "Chain of Responsibility", "Template Method",
                        "Iterator", "State", "Mediator",
                        "Memento", "Interpreter", "Visitor"
                );

        assertThat(responses)
                .extracting(PatternResponse::category)
                .containsAll(Set.of(
                        PatternCategory.CREATIONAL,
                        PatternCategory.STRUCTURAL,
                        PatternCategory.BEHAVIORAL
                ));
    }
}

