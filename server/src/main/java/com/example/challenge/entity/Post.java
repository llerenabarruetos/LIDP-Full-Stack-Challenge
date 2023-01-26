package com.example.challenge.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

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
@Table(name = "posts")
public class Post {
   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
   private Long identification;

   // Currently, none of a post's attributes are required. So, we don't add @NotNull(...) for now
   private String title;
   private String subTitle;
   private String body;
   private String link;
   private String image;
}