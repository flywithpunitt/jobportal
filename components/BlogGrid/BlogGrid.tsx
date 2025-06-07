"use client";
import React from "react";
import { Container, Row, Col, Spinner } from "reactstrap";
import Section from "../../components/home/section";
import BlogText from "./BlogText";
import { useGetBlogQuery } from "@/services/page";


export default function BlogGrid() {
  const { data: blog, isLoading } = useGetBlogQuery({});


  return (
    <React.Fragment>
      {/* <Section /> */}
      {isLoading ? (
        <>
          <Spinner />
        </>
      ) : (
        <>
          <section className="section" style={{ padding: 178 }}>
            <Container>
              <Row>
                <Col lg={12} md={12}>
                  <div className="blog-post">
                    <BlogText blog={blog} />
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        </>
      )}
    </React.Fragment>
  );
}
