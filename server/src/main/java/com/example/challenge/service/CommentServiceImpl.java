package com.example.challenge.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.example.challenge.entity.Comment;
import com.example.challenge.repository.CommentRepository;
import com.example.challenge.service.inf.CommentService;
import com.querydsl.core.types.Predicate;

@Service
public class CommentServiceImpl implements CommentService {
    @Autowired
    private CommentRepository commentRepository;

    @Override
    public Page<Comment> getComments(Predicate pred, Pageable page) {
        return commentRepository.findAll(pred, page);
    }

    @Override
    public void saveComment(Comment comment) {
        commentRepository.save(comment);
    }

    @Override
    public void deleteComment(Long id) {
        commentRepository.deleteById(id); // delete a comment by Id
    }
}
