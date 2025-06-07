"use client";
import React, { use, useEffect, useState } from "react";
import {
  Col,
  Row,
  Nav,
  NavLink,
  TabContent,
  TabPane,
  Card,
  NavItem,
  CardBody,
  Label,
} from "reactstrap";
import { Icon } from "@iconify/react";
import classnames from "classnames";
import { Modal, ModalBody } from "reactstrap";
import userImage1 from "../../../assets/images/profile2.png";
import * as Yup from "yup";
import { set, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  useCreateProfileMutation,
  useCretaeEducationMutation,
  useDeleteEducationMutation,
  useGetCustomerSkillsMutation,
  useGetEducationQuery,
} from "@/services/page";
import {
  useDeleteSkillsMutation,
  useGetSkillsQuery,
} from "@/services/skills/page";
import { enqueueSnackbar } from "notistack";
import { Spinner } from "react-bootstrap";
import Experience from "./experience";
import {
  useDeleteExperienceMutation,
  useGetExperienceQuery,
} from "@/services/experience/page";

const RightSideContent = ({ user }: any) => {
  const [isLoading, setIsLoading] = useState(false)
  const [country, setCountry] = useState<any>(null);
  const [line1, setLine1] = useState<any>(null);
  const [city, setCity] = useState<any>(null);
  const [state, setState] = useState<any>(null);
  const [pincode, setPincode] = useState<any>(null);
  const [linkedin, setLinkedin] = useState<any>(null);
  const [github, setGithub] = useState<any>(null);
  const [behance, setBehance] = useState<any>(null);
  const [whatsapp, setWhatsapp] = useState<any>(null);
  const [gender, setGender] = useState<any>(null);
  const [dob, setDob] = useState<any>(null);
  const [bio, setBio] = useState<any>(null);
  const [checked, setChecked] = useState(false);
  const [activeTab, setActiveTab] = useState("1");
  const [createSkill] = useGetCustomerSkillsMutation();
  const { data, isFetching } = useGetSkillsQuery({});
  const [createSkills, setCreateSkill] = useState<any>();
  const [deleteSkills] = useDeleteSkillsMutation();
  const [createEducation] = useCretaeEducationMutation();
  const { data: education, isFetching: eddFetching } = useGetEducationQuery({});
  const [deleteEducations] = useDeleteEducationMutation();
  const [createProfile] = useCreateProfileMutation();
  const { data: experience, isFetching: expFetching } = useGetExperienceQuery(
    {}
  );
  const [deleteExperience] = useDeleteExperienceMutation();
  const [delId, setDelID] = useState<any>(null);
  const [delExpId, setDelExpID] = useState<any>(null);
  const [educationModal, setEducationModal] = useState<any>(false);
  const eddModal = () => {
    setEducationModal(!educationModal);
  };

  const [experienceModal, setExperienceModal] = useState<any>(false);
  const expModal = () => {
    setExperienceModal(!experienceModal);
  };

  const [deleteModal, setDeleteModal] = useState<any>(false);
  const delModal = () => {
    setDeleteModal(!deleteModal);
  };
  const [deleteExpModal, setDeleteExpModal] = useState<any>(false);
  const delExpModal = () => {
    setDeleteExpModal(!deleteExpModal);
  };

  const submitSkill = async () => {
    await createSkill({
      skill: createSkills,
    })
      .unwrap()
      .then((res: any) => {
        enqueueSnackbar(`${res?.message}`, { variant: "success" });
        setCreateSkill("");
      })
      .catch((error: any) => {
        console.log(error);
        enqueueSnackbar("Please add skills.", {
          variant: "error",
        });
      });
  };

  const deleteSkill = async (id: any) => {
    await deleteSkills(id)
      .unwrap()
      .then((res: any) => {
        enqueueSnackbar(`${res?.message}`, { variant: "success" });
      })
      .catch(() => {
        enqueueSnackbar("Something went wrong.", {
          variant: "error",
        });
      });
  };
  const tabChange = (tab: any) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const defaultValues = {
    school: "",
    degree: "",
    startDate: new Date(),
    endDate: new Date(),
    description: "",
    project: "",
  };
  const CreateeduSchema = Yup.object().shape({
    school: Yup.string().required("School is required"),
    degree: Yup.string().required("Degree is required"),
    project: Yup.string().required("Project is required"),
    description: Yup.string().required("Description is required"),

    startDate: Yup.date()
      .required("Start Date is required.")
      .max(new Date(), "Start Date cannot be in the future.")
      .test(
        "start-date-check",
        "Start Date must be before End Date.",
        function (value) {
          const endDate = this.parent.endDate;
          if (!endDate) return true;
          return new Date(value) <= new Date(endDate);
        }
      ),
    endDate: Yup.date().max(new Date(), "End Date cannot be in the future."),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(CreateeduSchema),
    defaultValues,
  });

  useEffect(() => {
    if (errors?.school as any) {
      enqueueSnackbar(`${errors?.school?.message}`, { variant: "error" });
    } else if (errors?.degree) {
      enqueueSnackbar(`${errors?.degree?.message}`, { variant: "error" });
    } else if (errors?.startDate) {
      enqueueSnackbar(`${errors?.startDate?.message}`, { variant: "error" });
    } else if (errors?.endDate) {
      enqueueSnackbar(`${errors?.endDate?.message}`, { variant: "error" });
    }else if (errors?.project) {
      enqueueSnackbar(`${errors?.project?.message}`, { variant: "error" });
    } else if (errors?.description) {
      enqueueSnackbar(`${errors?.description?.message}`, { variant: "error" });
    }
  }, [errors]);

  const onSubmitEducation = async (data: any) => {
    const startDate = new Intl.DateTimeFormat(["ban", "id"]).format(
      data?.startDate
    );
    const endDate = new Intl.DateTimeFormat(["ban", "id"]).format(
      data?.endDate
    );
    await createEducation({
      university: data.school,
      degree: data.degree,
      duration: startDate + "-" + endDate,
      bio: data.description,
      project: data.project,
    })
      .unwrap()
      .then((res: any) => {
        reset();
        eddModal();
        enqueueSnackbar(`${res?.message}`, { variant: "success" });
      })
      .catch((error: any) => {
        console.log(error);
        enqueueSnackbar("Something went wrong.", {
          variant: "error",
        });
      });
  };

  const deleteEducation = async (id: string) => {
    await deleteEducations(id)
      .unwrap()
      .then((res: any) => {
        delExpModal();
        enqueueSnackbar(`${res?.message}`, { variant: "success" });
      })
      .catch(() => {
        enqueueSnackbar("Something went wrong.", {
          variant: "error",
        });
      });
  };

  const deleteExperiences = async () => {
    await deleteExperience(delExpId)
      .unwrap()
      .then((res: any) => {
        delModal();
        enqueueSnackbar(`${res?.message}`, { variant: "success" });
      })
      .catch(() => {
        enqueueSnackbar("Something went wrong.", {
          variant: "error",
        });
      });
  };

  // profile

  const ProfileSchema = Yup.object({
    dob: Yup.date()
      .max(new Date(), "Future date of birth dates are not allowed.")
      .test("is-adult", "You must be 18 years or older.", (value) => {
        const today = new Date();
        const minDate = new Date(
          today.getFullYear() - 18,
          today.getMonth(),
          today.getDate()
        );
        return value ? value <= minDate : false;
      }),
    avatar: Yup.mixed(),
    bio: Yup.string(),
    gender: Yup.string(),
    line1: Yup.string(),
    city: Yup.string(),
    state: Yup.string(),
    country: Yup.string(),
    pincode: Yup.string(),
    linkedin: Yup.string(),
    github: Yup.string(),
    behance: Yup.string(),
    whatsapp: Yup.string(),
  });

  const defaultValue = {
    avatar: "",
    bio: "",
    gender: "",
    dob: new Date(),
    line1: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
    linkedin: "",
    github: "",
    behance: "",
    whatsapp: "",
  };
  const {
    register: reg,
    handleSubmit: handelSubmits,
    reset: resets,
    setValue,
    formState: { errors: err, },
  } = useForm({
    resolver: yupResolver(ProfileSchema),
    defaultValues: defaultValue,
  });

  useEffect(() => {
    setValue("dob", dob);
  }, [user,dob]);
  useEffect(() => {
    if (err?.dob as any) {
      enqueueSnackbar(`${err?.dob?.message}`, { variant: "error" });
    }
  }, [err]);

  useEffect(() => {
    setCountry(user?.country);
    setLine1(user?.line1);
    setCity(user?.city);
    setState(user?.state);
    setPincode(user?.pincode);
    setLinkedin(user?.linkedin);
    setGithub(user?.github);
    setBehance(user?.behance);
    setWhatsapp(user?.whatsapp);
    setBio(user?.bio);
    setGender(user?.gender);
    setDob(user?.dob);
  }, [user, activeTab]);

  const onSubmits = async (data: any) => {
    setIsLoading(true);
    const profile = new FormData();

    if (data?.avatar?.[0]) {
      profile.append("avatar", data?.avatar?.[0]);
    }
    if (data?.dob) {
      profile.append("dob", dob);
    }
    if (data?.gender) {
      profile.append("gender", gender);
    }
    if (data?.line1) {
      profile.append("line1", line1);
    }
    if (data?.city) {
      profile.append("city", city);
    }
    if (data?.state) {
      profile.append("state", state);
    }
    if (data?.pincode) {
      profile.append("pincode", pincode);
    }
    if (data?.country) {
      profile.append("country", country);
    }
    if (data?.linkedin) {
      profile.append("linkedin", linkedin);
    }
    // if (data?.github) {
    //   profile.append("github", github);
    // }
    // if (data?.behance) {
    //   profile.append("behance", behance);
    // }
    if (data?.whatsapp) {
      profile.append("whatsapp", whatsapp);
    }
    if (data?.bio) {
      profile.append("bio", bio);
    }

    await createProfile(profile)
      .unwrap()
      .then((res: any) => {
        setIsLoading(false);
        resets();
        enqueueSnackbar(`${res?.message}`, { variant: "success" });
      })
      .catch((error: any) => {
        setIsLoading(false);
        console.log(error);
        enqueueSnackbar("Something went wrong.", {
          variant: "error",
        });
      });
  };

  return (
    <React.Fragment>
      <Col lg={8}>
        <Card className="profile-content-page mt-4 mt-lg-0">
          <Nav
            className="profile-content-nav nav-pills border-bottom mb-4"
            id="pills-tab"
            role="tablist"
          >
            <NavItem role="presentation">
              <NavLink
                href="#"
                className={classnames({ active: activeTab === "1" })}
                onClick={() => {
                  tabChange("1");
                }}
                type="button"
              >
                Account
              </NavLink>
            </NavItem>
            <NavItem role="presentation">
              <NavLink
                href="#"
                className={classnames({ active: activeTab === "2" })}
                onClick={() => {
                  tabChange("2");
                }}
                type="button"
              >
                Overview
              </NavLink>
            </NavItem>
          </Nav>

          <CardBody className="p-4">
            <TabContent activeTab={activeTab}>
              <TabPane tabId="2">
                <div>
                  <h5 className="fs-18 fw-bold">About</h5>
                  <p className="text-muted mt-4">
                    {user?.bio !== null ? user?.bio : "No Bio "}
                  </p>
                </div>
                <div className="candidate-education-details mt-4">
                  <Row>
                    <Col lg={9}>
                      {" "}
                      <h6 className="fs-18 fw-bold mb-0">Education</h6>
                    </Col>
                    <Col lg={3}>
                      <button
                        style={{ display: "flex", justifySelf: "right" }}
                        type="submit"
                        className="btn btn-primary btn-hover"
                        onClick={() => eddModal()}
                      >
                        Add Education
                      </button>
                    </Col>
                  </Row>
                  {eddFetching ? (
                    <>
                      {" "}
                      <Spinner />{" "}
                    </>
                  ) : (
                    <>
                      {education?.count === 0 ? (
                        <>
                          <h6
                            className="fs-16 mb-1 text-center"
                            style={{ paddingTop: 30 }}
                          >
                            No Education details Found.
                          </h6>
                        </>
                      ) : (
                        <>
                          {education?.data?.map((data: any, index: number) => {
                            return (
                              <div
                                className="candidate-education-content mt-4 d-flex"
                                key={index}
                              >
                                <div className="circle flex-shrink-0 bg-primary-subtle text-primary">
                                  {data?.degree.slice(0, 1).toUpperCase()}
                                </div>
                                <div className="ms-4">
                                  <Row>
                                    <Col lg={9}>
                                      {" "}
                                      <h6 className="fs-16 mb-1">
                                        {data?.degree.toUpperCase()}
                                      </h6>{" "}
                                    </Col>
                                    <Col lg={3}>
                                      <Icon
                                        icon="fa-solid:trash"
                                        style={{ color: "#961622" }}
                                        className="btn-hover"
                                        onClick={() => {
                                          setDeleteExpModal(true);
                                          setDelID(data?.id);
                                        }}
                                      />
                                    </Col>
                                  </Row>

                                  <p className="mb-2 text-muted">
                                    {data?.university} - ({data?.duration})
                                  </p>

                                  <p className="text-muted">{data?.bio}</p>
                                  <p className="mb-2 text-muted">
                                    Project : ({data?.project})
                                  </p>
                                </div>
                              </div>
                            );
                          })}
                        </>
                      )}
                    </>
                  )}
                </div>
                <div className="candidate-education-details mt-4">
                  <Row>
                    <Col lg={8}>
                      {" "}
                      <h6 className="fs-18 fw-bold mb-0">Experiences</h6>
                    </Col>
                    <Col lg={4}>
                      <button
                        style={{
                          display: "flex",
                          justifySelf: "right",
                          marginLeft: 50,
                        }}
                        type="submit"
                        className="btn btn-primary btn-hover"
                        onClick={() => expModal()}
                      >
                        Add Experiences
                      </button>
                    </Col>
                  </Row>

                  {expFetching ? (
                    <>
                      <Spinner />{" "}
                    </>
                  ) : (
                    <>
                      {experience?.count === 0 ? (
                        <>
                          <h6
                            className="fs-16 mb-1 text-center"
                            style={{ paddingTop: 30 }}
                          >
                            No Experiences Found.
                          </h6>
                        </>
                      ) : (
                        <>
                          {experience?.data?.map((data: any, index: number) => {
                            return (
                              <div
                                className="candidate-education-content mt-4 d-flex"
                                key={index}
                              >
                                <div className="circle flex-shrink-0 bg-primary-subtle text-primary">
                                  {data?.company_name
                                    ?.slice(0, 1)
                                    .toUpperCase()}
                                </div>
                                <div className="ms-4">
                                  <Row>
                                    <Col lg={9}>
                                      {" "}
                                      <h6 className="fs-16 mb-1">
                                        {data?.company_name?.toUpperCase()}
                                      </h6>{" "}
                                    </Col>
                                    <Col lg={3}>
                                      <Icon
                                        icon="fa-solid:trash"
                                        style={{ color: "#961622" }}
                                        className="btn-hover"
                                        onClick={() => {
                                          setDeleteModal(true);
                                          setDelExpID(data?.id);
                                        }}
                                      />
                                    </Col>
                                  </Row>

                                  <p className="mb-2 text-muted">
                                    {data?.position} - ({data?.duration})
                                  </p>
                                  <p className="text-muted">
                                    {data?.job_responsibility}
                                  </p>
                                </div>
                              </div>
                            );
                          })}
                        </>
                      )}
                    </>
                  )}
                </div>
                <div className="mt-4">
                  <h5 className="fs-18 fw-bold">Skills</h5>
                </div>
                <div className="mt-0 ">
                  <Row>
                    <Col lg={9}>
                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="skills"
                          name="skills"
                          value={createSkills}
                          placeholder="Add Skills"
                          onChange={(e) => {
                            setCreateSkill(e?.target?.value);
                          }}
                        />
                      </div>
                    </Col>
                    <Col lg={3}>
                      <div className="mb-3 text-center">
                        <button
                          type="submit"
                          className="btn btn-primary btn-hover"
                          onClick={submitSkill}
                        >
                          Add Skills
                        </button>
                      </div>
                    </Col>
                  </Row>
                  {isFetching ? (
                    <Spinner />
                  ) : (
                    <>
                      {data?.count === 0 ? (
                        <>
                          <h6
                            className="fs-16 mb-1 text-center"
                            style={{ paddingTop: 30 }}
                          >
                            No Skills Found.
                          </h6>
                        </>
                      ) : (
                        <>
                          <div className="mt-0 d-flex flex-wrap align-items-start gap-1">
                            {data?.data?.map((data: any, index: number) => {
                              return (
                                <>
                                  <span
                                    className="badge fs-13 bg-success-subtle text-success mt-2 "
                                    key={index}
                                  >
                                    {data?.skill_name}{" "}
                                    <Icon
                                      icon="healthicons:x-outline"
                                      style={{ color: "red" }}
                                      className="btn-hover"
                                      onClick={() => {
                                        deleteSkill(data?.id);
                                      }}
                                    />
                                  </span>
                                </>
                              );
                            })}
                          </div>
                        </>
                      )}
                    </>
                  )}
                </div>
                {/* <div className="mt-4">
                  <h5 className="fs-18 fw-bold">Spoken languages</h5>
                </div>
                <div className="mt-0 d-flex flex-wrap align-items-start gap-1">
                  <span className="badge fs-13 bg-success-subtle text-success mt-2">
                    English
                  </span>
                  <span className="badge fs-13 bg-success-subtle text-success mt-2">
                    German
                  </span>
                  <span className="badge fs-13 bg-success-subtle text-success mt-2">
                    French
                  </span>
                </div> */}
              </TabPane>
              <TabPane tabId="1">
                <form onSubmit={handelSubmits(onSubmits)}>
                  <div>
                    <h5 className="fs-17 fw-semibold mb-3 mb-0">My Account</h5>
                    <div className="text-center">
                      <div className="mb-4 profile-user">
                        <img
                          src={
                            user?.avatar === null
                              ? "/profile2.png"
                              : user?.avatar
                          }
                          className="rounded-circle img-thumbnail profile-img"
                          id="profile-img"
                          alt={user?.name}
                        />
                        <div className="p-0 rounded-circle profile-photo-edit"></div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <h5 className="fs-17 fw-semibold mb-3">Image</h5>
                    <Row>
                      <Col lg={12}>
                        <div className="mb-3">
                          <input
                            id="avatar"
                            type="file"
                            className="profile-img-file-input"
                            {...reg("avatar")}
                          />
                        </div>
                      </Col>
                    </Row>
                  </div>

                  <div className="mt-4">
                    <h5 className="fs-17 fw-semibold mb-3">Profile</h5>
                    <Row>
                      <Col lg={12}>
                        <div className="mb-3">
                          <Label
                            htmlFor="exampleFormControlTextarea1"
                            className="form-label"
                          >
                            Introduce Yourself
                          </Label>
                          <textarea
                            {...reg("bio")}
                            className="form-control"
                            rows={Number("5")}
                            value={bio}
                            onChange={(e) => setBio(e.target.value)}
                          ></textarea>
                        </div>
                      </Col>
                    </Row>
                  </div>

                  <div className="mt-4">
                    <h5 className="fs-17 fw-semibold mb-3">Personal Details</h5>
                    <Row>
                      <Col lg={6}>
                        <div className="mb-3">
                          <Label htmlFor="facebook" className="form-label">
                            Gender
                          </Label>
                          <select
                            className="form-control"
                            id="gender"
                            {...reg("gender")}
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                          >
                            <option disabled selected value="">
                              Select gender
                            </option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="transgender">Other</option>
                          </select>
                        </div>
                      </Col>

                      <Col lg={6}>
                        <div className="mb-3">
                          <Label htmlFor="twitter" className="form-label">
                            Date of birth
                          </Label>
                          <input
                            type="date"
                            className="form-control"
                            id="dob"
                            {...reg("dob")}
                            placeholder="dd-mm-yyyy"
                            value={dob}
                            onChange={(e) => setDob(e.target.value)}
                          />
                        </div>
                      </Col>
                    </Row>
                  </div>

                  <div className="mt-4">
                    <h5 className="fs-17 fw-semibold mb-3">Address</h5>
                    <Row>
                      <Col lg={6}>
                        <div className="mb-3">
                          <Label htmlFor="facebook" className="form-label">
                            Address line 1
                          </Label>
                          <input
                            type="text"
                            className="form-control"
                            id="addressline1"
                            {...reg("line1")}
                            placeholder="Address line 1"
                            value={line1}
                            onChange={(e) => {
                              setLine1(e.target.value);
                            }}
                          />
                        </div>
                      </Col>

                      <Col lg={6}>
                        <div className="mb-3">
                          <Label htmlFor="twitter" className="form-label">
                            City
                          </Label>
                          <input
                            type="text"
                            className="form-control"
                            id="city"
                            {...reg("city")}
                            placeholder="City"
                            value={city}
                            onChange={(e) => {
                              setCity(e.target.value);
                            }}
                          />
                        </div>
                      </Col>

                      <Col lg={6}>
                        <div className="mb-3">
                          <Label htmlFor="linkedin" className="form-label">
                            State
                          </Label>

                          <select
                            className="form-control"
                            {...reg("state")}
                            value={state}
                            id="stateSelect"
                            onChange={(e) => {
                              setState(e.target.value);
                            }}
                          >
                            <option value="" disabled selected>
                              Select State
                            </option>
                            <option value="Andhra Pradesh">
                              Andhra Pradesh
                            </option>
                            <option value="Arunachal Pradesh">
                              Arunachal Pradesh
                            </option>
                            <option value="Assam">Assam</option>
                            <option value="Bihar">Bihar</option>
                            <option value="Chhattisgarh">Chhattisgarh</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Goa">Goa</option>
                            <option value="Gujarat">Gujarat</option>
                            <option value="Haryana">Haryana</option>
                            <option value="Himachal Pradesh">
                              Himachal Pradesh
                            </option>
                            <option value="Jharkhand">Jharkhand</option>
                            <option value="Karnataka">Karnataka</option>
                            <option value="Kerala">Kerala</option>
                            <option value="Madhya Pradesh">
                              Madhya Pradesh
                            </option>
                            <option value="Maharashtra">Maharashtra</option>
                            <option value="Manipur">Manipur</option>
                            <option value="Meghalaya">Meghalaya</option>
                            <option value="Mizoram">Mizoram</option>
                            <option value="Nagaland">Nagaland</option>
                            <option value="Odisha">Odisha</option>
                            <option value="Punjab">Punjab</option>
                            <option value="Rajasthan">Rajasthan</option>
                            <option value="Sikkim">Sikkim</option>
                            <option value="Tamil Nadu">Tamil Nadu</option>
                            <option value="Telangana">Telangana</option>
                            <option value="Tripura">Tripura</option>
                            <option value="Uttar Pradesh">Uttar Pradesh</option>
                            <option value="Uttarakhand">Uttarakhand</option>
                            <option value="West Bengal">West Bengal</option>
                          </select>
                        </div>
                      </Col>

                      <Col lg={6}>
                        <div className="mb-3">
                          <Label htmlFor="whatsapp" className="form-label">
                            Pincode
                          </Label>
                          <input
                            type="text"
                            className="form-control"
                            id="pincode"
                            {...reg("pincode")}
                            placeholder="Pincode"
                            value={pincode}
                            onChange={(e) => {
                              setPincode(e.target.value);
                            }}
                          />
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className="mb-3">
                          <Label htmlFor="whatsapp" className="form-label">
                            Country
                          </Label>

                          <select
                            className="form-control"
                            id="country"
                            {...reg("country")}
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                          >
                            <option value="" disabled selected>
                              Select Country
                            </option>
                            <option value="Andhra Pradesh">India</option>
                          </select>
                        </div>
                      </Col>
                    </Row>
                  </div>
                  <div className="mt-4">
                    <h5 className="fs-17 fw-semibold mb-3">Social Media</h5>
                    <Row>
                      <Col lg={6}>
                        <div className="mb-3">
                          <Label htmlFor="linkedin" className="form-label">
                            Linkedin
                          </Label>
                          <input
                            type="text"
                            className="form-control"
                            id="linkedin"
                            {...reg("linkedin")}
                            placeholder="https://linkedin.com"
                            value={linkedin}
                            onChange={(e) => {
                              setLinkedin(e.target.value);
                            }}
                          />
                        </div>
                      </Col>

                      <Col lg={6}>
                        <div className="mb-3">
                          <Label htmlFor="whatsapp" className="form-label">
                            Whatsapp
                          </Label>
                          <input
                            type="text"
                            className="form-control"
                            id="whatsapp"
                            {...reg("whatsapp")}
                            placeholder="0000000000"
                            value={whatsapp}
                            onChange={(e) => {
                              setWhatsapp(e.target.value);
                            }}
                          />
                        </div>
                      </Col>
                      {/* <Col lg={6}>
                        <div className="mb-3">
                          <Label htmlFor="facebook" className="form-label">
                            Github
                          </Label>
                          <input
                            type="text"
                            className="form-control"
                            id="github"
                            {...reg("github")}
                            placeholder="https://github.com"
                            value={github}
                            onChange={(e) => {
                              setGithub(e.target.value);
                            }}
                          />
                        </div>
                      </Col>

                      <Col lg={6}>
                        <div className="mb-3">
                          <Label htmlFor="twitter" className="form-label">
                            Behance
                          </Label>
                          <input
                            type="text"
                            className="form-control"
                            id="behance"
                            {...reg("behance")}
                            placeholder="https://behance.com"
                            value={behance}
                            onChange={(e) => {
                              setBehance(e.target.value);
                            }}
                          />
                        </div>
                      </Col> */}
                    </Row>
                  </div>

                  <div className="mt-4 text-end">
                    <button type="submit" className="btn btn-primary btn-hover" disabled={isLoading}>
                    {isLoading ? 'Loading...' : 'Update'}
                    </button>
                  </div>
                </form>
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </Col>

      {/* Add education */}
      <Modal
        isOpen={educationModal}
        toggle={educationModal}
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
            onClick={eddModal}
          ></button>
        </div>
        <ModalBody>
          <Card style={{ border: "none", padding: 15 }}>
            <div className="text-center">
              <h5>Add Education Details</h5>
            </div>
            <form
              onSubmit={handleSubmit(onSubmitEducation)}
              className="auth-form"
            >
              <div className="mb-3">
                <label htmlFor="usernameInput" className="form-label">
                  School
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="school"
                  placeholder="School or university"
                  {...register("school")}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="passwordInput" className="form-label">
                  Degree
                </label>
                <select
                  className="form-control"
                  id="degree"
                  {...register("degree")}
                >
                  <option disabled selected value="">
                    Select degree
                  </option>
                  <option value="iti">ITI</option>
                  <option value="highschool">High school</option>

                  <option value="intermediate">Intermediate</option>
                  <option value="diploma">Diploma</option>
                  <option value="graduation">Graduation</option>
                  <option value="postGraduation">Post Graduation</option>
                  <option value="phd">PHD</option>
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="usernameInput" className="form-label">
                  Start Date
                </label>

                <input
                  type="date"
                  className="form-control"
                  id="startDate"
                  {...register("startDate")}
                  placeholder="Start date"
                />
              </div>
              <div className="mb-3">
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={(event) => setChecked(event.target.checked)}
                />
                <label
                  htmlFor="usernameInput"
                  className="form-label"
                  style={{ marginLeft: 15 }}
                >
                  Currently working
                </label>
              </div>
              {checked ? (
                <> </>
              ) : (
                <>
                  <div className="mb-3">
                    <label htmlFor="usernameInput" className="form-label">
                      End Date
                    </label>

                    <input
                      type="date"
                      className="form-control"
                      id="endDate"
                      {...register("endDate")}
                      placeholder="End date (or expected)"
                    />
                  </div>
                </>
              )}

              <div className="mb-3">
                <label htmlFor="emailInput" className="form-label">
                  Project
                </label>

                <input
                  type="text"
                  className="form-control"
                  id="project"
                  {...register("project")}
                  placeholder="Project"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="emailInput" className="form-label">
                  Description
                </label>

                <textarea
                  rows={3}
                  className="form-control"
                  id="description"
                  {...register("description")}
                  placeholder="Description"
                />
              </div>

              <div className="text-center">
                <button type="submit" className="btn btn-primary btn-hover">
                  Add Education
                </button>
              </div>
            </form>
          </Card>
        </ModalBody>
      </Modal>

      {/* Delete education */}
      <Modal
        isOpen={deleteExpModal}
        toggle={deleteExpModal}
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
            onClick={delExpModal}
          ></button>
        </div>
        <ModalBody>
          <Card style={{ border: "none", padding: 15 }}>
            <div className="text-center">
              <h5>Are you sure to Delete Education Details</h5>
            </div>
            <div className="mt-3 text-center">
              <button
                type="submit"
                className="btn btn-primary btn-hover"
                onClick={() => {
                  deleteEducation(delId);
                }}
              >
                Confirm
              </button>
            </div>
          </Card>
        </ModalBody>
      </Modal>

      {/* Add experience */}
      <Modal
        isOpen={experienceModal}
        toggle={experienceModal}
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
            onClick={expModal}
          ></button>
        </div>
        <ModalBody>
          <Experience expModal={expModal} />
        </ModalBody>
      </Modal>

      {/* Delete experience */}
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
              <h5>Are you sure to Delete Experince Details</h5>
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

export default RightSideContent;
