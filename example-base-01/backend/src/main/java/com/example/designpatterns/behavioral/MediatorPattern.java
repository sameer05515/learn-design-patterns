package com.example.designpatterns.behavioral;

import com.example.designpatterns.shared.PatternCategory;
import com.example.designpatterns.shared.PatternDescriptor;
import com.example.designpatterns.shared.PatternExample;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class MediatorPattern implements PatternExample {

    @Override
    public PatternDescriptor descriptor() {
        return new PatternDescriptor("Mediator", PatternCategory.BEHAVIORAL, "Coordinate objects via a mediator");
    }

    @Override
    public String demonstrate() {
        ChatRoom room = new ChatRoom();
        User alice = new User("Alice", room);
        User bob = new User("Bob", room);
        room.register(alice);
        room.register(bob);
        return alice.send("Hi");
    }

    private interface Mediator {
        String broadcast(String message, User sender);
    }

    private static class ChatRoom implements Mediator {
        private final List<User> users = new ArrayList<>();
        void register(User user) { users.add(user); }
        public String broadcast(String message, User sender) {
            return users.stream()
                    .filter(user -> user != sender)
                    .map(user -> user.receive(message))
                    .toList().toString();
        }
    }

    private static class User {
        private final String name;
        private final Mediator mediator;
        User(String name, Mediator mediator) { this.name = name; this.mediator = mediator; }
        String send(String message) { return mediator.broadcast(message, this); }
        String receive(String message) { return name + " got " + message; }
    }
}
