import React from "react";
import { Col } from "reactstrap";
import { useStore, useActions } from "easy-peasy";

// Component Import
import TitleBar from "./TitleBar/TitleBar";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const MainArea = () => {
  const showOverlay = useStore(state => state.ui.showOverlay);
  const toggleUserSettingFalse = useActions(
    actions => actions.ui.toggleUserSettingFalse
  );
  return (
    <Col
      xl="9"
      lg="12"
      style={{
        backgroundColor: "#EAF1F3",
        minHeight: "100vh",
        marginLeft: "25%"
      }}
      className="d-flex flex-column align-items-center"
    >
      <TitleBar />
      <Header />
      <Footer />
      {showOverlay && (
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundColor: "#0000003f"
          }}
          onClick={() => toggleUserSettingFalse()}
        />
      )}
    </Col>
  );
};

export default MainArea;
