import React from "react";
import { Container, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Home = () => {
  return (
    <>
      <HeaderBar>
        <HeaderText>Admin Dashboard</HeaderText>
      </HeaderBar>
      <Container style={containerWrap}>
        <Wrapper>
          <NavLink style={{ textDecoration: "none" }} to="/admin/web_messages">
            <Button>Website Messages</Button>
          </NavLink>

          <br />
          <br />
          <NavLink style={{ textDecoration: "none" }} to="/admin/certificate_details">
            <Button>Add Certificate Details</Button>
          </NavLink>
          <br />
          <br />

          <NavLink style={{ textDecoration: "none" }} to="/admin/newsletter">
            <Button>Newsletter Subscriptions</Button>
          </NavLink>
        </Wrapper>
      </Container>
    </>
  );
};
export default Home;

const containerWrap = {
  marginLeft: 20,
  marginRight: 20,
};
const Wrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
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
