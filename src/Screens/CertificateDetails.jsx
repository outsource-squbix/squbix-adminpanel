import React from "react";
import { Form, Button } from "react-bootstrap";
import styled from "styled-components";

const CertificateDetails = () => {
  return (
    <>
      <HeaderBar>
        <HeaderText>Enter Certificate Details</HeaderText>
      </HeaderBar>
      <Wrapper>
        <Form>
          <Form.Group className="mb-6" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter full name" />
          </Form.Group>

          <Form.Group className="mb-6" controlId="formBasicPassword">
            <Form.Label>Certificate Number</Form.Label>
            <Form.Control type="text" placeholder="Certificate number" />
          </Form.Group>
          <Form.Group className="mb-6" controlId="formBasicPassword">
            <Form.Label>Issue Date</Form.Label>
            <Form.Control type="date" placeholder="Issue Date" />
          </Form.Group>
          <Form.Group className="mb-6" controlId="formBasicPassword">
            <Form.Label>Issuer</Form.Label>
            <Form.Control
              type="text"
              placeholder="Squbix Digital Pte. Ltd."
              readOnly
            />
          </Form.Group>
          <Form.Group className="mb-6" controlId="formBasicPassword">
            <Form.Label>Role</Form.Label>
            <Form.Control type="text" placeholder="Role" />
          </Form.Group>
          <Form.Group className="mb-6" controlId="formBasicPassword">
            <Form.Label>Type</Form.Label>
            <Form.Control type="text" placeholder="Certificate type" />
          </Form.Group>
          <br />
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Wrapper>
    </>
  );
};
export default CertificateDetails;

const Wrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 30%;
`;
const HeaderBar = styled.div`
  margin-top: 50px;
  width: 100%;
  height: 70px;
  background-color: blue;
`;
const HeaderText = styled.div`
  color: white;
  text-align: center;
  font-size: 40px;
  font-weight: 600;
`;
