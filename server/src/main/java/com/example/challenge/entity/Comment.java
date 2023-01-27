package com.example.challenge.entity;

import java.time.ZonedDateTime;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.FetchType;

import org.hibernate.annotations.CreationTimestamp;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
@Table(name = "comments")
public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long identification;

    private Long postId;
    private String username;

    @CreationTimestamp
    private ZonedDateTime createdAt;

    private String body;

    // Comments with replies have a list of replies. The replies themselves have a reference to their parent comment: = = = =
    // Reference to parent comment (if any)
    @JsonBackReference
    @ManyToOne
    @JoinColumn(name = "parent_id")
    private Comment parentComment;

    // list of replies (if any)
    @JsonManagedReference
    @OneToMany(fetch = FetchType.EAGER, orphanRemoval = true,
        mappedBy = "parentComment")
    private Set<Comment> replies;
}
