"use client";
import React, { useState } from "react";

import { Card, CardBody, Col, Label, Modal, ModalBody, Row } from "reactstrap";

//Import images
import profileImage from "../../../assets/images/profile.jpg";
import Link from "next/link";
import { Icon } from "@iconify/react";
import {
  useCretaeDocumentsMutation,
  useDeleteDocumentMutation,
  useGetDocumentsQuery,
} from "@/services/page";
import { enqueueSnackbar } from "notistack";

const LeftSideContent = ({ user }: any) => {

  const [isLoading, setIsLoading] = useState(false);
  const { data, isFetching } = useGetDocumentsQuery({});
  const [docs, setDocs] = useState<any>();
  const [createDoc] = useCretaeDocumentsMutation();
  const [deleteDocuments] = useDeleteDocumentMutation();
  const [docsModal, setDocsModal] = useState<any>(false);
  const [title, setTitle] = useState<any>("");
  const [deleteResume, setDeleteResume] = useState<any>();
  const docModal = () => {
    setDocsModal(!docsModal);
  };

  const [deleteResumeModel, setDeleteResumeModel] = useState<any>();
  const delResMod = () => {
    setDeleteResumeModel(!deleteResumeModel);
  };

  const onSubmit = async () => {
    setIsLoading(true);
    const formData = new FormData();
    formData.append("document", docs);
    formData.append("title", title);
    await createDoc(formData)
      .unwrap()
      .then((res) => {
        setIsLoading(false);
        docModal();
        setDocs(null);
        enqueueSnackbar(`${res?.message}`, { variant: "success" });
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
        if (err?.data?.title) {
          enqueueSnackbar(`${err?.data?.title}`, { variant: "error" });
        } else if (err?.data?.document) {
          enqueueSnackbar(`${err?.data?.document}`, { variant: "error" });
        } else {
          enqueueSnackbar("Something went wrong.", {
            variant: "error",
          });
        }
      });
      
  };

  const deleteResumeData = async () => {
    await deleteDocuments(deleteResume)
      .unwrap()
      .then((res: any) => {
        delResMod();
        enqueueSnackbar(`${res?.message}`, { variant: "success" });
      })
      .catch(() => {
        enqueueSnackbar("Something went wrong.", {
          variant: "error",
        });
      });
  };

  return (
    <React.Fragment>
      <Col lg={4}>
        <Card className="profile-sidebar me-lg-4">
          <CardBody className="p-4">
            <div className="text-center pb-4 border-bottom">
              <img
                src={user?.avatar === null ? "/profile2.png" : user?.avatar}
                alt={user?.name}
                className="avatar-lg img-thumbnail rounded-circle mb-4"
              />
              <h5 className="mb-0">{user?.name}</h5>

              {/* <ul className="list-inline d-flex justify-content-center align-items-center ">
                <li className="list-inline-item text-warning fs-19">
                  <i className="mdi mdi-star"></i>
                  <i className="mdi mdi-star"></i>
                  <i className="mdi mdi-star"></i>
                  <i className="mdi mdi-star"></i>
                  <i className="mdi mdi-star-half-full"></i>
                </li>
              </ul> */}
              <ul className="candidate-detail-social-menu list-inline mb-0 mt-4">
                {user?.behance !== null ? (
                  <>
                    <li className="list-inline-item">
                      <a
                        href={user?.behance !== null ? user?.behance : ""}
                        className="social-link rounded-3 btn-soft-primary"
                        target="_blank"
                      >
                        <i className="uil uil-behance-alt"></i>
                      </a>
                    </li>
                  </>
                ) : (
                  <></>
                )}

                {user?.github !== null ? (
                  <>
                    <li className="list-inline-item">
                      <a
                        href={user?.github !== null ? user?.github : ""}
                        className="social-link rounded-3 btn-soft-info"
                        target="_blank"
                      >
                        <i className="uil uil-github-alt"></i>
                      </a>
                    </li>
                  </>
                ) : (
                  <></>
                )}

                {user?.whatsapp !== null ? (
                  <>
                    {" "}
                    <li className="list-inline-item">
                      <a
                        href={
                          user?.whatsapp !== null
                            ? `https://wa.me/${user?.whatsapp}`
                            : ""
                        }
                        className="social-link rounded-3 btn-soft-success"
                        target="_blank"
                      >
                        <i className="uil uil-whatsapp"></i>
                      </a>
                    </li>
                  </>
                ) : (
                  <></>
                )}
                {user?.linkedin !== null ? (
                  <>
                    <li className="list-inline-item">
                      <a
                        href={user?.linkedin !== null ? user?.linkedin : ""}
                        className="social-link rounded-3 btn-soft-info"
                        target="_blank"
                      >
                        <i className="uil uil-linkedin-alt"></i>
                      </a>
                    </li>
                  </>
                ) : (
                  <></>
                )}
              </ul>
            </div>

            <div className="mt-4 border-bottom pb-4">
              <Row>
                <Col lg={6}>
                  <h5 className="fs-17 fw-bold mb-3">Resumes</h5>
                </Col>
                <Col lg={6}>
                  <button
                    type="submit"
                    className="btn btn-primary btn-hover"
                    onClick={docModal}
                  >
                    {" "}
                    Upload
                  </button>
                </Col>
              </Row>

              <ul className="profile-document list-unstyled mb-0">
                {isFetching ? (
                  <></>
                ) : (
                  <>
                    {data?.count === 0 ? (
                      <>
                        <h6
                          className="fs-16 mb-1 text-center"
                          style={{ paddingTop: 30 }}
                        >
                          No Resumes Found.
                        </h6>
                      </>
                    ) : (
                      <>
                        {data?.data?.map((data: any, index: number) => {
                          return (
                            <li key={index}>
                              <div className="profile-document-list d-flex align-items-center mt-4 ">
                                <div className="icon flex-shrink-0">
                                  <Icon
                                    icon="healthicons:x-outline"
                                    style={{ color: "red" }}
                                    className="btn-hover"
                                    onClick={() => {
                                      setDeleteResume(data?.id);
                                      delResMod();
                                    }}
                                  />
                                </div>
                                <div className="ms-3">
                                  <h6 className="fs-16 mb-0">{data?.title}</h6>
                                </div>
                                <div className="ms-auto">
                                  <Link
                                    target="blank"
                                    download
                                    className="fs-20 text-muted"
                                    href={`${data?.document}`}
                                  >
                                    <i className="uil uil-import"></i>
                                  </Link>
                                </div>
                              </div>
                            </li>
                          );
                        })}
                      </>
                    )}
                  </>
                )}
              </ul>
            </div>

            <div className="mt-4">
              <h5 className="fs-17 fw-bold mb-3">Contacts</h5>
              <div className="profile-contact">
                <ul className="list-unstyled mb-0">
                  <li>
                    <div className="d-flex">
                      <label>Email</label>
                      <div>
                        <p className="text-muted text-break mb-0">
                          {user?.email}
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex">
                      <label>Phone</label>
                      <div>
                        <p className="text-muted mb-0">{user?.phone}</p>
                      </div>
                    </div>
                  </li>
                  {user?.city !== null ? (
                    <>
                      <li>
                        <div className="d-flex">
                          <label>Location</label>
                          <div>
                            <p className="text-muted mb-0">{user?.city} </p>
                          </div>
                        </div>
                      </li>
                    </>
                  ) : (
                    <></>
                  )}
                </ul>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>

      {/* Add resume */}
      <Modal isOpen={docsModal} toggle={docsModal} role="dialog" centered>
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
            onClick={docModal}
          ></button>
        </div>
        <ModalBody>
          <Card style={{ border: "none", padding: 15 }}>
            <div className="text-center">
              <h5>Add Resume</h5>
            </div>
            <div className="mb-3">
              <Label htmlFor="attachmentscv" className="form-label">
               Job title
              </Label>
              <input
                className="form-control"
                type="text"
                id="title"
                required
                placeholder="Job title"
                onChange={(e) => {
                  setTitle(e?.target?.value);
                }}
              />
            </div>
            <div className="mb-3">
              <Label htmlFor="attachmentscv" className="form-label">
                Attachments CV
              </Label>
              <input
                className="form-control"
                type="file"
                id="attachmentscv"
                onChange={(e) => {
                  setDocs(e?.target?.files?.[0]);
                }}
              />
            </div>
            <div className="mt-3 text-center">
              <button
                type="submit"
                className="btn btn-primary btn-hover"
                onClick={() => {
                  onSubmit();
                }}
                disabled={isLoading}
              >
                 {isLoading ? 'Loading...' : 'Confirm'}
              </button>
            </div>
          </Card>
        </ModalBody>
      </Modal>

      {/* delete resume */}
      <Modal
        isOpen={deleteResumeModel}
        toggle={deleteResumeModel}
        role="dialog"
        centered
      >
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
            onClick={delResMod}
          ></button>
        </div>
        <ModalBody>
          <Card style={{ border: "none", padding: 15 }}>
            <div className="text-center">
              <h5>Are you sure to Delete Resume</h5>
            </div>
            <div className="mt-3 text-center">
              <button
                type="submit"
                className="btn btn-primary btn-hover"
                onClick={() => {
                  deleteResumeData();
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

export default LeftSideContent;
