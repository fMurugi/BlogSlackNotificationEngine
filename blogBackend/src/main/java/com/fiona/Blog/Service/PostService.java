package com.fiona.Blog.Service;

import com.fiona.Blog.Model.Post;
import com.fiona.Blog.Repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service

public class PostService {
    @Autowired
    private PostRepository postRepository;

    public Post addPost(Post post){
        return postRepository.save(post);
    }
}
