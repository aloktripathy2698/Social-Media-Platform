package com.twitter.clone.util;

import com.twitter.clone.model.Like;
import com.twitter.clone.model.Tweet;
import com.twitter.clone.model.User;

public class TweetUtil {
    public static final boolean isLikedByReqUser(User reqUser, Tweet tweet){
        for(Like like: tweet.getLikes()){
            if(like.getUser().getId().equals(reqUser.getId())){
                return true;
            }
        }
        return false;
    }

    public static final boolean isRetweetedByReqUser(User reqUser, Tweet tweet){
        for(User user: tweet.getReTweetUser()){
            if(user.getId().equals(reqUser.getId())){
                return true;
            }
        }
        return false;
    }
}
