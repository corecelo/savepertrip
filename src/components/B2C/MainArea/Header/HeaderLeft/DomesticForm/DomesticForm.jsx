import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { useActions } from "easy-peasy";
import classnames from "classnames";
import { Container, Row, Col, FormGroup, Input } from "reactstrap";
import { Icon } from "react-icons-kit";
import { ic_compare_arrows } from "react-icons-kit/md";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import "./domesticformstyle.css";
import "react-tabs/style/react-tabs.css";

const DomesticForm = props => {
  // const [DirectFlight, setDirectFlight] = useState(false);
  // const [OneStopFlight, setOneStopFlight] = useState(false);
  let [JourneyType, setJourneyType] = useState(1);
  const [Origin, setOrigin] = useState("");
  const [Destination, setDestination] = useState("");
  const [FlightCabinClass, setFlightCabinClass] = useState(1);
  const [PreferredDepartureTime, setPreferredDepartureTime] = useState("");
  const [PreferredArrivalTime, setPreferredArrivalTime] = useState("");
  const [AdultCount, setAdultCount] = useState(0);
  const [ChildCount, setChildCount] = useState(0);
  const [InfantCount, setInfantCount] = useState(0);

  // State for zindex
  const [fromInput, setFromInput] = useState(false);
  const [toInput, setToInput] = useState(false);

  const getSearch = useActions(actions => actions.search.getSearch);
  const toggleShowOverlayTrue = useActions(
    actions => actions.ui.toggleShowOverlayTrue
  );

  // const journeyOptions = [
  //   "One Way",
  //   "Return",
  //   "Multi Stop",
  //   "Advance",
  //   "Special Return"
  // ];
  // const defaultIndex = --JourneyType;
  // const defaultJourney = journeyOptions[defaultIndex];

  const cabinOptions = [
    "All",
    "Economy",
    "Premium Economy",
    "Business",
    "Premium Business",
    "First"
  ];

  const defaultIndex = FlightCabinClass - 1;
  const defaultCabin = cabinOptions[defaultIndex];

  const handleSubmit = e => {
    e.preventDefault();
    const searchReq = {
      EndUserIp: "",
      TokenId: "",
      AdultCount: AdultCount,
      ChildCount: ChildCount,
      InfantCount: InfantCount,
      // DirectFlight: DirectFlight,
      // OneStopFlight: OneStopFlight,
      JourneyType: JourneyType,
      PreferredAirlines: null,
      Segments: [
        {
          Origin: Origin,
          Destination: Destination,
          FlightCabinClass: FlightCabinClass,
          PreferredDepartureTime: PreferredDepartureTime,
          PreferredArrivalTime: PreferredArrivalTime
        }
      ]
    };
    const payload = {
      history: props.history,
      searchReq: searchReq
    };
    console.log(payload);
    getSearch(payload);
  };

  // const handleDirectFlight = e => {
  //   if (e.target.value === "on") {
  //     setDirectFlight(true);
  //     setOneStopFlight(false);
  //   }
  // };

  // const handleOneStopFlight = e => {
  //   if (e.target.value === "on") {
  //     setDirectFlight(false);
  //     setOneStopFlight(true);
  //   }
  // };

  const handleJourneyType = e => {
    console.log(e.target.value);
    if (e.target.value === "One Way") {
      setJourneyType(1);
    } else if (e.target.value === "Return") {
      setJourneyType(2);
    } else if (e.target.value === "Multi Stop") {
      setJourneyType(3);
    } else if (e.target.value === "Advance") {
      setJourneyType(4);
    } else if (e.target.value === "Special Return") {
      setJourneyType(5);
    }
  };

  const handleOrigin = e => {
    setOrigin(e.target.value);
  };

  const handleDestination = e => {
    setDestination(e.target.value);
  };

  const handleFocus = e => {
    toggleShowOverlayTrue();
    if (e.target.name === "from") {
      setFromInput(true);
      setToInput(false);
      return false;
    }

    if (e.target.name === "to") {
      setToInput(true);
      setFromInput(false);
    }
  };

  const handleFlightCabinClass = e => {
    if (e.value === "All") {
      setFlightCabinClass(1);
    } else if (e.value === "Economy") {
      setFlightCabinClass(2);
    } else if (e.value === "Premium Economy") {
      setFlightCabinClass(3);
    } else if (e.value === "Business") {
      setFlightCabinClass(4);
    } else if (e.value === "Premium Business") {
      setFlightCabinClass(5);
    } else if (e.value === "First") {
      setFlightCabinClass(6);
    }
  };

  const handleDepartDate = e => {
    const date = e.target.value + "T00: 00: 00";
    setPreferredDepartureTime(date);
    setPreferredArrivalTime(date);
  };

  // const handleArrivalDate = e => {
  //   const date = e.target.value + "T00: 00: 00";
  //   setPreferredArrivalTime(date);
  // };

  return (
    <React.Fragment>
      <div className="book-text-sp text-center text-xl-left">
        <p>Save on Flights</p>
        <h6 style={{ marginBottom: 30, letterSpacing: 0.5 }}>
          Honest Pricing. Genuine Savings
        </h6>
      </div>

      <div className="form-wrapper-sp">
        <form onSubmit={handleSubmit}>
          {/* <FormGroup>
            <Label for="flight-type" className="label-header-form-spt">
              Type of Flight
            </Label>
            <div className="d-flex">
              <label className="container-spt">
                Direct Flight
                <input
                  type="radio"
                  name="radio"
                  onChange={handleDirectFlight}
                />
                <span className="checkmark" />
              </label>
              <label className="container-spt">
                One Stop Flight
                <input
                  type="radio"
                  name="radio"
                  onChange={handleOneStopFlight}
                />
                <span className="checkmark" />
              </label>
            </div>
          </FormGroup> */}

          <Container fluid>
            <Row style={{ marginTop: 10 }}>
              <Col xl="5" className="col-headerLeft-form-spt">
                <FormGroup>
                  {/* <Label for="journey-type" className="label-header-form-spt">
                    Way of Journey
                  </Label> */}
                  <div className="d-flex">
                    <label className="container-spt">
                      OneWay
                      <input
                        type="radio"
                        name="radio"
                        value="One Way"
                        onChange={handleJourneyType}
                      />
                      <span className="checkmark" />
                    </label>
                    <label className="container-spt">
                      Return
                      <input
                        type="radio"
                        name="radio"
                        value="Return"
                        onChange={handleJourneyType}
                      />
                      <span className="checkmark" />
                    </label>
                    <label className="container-spt">
                      MultiStop
                      <input
                        type="radio"
                        name="radio"
                        value="Multi Stop"
                        onChange={handleJourneyType}
                      />
                      <span className="checkmark" />
                    </label>
                    <label className="container-spt">
                      Advance
                      <input
                        type="radio"
                        name="radio"
                        value="Advance"
                        onChange={handleJourneyType}
                      />
                      <span className="checkmark" />
                    </label>
                    <label className="container-spt">
                      SpecialReturn
                      <input
                        type="radio"
                        name="radio"
                        value="Special Return"
                        onChange={handleJourneyType}
                      />
                      <span className="checkmark" />
                    </label>
                  </div>
                </FormGroup>
              </Col>
            </Row>
          </Container>

          <Container fluid>
            <Row style={{ marginTop: 10 }}>
              <Col xl="5" className="col-headerLeft-form-spt">
                <FormGroup>
                  {/* <Label for="from" className="label-header-form-spt">
                    From
                  </Label> */}
                  <Input
                    type="text"
                    name="from"
                    // placeholder="Any worldwide city or airport"
                    placeholder="Flying from"
                    className={classnames("input-header-spt", {
                      "input-pop-spt": fromInput
                    })}
                    onChange={handleOrigin}
                    onFocus={handleFocus}
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
                    marginTop: -20
                  }}
                >
                  <Icon size={"100%"} icon={ic_compare_arrows} />
                </div>
              </Col>
              <Col xl="5" className="col-headerLeft-form-spt">
                <FormGroup>
                  {/* <Label for="to" className="label-header-form-spt">
                    To
                  </Label> */}
                  <Input
                    type="text"
                    name="to"
                    // placeholder="Any worldwide city or airport"
                    placeholder="Flying To"
                    className={classnames("input-header-spt", {
                      "input-pop-spt": toInput
                    })}
                    onChange={handleDestination}
                    onFocus={handleFocus}
                  />
                </FormGroup>
              </Col>
            </Row>
          </Container>

          <Container fluid>
            <Row style={{ marginTop: 10 }}>
              <Col xl="11" className="col-headerLeft-form-spt">
                <FormGroup>
                  {/* <Label for="cabin-type" className="label-header-form-spt">
                    Cabin Type
                  </Label> */}
                  <Dropdown
                    options={cabinOptions}
                    placeholder="Cabin Class Type"
                    controlClassName="domestic-form-dropdown-spt"
                    placeholderClassName="domestic-form-dropdown-placeholder-spt"
                    menuClassName="domestic-form-dropdown-placeholder-spt"
                    onChange={handleFlightCabinClass}
                    value={defaultCabin}
                  />
                </FormGroup>
              </Col>
            </Row>
          </Container>

          <Container fluid>
            <Row style={{ marginTop: 5 }}>
              <Col xl="6" className="col-headerLeft-form-spt d-flex">
                <FormGroup className="mr-5">
                  {/* <Label for="date" className="label-header-form-spt">
                    Depart On
                  </Label> */}
                  <Input
                    type="date"
                    name="date"
                    placeholder="Pick a Date"
                    className="input-header-spt"
                    onChange={handleDepartDate}
                    style={{ width: "100%" }}
                  />
                </FormGroup>
              </Col>
            </Row>
          </Container>

          <Container fluid>
            <Row style={{ marginTop: 5 }}>
              <Col xl="3" className="col-headerLeft-form-spt">
                <FormGroup>
                  {/* <Label for="adults" className="label-header-form-spt">
                    Adults
                  </Label> */}
                  <Input
                    type="number"
                    name="adults"
                    placeholder="Adults"
                    className="input-header-spt"
                    onChange={event => setAdultCount(+event.target.value)}
                  />
                </FormGroup>
              </Col>
              <Col xl="1" />
              <Col xl="3" className="col-headerLeft-form-spt">
                <FormGroup>
                  {/* <Label for="childrens" className="label-header-form-spt">
                    Children
                  </Label> */}
                  <Input
                    type="number"
                    name="childrens"
                    placeholder="Children"
                    className="input-header-spt"
                    onChange={event => setChildCount(+event.target.value)}
                  />
                </FormGroup>
              </Col>
              <Col xl="1" />
              <Col xl="3" className="col-headerLeft-form-spt">
                <FormGroup>
                  {/* <Label for="infants" className="label-header-form-spt">
                    Infants
                  </Label> */}
                  <Input
                    type="number"
                    name="infants"
                    placeholder="Infants"
                    className="input-header-spt"
                    onChange={event => setInfantCount(+event.target.value)}
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

export default withRouter(DomesticForm);
