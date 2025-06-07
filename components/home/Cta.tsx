import React from "react";
import { Col, Row, Container } from "reactstrap";
import Link from "next/link";
import CountUp from "react-countup";

const Cta = ({count}: {count: number}) => {
 

  return (
    <React.Fragment>
      <section className="section bg-light">
        <Container className="container">
          <Row className="justify-content-center">
            <Col lg={7}>
              <div className="text-center">
                <span > 
                <h2 className="text-primary mb-4">
                  Browse Our{" "}
                  <span className="text-warning fw-bold">
                    <CountUp end={count} duration={5}></CountUp>
                    {"+"}
                  </span>
                  Latest Jobs
                </h2>
                </span>
                <p className="text-muted">
                We fulfill your requirements.
                </p>
                <div className="mt-4 pt-2">
                  <Link href="/job" className="btn btn-primary btn-hover">
                    Started Now{" "}
                    <i className="uil uil-rocket align-middle ms-1"></i>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Cta;
