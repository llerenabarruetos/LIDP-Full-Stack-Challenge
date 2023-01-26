package com.example.challenge.controller;

import org.springframework.data.domain.Page;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.data.querydsl.binding.QuerydslPredicate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.challenge.entity.Post;
import com.example.challenge.service.inf.PostsService;
import com.querydsl.core.types.Predicate;

@RestController
@RequestMapping("/posts")
public class PostsController {
   @Autowired
   private PostsService postsService;

   @GetMapping()
   public Page<Post> getPosts(Pageable pageable,
      @QuerydslPredicate(root = Post.class) Predicate predicate) {
      return this.postsService.getPosts(predicate, pageable);
   }

}
