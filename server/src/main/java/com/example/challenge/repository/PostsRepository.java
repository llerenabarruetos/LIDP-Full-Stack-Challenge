package com.example.challenge.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import com.example.challenge.entity.Post;
import com.querydsl.core.types.Predicate;

@Repository
public interface PostsRepository extends PagingAndSortingRepository<Post, Long>,
    QuerydslPredicateExecutor<Post> {
        // We'll use Querydsl for getting a page of posts via their identification attribute
        Page<Post> findAll(Predicate pred, Pageable page);
}
