package com.twitter.clone.dto.mapper;

import com.twitter.clone.dto.LikeDto;
import com.twitter.clone.dto.TweetDto;
import com.twitter.clone.dto.UserDto;
import com.twitter.clone.model.Like;
import com.twitter.clone.model.User;

import java.util.ArrayList;
import java.util.List;

public class LikeDtoMapper {
    public static LikeDto toLikeDto(Like like, User reqUser){
        UserDto user = UserDtoMapper.toUserDto(like.getUser());
        UserDto reqUserDto = UserDtoMapper.toUserDto(reqUser);
        TweetDto tweet = TweetDtoMapper.toTweetDto(like.getTweet(), reqUser);

        LikeDto likeDto = new LikeDto();
        likeDto.setId(like.getId());
        likeDto.setTweet(tweet);
        likeDto.setUser(user);
        return likeDto;
    }

    public static List<LikeDto> toLikeDtos(List<Like> likes, User reqUsers){
        List<LikeDto> likeDtos = new ArrayList<>();
        for(Like like: likes){
            UserDto user = UserDtoMapper.toUserDto(like.getUser());
            TweetDto tweet = TweetDtoMapper.toTweetDto(like.getTweet(),reqUsers);

            LikeDto likeDto = new LikeDto();
            likeDto.setId(like.getId());
            likeDto.setTweet(tweet);
            likeDto.setUser(user);
            likeDtos.add(likeDto);
        }
        return likeDtos;
    }
}
