package com.example.designpatterns.creational;

import com.example.designpatterns.shared.PatternCategory;
import com.example.designpatterns.shared.PatternDescriptor;
import com.example.designpatterns.shared.PatternExample;
import org.springframework.stereotype.Component;

@Component
public class BuilderPattern implements PatternExample {

    @Override
    public PatternDescriptor descriptor() {
        return new PatternDescriptor("Builder", PatternCategory.CREATIONAL, "Step-by-step construction of complex objects");
    }

    @Override
    public String demonstrate() {
        Report report = new Report.Builder()
                .title("Monthly")
                .author("Ops")
                .content("All systems go")
                .build();
        return report.toString();
    }

    private static class Report {
        private final String title;
        private final String author;
        private final String content;

        private Report(Builder builder) {
            this.title = builder.title;
            this.author = builder.author;
            this.content = builder.content;
        }

        @Override
        public String toString() {
            return "Report{" + title + "," + author + "," + content + "}";
        }

        private static class Builder {
            private String title;
            private String author;
            private String content;

            Builder title(String title) { this.title = title; return this; }
            Builder author(String author) { this.author = author; return this; }
            Builder content(String content) { this.content = content; return this; }
            Report build() { return new Report(this); }
        }
    }
}
