import React from "react";
import { Row, Container } from "reactstrap";
import Navbar from "./Navbar/Navbar";
import MainArea from "./MainArea/MainArea";

const AppB2C = () => {
  return (
    <Container fluid>
      <Row>
        <Navbar />
        <MainArea />
      </Row>
    </Container>
  );
};

export default AppB2C;
