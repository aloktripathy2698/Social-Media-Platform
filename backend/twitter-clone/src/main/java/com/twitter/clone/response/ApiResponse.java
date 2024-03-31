package com.twitter.clone.response;

import lombok.Data;

@Data
public class ApiResponse {
    private String message;
    private boolean status;
}
