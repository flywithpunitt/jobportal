"use client";
import React from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  WhatsappShareButton,
} from "react-share";
//Import Images
import JobDetailImage from "../../assets/images/wearehiring.jpeg";
import Image from "next/image";

const JobDetailsDescription = ({ data }: any) => {
 
  
  return (
    <React.Fragment>
      <Card className="job-detail overflow-hidden">
        <div>
          <Image src={JobDetailImage} alt="" className="img-fluid" />
          <h1 className="img-fluid mb-5 text-center" style={{color:'#2396e5'}}>FOR <strong>{data?.name}</strong></h1>
          <div className="job-details-compnay-profile">
            <img
              src={data?.logo}
              alt=""
              height={50}
              width={50}
              className="img-fluid rounded-3 rounded-3"
            />
          </div>
        </div>
        <CardBody className="p-4">
          <div>
            <Row>
              <Col md={8}>
                <h5 className="mb-1">{data?.title}</h5>
                <ul className="list-inline text-muted mb-0">
                  <li className="list-inline-item">
                    <i className="mdi mdi-account"></i> Views : {data?.view}
                  </li>
                </ul>
              </Col>
              {/* <Col lg={4}>
                <ul className="list-inline mb-0 text-lg-end mt-3 mt-lg-0">
                  <li className="list-inline-item">
                    <div className="favorite-icon">
                      <Link href="#">
                        <i className="uil uil-heart-alt"></i>
                      </Link>
                    </div>
                  </li>
                  <li className="list-inline-item">
                    <div className="favorite-icon">
                      <Link href="#">
                        <i className="uil uil-setting"></i>
                      </Link>
                    </div>
                  </li>
                </ul>
              </Col> */}
            </Row>
          </div>

          <div className="mt-4">
            <Row className="g-2">
              <Col lg={3}>
                <div className="border rounded-start p-3">
                  <p className="text-muted mb-0 fs-13">Experience</p>
                  <p className="fw-medium fs-15 mb-0">{data?.experience}</p>
                </div>
              </Col>
              <Col lg={3}>
                <div className="border p-3">
                  <p className="text-muted fs-13 mb-0">Employee type</p>
                  <p className="fw-medium mb-0">{data?.job_type}</p>
                </div>
              </Col>

              <Col lg={6}>
                <div className="border rounded-end p-3">
                  <p className="text-muted fs-13 mb-0">Offer Salary</p>
                  <p className="fw-medium mb-0">
                    {" "}
                    {new Intl.NumberFormat("en-IN", {
                      style: "currency",
                      currency: "INR",
                    }).format(data?.salary_range_min ?? 0)}{" "}
                    to{" "}
                    {new Intl.NumberFormat("en-IN", {
                      style: "currency",
                      currency: "INR",
                    }).format(data?.salary_range_max ?? 0)}{" "}
                    /month
                  </p>
                </div>
              </Col>
            </Row>
          </div>

          <div className="mt-4 shadow-lg p-2 mb-5 bg-body rounded">
            <div className="job-detail-desc">
              <div
                dangerouslySetInnerHTML={{ __html: data?.description }}
              ></div>
            </div>
          </div>

          <div className="mt-4">
            <h5 className="mb-3">Requirements :</h5>
            <div className="job-details-desc">
              <div className="mt-4 d-flex flex-wrap align-items-start gap-1">
                <span className="badge bg-primary ">{data?.requirements}</span>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3">
            <ul className="list-inline mb-0">
              <li className="list-inline-item mt-1">Share this job:</li>
              <li className="list-inline-item mt-1">
                <a className="btn btn-primary btn-hover">
                  <FacebookShareButton
                    url={window.location.href}
                    children={<i className="uil uil-facebook-f"></i>}
                  />
                </a>
              </li>
              <li className="list-inline-item mt-1">
                <a className="btn btn-primary btn-hover">
                  <LinkedinShareButton
                    url={window.location.href}
                    children={<i className="uil uil-linkedin-alt"></i>}
                  />
                </a>
              </li>
              <li className="list-inline-item mt-1">
                <a className="btn btn-primary btn-hover">
                  <TelegramShareButton
                    url={window.location.href}
                    children={<i className="uil uil-telegram-alt"></i>}
                  />
                </a>
              </li>
              <li className="list-inline-item mt-1">
                <a className="btn btn-primary btn-hover">
                  <WhatsappShareButton
                    url={window.location.href}
                    children={<i className="uil uil-whatsapp-alt"></i>}
                  />
                </a>
              </li>
            </ul>
          </div>
        </CardBody>
      </Card>
    </React.Fragment>
  );
};

export default JobDetailsDescription;
