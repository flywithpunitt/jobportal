"use client";
import React from "react";
import { Container, Row } from "reactstrap";
import JobVacancy2 from "./JobVacancy2";
import Section from "../../components/home/section";
import { useGetApplicationQuery } from "@/services/page";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

const JobGrid2 = () => {
  const { data, isFetching } = useGetApplicationQuery({});
  const userToken = useSelector((state: any) => state?.user?.token);
  const router = useRouter();
  if (!userToken) {
   router.push("/");
  }

  return (
    <React.Fragment>
      {/* <Section /> */}
      <section className="section" style={{ paddingTop: 200 }}>
        <Container>
          <Row>
            <JobVacancy2 application={data} />
          </Row>
          {/* <Pagination /> */}
        </Container>
      </section>
    </React.Fragment>
  );
};

export default JobGrid2;
