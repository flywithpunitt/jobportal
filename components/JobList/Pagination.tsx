"use client";
import Link from "next/link";
import React, { use, useEffect, useMemo, useState } from "react";
import { Col, Row } from "reactstrap";

const Pagination = ({ jobData, limits, offsets }: any) => {
  const [activeClass, setActiveClass] = useState("");
  const [activeIndex, setActiveIndex] = useState(1);
  const [limit, setLimit] = useState(10);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    limits(limit);
    offsets(offset);
  }, [limit, offset]);
  var count = Math.floor(jobData?.count/ 10);

  

  const pageStep = useMemo(() => {
    let pageArr = [];
    for (let i = 0; i < count; i++) {
      var page = i + 1;
      pageArr.push(page);
    }
    return pageArr;
  }, [count]);

  const [currPage, setCurrPage] = useState<number>(1);

  const pagination = (index: number) => {
    setActiveClass("page-item active");
    setActiveIndex(index - 1);
    setCurrPage(index);
    const newOffset = 10 * index;
    setOffset(newOffset);
  };

  const decrement = (e: any) => {
    setCurrPage((prev) => (prev > 1 ? prev - 1 : 1));
    const newOffset = offset - 10;
    setOffset(newOffset);
    setActiveIndex(currPage - 1);
  };

  const increment = () => {
    setCurrPage((prev) => (prev > count ? prev + 1 : count));
    const newOffset = offset + 10;
    setOffset(newOffset);
    setActiveIndex(currPage);
  };

  return (
    <React.Fragment>
      <Row>
        <Col lg={12} className="mt-4 pt-2">
          <nav aria-label="Page navigation example">
            <div className="pagination job-pagination mb-0 justify-content-center">
              <li className="page-item disabled">
                {currPage > 1 && (
                  <>
                    <Link
                      onClick={decrement}
                      className="page-link"
                      href=""
                      tabIndex={Number("-1")}
                    >
                      <i className="mdi mdi-chevron-double-left fs-15"></i>
                    </Link>
                  </>
                )}
              </li>
              {pageStep?.map((data: number, index: number) => {
                if (
                  index == 0 ||
                  index == 1 ||
                  index == activeIndex ||
                  index == activeIndex - 1 ||
                  index == activeIndex + 1
                ) {
                  return (
                    <li
                      key={index}
                      className={
                        activeIndex === index ? activeClass : "page-item"
                      }
                    >
                      <Link
                        className="page-link"
                        href=""
                        onClick={() => pagination(index + 1)}
                      >
                        {data}
                      </Link>
                    </li>
                  );
                } else if (index + 1 === count) {
                  return (
                    <li
                      key={index}
                      className={
                        activeIndex === index ? activeClass : "page-item"
                      }
                    >
                      <Link
                        className="page-link"
                        href=""
                        onClick={() => pagination(index + 1)}
                      >
                        {data}
                      </Link>
                    </li>
                  );
                } else {
                  return (
                    <li
                      key={index}
                      className={
                        activeIndex === index ? activeClass : "page-item"
                      }
                    >
                      <Link className="page-link" href="">
                        .
                      </Link>
                    </li>
                  );
                }
              })}

              <li className="page-item">
                {currPage < count && (
                  <>
                    <Link className="page-link" href="" onClick={increment}>
                      <i className="mdi mdi-chevron-double-right fs-15"></i>
                    </Link>
                  </>
                )}
              </li>
            </div>
          </nav>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Pagination;
