"use client";
import React, { useState } from "react";
import { Modal, ModalBody, Card, CardBody } from "reactstrap";
import Link from "next/link";
import ApplyJob from "../JobList/applyJob";
import { useSelector } from "react-redux";
import SignIn from "../Auths/signin";
import { enqueueSnackbar } from "notistack";
import { useGetApplicationQuery } from "@/services/page";
import SignUp from "../Auths/signup";
import moment from "moment";

const RightSideContent = ({ data }: any) => {
  //Apply Now Model
  const [modal, setModal] = useState(false);
  const openModal = () => setModal(!modal);
  const userToken = useSelector((state: any) => state?.user?.token);
  const { data: application, isFetching } = useGetApplicationQuery({
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
  const handleCheckToken = (id: any) => {
    if (userToken) {
      openModal();
    } else {
      enqueueSnackbar("Please login first.", {
        variant: "error",
      });
      loginModal();
    }
  };
  const isWishlisted = (id: string) => {
    const isWished = application?.data?.findIndex((prod: { id: string }) => {
      return Number(prod.id) === Number(id);
    });
    return isWished !== -1;
  };
  const date = moment(data?.created_at).format("ll");
  return (
    <React.Fragment>
      <div className="side-bar ms-lg-4">
        <Card className="job-overview">
          <CardBody className="p-4">
            <h6 className="fs-17">Job Overview</h6>
            <ul className="list-unstyled mt-4 mb-0">
              <li>
                <div className="d-flex mt-4">
                  <i className="uil uil-user icon bg-primary-subtle text-primary"></i>
                  <div className="ms-3">
                    <h6 className="fs-14 mb-2">Job Title</h6>
                    <p className="text-muted mb-0">{data?.title}</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="d-flex mt-4">
                  <i className="uil uil-user icon bg-primary-subtle text-primary"></i>
                  <div className="ms-3">
                    <h6 className="fs-14 mb-2">Number Of Post</h6>
                    <p className="text-muted mb-0">{data?.number_of_post}</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="d-flex mt-4">
                  <i className="uil uil-location-point icon bg-primary-subtle text-primary"></i>
                  <div className="ms-3">
                    <h6 className="fs-14 mb-2">Interview At</h6>
                    <p className="text-muted mb-0">{data?.interview_type} + {data?.venue}</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="d-flex mt-4">
                  <i className="uil uil-location-point icon bg-primary-subtle text-primary"></i>
                  <div className="ms-3">
                    <h6 className="fs-14 mb-2">Gender</h6>
                    <p className="text-muted mb-0">{data?.gender || 'Both'}</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="d-flex mt-4">
                  <i className="uil uil-thumbs-up icon bg-primary-subtle text-primary"></i>
                  <div className="ms-3">
                    <h6 className="fs-14 mb-2">Age</h6>
                    <p className="text-muted mb-0"> {data?.age}</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="d-flex mt-4">
                  <i className="uil uil-location-point icon bg-primary-subtle text-primary"></i>
                  <div className="ms-3">
                    <h6 className="fs-14 mb-2">Location</h6>
                    <p className="text-muted mb-0"> {data?.location}</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="d-flex mt-4">
                  <i className="uil uil-building icon bg-primary-subtle text-primary"></i>
                  <div className="ms-3">
                    <h6 className="fs-14 mb-2">Industry</h6>
                    <p className="text-muted mb-0">{data?.industry}</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="d-flex mt-4">
                  <i className="uil uil-usd-circle icon bg-primary-subtle text-primary"></i>
                  <div className="ms-3">
                    <h6 className="fs-14 mb-2">Offered Salary</h6>
                    <p className="text-muted mb-0">
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
                </div>
              </li>
              <li>
                <div className="d-flex mt-4">
                  <i className="uil uil-history icon bg-primary-subtle text-primary"></i>
                  <div className="ms-3">
                    <h6 className="fs-14 mb-2">Date Posted</h6>
                    <p className="text-muted mb-0">{date}</p>
                   
                  </div>
                </div>
              </li>
            </ul>

            {userToken ? (
              <>
                {isWishlisted(data?.id) ? (
                  <>
                    <div className="mt-3">
                      <div className="text-md-end">
                        <button className="btn btn-primary btn-hover btn-hover w-100 mt-2" disabled>
                          Applied <i className="uil uil-check"></i>
                        </button>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="mt-3">
                      <Link
                        href=""
                        onClick={() => {
                          handleCheckToken(data?.id);
                        }}
                        className="btn btn-primary btn-hover w-100 mt-2"
                      >
                        Apply Now <i className="uil uil-arrow-right"></i>
                      </Link>
                    </div>
                  </>
                )}
              </>
            ) : (
              <>
                <div className="mt-3">
                  <Link
                    href=""
                    onClick={() => {
                      handleCheckToken(data?.id);
                    }}
                    className="btn btn-primary btn-hover w-100 mt-2"
                  >
                    Apply Now <i className="uil uil-arrow-right"></i>
                  </Link>
                </div>
              </>
            )}
          </CardBody>
        </Card>

        <Card className="company-profile mt-4">
          <CardBody className="p-4">
            <div className="text-center">
              <img
                src={data?.logo}
                alt={data?.name}
                height={50}
                width={50}
                className="img-fluid rounded-3"
              />

              <div className="mt-4">
                <h6 className="fs-17 mb-1">{data?.name}</h6>
              </div>
            </div>
            <ul className="list-unstyled mt-4">
              {/* <li>
                <div className="d-flex">
                  <i className="uil uil-phone-volume text-primary fs-4"></i>
                  <div className="ms-3">
                    <h6 className="fs-14 mb-2">Phone</h6>
                    <p className="text-muted fs-14 mb-0">+589 560 56555</p>
                  </div>
                </div>
              </li>
              <li className="mt-3">
                <div className="d-flex">
                  <i className="uil uil-envelope text-primary fs-4"></i>
                  <div className="ms-3">
                    <h6 className="fs-14 mb-2">Email</h6>
                    <p className="text-muted fs-14 mb-0">
                      pixltechnology@info.com
                    </p>
                  </div>
                </div>
              </li> */}
              <li className="mt-3">
                <div className="d-flex">
                  <i className="uil uil-globe text-primary fs-4"></i>
                  <div className="ms-3">
                    <h6 className="fs-14 mb-2">Website</h6>
                    <Link
                      href={`${data?.website}`}
                      target="blank"
                      className="primary-link text-muted fs-14 text-break mb-0"
                    >
                      {/* <p className="text-muted fs-14 text-break mb-0"> */}
                      {data?.website}
                      {/* </p> */}
                    </Link>
                  </div>
                </div>
              </li>
              <li className="mt-3">
                <div className="d-flex">
                  <i className="mdi mdi-account text-primary fs-4"></i>
                  <div className="ms-3">
                    <h6 className="fs-14 mb-2">Company size</h6>
                    <p className="text-muted fs-14 mb-0">{data?.size}</p>
                  </div>
                </div>
              </li>
              <li className="mt-3">
                <div className="d-flex">
                  <i className="uil uil-map-marker text-primary fs-4"></i>
                  <div className="ms-3">
                    <h6 className="fs-14 mb-2">Location</h6>
                    <p className="text-muted fs-14 mb-0">{data?.location}</p>
                  </div>
                </div>
              </li>
            </ul>
            {/* <div className="mt-4">
              <Link
                href="/companydetails"
                className="btn btn-primary btn-hover w-100 rounded"
              >
                <i className="mdi mdi-eye"></i> View Profile
              </Link>
            </div> */}
          </CardBody>
        </Card>

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
                <ApplyJob jobId={data?.id} jobVac={openModal} />
              </ModalBody>
            </Modal>
          </div>
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
          <SignIn
            signInModel={setSigninModal}
            funProps={loginModelCall}
            numProps={loginNum}
          />
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
      <Modal isOpen={registerModal} toggle={signupModal} role="dialog" centered>
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

export default RightSideContent;
