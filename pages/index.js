import React, { useState, useEffect, Fragment } from "react";
import { Dashboard, Module } from "nugget-ui";
import DashboardShowcase from "../components/DashboardShowcase";
import FormsShowcase from "../components/FormsShowcase";

/* Icons */
import DashboardIcon from "@material-ui/icons/Dashboard";
import CheckBox from "@material-ui/icons/CheckBox";
import Notes from "../components/Notes";
import DummyFetch from "../components/DummyFetch";

const theme = {
  appBar: {
    backgroundColor: "black"
  },
  appBarTitle: {
    color: "white"
  }
};

export default function Index() {
  /* Estado del tipo de dashboard */
  const [dashboardType, setDashboardType] = useState("permanent");

  /* Función que maneja el dashboard rendereado */
  const changeDashboard = type => {
    setDashboardType(type);
  };

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

  const permanentDashboard = (
    <Dashboard
      title={"Nugget-UI Library"}
      type={"permanent"}
      theme={theme}
      drawerProps={{ anchor: "left" }}
    >
      {modules.map(m => m)}
    </Dashboard>
  );

  const persistentDashboard = (
    <Dashboard
      title={"Nugget-UI Library"}
      type={"persistent"}
      theme={theme}
      drawerProps={{ anchor: "left" }}
    >
      {modules.map(m => m)}
    </Dashboard>
  );

  const temporaryDashboard = (
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

  return (
    <Fragment>
      {dashboardType === "permanent" && permanentDashboard}
      {dashboardType === "persistent" && persistentDashboard}
      {dashboardType === "temporary" && temporaryDashboard}
    </Fragment>
  );
}
