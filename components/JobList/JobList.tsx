"use client";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import Section from "./Section";
import JobSearchOptions from "../JobList/JobSearchOptions";
import Popular from "../JobList/Popular";
import Sidebar from "../JobList/Sidebar";
import JobVacancyPost2 from "./JobVacancyPost2";
import Pagination from "./Pagination";
import { useGetCategoryQuery, useLazyGetJobQuery } from "@/services/page";
import { useSearchParams } from "next/navigation";
import { Spinner } from "react-bootstrap";

const JobLists = () => {
  const [jobMutation, { data: allJob, isFetching }] = useLazyGetJobQuery();
  const { data: jobCategory, isFetching: categoryFetching } =
    useGetCategoryQuery({});
  const [category, setCategory] = React.useState<any>();
  const [location, setLocation] = React.useState<any>();
  const [company, setCompany] = React.useState<any>();
  const [industry, setIndustry] = React.useState<any>();
  const [deadline, setDeadline] = React.useState<any>();
  const [min, setMin] = React.useState<any>(0);
  const [max, setMax] = React.useState<any>(10000000);
  const [jobTypes, setJobTypes] = React.useState<any>();
  const [search, setSearch] = React.useState<any>();
  const [limit, setLimit] = useState(10);
  const [offset, setOffset] = useState(0);
  const [recentJob, setRecentJob] = useState<any>();
  const [experience, setExperience] = useState<any>();
  const [filterProps, setFilterProps] = useState<any>(false);  

  const query = useSearchParams();
  const path = query.get("search");
  useEffect(() => {
    setSearch(path);
  }, [path]);

  const categorySearch = (data: any) => {
    setCategory(data);
  };
  const locationSearch = (data: any) => {
    setLocation(data);
  };
  const companySearch = (data: any) => {
    setCompany(data);
  };
  const IndustrySearch = (data: any) => {
    setIndustry(data);
  };
  const DeadlineSearch = (data: any) => {
    setDeadline(data);
  };
  const minSearch = (data: any) => {
    setMin(data);
  };
  const maxSearch = (data: any) => {
    setMax(data);
  };
  const jobType = (data: any) => {
    setJobTypes(data);
  };
  const limitSearch = (data: any) => {
    setLimit(data);
  };
  const offsetSearch = (data: any) => {
    setOffset(data);
  };
  const recentsJobs = (data: any) => {
    setRecentJob(data);
  };

  const experienceHandle = (data: any) => {
    setExperience(data);
  };
  const clearFilter = () => {
    setCategory(null);
    setLocation(null);
    setCompany(null);
    setIndustry(null);
    setDeadline(null);
    setMin(0);
    setMax(10000000);
    setJobTypes(null);
    setSearch(null);
    setRecentJob(null);
    setExperience(null);
    setFilterProps(true);
    setLimit(10);
    setOffset(0);
  };

  useEffect(() => {
    jobMutation({
      location: location || "",
      category: category || "",
      industry: industry || "",
      deadline: deadline || "",
      company: company || "",
      size: "",
      website: "",
      salary: min + ":" + max || "",
      limit: limit || 10,
      offset: offset || 0,
      job_type: jobTypes || "",
      search: search || "",
      experience: experience || "",
      sort: recentJob || "",
    });
  }, [
    category,
    location,
    company,
    industry,
    deadline,
    min,
    max,
    search,
    jobTypes,
    experience,
    recentJob,
  ]);

  return (
    <React.Fragment>
      {/* <Section /> */}
      {isFetching && categoryFetching ? (
        <>
          <Spinner />
        </>
      ) : (
        <>
          <section className="section">
            <Container>
              <Row>
                <Col lg={9}>
                  <div className="me-lg-5">
                    <JobSearchOptions
                      jobCategory={jobCategory}
                      categorySearch={categorySearch}
                      locationSeacrh={locationSearch}
                      companySearch={companySearch}
                      clearFilter={clearFilter}
                      filterProps={filterProps}
                    />
                    {/* <Popular jobCategory={jobCategory} /> */}
                    <JobVacancyPost2 jobData={allJob} />
                    <Pagination
                      jobData={allJob}
                      limits={limitSearch}
                      offsets={offsetSearch}
                    />
                  </div>
                </Col>
                <Sidebar
                  IndustrySearch={IndustrySearch}
                  DeadlineSearch={DeadlineSearch}
                  minSalary={minSearch}
                  maxSalary={maxSearch}
                  jobType={jobType}
                  recentJob={recentsJobs}
                  experience={experienceHandle}
                />
              </Row>
            </Container>
          </section>
        </>
      )}
    </React.Fragment>
  );
};

export default JobLists;
