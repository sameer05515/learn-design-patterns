package com.example.designpatterns.behavioral;

import com.example.designpatterns.shared.PatternCategory;
import com.example.designpatterns.shared.PatternDescriptor;
import com.example.designpatterns.shared.PatternExample;
import org.springframework.stereotype.Component;

@Component
public class InterpreterPattern implements PatternExample {

    @Override
    public PatternDescriptor descriptor() {
        return new PatternDescriptor("Interpreter", PatternCategory.BEHAVIORAL, "Evaluate sentences in a language");
    }

    @Override
    public String demonstrate() {
        Expression expression = new OrExpression(new LiteralExpression(true), new LiteralExpression(false));
        return "Result=" + expression.interpret();
    }

    private interface Expression {
        boolean interpret();
    }

    private record LiteralExpression(boolean value) implements Expression {
        public boolean interpret() { return value; }
    }

    private record OrExpression(Expression left, Expression right) implements Expression {
        public boolean interpret() { return left.interpret() || right.interpret(); }
    }
}
