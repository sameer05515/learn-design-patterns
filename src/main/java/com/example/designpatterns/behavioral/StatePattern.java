package com.example.designpatterns.behavioral;

import com.example.designpatterns.shared.PatternCategory;
import com.example.designpatterns.shared.PatternDescriptor;
import com.example.designpatterns.shared.PatternExample;
import org.springframework.stereotype.Component;

@Component
public class StatePattern implements PatternExample {

    @Override
    public PatternDescriptor descriptor() {
        return new PatternDescriptor("State", PatternCategory.BEHAVIORAL, "Alter behavior when an object changes state");
    }

    @Override
    public String demonstrate() {
        AudioPlayer player = new AudioPlayer();
        return player.play() + " -> " + player.pause();
    }

    private interface PlayerState {
        String play(AudioPlayer player);
        String pause(AudioPlayer player);
    }

    private static class PlayingState implements PlayerState {
        public String play(AudioPlayer player) { return "Already playing"; }
        public String pause(AudioPlayer player) {
            player.setState(new PausedState());
            return "Pausing";
        }
    }

    private static class PausedState implements PlayerState {
        public String play(AudioPlayer player) {
            player.setState(new PlayingState());
            return "Resuming";
        }
        public String pause(AudioPlayer player) { return "Already paused"; }
    }

    private static class AudioPlayer {
        private PlayerState state = new PausedState();
        void setState(PlayerState state) { this.state = state; }
        String play() { return state.play(this); }
        String pause() { return state.pause(this); }
    }
}
