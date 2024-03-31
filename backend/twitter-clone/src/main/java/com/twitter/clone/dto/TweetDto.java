package com.twitter.clone.dto;

import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

@Data
public class TweetDto {
    private Long id;
    private String content;
    private String image;
    private String video;
    private UserDto userDto;
    private LocalDateTime createdAt;
    private int totalLikes;
    private int totalReplies;
    private int totalRetweets;
    private boolean isLiked;
    private boolean isRetweet;
    private List<Long> retweetUserId;
    private List<TweetDto> replyTweets;
}
