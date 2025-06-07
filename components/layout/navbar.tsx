"use client";
import React, { useState, useEffect, useMemo } from "react";
import {
  Col,
  Row,
  Container,
  Collapse,
  NavbarToggler,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
} from "reactstrap";
import { Modal, ModalBody } from "reactstrap";
import Image from "next/image";
import lightLogo from "../../assets/images/logo-li.png";
import profileImage2 from "../../assets/images/profile2.png";
import Link from "next/link";
import SignUp from "../Auths/signup";
import SignIn from "../Auths/signin";
import { useSelector } from "react-redux";
import { dispatch } from "@/redux/store";
import { updateToken } from "@/redux/slice/user";
import { useGetNotificationQuery, useGetProfileQuery } from "@/services/page";
import { useRouter } from "next/navigation";

const NavBar = (props: any) => {


  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const userToken = useSelector((state: any) => state?.user?.token);
  const { data: user, refetch } = useGetProfileQuery({
    skip: !userToken,
  });
  const { data, refetch: refetchNotification } = useGetNotificationQuery({
    skip: !userToken,
  });
  const router = useRouter();

  useEffect(() => {
    if (userToken) {
      refetchNotification();
      refetch();
    }
  }, [userToken]);
  

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const [registerModal, setRegisterModal] = useState(false);
  const openModal = () => {
    setRegisterModal(!registerModal), setSigninModal(false);
  };
  const [signinModal, setSigninModal] = useState(false);
  const loginModal = () => {
    setSigninModal(!signinModal), setRegisterModal(false);
  };
  const [customerNum, setCustomerNum] = useState<any>();
  const loginModelCall = () => {
    openModal();
  };
  const loginNum = (data: any) => {
    setCustomerNum(data);
  };

  function tog_modal() {
    setRegisterModal(!registerModal);
  }

  const logout = async () => {
    await dispatch(
      updateToken({
        token: "",
      })
    );
    router.push("/");
  };

  const accountIcons = {
    id: 1,
    Icon: "uil-facebook-f",
  };

  //Notification Dropdown
  const [notification, setNotification] = useState(false);
  const dropDownnotification = () => setNotification((prevState) => !prevState);

  //user Profile Dropdown
  const [userProfile, setUserProfile] = useState(false);
  const dropDownuserprofile = () => setUserProfile((prevState) => !prevState);

  //scroll navbar
  const [navClass, setnavClass] = useState<any>("nav-sticky");

  useEffect(() => {
    window.addEventListener("scroll", scrollNavigation, true);
  });

  function scrollNavigation() {
    var scrollup = window.pageYOffset;
    if (scrollup > 0) {
      setnavClass("nav-sticky");
    } else {
      setnavClass("nav-sticky");
    }
  }
  //menu activation
  //   useEffect(() => {
  //     window.scrollTo({ top: 0, behavior: "smooth" });
  //     const pathName = props.router.location.pathname;
  //     var matchingMenuItem = null;
  //     var ul = document.getElementById("navbarCollapse");
  //     var items = ul.getElementsByTagName("a");
  //     removeActivation(items);
  //     for (var i = 0; i < items.length; ++i) {
  //       if (pathName === items[i].pathname) {
  //         matchingMenuItem = items[i];
  //         break;
  //       }
  //     }
  //     if (matchingMenuItem) {
  //       activateParentDropdown(matchingMenuItem);
  //     }
  //   },[props.router.location.pathname]);

  const removeActivation = (items: any) => {
    for (var i = 0; i < items.length; ++i) {
      var item = items[i];
      const parent = items[i].parentElement;
      if (item && item.classList.contains("active")) {
        item.classList.remove("active");
      }
      if (parent) {
        if (parent.classList.contains("active")) {
          parent.classList.remove("active");
        }
      }
    }
  };

  function activateParentDropdown(item: any) {
    item.classList.add("active");
    const parent = item.parentElement.parentElement.parentElement;

    if (parent) {
      parent.classList.add("active"); // li
      const parent2 = parent.parentElement;
      parent2.classList.add("active"); // li
      const parent3 = parent2.parentElement;
      if (parent3) {
        parent3.classList.add("active"); // li
        const parent4 = parent3.parentElement;
        if (parent4) {
          parent4.classList.add("active"); // li
          const parent5 = parent4.parentElement;
          if (parent5) {
            parent5.classList.add("active"); // li
            const parent6 = parent5.parentElement;
            if (parent6) {
              parent6.classList.add("active"); // li
            }
          }
        }
      }
    }
    return false;
  }

  const userImage = useMemo(() => {
    let image = null;
    if (user?.avatar !== null) {
      image = user?.avatar;
    } else if (user?.avatar === null) {
      image = "/profile2.png";
    } else {
      image = "/profile2.png";
    }
    return image;
  }, [user, userToken]);


  const handleClick = () => {
    setIsOpen(false)
  }

  window?.addEventListener("click", handleClick, { capture: true });

  return (
    <React.Fragment>
      <nav
        className={"navbar navbar-expand-lg fixed-top sticky p-0 " + navClass}
        id="navigation"
        style={{ background: 'linear-gradient(to bottom, #6674cc, #b578ff)'}}
      >
        <Container fluid className="custom-container">
          <Link className="navbar-brand text-dark fw-bold me-auto" href="/">
            <Image src={lightLogo} height="80" alt="" className="logo-dark" />
            <Image src={lightLogo} height="50" alt="" className="logo-light" />
          </Link>
          <div>
            <NavbarToggler
              className="me-3"
              type="button"
              onClick={() => toggle()}
            >
              <i className="mdi mdi-menu" style={{ color: "#fff" }}></i>
            </NavbarToggler>
          </div>
          <Collapse
            isOpen={isOpen}
            className="navbar-collapse"
            id="navbarCollapse"
            onClick={() => {
              setIsOpen(false)
            }}
          >
            <ul className="navbar-nav mx-auto navbar-center">
              <NavItem style={{ color: "white" }}>
                <Link className="nav-link" href="/" style={{ color: "white" }}>
                  Home
                </Link>
              </NavItem>

              {/* <NavItem className="dropdown dropdown-hover">
                <NavLink
                  href="/#"
                  id="jobsdropdown"
                  role="button"
                  onClick={() => setCompany(!company)}
                  style={{ color: "white" }}
                >
                  Company <div className="arrow-down"></div>
                </NavLink>
                <ul
                  className={classname("dropdown-menu dropdown-menu-center", {
                    show: company,
                  })}
                  aria-labelledby="jobsdropdown"
                >
                  <li>
                    <Link className="dropdown-item" href="/about">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/services">
                      Services
                    </Link>
                  </li>
                </ul>
              </NavItem> */}

              <NavItem>
                <Link
                  className="nav-link"
                  href="/job"
                  style={{ color: "white" }}
                >
                  Jobs
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  className="nav-link"
                  href="/blog"
                  style={{ color: "white" }}
                >
                  Blogs
                </Link>
              </NavItem>
              <NavItem style={{ color: "white" }}>
                <Link
                  className="nav-link"
                  href="/about"
                  style={{ color: "white" }}
                >
                  About Us
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  className="nav-link"
                  href="/contact"
                  style={{ color: "white" }}
                >
                  Contact
                </Link>
              </NavItem>
              <NavItem>
              <Link
                className="nav-link d-lg-none"
                href={`${process.env.link == undefined ? 'https://employer.wiztrace.com'  :process.env.link }`}
                style={{ color: "white" }}
              >
                Recruiter
              </Link>
              </NavItem>
            </ul>
          </Collapse>

          <ul className="header-menu list-inline d-flex align-items-center mb-0">
            {userToken ? (
              <Dropdown
                isOpen={notification}
                toggle={dropDownnotification}
                className="list-inline-item  me-4"
                style={{ color: "#3fb3fa" }}
              >
                <DropdownToggle
                  href="#"
                  className="header-item noti-icon position-relative"
                  id="notification"
                  type="button"
                  tag="a"
                >
                  <i
                    className="mdi mdi-bell fs-22"
                    style={{ color: "#3fb3fa" }}
                  ></i>
                  {data?.count !== 0 ? (
                    <div className="count position-absolute">
                      {data?.count !== 0 ? data?.count : 0}
                    </div>
                  ) : (
                    <></>
                  )}
                </DropdownToggle>
                <DropdownMenu
                  className="dropdown-menu-md dropdown-menu-end p-0"
                  aria-labelledby="notification"
                  end
                >
                  <div className="notification-header border-bottom bg-light">
                    <h6 className="mb-1"> Notification </h6>
                    {/* <p className="text-muted fs-13 mb-0">
                    You have 4 unread Notification
                  </p> */}
                  </div>
                  <div className="notification-wrapper dropdown-scroll">
                    {data?.count === 0 ? (
                      <>
                        <h5
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            paddingTop: 10,
                          }}
                        >
                          No notification found
                        </h5>
                      </>
                    ) : (
                      <>
                        {data?.data?.map((data: any, index: number) => {
                          return (
                            <Link
                              href="/application"
                              className="text-dark notification-item d-block"
                              key={index}
                            >
                              <div className="d-flex align-items-center">
                                {/* <div className="flex-shrink-0 me-3">
                                  <img
                                    src={data?.image}
                                    className="rounded-circle avatar-xs"
                                    alt={data?.title}
                                  />
                                </div> */}
                                <div className="flex-grow-1">
                                  <h6 className="mt-0 mb-1 fs-14">
                                    {data?.title}
                                  </h6>
                                  <p className="text-muted fs-12 mb-0">
                                    <i className="mdi mdi-clock-outline"></i>{" "}
                                    <span>{data?.content}</span>
                                  </p>
                                </div>
                              </div>
                            </Link>
                          );
                        })}
                      </>
                    )}
                  </div>
                  {/* <div className="notification-footer border-top text-center">
                  <Link className="primary-link fs-13" href="#">
                    <i className="mdi mdi-arrow-right-circle me-1"></i>{" "}
                    <span>View More..</span>
                  </Link>
                </div> */}
                </DropdownMenu>
              </Dropdown>
            ) : null}

            {userToken ? (
              <>
                {" "}
                <Dropdown
                  onClick={() => setUserProfile(!userProfile)}
                  isOpen={userProfile}
                  toggle={dropDownuserprofile}
                  className="list-inline-item"
                >
                  <DropdownToggle
                    href="#"
                    className="header-item"
                    id="userdropdown"
                    type="button"
                    tag="a"
                    aria-expanded="false"
                  >
                    <img
                      src={userToken ? userImage : "/profile2.png"}
                      alt="account"
                      width="35"
                      height="35"
                      className="rounded-circle me-1"
                    />{" "}
                    <span
                      className="d-none d-md-inline-block fw-medium"
                      style={{ color: "white" }}
                    ></span>
                  </DropdownToggle>
                  <DropdownMenu
                    className="dropdown-menu-end"
                    aria-labelledby="userdropdown"
                    end
                  >
                    {userToken ? (
                      <>
                        <li>
                          <Link className="dropdown-item" href="/profile">
                            Profile
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" href="/application">
                            Applied Jobs
                          </Link>
                        </li>
                        <li onClick={logout}>
                          <Link className="dropdown-item" href="">
                            Logout
                          </Link>
                        </li>
                      </>
                    ) : (
                      <>
                        <li onClick={openModal}>
                          <Link className="dropdown-item" href="">
                            Sign Up
                          </Link>
                        </li>
                        <li onClick={loginModal}>
                          <Link className="dropdown-item" href="">
                            Sign In
                          </Link>
                        </li>
                      </>
                    )}
                  </DropdownMenu>
                </Dropdown>
              </>
            ) : (
              <>
                {" "}
                <Link
                  className="btn btn-light btn-hover"
                  href={""}
                  onClick={loginModal}
                  style={{ marginLeft: 10, height: 40 }}
                >
                {screenWidth <= 948 ? (
                  <p>Login</p>
                ) : (
                  <p>Candidate Login</p>
                )}
                    </Link>
                  </>
                )}
          </ul>
          {userToken ? (
            <>
            
            </>
          ): (
            <>
            <Link
              className="btn btn-light btn-hover d-none d-sm-block"
              href={`${process.env.link == undefined ? 'https://employer.wiztrace.com'  :process.env.link }`}
              style={{ marginLeft: 10, height: 40 }}
              target="_blank"
            >
              Recruiter Login
            </Link>
            </>
          )}
        </Container>
      </nav>
      {/* Register model */}
      <Modal isOpen={registerModal} toggle={openModal} role="dialog" centered>
        <div
          style={{ border: "3px solid #9677ea", margin: 5, borderRadius: 10 }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "right",
              alignItems: "right",
              paddingRight: 20,
              paddingTop: 20,
            }}
          >
            <button
              type="button"
              className="btn-close"
              onClick={openModal}
            ></button>
          </div>
          <ModalBody>
            <SignUp signupModel={openModal} customerNum={customerNum} />
          </ModalBody>
          <div className="text-center">
            <p className="mt-2">
              Already a member ?{" "}
              <Link
                href=""
                className="fw-medium text-decoration-underline"
                onClick={loginModal}
              >
                {" "}
                Sign In{" "}
              </Link>
            </p>
          </div>
        </div>
      </Modal>

      {/* Login model */}
      <Modal isOpen={signinModal} toggle={loginModal} role="dialog" centered>
        <div
          style={{ border: "3px solid #9677ea", margin: 5, borderRadius: 10 }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "right",
              alignItems: "right",
              paddingRight: 20,
              paddingTop: 20,
            }}
          >
            <button
              type="button"
              className="btn-close"
              onClick={loginModal}
            ></button>
          </div>
          <ModalBody>
            <SignIn
              signInModel={setSigninModal}
              funProps={loginModelCall}
              numProps={loginNum}
            />
          </ModalBody>
          <div className="text-center">
            <p className="mb-5">
              Don't have an account ?{" "}
              <Link
                href=""
                className="fw-medium  text-decoration-underline"
                onClick={openModal}
              >
                {" "}
                Sign Up{" "}
              </Link>
            </p>
          </div>
        </div>
      </Modal>
    </React.Fragment>
  );
};

export default NavBar;
