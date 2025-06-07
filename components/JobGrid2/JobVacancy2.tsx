"use client";
import React, { useState } from "react";
import { Card, Col, Modal, ModalBody } from "reactstrap";

import Link from "next/link";
import moment from "moment";
import { enqueueSnackbar } from "notistack";
import { useDeleteApplicationMutation } from "@/services/page";

const JobVacancy2 = ({ application }: any) => {
  const [deleteModal, setDeleteModal] = useState<any>(false);
  const delModal = () => {
    setDeleteModal(!deleteModal);
  };
  const [deleteApplicatio] = useDeleteApplicationMutation();
  const [delappId, setDelAppID] = useState<any>(null);
  const deleteExperiences = async () => {
    await deleteApplicatio(delappId)
      .unwrap()
      .then((res: any) => {
        delModal();
        enqueueSnackbar(`${res?.message}`, { variant: "success" });
      })
      .catch((error) => {
        enqueueSnackbar(`${error?.data?.message}`, { variant: "error" });
      });
  };
  return (
    <React.Fragment>
      {application?.count === 0 ? (
        <>
          <h4
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              padding: 178,
            }}
          >
            No data found
          </h4>
        </>
      ) : (
        <>
          {application?.data?.map((data: any, index: number) => {
            const date = moment(data?.created_at).format("ll");
            return (
              <Col lg={4} md={6} className="mt-4" key={index}>
                <div className={"card job-grid-box bookmark-post"}>
                  <div className="card-body p-4">
                    <span
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "space-between",
                      }}
                    >
                      <div>
                        <Link href={`/jobdetails/${data?.job_id}`}>
                          <img
                            src={data?.company_logo}
                            alt={data?.title}
                            className="img-fluid rounded-3"
                            height={50}
                            width={50}
                          />
                        </Link>
                      </div>
                      {data?.status == "withdrawn" ? (
                        <></>
                      ) : (
                        <>
                          {" "}
                          <button
                            style={{ height: 40 }}
                            className="btn btn-danger btn-hover"
                            onClick={() => {
                              setDelAppID(data?.id), delModal();
                            }}
                          >
                            Withdraw
                          </button>
                        </>
                      )}
                    </span>
                    <div className="mt-4">
                      <Link
                        href={`/jobdetails/${data?.job_id}`}
                        className="primary-link"
                      >
                        <h5 className="fs-17 mb-1">{data?.title}</h5>
                      </Link>
                      <p className="text-muted">{data?.name}</p>
                      <ul className="list-inline">
                        <li className="list-inline-item">
                          <span className="badge bg-blue-subtle text-blue fs-13 mt-1">
                            {new Intl.NumberFormat("en-IN", {
                              style: "currency",
                              currency: "INR",
                            }).format(data?.salary_range_min ?? 0)}{" "}
                            to{" "}
                            {new Intl.NumberFormat("en-IN", {
                              style: "currency",
                              currency: "INR",
                            }).format(data?.salary_range_max ?? 0)}{" "}
                          </span>
                        </li>
                        <li className="list-inline-item">
                          <span className="badge bg-primary-subtle text-primary fs-13 mt-1">
                            {data?.experience}
                          </span>
                        </li>
                        <li className="list-inline-item">
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
                                : ""
                            }
                          >
                            {data?.job_type}
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="job-grid-content mt-3">
                      <p className="text-muted">Interview: {data?.interview_type}</p>
                      <p className="text-muted">Location: {data?.location}</p>
                      <p className="text-muted">
                        Requirements: {data?.requirements}
                      </p>
                      <div className="d-flex align-items-center justify-content-between mt-4 border-top pt-3">
                        <p className="text-muted float-start mb-0">{date}</p>

                        <div className="text-end">
                          <span
                            className={
                              data?.status === "shortlisted"
                                ? "badge bg-success-subtle text-success fs-13 mt-1 mx-1"
                                : data?.status === "interview_schedule"
                                ? "badge bg-success-subtle text-success fs-13 mt-1 mx-1"
                                : data?.status === "withdrawn"
                                ? "badge bg-danger-subtle text-danger fs-13 mt-1 mx-1"
                                : data?.status === "rejected"
                                ? "badge bg-danger-subtle text-danger fs-13 mt-1 mx-1"
                                : data?.status === "submitted"
                                ? "badge bg-primary-subtle text-primary fs-13 mt-1 mx-1"
                                : data?.status === "approved"
                                ? "badge bg-blue-subtle text-primary  fs-13 mt-1"
                                : "badge bg-primary-subtle text-primary fs-13 mt-1 mx-1"
                            }
                          >
                            {data?.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            );
          })}
        </>
      )}

      <Modal isOpen={deleteModal} toggle={deleteModal} role="dialog" centered>
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
            onClick={delModal}
          ></button>
        </div>
        <ModalBody>
          <Card style={{ border: "none", padding: 15 }}>
            <div className="text-center">
              <h5>Are you sure to withdraw application.</h5>
            </div>
            <div className="mt-3 text-center">
              <button
                type="submit"
                className="btn btn-primary btn-hover"
                onClick={() => {
                  deleteExperiences();
                }}
              >
                Confirm
              </button>
            </div>
          </Card>
        </ModalBody>
      </Modal>
    </React.Fragment>
  );
};

export default JobVacancy2;
