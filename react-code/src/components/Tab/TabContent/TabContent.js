import React from "react";

const TabContent = props => {
  return (
    <div className={`${props.isActive ? "active" : ""}`}>{props.children}</div>
  );
};

export default TabContent;
