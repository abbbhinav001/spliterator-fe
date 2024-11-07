// import React from "react";

// const Tab = ({ label, onClick, isActive }) => (
//   <div className={`tab ${isActive ? "active" : ""}`} onClick={onClick}>
//     {label}
//   </div>
// );

// export default Tab;

// Filename - Tab.js

import React from "react";
import "../../../pages/Home/Home.css";

const Tab = ({ label, onClick, isActive }) => {
  return (
    <div className={`tablink ${isActive ? "active" : ""}`} onClick={onClick}>
      {label}
    </div>
  );
};

export default Tab;
