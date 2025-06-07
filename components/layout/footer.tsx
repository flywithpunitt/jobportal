"use client";
import Link from "next/link";
import React, { useEffect, useMemo, useState } from "react";
import { Row, Col, Container } from "reactstrap";
import { Icon } from "@iconify/react";
import lightLogo from "../../assets/images/logo-li.png";
import Image from "next/image";
import { useSelector } from "react-redux";

const Footer = () => {
  const userToken = useSelector((state: any) => state?.user?.token);
  const [menuA, setMenuA] = useState<any>();

  const menuArray = useMemo(() => {
    let dataArray = [];
    if (userToken ) {
      dataArray.push(
        {
          id: 1,
          link: "/profile",
          subTitle: "Profile",
        },
        {
          id: 1,
          link: "/application",
          subTitle: " Applied Jobs",
        }
      );
    } else {
      dataArray.push({
        id: 2,
        link: "/contact",
        subTitle: "Contact Us",
      });
    }
    return dataArray;
  }, [userToken]);

  useEffect(() => {
    setMenuA(menuArray);
  }, [menuArray]);

  const footer = [
    {
      id: 1,
      title: "Company",
      menu: [
        {
          id: 1,
          link: "/about",
          subTitle: "About Us",
        },
        {
          id: 1,
          link: "/privacy",
          subTitle: "Privacy Policy",
        },
        {
          id: 1,
          link: "/terms",
          subTitle: "Terms & Conditions",
        },
      ],
    },
    {
      id: 2,
      title: "Candidates",
      menu: [
        {
          id: 1,
          link: "/profile",
          subTitle: "Profile",
        },
        {
          id: 2,
          link: "/job",
          subTitle: "Jobs Categories",
        },
        {
          id: 2,
          link: "/application",
          subTitle: "Applied Jobs",
        },
      ],
    },
    {
      id: 3,
      title: "Recruiter",
      menu: [
        {
          id: 1,
          link: 'https://employer.wiztrace.com/register',
          subTitle: "Creater Company",
        },
        {
          id: 2,
          link: "https://employer.wiztrace.com",
          subTitle: "Post Jobs",
        },
        {
          id: 2,
          link: "https://employer.wiztrace.com",
          subTitle: "Search Condidate",
        },
      ],
    },
    {
      id: 4,
      title: "Support",
      menu: [
        {
          id: 1,
          link: "/contact",
          subTitle: "Help Center",
        },
       
        {
          id: 3,
          link: "/",
          subTitle: "Reviews",
        },
        {
          id: 3,
          link: "/",
          subTitle: "How to Use",
        },
      ],
    },
  ];
  const footerIcons = [
    {
      id: 1,
      socialIcon: "uil-facebook-f",
      href:'https://www.facebook.com/profile.php?id=61551421882948&mibextid=ZbWKwL',
      color:'#3b5998',
    },
    {
      id: 2,
      socialIcon: "uil-linkedin-alt",
      href:'http://linkedin.com/in/wiztrace-info-00b01b286',
      color:'#0072b1',
    },
    {
      id: 3,
      socialIcon: "uil-instagram",
      href:'https://www.instagram.com/wiztraceinfo/',
      color:'#feda75',
    },
    {
      id: 4,
      socialIcon: "uil-youtube",
      href:'https://www.youtube.com/@Wiztrace',
      color:'#CD201F',
    },
    {
      id: 5,
      socialIcon: "simple-icons:x",
      href:'https://twitter.com/WiztraceInfo',
      color:'#000000',
    },
  ];
  return (
    <>
      <section className="bg-footer">
        <Container>
          <Row>
            <Col lg={4}>
              <div className="footer-item mt-4 mt-lg-0 me-lg-5">
                <Image
                  src={lightLogo}
                  height="80"
                  alt=""
                  className="logo-dark"
                />
                {/* <p className="text-white">
                We made our small team to create our wiztrace.com a job providing platform with such noble ambition and enthusiasm.
                </p> */}
                <p className="text-white mt-3">Follow Us on:</p>
                <ul className="footer-social-menu list-inline mb-0">
                  {footerIcons.map((footerIcondetails, key) => (
                    <li className="list-inline-item" key={key}>
                      <Link href={footerIcondetails?.href} target="_blank">
                        <Icon icon={footerIcondetails.socialIcon} color={footerIcondetails.color} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
            {footer.map((footerdetails, key) => (
              <Col lg={2} xs={6} key={key}>
                <div className="footer-item mt-4 mt-lg-0">
                  <p className="fs-16 text-white mb-4 text-bold">
                    <strong>{footerdetails.title}</strong>
                    </p>
                  {(footerdetails.menu || []).map(
                    (menuInner: any, index: number) => (
                      <ul
                        className="list-unstyled footer-list mb-0"
                        key={index}
                      >
                        <li>
                          <Link className="text-white" href={menuInner.link}>
                            <i className="mdi "></i>
                            {menuInner.subTitle}
                          </Link>
                        </li>
                      </ul>
                    )
                  )}
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <div className="footer-alt">
        <Container>
          <Row>
            <Col lg={12}>
              <p className="text-white text-center mb-0">
                {new Date().getFullYear()} &copy; Wiztrace || Design & Developed
                By{" "}
                <Link href="https://seattlesbest.software/" target="_blank">
                  Seattle Best Software
                </Link>
                {/*                
                <Link
                  href="//themesdesign.in/"
                  target="_blank"
                  className="text-reset text-decoration-underline"
                >
                  Themesdesign
                </Link> */}
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Footer;
