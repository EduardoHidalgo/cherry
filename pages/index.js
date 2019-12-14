import React, { useState, useEffect } from "react";
import { Dashboard, Module } from "nugget-ui";
import DashboardShowcase from "../components/DashboardShowcase";
import FormsShowcase from "../components/FormsShowcase";

/* Icons */
import DashboardIcon from "@material-ui/icons/Dashboard";
import CheckBox from "@material-ui/icons/CheckBox";

const theme = {
  appBar: {
    backgroundColor: "black"
  },
  appBarTitle: {
    color: "white"
  }
};

export default function Index() {
  const [dashboardType, setDashboardType] = useState("temporary");

  const changeDashboard = type => {
    setDashboardType(type);
  };

  useEffect(() => {
    console.log(dashboardType);
  }, [dashboardType]);

  const modules = [
    <Module
      key={"dashboards"}
      index={"dashboards"}
      title={"Dashboards"}
      icon={<DashboardIcon />}
    >
      <DashboardShowcase changeDashboard={changeDashboard} />
    </Module>,
    <Module
      key={"formControls"}
      index={"formControls"}
      title={"Form Controls"}
      icon={<CheckBox />}
    >
      <FormsShowcase />
    </Module>
  ];

  const DashboardRender = () => {
    switch (dashboardType) {
      case "permanent":
        return (
          <Dashboard
            title={"Nugget-UI Library"}
            type={"permanent"}
            theme={theme}
            drawerProps={{ anchor: "left" }}
          >
            {modules.map(m => m)}
          </Dashboard>
        );
      case "persistent":
        return (
          <Dashboard
            title={"Nugget-UI Library"}
            type={"persistent"}
            theme={theme}
            drawerProps={{ anchor: "left" }}
          >
            {modules.map(m => m)}
          </Dashboard>
        );
      case "temporary":
        return (
          <Dashboard
            title={"Nugget-UI Library"}
            type={"temporary"}
            theme={theme}
            drawerProps={{
              anchor: "left",
              elevation: 16,
              transitionDuration: 300
            }}
          >
            {modules.map(m => m)}
          </Dashboard>
        );
    }
  };

  return DashboardRender();
}
