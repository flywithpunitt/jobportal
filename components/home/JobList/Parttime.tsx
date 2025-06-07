import React, { useState } from "react";
import { Col, Row, Modal, ModalBody, Input, Label } from "reactstrap";
import Link from "next/link";
import ApplyJob from "@/components/JobList/applyJob";
import { useSelector } from "react-redux";
import { enqueueSnackbar } from "notistack";
import SignIn from "@/components/Auths/signin";
import { useGetApplicationQuery } from "@/services/page";
import SignUp from "@/components/Auths/signup";

const Parttime = ({ partTimes }: any) => {
  //Apply Now Model
  const userToken = useSelector((state: any) => state?.user?.token);
  const { data, isFetching } = useGetApplicationQuery({ skip: !userToken,});
  const [modal, setModal] = useState(false);
  const openModal = () => setModal(!modal);
  const [jobId, setJobId] = useState<any>(null);
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
      {partTimes?.count === 0 ? (
        <>
          <h4
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              marginTop: 100,
            }}
          >
            No data found
          </h4>
        </>
      ) : (
        <>
          {partTimes?.data?.map(
            (data: any, index: number) => (
              console.log(data),
              (
                <div key={index} className={"job-box bookmark-post card mt-4"}>
                  <div className="bookmark-label text-center">
                    <Link href="" className="text-white align-middle">
                      <i className="mdi mdi-star"></i>
                    </Link>
                  </div>
                  <div className="p-4">
                    <Row className="align-items-center">
                      <Col md={2}>
                        <div className="text-center mb-4 mb-md-0">
                          <Link href={`/jobdetails/${data?.id}`}>
                            <img
                              height="50"
                              width="50"
                              src={data?.logo}
                              alt={data?.title}
                              className="img-fluid rounded-3"
                            />
                          </Link>
                        </div>
                      </Col>

                      <Col md={3}>
                        <div className="mb-2 mb-md-0">
                          <h5 className="fs-18 mb-1">
                            <Link
                              href={`/jobdetails/${data?.id}`}
                              className="text-dark"
                            >
                              {data?.title}
                            </Link>
                          </h5>
                          <p className="text-muted fs-14 mb-0">{data?.name}</p>
                        </div>
                      </Col>

                      <Col md={3}>
                        <div className="d-flex mb-2">
                          <div className="flex-shrink-0">
                            <i className="mdi mdi-map-marker text-primary me-1"></i>
                          </div>
                          <p className="text-muted mb-0">{data?.location}</p>
                        </div>
                      </Col>

                      <Col md={2}>
                        <div>
                          <p className="text-muted mb-2">
                            {new Intl.NumberFormat("en-IN", {
                              style: "currency",
                              currency: "INR",
                            }).format(data?.salary_range_min ?? 0)}{" "}
                            -{" "}
                            {new Intl.NumberFormat("en-IN", {
                              style: "currency",
                              currency: "INR",
                            }).format(data?.salary_range_max ?? 0)}{" "}
                          </p>
                        </div>
                      </Col>

                      <Col md={2}>
                        <div>
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
                      </Col>
                    </Row>
                  </div>
                  <div className="p-3 bg-light">
                    <Row>
                      <Col md={4}>
                        <div>
                          <p className="text-muted mb-0">
                            <span className="text-dark">Experience :</span>{" "}
                            {data?.experience}
                          </p>
                        </div>
                      </Col>

                      <Col lg={6} md={5}>
                        {}
                        <div>
                          <p className="text-muted mb-0">
                            <span className="text-dark">Requirements :</span>
                            {data?.requirements}{" "}
                          </p>
                        </div>
                      </Col>

                      {userToken ? (
                        <>
                          {isWishlisted(data?.id) ? (
                            <></>
                          ) : (
                            <>
                              <Col lg={2} md={3}>
                                <div className="text-start text-md-end">
                                  <Link
                                    href=""
                                    onClick={() => {
                                      handleCheckToken(data?.id);
                                    }}
                                    data-bs-toggle="modal"
                                    className="btn btn-primary btn-hover"
                                  >
                                    Apply Now{" "}
                                    <i className="mdi mdi-chevron-double-right"></i>
                                  </Link>
                                </div>
                              </Col>
                            </>
                          )}
                        </>
                      ) : (
                        <>
                          <Col lg={2} md={3}>
                            <div className="text-start text-md-end">
                              <Link
                                href=""
                                onClick={() => {
                                  handleCheckToken(data?.id);
                                }}
                                data-bs-toggle="modal"
                                className="btn btn-primary btn-hover"
                              >
                                Apply Now{" "}
                                <i className="mdi mdi-chevron-double-right"></i>
                              </Link>
                            </div>
                          </Col>
                        </>
                      )}
                    </Row>
                  </div>
                </div>
              )
            )
          )}
        </>
      )}
      {partTimes?.count === 0 ? (
        <></>
      ) : (
        <>
          <div className="text-center mt-4 pt-2">
            <Link href="/job" className="btn btn-primary">
              View More <i className="uil uil-arrow-right"></i>
            </Link>
          </div>
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
        </div>
      </div>

      {/* Login model */}
      <Modal isOpen={signinModal} toggle={loginModal} role="dialog" centered>
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
          <SignIn signInModel={setSigninModal}  funProps={loginModelCall}
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
              <SignUp signupModel={signupModal} customerNum={customerNum} />
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
    </React.Fragment>
  );
};

export default Parttime;
