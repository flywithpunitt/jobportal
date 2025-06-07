"use client";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import Link from "next/link";
import { Icon } from "@iconify/react";


declare global {
  interface Window {
    google: any; // Add this declaration for the 'google' object
  }
}
const TopBar = () => {
  const iconTobar = [
    {
      id: 1,
      classname: "uil-linkedin",
      href:"http://linkedin.com/in/wiztrace-info-00b01b286",
    },
    {
      id: 2,
      classname: "uil-facebook",
      href:"https://www.facebook.com/wiztrace?mibextid=ZbWKwL",
    },
    {
      id: 3,
      classname: "uil-instagram",
      href:"https://www.instagram.com/wiztraceinfo/",
    },
    {
      id: 4,
      classname: "uil-youtube",
      href:"https://www.youtube.com/@Wiztrace",
    },
    {
      id: 5,
      classname: "uil-twitter-alt",
      href:"https://twitter.com/WiztraceInfo",
    },
  ];
  //Language Dropdown
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  //Signup Modal
  const [modal, setModal] = useState(false);

  const openModal = () => setModal(!modal);
  useEffect(() => {
    // Define the callback function first
    const googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en', // Set your website's original language
          includedLanguages: 'en,hi,bn,bho,mr,kn,ta,te,gu,pa', // Specify the languages you want to display
        },
        'google_element'
      );
    };

    // Load Google Translate script
    const script = document.createElement('script');
    script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }, []);
  return (
    <React.Fragment>
      <div className="top-bar" style={{ zIndex: 1030 }}>
        <Container fluid className="custom-container">
          <Row className="g-0 align-items-center">
            <Col md={7}>
              <ul className="list-inline mb-0 text-center text-md-start">
                <li className="list-inline-item">
                  <p className="fs-13 mb-0">
                    {" "}
                    {/* <Icon icon="mdi:location" /> */}
                    <Link href="" className="text-dark">
                      Follow us on :
                    </Link>
                  </p>
                </li>
                <div id="google_element"></div>
                <li className="list-inline-item">
                  <ul className="topbar-social-menu list-inline mb-0">
                    {(iconTobar || []).map((icon, key) => (
                      <li className="list-inline-item" key={key}>
                        <Link href={icon?.href} className="social-link" target="_blank">
                          <Icon icon={icon?.classname} />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default TopBar;
