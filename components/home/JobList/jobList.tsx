"use client";
import React, { use, useEffect, useMemo, useState } from "react";
import {
  Container,
  Row,
  Col,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
} from "reactstrap";
import classnames from "classnames";

//Components Imports

import Freelancer from "./Freelancer";
import Parttime from "./Parttime";
import Fulltime from "./Fulltime";
import RecentJobs from "./RecentJobs";
import FeaturedJobs from "./FeaturedJobs";

const JobList = ({ jobChange, job }: any) => {
  const [activeTab, setActiveTab] = useState("1");
  const tabChange = (tab: any) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const job_Type = useMemo(() => {
    let type = "";
    if (activeTab === "1") {
      type = "full-time";
    } else if (activeTab === "2") {
      type = "part-time";
    } else if (activeTab === "3") {
      type = "internship";
    } else if (activeTab === "4") {
      type = "freelance";
    } else if (activeTab === "5") {
      type = "contract";
    }
    return type;
  }, [activeTab]);
  useEffect(() => {
    jobChange(job_Type);
  }, [job_Type]);

  return (
    <React.Fragment>
      <div className="section bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col lg={6}>
              <div className="section-title text-center mb-4 pb-2">
                <h4 className="title">New Jobs</h4>
                <p className="text-muted mb-1">
                  Find jobs with your preference.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg={8}>
              <Nav
                tabs
                className="job-list-menu  nav-pills nav-justified flex-column flex-sm-row mb-4"
                id="pills-tab"
                role="tablist"
              >
                <NavItem role="presentation">
                  <NavLink
                    className={classnames({ active: activeTab === "1" })}
                    onClick={() => {
                      tabChange("1");
                    }}
                    id="recent-jobs-tab"
                    type="button"
                    role="tab"
                  >
                    Full Time
                  </NavLink>
                </NavItem>

                <NavItem role="presentation">
                  <NavLink
                    className={classnames({ active: activeTab === "2" })}
                    onClick={() => {
                      tabChange("2");
                    }}
                    id="featured-jobs-tab"
                    type="button"
                    role="tab"
                  >
                    Part Time
                  </NavLink>
                </NavItem>
                <NavItem role="presentation">
                  <NavLink
                    className={classnames({ active: activeTab === "3" })}
                    onClick={() => {
                      tabChange("3");
                    }}
                    id="freelancer-tab"
                    type="button"
                    role="tab"
                  >
                    Internship
                  </NavLink>
                </NavItem>
                <NavItem role="presentation">
                  <NavLink
                    className={classnames({ active: activeTab === "4" })}
                    onClick={() => {
                      tabChange("4");
                    }}
                    id="part-time-tab"
                    type="button"
                    role="tab"
                  >
                    Freelance
                  </NavLink>
                </NavItem>
                <NavItem role="presentation">
                  <NavLink
                    className={classnames({ active: activeTab === "5" })}
                    onClick={() => {
                      tabChange("5");
                    }}
                    id="full-time-tab"
                    type="button"
                    role="tab"
                  >
                    Contract
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
          </Row>

          <Row>
            <Col lg={12}>
              <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                <Fulltime fullTimes={activeTab === "1" ? job : ""} />
       
                </TabPane>

                <TabPane tabId="2">
                  <Parttime partTimes={activeTab === "2" ? job : ""} />
                </TabPane>

                <TabPane tabId="3">
                  <FeaturedJobs internship={activeTab === "3" ? job : ""} />
                </TabPane>

                <TabPane tabId="4">
                  <Freelancer freelance={activeTab === "4" ? job : ""} />
                </TabPane>

                <TabPane tabId="5">
                <RecentJobs contracts={activeTab === "5" ? job : ""} />
                </TabPane>
              </TabContent>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};
export default JobList;
