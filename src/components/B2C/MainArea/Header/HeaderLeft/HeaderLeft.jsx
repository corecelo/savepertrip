import React from "react";
import DomesticForm from "./DomesticForm/DomesticForm";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./headerleftstyle.css";
import "react-tabs/style/react-tabs.css";

const HeaderLeft = () => {
  return (
    <div className="headerleft-wrapper-spt">
      <Tabs className="tab-spt">
        <TabList>
          <Tab>Domestic</Tab>
          <Tab>International</Tab>
        </TabList>
        <TabPanel>
          <DomesticForm />
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default HeaderLeft;
