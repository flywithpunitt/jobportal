'use client'
import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col, Card, CardImg, CardBody } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore, { Autoplay, Pagination } from "swiper";
import { Autoplay, Navigation, } from 'swiper/modules';
import { useForm } from "react-hook-form";
import { enqueueSnackbar, useSnackbar } from "notistack";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
//swiper css
// import "swiper/swiper-bundle.min.css";
// import "swiper/swiper.min.css";
import { useSelector } from "react-redux";
import "swiper/css";
//Images import
import MailChimp from "../../assets/images/logo/logo-01.png";
import WordPress from "../../assets/images/logo/wordpress.svg";
import Instagram from "../../assets/images/logo/Instagram.svg";
import Link from "next/link";
import { Modal, ModalBody } from "reactstrap";
import {
  useGetCreateReviewMutation,
  useGetProfileQuery,
} from "@/services/page";

const Testimonal = ({data}:any) => {

  const swiperRefLocal = useRef<any>()

  const [createReview] = useGetCreateReviewMutation();
  const { data: userDatas,  } = useGetProfileQuery({});
  const userToken = useSelector((state: any) => state?.user?.token);
  const [reviewModal, setreviewModal] = useState(false);
  const openModal = () => {
    setreviewModal(!reviewModal);
  };


  const ReviewSchema = Yup.object({
    designation: Yup.string().required("Designation  is required"),
    name: Yup.string().required("Name is  required"),
    message: Yup.string().required("Message is  required"),
  });
  const defaultValues = {
    name: "",
    designation: "",
    message: "",
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ReviewSchema),
    defaultValues,
  });
  useEffect(() => {
    if (errors?.name as any) {
      enqueueSnackbar(`${errors?.name?.message}`, { variant: "error" });
    } else if (errors?.designation) {
      enqueueSnackbar(`${errors?.designation?.message}`, { variant: "error" });
    } else if (errors?.message) {
      enqueueSnackbar(`${errors?.message?.message}`, { variant: "error" });
    }
  }, [errors]);
  const onSubmit = async (data: any) => {
    await createReview({
      text: data?.message,
      author: data?.name,
      designation: data?.designation,
      avatar: userDatas?.avatar ? userDatas?.avatar : null,
    })
      .unwrap()
      .then((res: any) => {
        if (res?.message) {
          reset();
          enqueueSnackbar(`${res?.message}`, { variant: "success" });
          openModal();
        }
      })
      .catch((error: any) => {
        console.log(error);
        if (error?.data?.message) {
          enqueueSnackbar(`${error?.data?.message}`, { variant: "error" });
        }
      });
  };

  const handleMouseEnter = () => {
    swiperRefLocal?.current?.swiper?.autoplay?.stop()
};

const handleMouseLeave = () => {
    swiperRefLocal?.current?.swiper?.autoplay?.start()
};

  return (
    <React.Fragment>
      <section className="section">
        <Container>

        <Row className="justify-content-end mt-3">
            <Col xs="auto">
              {userToken ? (
                <>
                  {" "}
                  <Link
                    onClick={openModal}
                    href=""
                    className="btn btn-primary btn-hover"
                  >
                    Add Review
                    {/* <i className="uil uil-rocket align-middle ms-1"></i> */}
                  </Link>
                </>
              ) : (
                <></>
              )}
            </Col>
          </Row>   

          

          <Row className="justify-content-center">
            <Col lg={6}>
              <div className="section-title text-center mb-4 pb-2">
                <h3 className="title mb-3">Happy Candidates</h3>
                {/* <p className="text-muted">
                  Post a job to tell us about your project. We'll quickly match
                  you with the right freelancers.
                </p> */}
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg={10} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              {data?.count === 0 ? (
                <>
                  {" "}
                  <h4
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignContent: "center",
                      padding: 50,
                    }}
                  >
                    No reviews found
                  </h4>
                </>
              ) : (
                <>
                  <Swiper
                    className="pb-5"
                    loop={true}
                    ref={swiperRefLocal as any}
                    slidesPerView={3}
                    spaceBetween={50}
                    autoplay={{ 
                      delay: 3000, 
                      disableOnInteraction: false,
                    }}
                    style={{cursor:'pointer'}}
                    pagination={{ clickable: true }}
                    modules={[Autoplay, Navigation]}
                  >
                    <div className="swiper-wrapper">
                      {(data?.data || []).map(
                        (testimonalDetails: any, index: number) => (
                          <SwiperSlide key={index}>
                            <Card className="testi-box" style={{ border: "var(--bs-card-border-width) solid var(--bs-card-border-color)", borderRadius: "var(--bs-card-border-radius)" }}>
                              <CardBody>
                                <div className="mb-4">
                                  <CardImg
                                    src={
                                      testimonalDetails?.avatar === null
                                        ? "/profile2.png"
                                        : testimonalDetails?.avatar
                                    }
                                    className="avatar-lg img-thumbnail rounded-circle mb-4"
                                    alt={testimonalDetails?.name}
                                  />
                                </div>
                                <p className="testi-content lead text-muted mb-4">
                                  {testimonalDetails.text.length > 50 ? testimonalDetails.text.substring(0, 100) + '..' : testimonalDetails.text}
                                </p>
                                <h5 className="mb-0">
                                  {testimonalDetails.author}
                                </h5>
                                <p className="text-muted mb-0">
                                  {testimonalDetails.designation}
                                </p>
                              </CardBody>
                            </Card>
                          </SwiperSlide>
                        )
                      )}
                    </div>
                    <div className="swiper-pagination"></div>
                  </Swiper>
                </>
              )}
            </Col>
          </Row>
        </Container>
      </section>

      <Modal isOpen={reviewModal} toggle={openModal} role="dialog" centered>
        <div
          style={{ border: "3px solid #9677ea", margin: 5, borderRadius: 10 }}
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
              onClick={openModal}
            >{" "}</button>
          </div>
          <ModalBody>
            <div className="text-center mb-4">
              <h5>Add review</h5>
              {/* <p className="-70">Add review</p> */}
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="auth-form">
              <div className="mb-3">
                <label htmlFor="passwordInput" className="form-label">
                  Full Name
                </label>
                <input
                  {...register("name")}
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="Enter your full name"
                  // required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="passwordInput" className="form-label">
                  Designation
                </label>
                <input
                  {...register("designation")}
                  type="text"
                  className="form-control"
                  id="designation"
                  name="designation"
                  placeholder="Enter your designation "
                  // required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="passwordInput" className="form-label">
                  Message
                </label>
                <textarea
                  {...register("message")}
                  className="form-control"
                  id="message"
                  name="message"
                  placeholder="Enter your message"
                  // required
                />
              </div>

              <div className="text-center">
                <button type="submit" className="btn btn-primary btn-hover">
                  Add review
                </button>
              </div>
            </form>
          </ModalBody>
        </div>
      </Modal>
    </React.Fragment>
  );
};

export default Testimonal;
