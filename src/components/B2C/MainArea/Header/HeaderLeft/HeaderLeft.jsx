import React from "react";
import { Route } from "react-router-dom";
import DomesticForm from "./DomesticForm/DomesticForm";
import "./headerleftstyle.css";
import "react-tabs/style/react-tabs.css";
import SearchResult from "./SearchResult/SearchResult";
import { withRouter, Switch } from "react-router-dom";

const HeaderLeft = () => {
  return (
    <div className="headerleft-wrapper-spt px-xl-0 px-lg-5 px-md-5 px-sm-5 px-xs-5">
      <div className="tab-spt">
        <div>
          <Route path="/search" component={SearchResult} />
          <Route exact path="/" component={DomesticForm} />
        </div>
      </div>
    </div>
  );
};

export default withRouter(HeaderLeft);
