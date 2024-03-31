package com.twitter.clone.service;

import com.twitter.clone.exception.TweetException;
import com.twitter.clone.exception.UserException;
import com.twitter.clone.model.Like;
import com.twitter.clone.model.Tweet;
import com.twitter.clone.model.User;
import com.twitter.clone.repository.LikeRepository;
import com.twitter.clone.repository.TweetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LikeServiceImplementation implements LikeService{

    @Autowired
    public LikeRepository likeRepository;
    @Autowired
    public TweetService tweetService;
    @Autowired
    public TweetRepository tweetRepository;

    @Override
    public Like likeTweet(Long tweetId, User user) throws UserException, TweetException {
        Like isLikeExist = likeRepository.isLikeExist(user.getId(), tweetId);
        if(isLikeExist!=null){
            likeRepository.deleteById(isLikeExist.getId());
            return isLikeExist;
        }
        Tweet tweet = tweetService.findById(tweetId);
        Like like = new Like();
        like.setTweet(tweet);
        like.setUser(user);
        Like savedLike = likeRepository.save(like);
        tweet.getLikes().add(savedLike);
        return savedLike;
    }

    @Override
    public List<Like> getAllLikes(Long tweetId) throws TweetException {
        Tweet tweet = tweetService.findById(tweetId);
        List<Like> likes = likeRepository.findByTweetId(tweetId);
        return likes;
    }
}
