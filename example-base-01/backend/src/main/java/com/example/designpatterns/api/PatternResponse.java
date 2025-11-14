package com.example.designpatterns.api;

import com.example.designpatterns.shared.PatternCategory;

public record PatternResponse(String name, PatternCategory category, String intent, String demo) {}
