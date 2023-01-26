package com.example.challenge.service.inf;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.example.challenge.entity.Post;
import com.querydsl.core.types.Predicate;

public interface PostsService {
   Page<Post> getPosts(Predicate pred, Pageable page);
}
