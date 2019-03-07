import React from "react";
import { Col } from "reactstrap";

// Component Import
import TitleBar from "./TitleBar/TitleBar";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const MainArea = () => {
  return (
    <Col
      md="9"
      style={{ backgroundColor: "#EAF1F3", minHeight: "100vh" }}
      className="d-flex flex-column align-items-center"
    >
      <TitleBar />
      <Header />
      <Footer />
    </Col>
  );
};

export default MainArea;
