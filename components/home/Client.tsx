'use client'
import React from "react";
import { Col, Row, Container } from "reactstrap";
import Link from "next/link";
const Client = ({data}:any) => {
  return (
    <React.Fragment>
      {/* comment */}
      {/* comment2 */}
      <div className="py-4">
        <Container>
        { data?.count === 0 ? <> <h4 style={{display:'flex', justifyContent:'center', alignContent:'center', padding:30}}>No partners found</h4></> :<>
          <Row>
            {(data?.data || []).map((data:any, index:number) => {
              return (
                <Col lg={2} key={index}>
                <div className="text-center p-3">
                  <Link
                    href="#"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title=""
                    data-bs-original-title="Woocommerce"
                  >
                    <img src={data?.image} alt={data?.name} width={80} className="img-fluid" />
                  </Link>
                </div>
              </Col>
              )
            
})}
          </Row>
          </>
}
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Client;
