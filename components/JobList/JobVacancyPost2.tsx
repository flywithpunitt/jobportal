"use client";
import React, { useState } from "react";
import { Col, Row, Modal, ModalBody } from "reactstrap";
import Link from "next/link";
import ApplyJob from "./applyJob";
import { useGetApplicationQuery } from "@/services/page";
import { useSelector } from "react-redux";
import { enqueueSnackbar } from "notistack";
import SignIn from "../Auths/signin";
import SignUp from "../Auths/signup";

  const JobVacancyPost2 = ({ jobData }: any) => {
  const userToken = useSelector((state: any) => state?.user?.token);
  const { data, isFetching } = useGetApplicationQuery({
    skip: !userToken,
  });
  const [signinModal, setSigninModal] = useState(false);
  const loginModal = () => {
    setSigninModal(!signinModal);
    setRegisterModal(false);
  };
  const [registerModal, setRegisterModal] = useState(false);
  const signupModal = () => {
    setRegisterModal(!registerModal), setSigninModal(false);
  };
  const [customerNum, setCustomerNum] = useState<any>();
  const loginModelCall = () => {
    signupModal();
  };
  const loginNum = (data: any) => {
    setCustomerNum(data);
  };

  //Apply Now Model
  const [modal, setModal] = useState(false);
  const openModal = () => setModal(!modal);
  const [jobId, setJobId] = useState<any>(null);
  // console.log(data);

  const handleCheckToken = (id: any) => {
    if (userToken) {
      openModal(), setJobId(id);
    } else {
      enqueueSnackbar("Please login first.", {
        variant: "error",
      });
      loginModal();
    }
  };

  const isWishlisted = (id: string) => {
    const isWished = data?.data?.findIndex((prod: { id: string }) => {
      return Number(prod.id) === Number(id);
    });
    return isWished !== -1;
  };

  return (
    <React.Fragment>
      {jobData?.count === 0 ? (
        <>
          <h4
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              marginTop: 300,
            }}
          >
            No data found
          </h4>
        </>
      ) : (
        <>
          {jobData?.data?.map((data: any, index: number) => {
            return (
              <div key={index} className={"job-box card mt-4"}>
                <div className="p-4">
                  <Row>
                    <Col lg={1}>
                      <Link href={`/jobdetails/${data?.id}`}>
                        <img
                          src={data?.logo}
                          alt={data?.title}
                          height={50}
                          width={50}
                          className="img-fluid rounded-3"
                        />
                      </Link>
                    </Col>
                    <Link href={`/jobdetails/${data?.id}`}>
                      <Col lg={10}>
                        <div className="mt-3 mt-lg-0">
                          <h5 className="fs-17 mb-1">
                            <Link
                              href={`/jobdetails/${data?.id}`}
                              className="text-dark"
                            >
                              {data?.title}
                            </Link>{" "}
                            <small className="text-muted fw-normal">
                              ({data?.experience})
                            </small>
                          </h5>
                          <ul className="list-inline mb-0">
                            <li className="list-inline-item">
                              <p className="text-muted fs-14 mb-0">
                                {data?.name}
                              </p>
                            </li>
                            <li className="list-inline-item">
                              <p className="text-muted fs-14 mb-0">
                                <i className="mdi mdi-map-marker"></i>
                                {data?.location}
                              </p>
                            </li>
                            <li className="list-inline-item">
                              <p className="text-muted fs-14 mb-0">
                                <i className="uil uil-wallet"></i>{" "}
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
                            </li>
                          </ul>
                          <div className="mt-2">
                            <span
                              className={
                                data?.job_type === "full-time"
                                  ? "badge bg-success-subtle text-success fs-13 mt-1 mx-1"
                                  : data?.job_type === "part-time"
                                  ? "badge bg-danger-subtle text-danger fs-13 mt-1 mx-1"
                                  : data?.job_type === "freelance"
                                  ? "badge bg-primary-subtle text-primary fs-13 mt-1 mx-1"
                                  : data?.job_type === "internship"
                                  ? "badge bg-blue-subtle text-blue fs-13 mt-1"
                                  : data?.job_type === "contract"
                                  ? "badge bg-pink-subtle text-pink fs-13 mt-1"
                                  : ""
                              }
                            >
                              {data?.job_type}
                            </span>
                          </div>
                        </div>
                      </Col>
                    </Link>
                  </Row>
                  {/* {userToken ? (
                    <>
                      {isWishlisted(data?.id) ? (
                        <>
                          <div className="favorite-icon">
                            <Link href={`/jobdetails/${data?.id}`}>
                              <>
                                <img
                                  src="/heart.svg"
                                  height={20}
                                  width={20}
                                ></img>
                              </>
                            </Link>
                          </div>
                        </>
                      ) : (
                        <>
                          <Icon icon="mdi:heart-outline" />
                        </>
                      )}
                    </>
                  ) : (
                    <></>
                  )} */}
                </div>

                <div className="p-3 bg-light">
                  <div className="row justify-content-between">
                    <Col md={8}>
                      <Link href={`/jobdetails/${data?.id}`}>
                        <div>
                          <ul className="list-inline mb-0">
                            <li className="list-inline-item">
                              <i className="uil uil-tag"></i> Requirements :
                            </li>
                            <li className="list-inline-item">
                              <Link href="" className="primary-link text-muted">
                                {data?.requirements}
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </Link>
                    </Col>
                    {userToken ? (
                      <>
                        {isWishlisted(data?.id) ? (
                          <>
                            <Col md={3}>
                              <div className="text-md-end">
                                <button className="btn btn-primary btn-hover" disabled>
                                  <i className="uil uil-check"></i> Applied
                                </button>
                              </div>
                            </Col>
                          </>
                        ) : (
                          <>
                            <Col md={3}>
                            <div className="text-md-end">
                                  <Link
                                    href=""
                                    onClick={() => {
                                      handleCheckToken(data?.id);
                                    }}
                                    className="btn btn-primary btn-hover"
                                  >
                                    Apply Now <i className="mdi mdi-chevron-double-right"></i>
                                  </Link>
                              </div>
                            </Col>
                          </>
                        )}
                      </>
                    ) : (
                      <>
                        <Col md={3}>
                          <div className="text-md-end">
                            <Link
                              href=""
                              onClick={() => {
                                handleCheckToken(data?.id);
                              }}
                              // className="primary-link"
                              className="btn btn-primary btn-hover"
                            >
                              Apply Now{" "}
                              <i className="mdi mdi-chevron-double-right"></i>
                            </Link>
                          </div>
                        </Col>
                      </>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </>
      )}

      <div
        className="modal fade"
        id="applyNow"
        tabIndex={Number("-1")}
        aria-labelledby="applyNow"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <Modal isOpen={modal} toggle={openModal} centered>
            <div
              style={{
                display: "flex",
                justifyContent: "right",
                alignItems: "right",
                paddingRight: 20,
                paddingTop: 20,
              }}
            >
              <button
                type="button"
                className="btn-close"
                onClick={openModal}
              ></button>
            </div>
            <ModalBody className="modal-body p-5">
              <ApplyJob jobId={jobId} jobVac={openModal} />
            </ModalBody>
          </Modal>

          {/* Login model */}
          <Modal
            isOpen={signinModal}
            toggle={loginModal}
            role="dialog"
            centered
          >
              <div style={{ border: '3px solid #9677ea',  margin: 5, borderRadius:10 }}>
            <div
              style={{
                display: "flex",
                justifyContent: "right",
                alignItems: "right",
                paddingRight: 20,
                paddingTop: 20,
              }}
            >
              <button
                type="button"
                className="btn-close"
                onClick={loginModal}
              ></button>
            </div>
            <ModalBody>
              <SignIn signInModel={setSigninModal} funProps={loginModelCall}
            numProps={loginNum}/>
            </ModalBody>
            <div className="text-center">
              <p className="mb-5">
                Don't have an account ?{" "}
                <Link
                  href=""
                  className="fw-medium  text-decoration-underline"
                  onClick={signupModal}
                >
                  {" "}
                  Sign Up{" "}
                </Link>
              </p>
            </div>
            </div>
          </Modal>

          {/* Register model */}
          <Modal
            isOpen={registerModal}
            toggle={signupModal}
            role="dialog"
            centered
          >
              <div style={{ border: '3px solid #9677ea',  margin: 5, borderRadius:10 }}>
            <div
              style={{
                display: "flex",
                justifyContent: "right",
                alignItems: "right",
                paddingRight: 20,
                paddingTop: 20,
              }}
            >
              <button
                type="button"
                className="btn-close"
                onClick={signupModal}
              ></button>
            </div>
            <ModalBody>
              <SignUp signupModel={signupModal}  customerNum={customerNum}/>
            </ModalBody>
            <div className="text-center">
              <p className="mt-2">
                Already a member ?{" "}
                <Link
                  href=""
                  className="fw-medium text-decoration-underline"
                  onClick={loginModal}
                >
                  {" "}
                  Sign In{" "}
                </Link>
              </p>
            </div>
            </div>
          </Modal>
        </div>
      </div>
    </React.Fragment>
  );
};

export default JobVacancyPost2;
