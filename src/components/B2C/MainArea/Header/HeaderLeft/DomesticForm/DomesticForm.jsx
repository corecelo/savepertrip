import React from "react";
import { Container, Row, Col, FormGroup, Label, Input } from "reactstrap";
import { Icon } from "react-icons-kit";
import { ic_compare_arrows } from "react-icons-kit/md";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import "./domesticformstyle.css";
import "react-tabs/style/react-tabs.css";

const DomesticForm = () => {
  const journeyOptions = ["One Way", "Return", "Multi Stop", "Advance"];
  const defaultJourney = journeyOptions[0];

  const cabinOptions = [
    "Economy",
    "Premium Economy",
    "Business",
    "Premium Business",
    "First"
  ];
  const defaultCabin = cabinOptions[0];

  const handleRadionChange = e => {
    console.log(e);
  };
  return (
    <React.Fragment>
      <div className="book-text-sp text-center text-xl-left">
        <p>Save on Flights</p>
        <h6 style={{ marginBottom: 30, letterSpacing: 0.5 }}>
          Honest Pricing. Genuine Savings
        </h6>
      </div>

      <div className="form-wrapper-sp">
        <form>
          <FormGroup>
            <Label for="flight-type" className="lable-header-form-spt">
              Type of Flight
            </Label>
            <div className="d-flex">
              <label className="container-spt">
                Direct Flight
                <input
                  type="radio"
                  checked="checked"
                  name="radio"
                  onChange={handleRadionChange}
                />
                <span className="checkmark" />
              </label>
              <label className="container-spt">
                One Stop Flight
                <input type="radio" name="radio" />
                <span className="checkmark" />
              </label>
            </div>
          </FormGroup>

          <Container fluid>
            <Row style={{ marginTop: 10 }}>
              <Col xl="5" className="col-headerLeft-form-spt">
                <FormGroup>
                  <Label for="journey-type" className="lable-header-form-spt">
                    Way of Journey
                  </Label>
                  <Dropdown
                    options={journeyOptions}
                    placeholder="Select Option"
                    controlClassName="domestic-form-dropdown-spt"
                    placeholderClassName="domestic-form-dropdown-placeholder-spt"
                    menuClassName="domestic-form-dropdown-placeholder-spt"
                    value={defaultJourney}
                  />
                </FormGroup>
              </Col>
            </Row>
          </Container>

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
            <Row style={{ marginTop: 10 }}>
              <Col xl="5" className="col-headerLeft-form-spt">
                <FormGroup>
                  <Label for="cabin-type" className="lable-header-form-spt">
                    Cabin Type
                  </Label>
                  <Dropdown
                    options={cabinOptions}
                    placeholder="Select Option"
                    controlClassName="domestic-form-dropdown-spt"
                    placeholderClassName="domestic-form-dropdown-placeholder-spt"
                    menuClassName="domestic-form-dropdown-placeholder-spt"
                    value={defaultCabin}
                  />
                </FormGroup>
              </Col>
            </Row>
          </Container>

          <Container fluid>
            <Row style={{ marginTop: 5 }}>
              <Col xl="4" className="col-headerLeft-form-spt d-flex">
                <FormGroup className="mr-5">
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
                <FormGroup>
                  <Label for="date" className="lable-header-form-spt">
                    Arrival On
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
                    Children
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
