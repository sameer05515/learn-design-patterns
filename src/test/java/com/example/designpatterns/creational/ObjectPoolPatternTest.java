package com.example.designpatterns.creational;

import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.assertThat;

class ObjectPoolPatternTest {

    private final ObjectPoolPattern pattern = new ObjectPoolPattern();

    @Test
    void demonstrateShowsObjectReuse() {
        String result = pattern.demonstrate();

        assertThat(result)
                .contains("Reused instance? true")
                .contains("totalCreated=2");
    }
}

