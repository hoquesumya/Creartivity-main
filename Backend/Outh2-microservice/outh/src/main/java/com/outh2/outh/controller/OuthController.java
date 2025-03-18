package com.outh2.outh.controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class OuthController {
    @GetMapping("/")
    public String app() {
        // Example endpoint to handle authentication
        return "hello!";
    }
    @GetMapping("/auth")
    public String authenticate() {
        // Example endpoint to handle authentication
        return "Authentication logic goes here!";
    }
    
}
