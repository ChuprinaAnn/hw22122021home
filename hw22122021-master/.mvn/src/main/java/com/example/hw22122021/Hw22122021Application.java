package com.example.hw22122021;

import org.json.JSONObject;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/api")
public class Hw22122021Application {
    ArrayList<Object> answers = new ArrayList<>();
    //создать ответ
    /* curl -X POST http://localhost:8080/post -H 'Content-Type: text/plain' -d 'text' */
    @PostMapping("/post")
    public void addText(@RequestBody Object text) {
       answers.add(text);
    }
    //выдать ответ
    //curl -X GET  http://localhost:8080/get 'Content-Type: text/plain'
    @GetMapping("/get")
    public Object getText() {
        for (int i = 0; i < answers.size(); i++) {
            return answers.get(i);
        }
        return null;
    }
}
