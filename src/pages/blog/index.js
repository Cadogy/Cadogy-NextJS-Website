import { FloatingBanner, Footer, Navigation } from '../../components';
import React from 'react';
import { BlogPage } from '@/containers';


const Blog = () => {
  return (
    <div>
      <FloatingBanner />
      <Navigation />
      <BlogPage />
      <Footer />
    </div>
  )
}

export default Blog;
