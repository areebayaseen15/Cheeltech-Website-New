"use client";

import { useEffect } from "react";
import BlogListBreadCrumb from "@/components/breadcurmb/BlogListBreadCrumb";
import BlogListItem from "@/components/blog/subComponents/BlogListItem";
import { useCursorAndBackground } from "@/hooks/useCursorAndBackground";
import BlogListPagination from "@/components/blog/BlogListPagination";
import BackToTop from "@/components/shared/BackToTop/BackToTop";
import { fadeAnimation } from "@/hooks/useGsapAnimation";
import useScrollSmooth from "@/hooks/useScrollSmooth";
import blogData from "@/data/blogData";
import ITSolutionFooter from "@/layouts/footers/ITSolutionFooter";
import ITSolutionHeader from "@/layouts/headers/ITSolutionHeader";

const BlogListMain = () => {
  useCursorAndBackground();
  useScrollSmooth();

  useEffect(() => {
    const timer = setTimeout(() => {
      fadeAnimation();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div id="magic-cursor" className="cursor-white-bg">
        <div id="ball"></div>
      </div>

      <BackToTop />
      <ITSolutionHeader />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <BlogListBreadCrumb />

            <div id="down" className="tp-blog-list-ptb pb-80">
              <div className="container container-1230">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="tp-blog-list-item-wrap pb-10">
                      {blogData.slice(25, 29).map((blog) => (
                        <BlogListItem key={blog.id} blog={blog} />
                      ))}
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="basic-pagination-wrap">
                      <div className="row">
                        <div className="col-xl-6">
                          <BlogListPagination />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>

          <ITSolutionFooter />
        </div>
      </div>
    </>
  );
};

export default BlogListMain;
