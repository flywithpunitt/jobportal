"use client";
import React, { use, useEffect } from "react";
import Jobcatogaries from "./jobCatogaries";
import HowItWorks from "./HowItWorks";
import Client from "./Client";
import Blog from "./Blog";
import Testimonal from "./Testimonal";
import Cta from "./Cta";
import JobList from "./JobList/jobList";
import {
  useGetBlogQuery,
  useGetCategoryQuery,
  useGetPartnerQuery,
  useGetReviewQuery,
  useLazyGetJobQuery,
} from "@/services/page";
import { Spinner } from "react-bootstrap";

const Homes = () => {
  const { data: jobCategory , isFetching: categoryFetching } = useGetCategoryQuery({});
  const { data: review, isFetching: reviewFetching  } = useGetReviewQuery({});
  const { data: partner, isFetching: partnerFetching  } = useGetPartnerQuery({});
  const [jobMutation, { data: allJob, isFetching }] = useLazyGetJobQuery();
  const [jobFilter, setJobFilter] = React.useState<any>();
  const jobChanges = (data: any) => {
    setJobFilter(data);
  };
  const { data: blog, isFetching: BlogFetching } = useGetBlogQuery({});



  useEffect(() => {
    jobMutation({
      location: "",
      category: "",
      industry: "",
      deadline: "",
      company: "",
      size: "",
      website: "",
      salary: "",
      limit: 4,
      offset: 0,
      job_type: jobFilter || "",
      search: "",
      experience: "",
      sort: "",
    });
  }, [jobFilter]);
  return (
    <>
      {isFetching && BlogFetching && reviewFetching && partnerFetching && categoryFetching? (
        <>
          <Spinner />
        </>
      ) : (
        <>
          <Jobcatogaries data={jobCategory} />
          <JobList jobChange={jobChanges} job={allJob} />
          <HowItWorks />
          <Cta count={5000} />
          <Testimonal data={review}/>
          <Blog blogs={blog} />
          <Client data={partner}/>
        </>
      )}
    </>
  );
};

export default Homes;
