'use client'
import React, { useEffect } from "react";
import About from "./About";
import Section from "./Section";
import Counter from "./Counter";
import Features from "./Features";
import CompanyTestimonal from "./CompanyTestimonal";
import { useLazyGetJobQuery } from "@/services/page";

const AboutUs = () => {
  // document.title = "About Us | Jobcy - Job Listing Template | Themesdesign";
  const [jobMutation, { data: allJob, isFetching }] = useLazyGetJobQuery();

  useEffect(() => {
    jobMutation({
      location: "",
      category:   "",
      industry:"",
      deadline: "",
      company:  "",
      size: "",
      website: "",
      salary:  ":" + 100000000000000000,
      limit: 10,
      offset:  0,
      job_type:  "",
      search:  "",
      experience:  "",
      sort: "",
    });
  }, [
  ]);

  
  return (
    <>
      {/* <Section /> */}
      <About   />
      <Counter jobLength={allJob?.count}/>
      <Features />
  
      {/* <CompanyTestimonal /> */}
    </>
  );
};

export default AboutUs;
