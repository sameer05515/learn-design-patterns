package com.example.designpatterns.structural;

import com.example.designpatterns.shared.PatternCategory;
import com.example.designpatterns.shared.PatternDescriptor;
import com.example.designpatterns.shared.PatternExample;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class CompositePattern implements PatternExample {

    @Override
    public PatternDescriptor descriptor() {
        return new PatternDescriptor("Composite", PatternCategory.STRUCTURAL, "Treat individual objects and compositions uniformly");
    }

    @Override
    public String demonstrate() {
        Directory root = new Directory("root");
        root.add(new FileLeaf("notes.txt"));
        Directory nested = new Directory("images");
        nested.add(new FileLeaf("logo.png"));
        root.add(nested);
        return root.describe();
    }

    private interface FileComponent {
        String describe();
    }

    private static class FileLeaf implements FileComponent {
        private final String name;
        FileLeaf(String name) { this.name = name; }
        public String describe() { return name; }
    }

    private static class Directory implements FileComponent {
        private final String name;
        private final List<FileComponent> children = new ArrayList<>();
        Directory(String name) { this.name = name; }
        void add(FileComponent component) { children.add(component); }
        public String describe() {
            return name + children.stream().map(FileComponent::describe).toList();
        }
    }
}
