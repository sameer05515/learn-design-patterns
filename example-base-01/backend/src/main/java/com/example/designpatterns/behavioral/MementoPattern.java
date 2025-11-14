package com.example.designpatterns.behavioral;

import com.example.designpatterns.shared.PatternCategory;
import com.example.designpatterns.shared.PatternDescriptor;
import com.example.designpatterns.shared.PatternExample;
import org.springframework.stereotype.Component;

@Component
public class MementoPattern implements PatternExample {

    @Override
    public PatternDescriptor descriptor() {
        return new PatternDescriptor("Memento", PatternCategory.BEHAVIORAL, "Capture and restore object state");
    }

    @Override
    public String demonstrate() {
        TextEditor editor = new TextEditor();
        editor.write("Hello");
        Memento snapshot = editor.save();
        editor.write(" World");
        editor.restore(snapshot);
        return editor.getText();
    }

    private static class TextEditor {
        private StringBuilder builder = new StringBuilder();
        void write(String text) { builder.append(text); }
        Memento save() { return new Memento(builder.toString()); }
        void restore(Memento memento) {
            builder = new StringBuilder(memento.state());
        }
        String getText() { return builder.toString(); }
    }

    private record Memento(String state) {}
}
