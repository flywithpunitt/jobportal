"use client";
import React, { useEffect } from "react";
import { Container, Col, Row } from "reactstrap";
import Section from "./Section";
import BlogTitle from "../BlogDetails/BlogTitle";
import BlogSwiper from "./BlogSwiper";
import BlogColumn from "./BlogColumn";
import { usePathname } from "next/navigation";
import { useLazyGetBlogBySlugQuery } from "@/services/page";

const BlogDetails = () => {
  const [blogBySlug, data, isFetching] = useLazyGetBlogBySlugQuery();
  const path = usePathname();
  const paths = path.split("/")[2];

  useEffect(() => {
    blogBySlug(paths);
  }, [paths]);

  return (
    <React.Fragment>
      {/* <Section /> */}
     
      <section className="section" style={{paddingTop:180}}>
        <Container>
          <BlogTitle  blogDetails={data}/>
          <Row>
            <Col lg={12}>
              <div className="blog-post">
                <BlogSwiper  blogDetails={data}/>
                <BlogColumn  blogDetails={data}/>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default BlogDetails;
