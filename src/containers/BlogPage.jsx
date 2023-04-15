import React, { useEffect, useRef } from "react";
import BlogCard from "../components/BlogCard";
import "locomotive-scroll/src/locomotive-scroll.scss";
import { blogPosts } from "@/data/blog";
import TinyFooter from "@/components/TinyFooter";

const clamp = (value, min, max) =>
  value <= min ? min : value >= max ? max : value;

function BlogPage() {
  const ref = useRef(null);
  const leftColumnRef = useRef(null);
  const rightColumnRef = useRef(null);
  const middleColumnRef = useRef(null);

  useEffect(() => {
    import("locomotive-scroll").then((LocomotiveScroll) => {
      const scroll = new LocomotiveScroll.default({
        el: ref.current,
        smooth: true,
        smartphone: {
          smooth: true,
        },
        getDirection: true,
        getSpeed: true,
      });

      scroll.on("scroll", ({ scroll }) => {
        const distance = scroll.y - scroll.lastY;
        scroll.lastY = scroll.y;

        leftColumnRef.current.style.transform = `skewY(${clamp(distance, -10, 10)}deg)`;
        rightColumnRef.current.style.transform = `skewY(${clamp(distance, -10, 10)}deg)`;
        middleColumnRef.current.style.transform = `skewY(${clamp(-distance, -10, 10)}deg)`;
      });
    });
  }, []);

  const leftChunk = blogPosts?.slice(1, Math.round(blogPosts.length * 0.33) + 1);
  const middleChunk = blogPosts?.slice(Math.round(blogPosts.length * 0.33) + 1, Math.round(blogPosts.length * 0.66));
  const rightChunk = blogPosts?.slice(Math.round(blogPosts.length * 0.66), blogPosts.length);
    

  return (
    <main>
      <div className="main-container overflow-hidden pb-[22vh] relative h-full" id="main-container" ref={ref}>
        <div className="photo-header w-[100vw] h-[calc(100vh-122px)] lg:px-48 flex lg:flex-row flex-col justify-center items-center">
          <div className="lg:w-[40%] w-full">
            <img src={'https://mymodernmet.com/wp/wp-content/uploads/2021/12/kristina-makeeva-eoy-photo-1.jpeg'} alt="image" className="sm:rounded-3xl lg:max-w-[85%]" />
          </div>
          <div className="lg:w-[60%] w-full h-full flex flex-col justify-center items-start mx-8 lg:mx-0">
            <h1 className="text-[70px] font-bold">Photo &  Blocks of Text</h1>
            <p className="text-[24px] mt-16 lg:max-w-[50ch]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque optio maxime nemo illum ipsa amet saepe, numquam illo dolores, quae animi dolorum quam obcaecati adipisci minus hic eius exercitationem. Natus?</p>
          </div>
        </div>
        <div className="grid-wrap px-8 grid lg:grid-cols-3 grid-cols-2 gap-x-8 justify-center mx-auto h-full">
          <div className="left-column" ref={leftColumnRef}>
            {leftChunk.map((blogpost, index) => (
              <BlogCard key={index} url={blogpost.cover} description={blogpost.title} id={blogpost.id} index={index} />
            ))}
          </div>
          <div className="middle-column lg:flex hidden">
            <div ref={middleColumnRef}>
              {middleChunk.map((blogpost, index) => (
                <BlogCard key={index} url={blogpost.cover} description={blogpost.title} id={blogpost.id} index={index} />
              ))}
            </div>
          </div>
          <div className="right-column" ref={rightColumnRef}>
            {rightChunk.map((blogpost, index) => (
              <BlogCard key={index} url={blogpost.cover} description={blogpost.title} id={blogpost.id} index={index} />
            ))}
          </div>
        </div>
        <TinyFooter />
      </div>
    </main>
  );
}

export default BlogPage;