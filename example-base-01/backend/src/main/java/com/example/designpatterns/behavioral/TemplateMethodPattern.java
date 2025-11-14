package com.example.designpatterns.behavioral;

import com.example.designpatterns.shared.PatternCategory;
import com.example.designpatterns.shared.PatternDescriptor;
import com.example.designpatterns.shared.PatternExample;
import org.springframework.stereotype.Component;

@Component
public class TemplateMethodPattern implements PatternExample {

    @Override
    public PatternDescriptor descriptor() {
        return new PatternDescriptor("Template Method", PatternCategory.BEHAVIORAL, "Define algorithm skeleton letting subclasses vary steps");
    }

    @Override
    public String demonstrate() {
        DataRenderer renderer = new CsvRenderer();
        return renderer.render();
    }

    private abstract static class DataRenderer {
        public final String render() {
            String raw = read();
            return format(raw);
        }
        protected abstract String read();
        protected abstract String format(String data);
    }

    private static class CsvRenderer extends DataRenderer {
        protected String read() { return "a,b,c"; }
        protected String format(String data) { return data.replace(",", "|"); }
    }
}
