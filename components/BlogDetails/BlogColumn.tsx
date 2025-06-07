import React from "react";
import Link from "next/link";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  WhatsappShareButton,
} from "react-share";
import moment from "moment";

const BlogColumn = ({ blogDetails }: any) => {
  const date = moment(blogDetails?.data?.created_at).format("ll");
  return (
    <React.Fragment>
      <ul className="list-inline mb-0 mt-3 text-muted">
        <li className="list-inline-item">
          <div className="d-flex align-items-center">
            <div className="flex-shrink-0">
              <img
                src={blogDetails?.data?.cover}
                alt={blogDetails?.data?.title}
                className="avatar-sm rounded-circle"
              />
            </div>
            <div className="ms-3">
              <Link href="" className="primary-link">
                <h6 className="mb-0">{blogDetails?.data?.created_by}</h6>
              </Link>
            </div>
          </div>
        </li>
        <li className="list-inline-item">
          <div className="d-flex align-items-center">
            <div className="flex-shrink-0">
              <i className="uil uil-calendar-alt"></i>
            </div>
            <div className="ms-2">
              <p className="mb-0"> {date}</p>
            </div>
          </div>
        </li>
        {/* <li className="list-inline-item">
          <div className="d-flex align-items-center">
            <div className="flex-shrink-0">
              <i className="uil uil-comments-alt"></i>
            </div>
            <div className="ms-2 flex-grow-1">
              <p className="mb-0"> 2 Comments</p>
            </div>
          </div>
        </li> */}
      </ul>
      <div className="mt-4">
        <h5>{blogDetails?.data?.title}</h5>
        <p className="text-muted">
          <div
            dangerouslySetInnerHTML={{ __html: blogDetails?.data?.content }}
          ></div>
        </p>

        <div className="d-flex align-items-center mb-4">
          <div className="flex-shrink-0">
            <b>Tags:</b>
          </div>
          <div className="flex-grow-1 ms-2 d-flex flex-wrap align-items-start gap-1">
            <a
         
              className="badge bg-success-subtle text-success mt-1 fs-14"
            >
              {blogDetails?.data?.tags}
            </a>
          </div>
        </div>
        <ul className="blog-social-menu list-inline mb-0 text-end">
          <li className="list-inline-item">
            <b>Share post:</b>
          </li>
          <li className="list-inline-item mt-1">
            <a className="btn btn-primary btn-hover">
              <FacebookShareButton
                url={window.location.href}
                children={<i className="uil uil-facebook-f"></i>}
              />
            </a>
          </li>
          <li className="list-inline-item mt-1">
            <a className="btn btn-primary btn-hover">
              <LinkedinShareButton
                url={window.location.href}
                children={<i className="uil uil-linkedin-alt"></i>}
              />
            </a>
          </li>
          <li className="list-inline-item mt-1">
            <a className="btn btn-primary btn-hover">
              <TelegramShareButton
                url={window.location.href}
                children={<i className="uil uil-telegram-alt"></i>}
              />
            </a>
          </li>
          <li className="list-inline-item mt-1">
            <a className="btn btn-primary btn-hover">
              <WhatsappShareButton
                url={window.location.href}
                children={<i className="uil uil-whatsapp-alt"></i>}
              />
            </a>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default BlogColumn;
