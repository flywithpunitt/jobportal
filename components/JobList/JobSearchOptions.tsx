"use client";
import React, { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import { Row } from "reactstrap";
import Link from "next/link";
import { useGetProfileQuery } from "@/services/page";

const JobSearchOptions = ({
  jobCategory,
  categorySearch,
  locationSeacrh,
  companySearch,
  clearFilter,
}: any) => {
  const { data } = useGetProfileQuery({});
  const [selectCategory, setSelectCategory] = useState<any>();
  const [location, setLocation] = useState<any>();
  const [company, setCompany] = useState<any>();

  useEffect(() => {
    if (data?.city) {
      setTimeout(() => {
        setLocation(data?.city);
        locationSeacrh(data?.city);
      }, 1000);
    }
  }, [data]);

  const handleCategory = (data: any) => {
    setSelectCategory(data);
    categorySearch(data);
  };

  const handleLocation = (data: any) => {
    setLocation(data);
    locationSeacrh(data);
  };
  const handleCompany = (data: any) => {
    setCompany(data);
    companySearch(data);
  };

  const handleFilterChange = (e: any) => {
    e.preventDefault();
    clearFilter();
  };

  return (
    <React.Fragment>
      <div className="job-list-header" style={{ paddingTop: 150 }}>
        <Row className="g-4">
          <Col lg={3} md={6}>
            <div className="filler-job-form">
              <i className="uil uil-briefcase-alt"></i>
              <input
                type="search"
                className="form-control filter-input-box"
                id="exampleFormControlInput1"
                placeholder="Company... "
                style={{ marginTop: "-10px" }}
                value={company}
                onChange={(e) => {
                  handleCompany(e.target.value);
                }}
              />
            </div>
          </Col>
          <Col lg={3} md={6}>
            <div className="filler-job-form">
              <i className="uil uil-location-point"></i>
              <input
                style={{ marginTop: "-10px", border: "none" }}
                className="form-control filter-input-box"
                placeholder="Location "
                value={location}
                onChange={(e) => {
                  handleLocation(e.target.value);
                }}
              ></input>
            </div>
          </Col>
          <Col lg={3} md={6}>
            <div className="filler-job-form">
              <i className="uil uil-clipboard-notes"></i>
              <select
                className="selectForm__inner"
                value={selectCategory}
                onChange={(e) => {
                  handleCategory(e.target.value);
                }}
              >
                <option value="" selected disabled>
                  Category
                </option>
                {jobCategory?.data?.map((data: any, index: number) => {
                  return (
                    <option value={data?.id} key={index}>
                      {data?.name}
                    </option>
                  );
                })}
              </select>
            </div>
          </Col>
          <Col lg={3} md={6}>
            <Link
              href=""
              className="btn btn-primary w-100"
              onClick={handleFilterChange}
            >
              <i className="uil uil-filter"></i> Clear Fliters
            </Link>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
};

export default JobSearchOptions;
