package com.twitter.clone.service;

import com.twitter.clone.exception.TweetException;
import com.twitter.clone.exception.UserException;
import com.twitter.clone.model.Tweet;
import com.twitter.clone.model.User;
import com.twitter.clone.request.TweetReplyRequest;

import java.util.List;

public interface TweetService {
    public Tweet createTweet(Tweet req,User user) throws UserException;
    public List<Tweet> findAllTweet();
    public Tweet reTweet(Long tweetId, User user) throws UserException, TweetException;
    public Tweet findById(Long tweetId) throws TweetException;
    public void deleteTweetById(Long tweetId, Long userId) throws TweetException, UserException;
    public Tweet removeFromReTweet(Long tweetId, User user) throws TweetException, UserException;
    public Tweet createdReply(TweetReplyRequest req, User user) throws TweetException;
    public List<Tweet> getUserTweet(User user);
    public List<Tweet> findByLikesContainsUser(User user);
}
