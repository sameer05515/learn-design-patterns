package com.example.designpatterns.behavioral;

import com.example.designpatterns.shared.PatternCategory;
import com.example.designpatterns.shared.PatternDescriptor;
import com.example.designpatterns.shared.PatternExample;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class ObserverPattern implements PatternExample {

    @Override
    public PatternDescriptor descriptor() {
        return new PatternDescriptor("Observer", PatternCategory.BEHAVIORAL, "Notify dependents when state changes");
    }

    @Override
    public String demonstrate() {
        NewsAgency agency = new NewsAgency();
        agency.register(new MobileClient());
        agency.register(new TabletClient());
        return agency.publish("Storm warning");
    }

    private interface Subscriber { String onNews(String news); }

    private static class MobileClient implements Subscriber {
        public String onNews(String news) { return "mobile:" + news; }
    }

    private static class TabletClient implements Subscriber {
        public String onNews(String news) { return "tablet:" + news; }
    }

    private static class NewsAgency {
        private final List<Subscriber> subscribers = new ArrayList<>();
        void register(Subscriber subscriber) { subscribers.add(subscriber); }
        String publish(String news) {
            return subscribers.stream().map(s -> s.onNews(news)).toList().toString();
        }
    }
}
