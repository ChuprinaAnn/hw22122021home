package com.example.hw22122021;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Answer {
    @JsonProperty ("firstName")
    String firstName;
    @JsonProperty ("lastName")
    String lastName;
    @JsonProperty ("middleName")
    String middleName;
    @JsonProperty ("email")
    String email;
    @JsonProperty ("phone")
    String phone;
    @JsonProperty ("gender")
    String gender;
    @JsonProperty ("question")
    String question;
    @JsonProperty ("question2")
    String question2;
    @JsonProperty ("hours")
    String hours;
    @JsonProperty ("terms")
    String terms;
}

