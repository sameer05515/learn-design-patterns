package com.example.designpatterns.behavioral;

import com.example.designpatterns.shared.PatternCategory;
import com.example.designpatterns.shared.PatternDescriptor;
import com.example.designpatterns.shared.PatternExample;
import org.springframework.stereotype.Component;

import java.util.Iterator;
import java.util.NoSuchElementException;

@Component
public class IteratorPattern implements PatternExample {

    @Override
    public PatternDescriptor descriptor() {
        return new PatternDescriptor("Iterator", PatternCategory.BEHAVIORAL, "Traverse collections without exposing internals");
    }

    @Override
    public String demonstrate() {
        CustomCollection collection = new CustomCollection(new int[]{1, 2, 3});
        Iterator<Integer> iterator = collection.iterator();
        StringBuilder builder = new StringBuilder();
        while (iterator.hasNext()) {
            builder.append(iterator.next());
        }
        return builder.toString();
    }

    private static class CustomCollection implements Iterable<Integer> {
        private final int[] data;
        CustomCollection(int[] data) { this.data = data; }
        public Iterator<Integer> iterator() { return new CustomIterator(); }
        private class CustomIterator implements Iterator<Integer> {
            private int index;
            public boolean hasNext() { return index < data.length; }
            public Integer next() {
                if (!hasNext()) {
                    throw new NoSuchElementException();
                }
                return data[index++];
            }
        }
    }
}
