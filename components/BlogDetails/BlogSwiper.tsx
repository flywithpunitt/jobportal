import React from "react";

const BlogSwiper = ({ blogDetails }: any) => {
  return (
    <React.Fragment>
      <div className="swiper-wrapper">
        <img
          src={blogDetails?.data?.cover}
          alt={blogDetails?.data?.title}
          className="img-fluid rounded-3"
        />
      </div>
    </React.Fragment>
  );
};

export default BlogSwiper;
