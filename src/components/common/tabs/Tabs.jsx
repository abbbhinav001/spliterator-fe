import React, { useState } from "react";
import Tab from "./Tab";
import "./Tabs.css";

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (index) => {
    setActiveTab(index + 1);
  };

  return (
    <div className="tabs-container">
      <h1>Select a Restaurant</h1>
      {/* <div className="tabs">
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            label={tab.label}
            onClick={() => handleTabClick(index)}
            isActive={index + 1 === activeTab}
          />
        ))}
      </div> */}
      <div className="tabcontent">Tab {activeTab} is Active</div>
    </div>
  );
};

export default Tabs;
