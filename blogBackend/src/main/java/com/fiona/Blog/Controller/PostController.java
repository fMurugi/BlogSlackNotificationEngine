package com.fiona.Blog.Controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fiona.Blog.Model.Post;
import com.fiona.Blog.Repository.PostRepository;
import com.fiona.Blog.Service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import static com.fiona.Blog.SlackIntergration.sendMessageToSlack;

@RestController
public class PostController {
    @Autowired
    PostRepository repository;
    @Autowired
    PostService service;
    public final ObjectMapper objectMapper;

    public PostController(ObjectMapper objectMapper) {
        this.objectMapper = objectMapper;
    }
    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping(value = "/messages",consumes="application/json")
    public Post addPost(@RequestBody String postJson){
        try {
            Post post = objectMapper.readValue(postJson, Post.class);
            System.out.println("------------------------");
            System.out.println(post);
            sendMessageToSlack(post.getMessage());

            return service.addPost(post);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }

    }
}
