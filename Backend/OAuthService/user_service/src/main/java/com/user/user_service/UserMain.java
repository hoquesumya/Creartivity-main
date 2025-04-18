package com.user.user_service;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.Map;

@SpringBootApplication
@RestController
public class UserMain {
    @CrossOrigin(origins="http://localhost:5173/sinup-success")
    @GetMapping("/api/v1/user-info")
    public Map<String,Object> user_info(@AuthenticationPrincipal OAuth2User principal) {
        return principal.getAttributes();
    }
}
