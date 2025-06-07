"use client";
import React from "react";
import { Col, Container, Row, Form } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Autoplay } from "swiper/modules";
import homeImage2 from "../../assets/images/home/img-02.png";
import homeImage3 from "../../assets/images/home/img-03.png";
import homeImage4 from "../../assets/images/home/img-04.png";
//hiii

import Image from "next/image";
import "swiper/css";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

const Section = () => {
  // SwiperCore.use([Autoplay]);
  const router = useRouter();
  const [search, setSearch] = React.useState<any>();
  const defaultValues = {
    search: "",
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
  });

  const onSubmit = async (data: any) => {
    if (data?.search?.length >= 3) {
      router.push(`/job?search=${data?.search}`);
    }
  };

  return (
    <React.Fragment>
      <section className="bg-home3" id="home">
        <Container>
          <Row className="align-items-center">
            <Col lg={7}>
              <div className="mb-4 pb-3 me-lg-5">
                <h6 className="sub-title" style={{ color: "black" }}>
                  We have 15,000+ live jobs
                </h6>
                <h1
                  className="display-5 fw-semibold mb-3"
                  style={{ color: "white" }}
                >
                  <span style={{ color: "rgb(102, 116, 204)" }}>
                    {" "}
                    Thousands of{" "}
                  </span>
                  <span style={{ color: "rgb(102, 116, 204" }}>Jobs </span>
                  <span style={{ color: "rgb(102, 116, 204" }}>
                    are Waiting for you{" "}
                  </span>
                </h1>
                <p className="fs-18 mb-0" style={{ color: "black" }}>
                  Find jobs, uncover a multitude of employment prospects
                  tailored to you. Our portal is meticulously designed through
                  an in-depth analysis of diverse industries' requirements.
                </p>
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="registration-form">
                  <Row className="g-0">
                    <Col md={8}>
                      <div className="filter-search-form filter-border mt-3 mt-md-0 text-black">
                        <i className="uil uil-briefcase-alt text-black"></i>
                        <input
                          type="search"
                          id="job-title"
                          {...register("search")}
                          className="form-control filter-input-box border border-dark"
                          placeholder="Job, Company name..."
                        />
                      </div>
                    </Col>

                    <Col md={4}>
                      <div className="mt-3 mt-md-0 h-100">
                        <button
                          className="btn btn-primary submit-btn w-100 h-100"
                          type="submit"
                        >
                          <i className="uil uil-search me-1"></i> Find Job
                        </button>
                      </div>
                    </Col>
                  </Row>
                </div>
              </form>
            </Col>

            <Col lg={5}>
              <div className="mt-5 md-0">
                <img
                  src={"/homeNew.jpeg"}
                  height={650}
                  alt="banner"
                  className="home-img"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Section;
