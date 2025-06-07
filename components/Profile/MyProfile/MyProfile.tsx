"use client";
import React from "react";
import { Container, Row } from "reactstrap";
import LeftSideContent from "./LeftSideContent";
import RightSideContent from "./RightSideContent";
import Section from "../../home/section";
import { useGetProfileQuery } from "@/services/page";
import { useSelector } from "react-redux";
import { useRouter } from 'next/navigation';

const MyProfile = () => {
  const { data } = useGetProfileQuery({});
  const userToken = useSelector((state: any) => state?.user?.token);
  const router = useRouter();

  if (!userToken) {
    router.push("/");
  }

  return (
    <React.Fragment>
      {/* <Section /> */}
      <section className="section" style={{paddingTop:180}}>
        <Container>
          <Row>
            <LeftSideContent user={data} />
            <RightSideContent user={data} />
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default MyProfile;
