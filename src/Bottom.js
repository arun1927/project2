import React from "react";
import "./Bottom.css";
import DashboardIcon from "@material-ui/icons/Dashboard";
function Bottom() {
  return (
    <div className="bottom">
      <div className="bottom_option">
        <h3>DRINKS</h3>
        <h3>LUNCHES</h3>
        <h3>DESSERTS</h3>
        <h3>FRUITS</h3>
        <h3>SNACKS</h3>
        <h3>PIZZA</h3>
        <h3 className="bottom_icon">
          <DashboardIcon />
        </h3>
      </div>
    </div>
  );
}

export default Bottom;
