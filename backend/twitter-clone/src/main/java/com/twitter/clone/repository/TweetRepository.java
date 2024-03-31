package com.twitter.clone.repository;

import com.twitter.clone.model.Tweet;
import com.twitter.clone.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TweetRepository extends JpaRepository<Tweet, Long> {
    List<Tweet> findAllByIsTweetTrueOrderByCreatedAtDesc();
    List<Tweet> findByReTweetUserContainsOrUser_IdAndIsTweetTrueOrderByCreatedAtDesc(User user, Long userId);
    List<Tweet> findByLikesContainingOrderByCreatedAtDesc(User user);

    @Query("SELECT t FROM Tweet t JOIN t.likes l WHERE l.user.id=:userId")
    List<Tweet> findByLikesUser_id(Long userId);
}
