package com.twitter.clone.service;

import com.twitter.clone.exception.TweetException;
import com.twitter.clone.exception.UserException;
import com.twitter.clone.model.Like;
import com.twitter.clone.model.User;

import java.util.List;

public interface LikeService {
    public Like likeTweet(Long tweetId, User user) throws UserException, TweetException;
    public List<Like> getAllLikes(Long tweetId) throws TweetException;
}
