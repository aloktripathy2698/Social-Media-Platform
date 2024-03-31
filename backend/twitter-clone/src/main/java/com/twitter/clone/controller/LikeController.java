package com.twitter.clone.controller;

import com.twitter.clone.dto.LikeDto;
import com.twitter.clone.dto.mapper.LikeDtoMapper;
import com.twitter.clone.exception.TweetException;
import com.twitter.clone.exception.UserException;
import com.twitter.clone.model.Like;
import com.twitter.clone.model.User;
import com.twitter.clone.service.LikeService;
import com.twitter.clone.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class LikeController {

    @Autowired
    private UserService userService;
    @Autowired
    private LikeService likeService;

    @PostMapping("/{tweetId}/likes")
    public ResponseEntity<LikeDto> likeTweet(@PathVariable Long tweetId,
                                             @RequestHeader("Authorization") String jwt)
            throws UserException, TweetException{
        User user = userService.findUserProfileByJwt(jwt);
        Like like = likeService.likeTweet(tweetId, user);
        LikeDto likeDto = LikeDtoMapper.toLikeDto(like, user);
        return new ResponseEntity<>(likeDto, HttpStatus.CREATED);
    }

    @PostMapping("/tweet/{tweetId}")
    public ResponseEntity<List<LikeDto>> getAllLikes(@PathVariable Long tweetId,
                                               @RequestHeader("Authorization") String jwt)
            throws UserException, TweetException{
        User user = userService.findUserProfileByJwt(jwt);
        List<Like> likes = likeService.getAllLikes(tweetId);
        List<LikeDto> likeDtos = LikeDtoMapper.toLikeDtos(likes, user);
        return new ResponseEntity<>(likeDtos, HttpStatus.CREATED);
    }

}
