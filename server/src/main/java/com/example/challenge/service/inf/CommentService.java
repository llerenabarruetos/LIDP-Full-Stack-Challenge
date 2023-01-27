package com.example.challenge.service.inf;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.example.challenge.entity.Comment;
import com.querydsl.core.types.Predicate;

public interface CommentService {
    Page<Comment> getComments(Predicate pred, Pageable page);

    void saveComment(Comment comment);

    void deleteComment(Long id);
}
