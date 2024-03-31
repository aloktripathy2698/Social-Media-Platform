package com.twitter.clone.service;

import com.twitter.clone.exception.TweetException;
import com.twitter.clone.exception.UserException;
import com.twitter.clone.model.Tweet;
import com.twitter.clone.model.User;
import com.twitter.clone.repository.TweetRepository;
import com.twitter.clone.request.TweetReplyRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class TweetServiceImplementation implements TweetService {
    @Autowired
    private TweetRepository tweetRepository;

    @Override
    public Tweet createTweet(Tweet req, User user) throws UserException {
        Tweet tweet = new Tweet();
        tweet.setContent(req.getContent());
        tweet.setCreatedAt(LocalDateTime.now());
        tweet.setImage(req.getImage());
        tweet.setUser(user);
        tweet.setReply(false);
        tweet.setTweet(true);
        tweet.setVideo(req.getVideo());

        return tweetRepository.save(tweet);
    }

    @Override
    public List<Tweet> findAllTweet() {
        return tweetRepository.findAllByIsTweetTrueOrderByCreatedAtDesc();
    }

    @Override
    public Tweet reTweet(Long tweetId, User user) throws UserException, TweetException {
        Tweet tweet = findById(tweetId);
        if(tweet.getReTweetUser().contains(user)){
            tweet.getReTweetUser().remove(user);
        } else {
            tweet.getReTweetUser().add(user);
        }
        return tweetRepository.save(tweet);
    }

    @Override
    public Tweet findById(Long tweetId) throws TweetException {
        Tweet tweet = tweetRepository.findById(tweetId)
                .orElseThrow(()->new TweetException("Tweet not found with id"));
        return tweet;
    }

    @Override
    public void deleteTweetById(Long tweetId, Long userId) throws TweetException, UserException {
        Tweet tweet = findById(tweetId);
        if(!userId.equals(tweet.getUser().getId())){
            throw new UserException("You can't delete another user's tweet");
        }
        tweetRepository.deleteById(tweetId);
    }

    @Override
    public Tweet removeFromReTweet(Long tweetId, User user) throws TweetException, UserException {

        return null;
    }

    @Override
    public Tweet createdReply(TweetReplyRequest req, User user) throws TweetException {
        Tweet replyFor = findById(req.getTweetId());
        Tweet reply = new Tweet();
        reply.setContent(req.getContent());
        reply.setCreatedAt(LocalDateTime.now());
        reply.setImage(req.getImage());
        reply.setUser(user);
        reply.setReply(true);
        reply.setTweet(false);
        reply.setReplyFor(replyFor);
        Tweet savedReply = tweetRepository.save(reply);
        reply.getReplyTweets().add(savedReply);
        tweetRepository.save(replyFor);
        return replyFor;
    }

    @Override
    public List<Tweet> getUserTweet(User user) {
        return tweetRepository.findByReTweetUserContainsOrUser_IdAndIsTweetTrueOrderByCreatedAtDesc(user, user.getId());
    }

    @Override
    public List<Tweet> findByLikesContainsUser(User user) {
        return tweetRepository.findByLikesUser_id(user.getId());
    }
}
