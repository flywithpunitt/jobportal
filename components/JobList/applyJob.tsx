"use client";
import {
  useCretaeApplicationMutation,
  useCretaeDocumentsMutation,
  useGetDocumentsQuery,
} from "@/services/page";
import { enqueueSnackbar } from "notistack";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Card, Col, Label, Modal, ModalBody, Row } from "reactstrap";

const ApplyJob = ({ jobId, jobVac }: any) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadings, setIsLoadings] = useState(false);

  const userToken = useSelector((state: any) => state?.user?.token);
  const [createApplication] = useCretaeApplicationMutation();
  const { data } = useGetDocumentsQuery({});
  const [idResume, setIdResume] = useState<any>(null);
  const [docs, setDocs] = useState<any>();
  const [createDoc] = useCretaeDocumentsMutation();
  const [docsModal, setDocsModal] = useState<any>(false);
  const [title, setTitle] = useState<any>("");
  const docModal = () => {
    setDocsModal(!docsModal);
  };
  const onsubmit = async () => {
    setIsLoadings(true)
    if (userToken) {
      await createApplication({
        job_listing_id: jobId,
        document_id: idResume,
      })
        .unwrap()
        .then((res) => {
          setIsLoadings(false)
          jobVac();
          enqueueSnackbar(`${res?.message}`, { variant: "success" });
        })
        .catch((err) => {
          setIsLoadings(false)
          console.log(err);
          if (err?.data?.document_id) {
            enqueueSnackbar(`Please select resume.`, { variant: "error" });
          } else {
            enqueueSnackbar(`${err?.data?.message}`, { variant: "error" });
          }
        });
    } else {
      enqueueSnackbar("Please login first.", {
        variant: "error",
      });
    }
  };

  const onSubmits = async () => {
    setIsLoading(true)
    const formData = new FormData();
    formData.append("document", docs);
    formData.append("title", title);
    await createDoc(formData)
      .unwrap()
      .then((res) => {
        setIsLoading(false)
        docModal();
        setDocs(null);
        enqueueSnackbar(`${res?.message}`, { variant: "success" });
      })
      .catch((err) => {
        setIsLoading(false)
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

  return (
    <>
      <div className="text-center mb-4">
        <Row>
          <Col lg={8}>
            {" "}
            <h5 className="modal-title" id="staticBackdropLabel">
              Apply For This Job
            </h5>
          </Col>
          <Col lg={4}>
            {" "}
            <button
              type="submit"
              className="btn btn-primary w-100"
              onClick={() => {
                docModal();
              }}
            >
              Upload
            </button>
          </Col>
        </Row>
      </div>

      <div className="mb-4">
        <Label className="form-label" for="inputGroupFile01">
          Resume
        </Label>
        <select
          className="form-control"
          id="resume"
          name="resume"
          onChange={(e: any) => {
            setIdResume(e.target.value);
          }}
        >
          <option disabled selected>
            Select resume
          </option>
          {data?.data?.map((data: any, index: number) => {
            return (
              <option value={data?.id} key={index}>
                {data?.title}
              </option>
            );
          })}
        </select>
      </div>
      <button
        type="submit"
        className="btn btn-primary w-100"
        onClick={onsubmit}
      >
        {isLoadings ? "Loading..." : "Sumbit"}
      </button>

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
                Title
              </Label>
              <input
                className="form-control"
                type="text"
                id="title"
                required
                placeholder="Title"
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
                accept=".pdf,.doc,.docx"
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
                  onSubmits();
                }}
                disabled={isLoading}
              >
               {isLoading ? 'Loading...' : 'Confirm'}
              </button>
            </div>
          </Card>
        </ModalBody>
      </Modal>
    </>
  );
};

export default ApplyJob;
