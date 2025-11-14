package com.example.designpatterns.creational;

import com.example.designpatterns.shared.PatternCategory;
import com.example.designpatterns.shared.PatternDescriptor;
import com.example.designpatterns.shared.PatternExample;
import org.springframework.stereotype.Component;

@Component
public class PrototypePattern implements PatternExample {

    @Override
    public PatternDescriptor descriptor() {
        return new PatternDescriptor("Prototype", PatternCategory.CREATIONAL, "Clone existing instances instead of creating from scratch");
    }

    @Override
    public String demonstrate() {
        Document prototype = new Document("template", 2);
        Document copy = prototype.copy();
        return prototype + " | clone=" + copy;
    }

    private record Document(String name, int pages) {
        Document copy() {
            return new Document(name, pages);
        }
    }
}
