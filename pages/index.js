import React from "react";
// import {
//   Dashboard,
//   Module,
//   DummySmall,
//   DummyMedium,
//   DummyLarge
// } from "nugget-ui";
import Module from "../src/dashboard/low/module/Module";
import Dashboard from "../src/dashboard/base/DashboardBase";
import DummyMedium from "../src/utils/dummy/DummyMedium";
import DummySmall from "../src/utils/dummy/DummySmall";
import DummyLarge from "../src/utils/dummy/DummyLarge";
import AddIcon from "@material-ui/icons/Add";

const theme = {
  appBar: {
    backgroundColor: "black"
  },
  appBarTitle: {
    color: "white"
  }
};

export default function Index() {
  return (
    <Dashboard theme={theme} type={"temporary"} title={"Permanent Dashboard"}>
      <Module key={"DummySmall"} title={"Module 1"} icon={<AddIcon />}>
        <DummySmall />
      </Module>
      <Module key={"DummyMedium"} title={"Module 2"} icon={<AddIcon />}>
        <DummyMedium />
      </Module>
      <Module key={"DummyLarge"} title={"Module 3"} icon={<AddIcon />}>
        <DummyLarge />
      </Module>
    </Dashboard>
  );
}
