package com.example.designpatterns.structural;

import com.example.designpatterns.shared.PatternCategory;
import com.example.designpatterns.shared.PatternDescriptor;
import com.example.designpatterns.shared.PatternExample;
import org.springframework.stereotype.Component;

@Component
public class FacadePattern implements PatternExample {

    @Override
    public PatternDescriptor descriptor() {
        return new PatternDescriptor("Facade", PatternCategory.STRUCTURAL, "Simplify complex subsystems behind a single interface");
    }

    @Override
    public String demonstrate() {
        TravelFacade facade = new TravelFacade();
        return facade.bookTrip("Paris");
    }

    private static class TravelFacade {
        private final FlightService flightService = new FlightService();
        private final HotelService hotelService = new HotelService();

        String bookTrip(String destination) {
            return flightService.reserve(destination) + " & " + hotelService.book(destination);
        }
    }

    private static class FlightService {
        String reserve(String destination) { return "Flight->" + destination; }
    }

    private static class HotelService {
        String book(String destination) { return "Hotel->" + destination; }
    }
}
