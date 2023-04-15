import React from 'react';

const BlogCard = (props) => {

  return (
    <div className="grid-item pb-4 group">
      <img className='grid-item-media w-full rounded-xl object-cover aspect-square pointer-events-none' src={props.url} alt="" />
      <p className="text-[38px] font-bold uppercase pointer-events-none line-clamp-1 mx-4">{props.description}</p>
      <a href={`/blog/${props.id}`} className='text-violet-200 mx-4'>
        <span className="bg-gradient-to-r from-violet-200 to-violet-200 bg-no-repeat [background-position:0_88%] group-hover:[background-size:100%_0.1em] motion-safe:transition-all motion-safe:duration-200 [background-size:100%_100%] text-violet-800 focus:[background-size:100%_100%] group-hover:text-violet-200 px-2 py-1 rounded-2xl">Read Blog Post →</span></a>
    </div>
  )
}

export default BlogCard;