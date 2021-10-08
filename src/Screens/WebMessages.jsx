import React, { useState } from "react";
import { Container, Button, Modal } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const WebMessages = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <HeaderBar>
        <HeaderText>Website Messages</HeaderText>
      </HeaderBar>
      <Container style={containerWrap}>
        <ButtonMessage onClick={handleShow}>Name</ButtonMessage>
        <ButtonMessage onClick={handleShow}>Name</ButtonMessage>
        <ButtonMessage onClick={handleShow}>Name</ButtonMessage>
        <ButtonMessage onClick={handleShow}>Name</ButtonMessage>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </>
  );
};
export default WebMessages;

const containerWrap = {
  marginLeft: 20,
  marginRight: 20,
};

const ButtonMessage = styled.div`
  margin-top: 10px;
  width: 80%;
  backfround-color: black;
  border: 1px solid grey;
  border-radius: 10;
  out-line: none;
  box-shadow: 8px 7px 5px -3px rgba(0, 0, 0, 0.13);
  -webkit-box-shadow: 8px 7px 5px -3px rgba(0, 0, 0, 0.13);
  -moz-box-shadow: 8px 7px 5px -3px rgba(0, 0, 0, 0.13);
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
