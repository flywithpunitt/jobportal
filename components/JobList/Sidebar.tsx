"use client";
import Link from "next/link";
import React, {  useEffect, useState } from "react";
import { Button, Col, Collapse, Row } from "reactstrap";

const Sidebar = ({
  IndustrySearch,
  DeadlineSearch,
  minSalary,
  maxSalary,
  jobType,
  recentJob,
  experience,
  filterProps

}: any) => {
  const [toggleFirst, setToggleFirst] = useState(true);
  const [toggleSecond, setToggleSecond] = useState(true);
  const [toggleThird, setToggleThird] = useState(true);
  const [toggleFourth, setToggleFourth] = useState(true);
  const [toggleFifth, setToggleFifth] = useState(true);
  const [minValue, setMinValue] = React.useState<any>(0);
  const [maxValue, setMaxValue] = React.useState<any>(10000000);


useEffect(() => {
  setMinValue(0)
  setMaxValue(10000000)
}, [filterProps])

  
  //CheckBox
  const [isChecked, setIsChecked] = useState(true);
  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  const [isDateChecked, setIsDateChecked] = useState(true);
  const handleDateOnChange = () => {
    setIsDateChecked(!isDateChecked);
  };
  const handleExpiryDate = (data: any) => {
    DeadlineSearch(data);
  };
  const handleIndustryChange = (data: any) => {
    IndustrySearch(data);
  };

  const handleMinSalaryChange = (data: any) => {
    setMinValue(data);
    minSalary(data);
  };
  const handleMaxSalaryChange = (data: any) => {
    setMaxValue(data);
    maxSalary(data);
  };
  const handleJobTypeChange = (data: any) => {
    jobType(data);
  };
  const handleRecentJobChange = (data: any) => {
    recentJob(data); 
  };

  const handleExperienceChange = (data: any) => {
    experience(data); 
  };

  return (
    <React.Fragment>
      <Col lg={3}>
        <div className="side-bar mt-5 mt-lg-0" style={{ paddingTop: 150 }}>
          <div className="accordion" id="accordionExample">
            <button
              className="btn btn-primary w-100"
              style={{ marginBottom: 10 }}
              onClick={(e) => {
                e.preventDefault();
                handleRecentJobChange('asc')
              }}
            >
              Recent Jobs
            </button>

            <div className="accordion-item">
              <h2 className="accordion-header" id="locationOne">
                <Button
                  className="accordion-button"
                  onClick={(e) => {
                    e.preventDefault();
                    setToggleFirst(!toggleFirst);
                  }}
                  role="button"
                  id="collapseExample"
                >
                  Industry
                </Button>
              </h2>
              <Collapse isOpen={toggleFirst}>
                <div className="accordion-body">
                  <div className="side-title">
                    <div className="mb-1">
                      <form className="position-relative">
                        <input
                          className="form-control"
                          type="search"
                          placeholder="Industry..."
                          onChange={(e: any) => {
                            handleIndustryChange(e.target.value);
                          }}
                        />
                        <button
                          className="bg-transparent border-0 position-absolute top-50 end-0 translate-middle-y me-2"
                          type="submit"
                        >
                          <span className="mdi mdi-magnify text-muted"></span>
                        </button>
                      </form>
                    </div>
                    {/* <div className="area-range slidecontainer">
                      <div className="form-label mb-4">
                        Area Range: {value}.00 miles
                        <span
                          className="example-val mt-2"
                          id="slider1-span"
                        ></span>
                      </div>
                      <input
                        type="range"
                        min="1"
                        max="100"
                        value={value}
                        onChange={({ target: { value } }) => setValue(value)}
                        className={`slider ${
                          value > 50 ? "slider-50" : "slider-0"
                        }`}
                      />
                    </div> */}
                  </div>
                </div>
              </Collapse>
            </div>

            <div className="accordion-item mt-4">
              <h2 className="accordion-header" id="experienceOne">
                <Button
                  className="accordion-button"
                  onClick={(e) => {
                    e.preventDefault();
                    setToggleSecond(!toggleSecond);
                  }}
                  role="button"
                  id="collapseExample"
                >
                  Work experience
                </Button>
              </h2>
              <Collapse isOpen={toggleSecond}>
                <div className="accordion-body">
                  <div className="side-title">
                    <div className="form-check mt-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        value=""
                        id="flexCheckChecked1"
                        name="experience"
                        onChange={()=>handleExperienceChange(0)}
                      />
                      <label
                        className="form-check-label ms-2 text-muted"
                        htmlFor="flexCheckChecked1"
                      >
                        Fresher
                      </label>
                    </div>
                    <div className="form-check mt-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        value=""
                        name="experience"
                        id="flexCheckChecked2"
                        onChange={()=>handleExperienceChange(3)}
                      />
                      <label
                        className="form-check-label ms-2 text-muted"
                        htmlFor="flexCheckChecked2"
                      >
                        1-3 years
                      </label>
                    </div>
                    <div className="form-check mt-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        value=""
                        id="flexCheckChecked3"
                        name="experience"
                        onChange={()=>handleExperienceChange(6)}
                      />
                      <label
                        className="form-check-label ms-2 text-muted"
                        htmlFor="flexCheckChecked3"
                      >
                        3-6 years
                      </label>
                    </div>
                    <div className="form-check mt-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        value=""
                        id="flexCheckChecked4"
                        name="experience"
                        onChange={()=>handleExperienceChange(50)}
                      />
                      <label
                        className="form-check-label ms-2 text-muted"
                        htmlFor="flexCheckChecked4"
                      >
                        More than 6 years
                      </label>
                    </div>
                  </div>
                </div>
              </Collapse>
            </div>

            <div className="accordion-item mt-3">
              <h2 className="accordion-header" id="jobType">
                <Button
                  className="accordion-button"
                  onClick={(e) => {
                    e.preventDefault();
                    setToggleThird(!toggleThird);
                  }}
                  role="button"
                  id="collapseExample"
                >
                  Type of employment
                </Button>
              </h2>
              <Collapse isOpen={toggleThird}>
                <div className="accordion-body">
                  <div className="side-title">
                    <div className="mt-2">
                      {/* <Input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault6"
                        defaultChecked
                      />
                      <label
                        className="form-check-label ms-2 text-muted"
                        htmlFor="flexRadioDefault6"
                      >
                        Freelance
                      </label> */}
                      <select
                        className="form-control"
                        onChange={(e: any) => {
                          handleJobTypeChange(e.target.value);
                        }}
                        // style={{ border: "none" }}
                      >
                        <option value="" selected disabled>
                          Select employment
                        </option>
                        <option value="internship">Internship</option>
                        <option value="part-time">Part-time</option>
                        <option value="full-time">Full-time</option>
                        <option value="contract">Contract</option>
                        <option value="freelance">Freelance</option>
                      </select>
                    </div>
                  </div>
                </div>
              </Collapse>
            </div>

            <div className="accordion-item mt-3">
              <h2 className="accordion-header" id="tagCloud">
                <Button
                  className="accordion-button"
                  onClick={(e) => {
                    e.preventDefault();
                    setToggleFifth(!toggleFifth);
                  }}
                  role="button"
                  id="collapseExample"
                >
                  Salary /month
                </Button>
              </h2>
              <Collapse isOpen={toggleFifth}>
                <div className="accordion-body">
                  <div className="side-title">
                    <input
                      type="text"
                      // min={0}
                      // max={200000}
                      value={minValue}
                      className="form-control"
                      onChange={(e) => {
                        handleMinSalaryChange(e.target.value);
                      }}
                    ></input>
                    <Row>
                      <Col lg={6}>Min Salary</Col>
                      <Col lg={6}>
                        {" "}
                        <label className="form-check-labe text-muted">
                          {minValue} Rs
                        </label>
                      </Col>
                    </Row>
                  </div>

                  <div className="side-title " style={{ marginTop: 25 }}>
                    <input
                      type="text"
                      // min={200001}
                      // max={1000000000}
                      value={maxValue}
                      className="form-control"
                      onChange={(e) => {
                        handleMaxSalaryChange(e.target.value);
                      }}
                    ></input>
                    <Row>
                      <Col lg={6}>Max Salary</Col>
                      <Col lg={6}>
                        {" "}
                        <label className="form-check-labe text-muted">
                          {maxValue} Rs
                        </label>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Collapse>
            </div>
          </div>
        </div>
      </Col>
    </React.Fragment>
  );
};

export default Sidebar;
