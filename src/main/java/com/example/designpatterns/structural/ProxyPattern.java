package com.example.designpatterns.structural;

import com.example.designpatterns.shared.PatternCategory;
import com.example.designpatterns.shared.PatternDescriptor;
import com.example.designpatterns.shared.PatternExample;
import org.springframework.stereotype.Component;

@Component
public class ProxyPattern implements PatternExample {

    @Override
    public PatternDescriptor descriptor() {
        return new PatternDescriptor("Proxy", PatternCategory.STRUCTURAL, "Provide a placeholder to control access to another object");
    }

    @Override
    public String demonstrate() {
        Image image = new ImageProxy("photo.jpg");
        return image.display();
    }

    private interface Image { String display(); }

    private static class RealImage implements Image {
        private final String file;
        RealImage(String file) { this.file = file; }
        public String display() { return "Displaying " + file; }
    }

    private static class ImageProxy implements Image {
        private final String file;
        private RealImage realImage;
        ImageProxy(String file) { this.file = file; }
        public String display() {
            if (realImage == null) {
                realImage = new RealImage(file);
            }
            return "Proxy->" + realImage.display();
        }
    }
}
