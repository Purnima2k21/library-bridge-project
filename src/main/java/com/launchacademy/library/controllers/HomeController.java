package com.launchacademy.library.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {
    @GetMapping(value = {"/", "/books", "/books/{id}", "/books/new"})
    public String forward() {
        return "forward:/index.html";
    }
}
