'use client'
import React from "react";
import { Col, Row, Container } from "reactstrap";
import Link from "next/link";
import { Icon } from "@iconify/react";
import Image from "next/image";

const Jobcatogaries = ({data}:any) => {
 
  const categories = [
    {
      id: 1,
      icon: "uim-layers-alt",
      name: "IT & Software",
      job: 2024
    },
    {
      id: 2,
      icon: "uim-airplay",
      name: "Technology",
      job: 1250
    },
    {
      id: 3,
      icon: "uim-bag",
      name: "Government",
      job: 802
    },
    {
      id: 4,
      icon: "uim-user-md",
      name: "Accounting / Finance",
      job: 577
    },
    {
      id: 5,
      icon: "uim-hospital",
      name: "Construction / Facilities",
      job: 285
    },
    {
      id: 6,
      icon: "uim-telegram-alt",
      name: "Tele-communications",
      job: 495
    },
    {
      id: 7,
      icon: "uim-scenery",
      name: "Design & Multimedia",
      job: 1045
    },
    {
      id: 8,
      icon: "uim-android-alt",
      name: "Human Resource",
      job: 1516
    }
  ];
  return (
    <React.Fragment>
      <section className="section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={6}>
              <div className="section-title text-center">
                <h3 className="title">Jobs Categories</h3>
                <p className="text-muted">
                  We'll quickly match you with the right Jobs.
                </p>
              </div>
            </Col>
          </Row>

          <Row>
{
  data?.count === 0 ? <> <h4 style={{display:'flex', justifyContent:'center', alignContent:'center', paddingTop:100}}>No data found</h4></> :<>
  {
              data?.data?.slice(0,9)?.map((data:any, index:number)=>{
                return(
                  <Col lg={3} md={6} mt={4} pt={2} key={index}>
                  <div className="popu-category-box rounded text-center">
                    <div className="popu-category-icon icons-md">
                      <Icon icon='/assets/icons/icon.svg' className="text-primary" />
                      <Image src="/navbutton.png" className="text-primary" width={40} height={40}  alt='sd'/>
                    </div>
                    <div className="popu-category-content mt-4">
                      <Link href="/job" className="text-dark stretched-link">
                        <h5 className="fs-18">{data.name}</h5>
                      </Link>
                      <p className="text-muted mb-0">{data?.totalListing} Jobs</p>
                    </div>
                  </div>
                  </Col>
                )
              })
            }
  </>
}
            
           
          </Row>
          <Row>
            <Col lg={12}>
              <div className="mt-5 text-center">
                <Link
                  href="/job"
                  className="btn btn-primary btn-hover"
                >
               All Category Jobs <i className="uil uil-arrow-right"></i>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Jobcatogaries;
