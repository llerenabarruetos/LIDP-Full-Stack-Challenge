package com.example.challenge.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import com.example.challenge.entity.Comment;
import com.querydsl.core.types.Predicate;

@Repository
public interface CommentRepository extends PagingAndSortingRepository<Comment, Long>,
    QuerydslPredicateExecutor<Comment> {
        // We'll use Querydsl for getting a page of comments via their postId attribute
        Page<Comment> findAll(Predicate pred, Pageable page);
}
