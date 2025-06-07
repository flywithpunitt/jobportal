import Link from "next/link";
import React from "react";

const Popular = ({ jobCategory }: any) => {
 
  return (
    <React.Fragment>
      <div className="wedget-popular-title mt-4">
        <h6>Popular</h6>
        <ul className="list-inline">
          {jobCategory?.count === 0 ? (
            <>
              <h6>No data found</h6>
            </>
          ) : (
            <>
              {jobCategory?.data?.slice(0,5)?.map((data: any, index: number) => {
                return (
                  <li className="list-inline-item" key={index}>
                    <div className="popular-box d-flex align-items-center">
                      <div className="number flex-shrink-0 me-2">
                        {data?.totalListing}
                      </div>
                      <Link href="" className="primary-link stretched-link">
                        <h6 className="fs-14 mb-0">{data?.name}</h6>
                      </Link>
                    </div>
                  </li>
                );
              })}
            </>
          )}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Popular;
