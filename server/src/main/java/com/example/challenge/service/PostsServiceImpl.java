package com.example.challenge.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.example.challenge.entity.Post;
import com.example.challenge.repository.PostsRepository;
import com.example.challenge.service.inf.PostsService;
import com.querydsl.core.types.Predicate;

@Service
public class PostsServiceImpl implements PostsService {
   @Autowired
   private PostsRepository postsRepository;

   @Override
   public Page<Post> getPosts(Predicate pred, Pageable page)
   {
      return postsRepository.findAll(pred, page);
   }

}
