import { FloatingBanner, Navigation, Footer } from '@/components'
import BlogTemplate from '@/components/BlogTemplate'
import React from 'react'

const Blog = ({ blogId }) => {
  return (
    <div>
      <FloatingBanner />
      <Navigation />
      <BlogTemplate blogId={blogId} />
      <Footer />
    </div>
  )
}

export default Blog
