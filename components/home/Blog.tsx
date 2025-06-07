import React from "react";
import { Col, Row, Container } from "reactstrap";
import Link from "next/link";
import moment from "moment";

const Blog = ({ blogs }: any) => {
  return (
    <React.Fragment>
      <section className="section bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col lg={6}>
              <div className="section-title text-center mb-5">
                <h3 className="title mb-3">Quick Career Tips</h3>
                <p className="text-muted">
                Set clear career goals to guide your professional journey.
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            {blogs?.count === 0 ? (
              <>
                <h4
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignContent: "center",
                    padding: 50,
                  }}
                >
                  No blog found
                </h4>
              </>
            ) : (
              <>
                {blogs?.data?.slice(0, 3)?.map((data: any, index: number) => {
                  const date = moment(data?.created_at).format("ll");
                  return (
                    <Col lg={4} md={6} key={index}>
                      <div className="blog-box card p-2 mt-3">
                        <div className="blog-img position-relative overflow-hidden">
                          <img src={data?.cover} alt="" className="img-fluid" />
                          <div className="bg-overlay"></div>
                          <div className="author">
                            <p className=" mb-0">
                              <i className="mdi mdi-account text-light"></i>
                              <Link
                                href={`/blogdetails/${data?.slug}`}
                                className="text-light user"
                              >
                                {new Intl.DateTimeFormat(["id"]).format(
                                  data?.created_by
                                )}
                              </Link>
                            </p>
                            <p className="text-light mb-0 date">
                              <i className="mdi mdi-calendar-check"></i> {date}
                            </p>
                          </div>
                        </div>
                        <div className="card-body">
                          <Link
                            href={`/blogdetails/${data?.slug}`}
                            className="primary-link"
                          >
                            <h5 className="fs-17">{data?.title}</h5>
                          </Link>
                          <p className="text-muted">
                            {data?.description.slice(0, 250)}...
                          </p>
                          <Link
                            href={`/blogdetails/${data?.slug}`}
                            // className="form-text text-primary"
                            className="btn btn-primary btn-hover"
                          >
                            Read more{" "}
                            <i className="mdi mdi-chevron-right align-middle"></i>
                          </Link>
                        </div>
                      </div>
                    </Col>
                  );
                })}
              </>
            )}
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Blog;
