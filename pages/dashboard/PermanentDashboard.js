import React from "react";
import {
  Dashboard,
  Module,
  DummySmall,
  DummyMedium,
  DummyLarge
} from "nugget-ui";
// import { Dashboard } from "../../src/index";
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
    <Dashboard
      drawerProps={{ anchor: "left" }}
      theme={theme}
      type={"permanent"}
      title={"Permanent Dashboard"}
    >
      <Module index={"DummySmall"} title={"Module 1"} icon={<AddIcon />}>
        <DummySmall />
      </Module>
      <Module index={"DummyMedium"} title={"Module 2"} icon={<AddIcon />}>
        <DummyMedium />
      </Module>
      <Module index={"DummyLarge"} title={"Module 3"} icon={<AddIcon />}>
        <DummyLarge />
      </Module>
    </Dashboard>
  );
}
