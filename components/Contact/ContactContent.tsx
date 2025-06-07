"use client";
import { Col, Container, Row, Label } from "reactstrap";
import { yupResolver } from "@hookform/resolvers/yup";
//Import Images
import contactImage from "../../assets/images/contact.png";
import Image from "next/image";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { enqueueSnackbar } from "notistack";
import * as Yup from "yup";
import { useCretaeContactMutation } from "@/services/page";

const ContactContent = () => {
  const [cretaeContact] = useCretaeContactMutation();
  const ContactSchema = Yup.object({
    phone: Yup.string()
      .matches(/^[0-9]*$/, "Must be number formate")
      .min(10)
      .max(10)
      .required("Phone number required"),
    name: Yup.string().required(" Name is required"),
    email: Yup.string().required("Email is required"),
    message: Yup.string().required("Message is required"),
    subject: Yup.string().required("Subject is required"),
  });

  const defaultValues = {
    name: "",
    phone: "",
    email: "",
    message: "",
    subject: "",
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ContactSchema),
    defaultValues,
  });

  useEffect(() => {
    if (errors?.name as any) {
      enqueueSnackbar(`${errors?.name?.message}`, { variant: "error" });
    } else if (errors?.email) {
      enqueueSnackbar(`${errors?.email?.message}`, { variant: "error" });
    } else if (errors?.phone) {
      enqueueSnackbar(`${errors?.phone?.message}`, { variant: "error" });
    } else if (errors?.subject) {
      enqueueSnackbar(`${errors?.subject?.message}`, { variant: "error" });
    } else if (errors?.message) {
      enqueueSnackbar(`${errors?.message?.message}`, { variant: "error" });
    }
  }, [errors]);

  const onSubmit = async (data: any) => {
    await cretaeContact({
      name: data?.name,
      phone: data?.phone,
      email: data?.email,
      message: data?.message,
      subject: data?.subject,
    })
      .unwrap()
      .then((res: any) => {
        if (res?.message) {
          reset();
          enqueueSnackbar(`${res?.message}`, { variant: "success" });
        }
      })
      .catch((error: any) => {
        console.log(error);
        if (error) {
          enqueueSnackbar("Some thing went wrong.", {
            variant: "error",
          });
        }
      });
  };

  return (
    <React.Fragment>
      <section className="section" style={{paddingTop:200}}>
        <Container>
          <Row className="align-items-center mt-5">
            <Col lg={6}>
              <div className="section-title mt-4 mt-lg-0">
                <h3 className="title">Get in touch</h3>
                <p className="text-muted">
                  Start working with Wiztrace that can provide everything you need
                  to generate awareness, drive traffic, connect.
                </p>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="contact-form mt-4"
                  name="myForm"
                  id="myForm"
                >
                  <span id="error-msg"></span>
                  <Row>
                    <Col lg={12}>
                      <div className="mb-3">
                        <Label htmlFor="nameInput" className="form-label">
                          Name
                        </Label>
                        <input
                          type="text"
                          id="name"
                          className="form-control"
                          placeholder="Enter your name"
                          {...register("name")}
                        />
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="mb-3">
                        <Label htmlFor="emailInput" className="form-label">
                          Email
                        </Label>
                        <input
                          type="email"
                          className="form-control"
                          id="emaiol"
                          placeholder="Enter your email"
                          {...register("email")}
                        />
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="mb-3">
                        <Label htmlFor="subjectInput" className="form-label">
                          Phone
                        </Label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Phone number"
                          {...register("phone")}
                        />
                      </div>
                    </Col>
                    <Col md={12}>
                      <div className="mb-3">
                        <Label htmlFor="subjectInput" className="form-label">
                          Subject
                        </Label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="subject"
                          {...register("subject")}
                        />
                      </div>
                    </Col>
                    <Col lg={12}>
                      <div className="mb-3">
                        <Label htmlFor="meassageInput" className="form-label">
                          Your Message
                        </Label>
                        <textarea
                          className="form-control"
                          placeholder="Enter your message"
                          {...register("message")}
                          rows={Number("3")}
                        ></textarea>
                      </div>
                    </Col>
                  </Row>
                  <div className="text-end">
                    <button
                      type="submit"
                      id="submit"
                      className="btn btn-primary"
                    >
                      {" "}
                      Send Message <i className="uil uil-message ms-1"></i>
                    </button>
                  </div>
                </form>
              </div>
            </Col>
            <Col lg={5} className="ms-auto order-first order-lg-last">
              <div className="text-center">
                <Image src={contactImage} alt="" className="img-fluid" />
              </div>
              <div className="mt-4 pt-3">
                <div className="d-flex text-muted align-items-center mt-2">
                  <div className="flex-shrink-0 fs-22 text-primary">
                    <i className="uil uil-map-marker"></i>
                  </div>
                  <div className="flex-grow-1 ms-2">
                    <p className="mb-0">
                    U 188, U block, shakarpur laxminagar East Delhi 110092.
                    </p>
                  </div>
                </div>
                <div className="d-flex text-muted align-items-center mt-2">
                  <div className="flex-shrink-0 fs-22 text-primary">
                    <i className="uil uil-envelope"></i>
                  </div>
                  <div className="flex-grow-1 ms-2">
                  <a href="mailto:info@wiztrace.com">
                    <p className="mb-0">info@wiztrace.com</p></a>
                  </div>
                </div>
                <div className="d-flex text-muted align-items-center mt-2">
                  <div className="flex-shrink-0 fs-22 text-primary">
                    <i className="uil uil-phone-alt"></i>
                  </div>
                  <div className="flex-grow-1 ms-2">
                    <a href="tel:8130193801">
                    <p className="mb-0">8130193801</p></a>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <div className="map">
        <iframe
          title="maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112070.47338231729!2d77.14469341640626!3d28.623698600000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce37739f98715%3A0xacd07c42615fedf5!2sSkyllme%20Shakarpur!5e0!3m2!1sen!2sin!4v1692340634680!5m2!1sen!2sin"
          height="350"
          style={{ border: `0`, width: `100%` }}
          allowFullScreen={Boolean("")}
          loading="lazy"
        ></iframe>
      </div>
    </React.Fragment>
  );
};

export default ContactContent;
