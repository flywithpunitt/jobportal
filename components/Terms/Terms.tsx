'use client'
import Link from "next/link";
import React from "react";
import { Container, Row, Col } from "reactstrap";


const Terms = () => {
  const privacyandpolicyPage = [
    {
      id: 1,
      policyTitle: "Terms & Conditions",
      policyRules: [
        {
          id: 1,
          policyInnerRule: " You must provide correct and accurate information."
        },
        {
          id: 2,
          policyInnerRule: "We hold your privacy in high regard, refraining from disclosing your sensitive data to irrelevant entities."
        },
        {
          id: 3,
          policyInnerRule:
            " We gather essential details like your name, email address, phone number, and present location to aid you better."
        },
        {
          id: 4,
          policyInnerRule: "We can gather information and contact you through email, phone calls, or text messages for seamless assistance."
        }
      ]
    }
  ];
  return (
    <React.Fragment>
      <section className="section" style={{paddingTop:180, paddingBottom:300}}>
        <Container>
          
          <Row className="justify-content-center">
            {privacyandpolicyPage.map((privacyandpolicyDetails, key) => (
              <Col lg={12} key={key}>
                <h5 className="mb-4">{privacyandpolicyDetails.policyTitle}</h5>
                <ul className="about-list list-unstyled text-muted mb-4 pb-2">
                  {privacyandpolicyDetails.policyRules.map(
                    (privacyandpolicyInner, key) => (
                      <li key={key}>{privacyandpolicyInner.policyInnerRule}</li>
                    )
                  )}
                </ul>
              </Col>
            ))}
            {/* <div className="text-end">
              <Link href="#" className="btn btn-primary">
                <i className="uil uil-print"></i> Print
              </Link>
            </div> */}
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Terms;
