import React from "react";
import { Col, Row } from "reactstrap";

const BlogTitle = ({ blogDetails }: any) => {
  return (
    <React.Fragment>
      <Row className="justify-content-center">
        <Col lg={7}>
          <div className="text-center mb-5">
            <p className="text-danger fw-semibold mb-0">
              {blogDetails?.data?.title}
            </p>
            {/* <h3>{blogDetails?.data?.description}</h3> */}
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default BlogTitle;
