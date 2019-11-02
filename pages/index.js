import React from "react";
import {
  Dashboard,
  Module,
  DummySmall,
  DummyMedium,
  DummyLarge
} from "nugget-ui";
// import Module from "../src/low/Module/module";
// import Dashboard from "../src/base/DashboardBase";
// import DummyMedium from "../src/dummy/DummyMedium";
// import DummySmall from "../src/dummy/DummySmall";
// import DummyLarge from "../src/dummy/DummyLarge";
import AddIcon from "@material-ui/icons/Add";

export default function Index() {
  return (
    <Dashboard type={"permanent"} title={"Permanent Dashboard"}>
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
