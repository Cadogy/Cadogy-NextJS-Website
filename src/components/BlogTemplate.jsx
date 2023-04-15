import React from 'react';
import Image from 'next/image';
import { blogPosts } from '@/data/blog';

const BlogTemplate = ({ blogId }) => {
    const currentBlogPost = blogPosts[blogId];
  
    return (
      <div className='flex justify-center items-center w-full py-10'>
        <div className="blogContainer flex flex-col justify-center items-center px-3">
          <div className="header w-full flex flex-col">
            <h1 className='font-bold text-[42px] 2xl:scale-110 lg:my-3 my-1'>{currentBlogPost.title}</h1>
            <div className="info flex justify-between items-center 2xl:scale-110 lg:my-3 my-1">
              <p className=''>{currentBlogPost.author} | {currentBlogPost.date}</p>
              <ul className='flex gap-3 flex-wrap sm:mr-2 justify-end'>
                {currentBlogPost.tags.map(tag => (
                  <li key={tag} className='bg-blue-200 px-3 py-1 rounded-full text-[14px]'>#{tag}</li>
                ))}
              </ul>
            </div>
            <Image src={currentBlogPost.image} alt="" className='max-h-[400px] sm:rounded-2xl my-3 object-cover w-full' width={1200} height={800} />
          </div>
          <div className='max-w-5xl'>
            {currentBlogPost.content.map((paragraph, index) => (
              <React.Fragment key={index}>
                {!paragraph.image ? <p className='text-[18px] my-3 text-justify'>{paragraph.text}</p> : ''}
                {paragraph.image && (
                  <div className='flex md:flex-row flex-col gap-10 my-8 text-justify'>
                    <div className='md:w-[50%] w-full'>
                      <Image src={paragraph.image} alt="" className='w-full h-[full] object-cover mb-8 md:mb-0' width={800} height={600} />
                    </div>
                    <div className='md:w-[50%] w-full'>
                        {paragraph.text && <p className='text-[18px]'>{paragraph.text}</p>}
                    </div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    )
  }
  
  

export default BlogTemplate;