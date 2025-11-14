package com.example.designpatterns.behavioral;

import com.example.designpatterns.shared.PatternCategory;
import com.example.designpatterns.shared.PatternDescriptor;
import com.example.designpatterns.shared.PatternExample;
import org.springframework.stereotype.Component;

@Component
public class VisitorPattern implements PatternExample {

    @Override
    public PatternDescriptor descriptor() {
        return new PatternDescriptor("Visitor", PatternCategory.BEHAVIORAL, "Separate operations from the object structure");
    }

    @Override
    public String demonstrate() {
        Shape circle = new Circle();
        Shape square = new Square();
        Visitor areaVisitor = new AreaVisitor();
        return circle.accept(areaVisitor) + "," + square.accept(areaVisitor);
    }

    private interface Shape {
        String accept(Visitor visitor);
    }

    private interface Visitor {
        String visitCircle(Circle circle);
        String visitSquare(Square square);
    }

    private static class Circle implements Shape {
        public String accept(Visitor visitor) { return visitor.visitCircle(this); }
    }

    private static class Square implements Shape {
        public String accept(Visitor visitor) { return visitor.visitSquare(this); }
    }

    private static class AreaVisitor implements Visitor {
        public String visitCircle(Circle circle) { return "circle-area"; }
        public String visitSquare(Square square) { return "square-area"; }
    }
}
