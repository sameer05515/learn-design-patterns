package com.example.designpatterns.creational;

import com.example.designpatterns.shared.PatternCategory;
import com.example.designpatterns.shared.PatternDescriptor;
import com.example.designpatterns.shared.PatternExample;
import org.springframework.stereotype.Component;

@Component
public class FactoryMethodPattern implements PatternExample {

    @Override
    public PatternDescriptor descriptor() {
        return new PatternDescriptor("Factory Method", PatternCategory.CREATIONAL, "Create objects via specialized creator methods");
    }

    @Override
    public String demonstrate() {
        NotificationCreator creator = new SmsNotificationCreator();
        Notification sms = creator.create();
        creator = new EmailNotificationCreator();
        Notification email = creator.create();
        return sms.send("Code 1234") + " | " + email.send("Welcome");
    }

    private interface Notification {
        String send(String message);
    }

    private abstract static class NotificationCreator {
        abstract Notification create();
    }

    private static class SmsNotification implements Notification {
        @Override
        public String send(String message) {
            return "SMS:" + message;
        }
    }

    private static class EmailNotification implements Notification {
        @Override
        public String send(String message) {
            return "EMAIL:" + message;
        }
    }

    private static class SmsNotificationCreator extends NotificationCreator {
        @Override
        Notification create() {
            return new SmsNotification();
        }
    }

    private static class EmailNotificationCreator extends NotificationCreator {
        @Override
        Notification create() {
            return new EmailNotification();
        }
    }
}
