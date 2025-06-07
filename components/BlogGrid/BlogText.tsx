import React from "react";
import { Col, Row, Card, CardBody } from "reactstrap";
import Link from "next/link";
import moment from "moment";

const BlogText = ({ blog }: any) => {
  return (
    <React.Fragment>
      <Row>
        {blog?.count === 0 ? (
          <>  <h4 style={{display:'flex', justifyContent:'center', alignContent:'center', marginTop:300}}>No blog found</h4></>
        ) : (
          <>
            {blog?.data?.map((data: any, index: number) => {
              const date = moment(data?.created_at).format("ll");
              return (
                <Col lg={4} className="mb-4" key={index}>
                  <Card className="blog-grid-box p-2">
                    <img
                      src={data?.cover}
                      alt={data?.title}
                      className="img-fluid"
                    />
                    <CardBody>
                      <ul className="list-inline d-flex justify-content-between mb-3">
                        <li className="list-inline-item">
                          <p className="text-muted mb-0">
                            <Link
                              href={`/blogdetails/${data?.slug}`}
                              className="text-muted fw-medium"
                            >
                              {data?.created_by}
                            </Link>{" "}
                            - {date}
                          </p>
                        </li>
                      </ul>
                      <Link
                        href={`/blogdetails/${data?.slug}`}
                        className="primary-link"
                      >
                        <h6 className="fs-17">{data?.title}</h6>
                      </Link>
                      <p className="text-muted">
                        {data?.description?.slice(0, 150)}...
                      </p>
                      <div>
                        <Link
                          href={`/blogdetails/${data?.slug}`}
                          // className="form-text text-primary"
                          className="btn btn-primary btn-hover"
                        >
                          Read More <i className="uil uil-angle-right-b"></i>
                        </Link>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              );
            })}
          </>
        )}
      </Row>
    </React.Fragment>
  );
};

export default BlogText;
