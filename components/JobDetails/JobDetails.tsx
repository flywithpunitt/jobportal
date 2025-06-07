'use client'
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import JobDetailsDescription from "./JobDetailsDescription";
import JobVacancyPost from "./JobVacancyPost";
import RightSideContent from "./RightSideContent";
import Section from "./Section";
import { useLazyGetJobByIDQuery, useLazyGetJobQuery } from "@/services/page";

const Jobdetails = ({id, }:any) => {
  const[getJobDetails]=useLazyGetJobByIDQuery()
 const[jobData, setJobData]=useState<any>()
 const [jobMutation, { data: allJob, isFetching }] = useLazyGetJobQuery();
 
 
 const category =jobData?.category
  useEffect(()=>{
    getJobDetails(id).unwrap().then((res:any)=>{
      setJobData(res)
    }).catch((err:any)=>{
      console.log(err)
    })
  },[id])


  
  useEffect(() => {
    jobMutation({
      location: "",
      category:category,
      industry: "",
      deadline: "",
      company: "",
      size: "",
      website: "",
      salary: "",
      limit: 4,
      offset: 0,
      job_type: "",
      search: "",
      experience:  "",
      sort:  "",
    });
  }, [category]);
  return (
    <React.Fragment>
      {/* <Section /> */}
      <section className="section" style={{paddingTop:180}}>
        <Container>
          <Row>
            <Col lg={8}>
              <JobDetailsDescription data={jobData}/>
              {/* <JobVacancyPost /> */}
            </Col>
            <Col lg={4} className="mt-4 mt-lg-0">
              <RightSideContent data={jobData} />
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Jobdetails;
