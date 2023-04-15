import React from 'react';
import { useRouter } from 'next/router';
import { Blog } from '@/containers';
import { blogPosts } from '@/data/blog';

const BlogPost = () => {
  const router = useRouter();
  const blogId = parseInt(router.query.blogId);

  const blogPost = blogPosts.find((post, index) => index === blogId - 1);

  return (
    <div>
      {blogPost ? (
        blogId + 1 <= blogPosts.length ? (
          <Blog blogId={blogId} />
        ) : (
          'Error: Blog post not found'
        )
      ) : (
        'Error: Blog post not found'
      )}
    </div>
  );
};

export default BlogPost;
