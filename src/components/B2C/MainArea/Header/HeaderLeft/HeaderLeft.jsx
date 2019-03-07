import React from "react";
import "./headerleftstyle.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Container, Row, Col, FormGroup, Label, Input } from "reactstrap";
import { Icon } from "react-icons-kit";
import { ic_compare_arrows } from "react-icons-kit/md/ic_compare_arrows";
import "react-tabs/style/react-tabs.css";

const HeaderLeft = () => {
  const handleRadionChange = e => {
    console.log(e);
  };
  return (
    <div className="headerleft-wrapper-spt">
      <Tabs className="tab-spt">
        <TabList>
          <Tab>Domestic</Tab>
          <Tab>International</Tab>
        </TabList>

        <TabPanel>
          <div className="book-text-sp">
            <p>Book Domestic Flight Tickets</p>
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
                        color: "#022d41"
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
                <div className="divider-header-spt" />
              </div>
              <div className="button-header-wrapper-sp d-flex justify-content-end">
                <button
                  type="submit"
                  className="btn btn-primary button-header-spt mt-2"
                >
                  Search Flight
                </button>
              </div>
            </form>
          </div>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default HeaderLeft;
