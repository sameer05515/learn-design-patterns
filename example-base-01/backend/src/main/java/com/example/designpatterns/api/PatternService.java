package com.example.designpatterns.api;

import com.example.designpatterns.shared.PatternExample;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.List;

@Service
public class PatternService {

    private final List<PatternExample> examples;

    public PatternService(List<PatternExample> examples) {
        this.examples = examples;
    }

    public List<PatternResponse> describePatterns() {
        return examples.stream()
                .sorted(Comparator.comparing(example -> example.descriptor().name()))
                .map(example -> new PatternResponse(
                        example.descriptor().name(),
                        example.descriptor().category(),
                        example.descriptor().intent(),
                        example.demonstrate()
                ))
                .toList();
    }
}
