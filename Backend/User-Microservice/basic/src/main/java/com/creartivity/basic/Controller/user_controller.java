package com.creartivity.basic;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.client.RestTemplate;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.util.MultiValueMap;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.web.client.HttpClientErrorException;

import java.lang.System;
import java.util.ArrayList;
import java.util.List;

import com.google.gson.Gson;
import com.google.gson.JsonObject;



@RestController
public class user_controller {
    private String access_token;
    private String auth_token;
    @Value("${google.client-id}")
    private String client_id;
    @Value("${google.client-secret}")
    private String client_secret;
    @Value("${google.redirect_uri_access}")
    private String redicret_uri_access;
    @Value("${google.redirect_uri_auth}")
    private String redirect_uri_auth;
    
    @GetMapping("/google-auth/callback")
    public void googleAuth(@RequestParam("code")String code, @RequestParam("scope") String scope, 
    @RequestParam("authuser") String authUser, @RequestParam("prompt") String prompt){
        System.out.println(code);
        System.out.println(scope);
        auth_token = code;
        handleAccessToken();
    }
    private void handleAccessToken(){
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
        MultiValueMap<String, String> params = new LinkedMultiValueMap<>();
        String scopes = "https://www.googleapis.com/auth/userinfo.profile " +
        "https://www.googleapis.com/auth/userinfo.email openid";
        params.add("code", auth_token);
        params.add("redirect_uri",redirect_uri_auth);
        params.add("client_id", client_id);
        params.add("client_secret", client_secret);
        params.add("scope", "openid profile email");
        params.add("grant_type", "authorization_code");
        System.out.println(auth_token);
        
        HttpEntity<MultiValueMap<String, String>> requestEntity = new HttpEntity<>(params, httpHeaders);
        String url = "https://oauth2.googleapis.com/token"; 

        try {
            // Make POST request to exchange auth code for access token
            String response = restTemplate.postForObject(url, requestEntity, String.class);
            System.out.println("Access Token Response: " + response);
            
        } catch (HttpClientErrorException e) {
            System.out.println("HTTP Error: " + e.getStatusCode() + " " + e.getResponseBodyAsString());
       
        }
    }
    
    @GetMapping("/google-access/callback")
    public String getAccessToken(@RequestParam("code")String code, @RequestParam("scope") String scope, 
    @RequestParam("authuser") String authUser, @RequestParam("prompt") String prompt){
        System.out.println(code);
        System.out.println(scope);
        access_token= code;

        getProfile();

        return code;
    }
    

    @GetMapping("/login")
    public String login() {
        // Example endpoint to handle authentication
        return "hello!";
    }
    @GetMapping("/signup")
    public String signup() {
        // Example endpoint to handle authentication
        return "Authentication logic goes here!";
    }
    private void getProfile(){
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders httpHeaders = new HttpHeaders();
        System.out.println(access_token);
        httpHeaders.setBearerAuth(access_token);
        HttpEntity<String> requestEntity = new HttpEntity<>(httpHeaders);
        String url = "https://www.googleapis.com/oauth2/v2/userinfo";
        ResponseEntity<String> response = restTemplate.exchange(url, HttpMethod.GET, requestEntity, String.class);
        JsonObject jsonObject = new Gson().fromJson(response.getBody(), JsonObject.class);
        System.out.println(jsonObject);
       
    }
}
