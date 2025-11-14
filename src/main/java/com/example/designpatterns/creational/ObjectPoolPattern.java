package com.example.designpatterns.creational;

import com.example.designpatterns.shared.PatternCategory;
import com.example.designpatterns.shared.PatternDescriptor;
import com.example.designpatterns.shared.PatternExample;
import org.springframework.stereotype.Component;

import java.util.ArrayDeque;
import java.util.Deque;

@Component
public class ObjectPoolPattern implements PatternExample {

    @Override
    public PatternDescriptor descriptor() {
        return new PatternDescriptor("Object Pool", PatternCategory.CREATIONAL, "Reuse costly-to-create objects from a pool");
    }

    @Override
    public String demonstrate() {
        ConnectionPool pool = new ConnectionPool(2);
        Connection first = pool.acquire();
        Connection second = pool.acquire();
        pool.release(first);
        Connection reused = pool.acquire();
        return "Reused instance? " + (first == reused) + ", totalCreated=" + pool.created;
    }

    private static class ConnectionPool {
        private final Deque<Connection> pool = new ArrayDeque<>();
        private final int max;
        private int created;

        ConnectionPool(int max) {
            this.max = max;
        }

        Connection acquire() {
            if (!pool.isEmpty()) {
                return pool.pop();
            }
            if (created < max) {
                created++;
                return new Connection("conn-" + created);
            }
            throw new IllegalStateException("No connections available");
        }

        void release(Connection connection) {
            pool.push(connection);
        }
    }

    private record Connection(String name) {}
}
