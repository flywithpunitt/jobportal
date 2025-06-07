"use client";
import React from "react";
import { Container, Row, Col } from "reactstrap";

//Import Images
import AboutImage from "../../assets/images/about/img-01.jpg";
import Link from "next/link";
import Image from "next/image";

const About = () => {
  return (
    <React.Fragment>
      <section className="section overflow-hidden " style={{ paddingTop: 200 }}>
        <Container>
          <Row className="align-items-center g-0 ">
            <Col lg={6}>
              <div className="section-title me-lg-5">
                {/* <h6 className="sub-title">About Us</h6> */}
                <h2 className="title mb-4">
                  {/* Why People Trust On{" "} */}
                  <span className="text-primary fw-bold">About Us</span>
                </h2>
                <p className="text-muted">
                  The genesis of our journey lies in the aspirations of two
                  visionary and enthusiastic friends who were always driven by
                  the desire to revolutionize how people find employment and
                  secure their livelihoods. Their goal wasn't merely financial
                  gain but rather the accumulation of blessings earned by
                  positively impacting individuals' lives.
                </p>

                <Row mt={4} pt={2}>
                  <p className="text-muted">
                    Pooling our collective efforts, we formed a dedicated team
                    that brought forth wiztrace.com, a platform with a profound
                    mission and unbridled enthusiasm. Despite working within
                    tight constraints, we tirelessly poured energy into crafting
                    this distinctive platform. This endeavour took place against
                    the backdrop of the Covid-19 pandemic when the world
                    underwent an unprecedented change from what it had been just
                    a year prior. During this challenging period, the
                    distressing scenes of migrant workers fleeing cities due to
                    the pandemic-induced uncertainty and chaos deeply moved us.
                    In response, we began assisting those within our immediate
                    vicinity. As our commitment grew and the need to aid a
                    larger demographic became evident, the transition into a
                    formal company was a logical step. This marked the birth of
                    Wiztrace. Our vision expanded beyond addressing the
                    employment concerns of the educated; it extended to
                    providing substantial opportunities to those with limited
                    education or no formal training. And all of this without
                    imposing any financial burden on job seekers.
                  </p>
                </Row>
                {/* <div className="mt-3">
                  <Link href="#" className="btn btn-primary btn-hover">
                    Learn More{" "}
                    <i className="uil uil-angle-right-b align-middle"></i>
                  </Link>
                </div> */}
              </div>
            </Col>
            <Col lg={6}>
              <div className=" mt-lg-0">
                <Image src={AboutImage} alt="" className="img-fluid rounded" />
              </div>
            </Col>
          </Row>
          <Row class="align-items-center" style={{ paddingTop: 30 }}>
            <p className="text-muted">
              We also introduced our "Jobs on Call" service in light of these
              principles. If you&#39;re seeking employment, a simple call to us
              will initiate your registration on India&#39;s fastest- growing
              job platform. After a streamlined verification process, we align
              you with suitable job opportunities within various companies,
              taking into account your qualifications, skills, work history, and
              potential. Adding an extra layer of transparency, our unique
              &quot;Job Status&quot; window empowers you to track the progress
              of your applications, an element not offered by any other job
              portal in the country. This window allows you to monitor the
              status of your job applications, offering insights into whether
              your skillset matches the requirements for a specific role or if
              further attempts are necessary.
            </p>
          </Row>

          <Row style={{ paddingTop: 30 }}>
            <p className="text-muted">
              Trust is the ultimate asset at the core of our operation. Our
              ambition is to become India&#39;s most prominent, no-cost,
              completely validated job placement platform, serving all strata of
              society. Our success hinges on your support when we aspire to be
              the country&#39;s most dependable recruitment agency. We invite
              you to register on our platform, where you&#39;ll discover
              thousands of employment opportunities – all without a financial
              commitment.
            </p>
          </Row>
          <Row style={{ paddingTop: 30 }}>
            <p className="text-muted">
              Remember, our services are 100% free and entirely complimentary,
              requiring no financial contribution from your end as you embark on
              your job-seeking journey. The time to take action is now.
              Let&#39;s embark on a journey of wisdom and discovery together
              through Wiztrace.
            </p>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default About;
