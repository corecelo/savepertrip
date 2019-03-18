import React from "react";
import { Container, Row, Col, FormGroup, Label, Input } from "reactstrap";
import { Icon } from "react-icons-kit";
import { ic_compare_arrows } from "react-icons-kit/md";
import "./domesticformstyle.css";
import "react-tabs/style/react-tabs.css";

const DomesticForm = () => {
  const handleRadionChange = e => {
    console.log(e);
  };
  return (
    <React.Fragment>
      <div className="book-text-sp">
        <p>Save on Flights</p>
        <h6 style={{ marginBottom: 30, letterSpacing: 0.5 }}>
          Honest Pricing. Genuine Savings
        </h6>
      </div>

      <div className="form-wrapper-sp">
        <form>
          <div className="d-flex">
            <label className="container-spt">
              One Way
              <input
                type="radio"
                checked="checked"
                name="radio"
                onChange={handleRadionChange}
              />
              <span className="checkmark" />
            </label>
            <label className="container-spt">
              Two City
              <input type="radio" name="radio" />
              <span className="checkmark" />
            </label>
            <label className="container-spt">
              Multi City
              <input type="radio" name="radio" />
              <span className="checkmark" />
            </label>
          </div>

          <Container fluid>
            <Row style={{ marginTop: 10 }}>
              <Col xl="5" className="col-headerLeft-form-spt">
                <FormGroup>
                  <Label for="from" className="lable-header-form-spt">
                    From
                  </Label>
                  <Input
                    type="text"
                    name="from"
                    placeholder="Any worldwide city or airport"
                    className="input-header-spt"
                  />
                </FormGroup>
              </Col>
              <Col
                xl="1"
                className="col-headerLeft-form-spt d-flex justify-content-center align-items-center"
              >
                <div
                  style={{
                    width: 23,
                    height: 23,
                    color: "#022d41",
                    marginTop: 10
                  }}
                >
                  <Icon size={"100%"} icon={ic_compare_arrows} />
                </div>
              </Col>
              <Col xl="5" className="col-headerLeft-form-spt">
                <FormGroup>
                  <Label for="to" className="lable-header-form-spt">
                    To
                  </Label>
                  <Input
                    type="text"
                    name="to"
                    placeholder="Any worldwide city or airport"
                    className="input-header-spt"
                  />
                </FormGroup>
              </Col>
            </Row>
          </Container>

          <Container fluid>
            <Row style={{ marginTop: 5 }}>
              <Col xl="4" className="col-headerLeft-form-spt">
                <FormGroup>
                  <Label for="date" className="lable-header-form-spt">
                    Depart On
                  </Label>
                  <Input
                    type="date"
                    name="date"
                    placeholder="Pick a Date"
                    className="input-header-spt"
                  />
                </FormGroup>
              </Col>
            </Row>
          </Container>

          <Container fluid>
            <Row style={{ marginTop: 5 }}>
              <Col xl="3" className="col-headerLeft-form-spt">
                <FormGroup>
                  <Label for="adults" className="lable-header-form-spt">
                    Adults
                  </Label>
                  <Input
                    type="number"
                    name="adults"
                    placeholder="1"
                    className="input-header-spt"
                  />
                </FormGroup>
              </Col>
              <Col xl="1" />
              <Col xl="3" className="col-headerLeft-form-spt">
                <FormGroup>
                  <Label for="childrens" className="lable-header-form-spt">
                    Childrens
                  </Label>
                  <Input
                    type="number"
                    name="childrens"
                    placeholder="1"
                    className="input-header-spt"
                  />
                </FormGroup>
              </Col>
              <Col xl="1" />
              <Col xl="3" className="col-headerLeft-form-spt">
                <FormGroup>
                  <Label for="infants" className="lable-header-form-spt">
                    Infants
                  </Label>
                  <Input
                    type="number"
                    name="infants"
                    placeholder="1"
                    className="input-header-spt"
                  />
                </FormGroup>
              </Col>
            </Row>
          </Container>
          <div className="divider-header-wrapper-spt">
            <div className="divider-header-left-spt" />
          </div>
          <div className="button-header-wrapper-sp d-flex justify-content-end">
            <button
              type="submit"
              className="btn btn-primary button-header-spt mt-2"
            >
              Search Flights
            </button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default DomesticForm;
