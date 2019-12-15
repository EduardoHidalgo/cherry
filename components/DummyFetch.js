import React from "react";
import { Paper, Text, Fetching } from "nugget-ui";
import Notes from "./Notes";
import Progress from "./Progress";

export default function DummyFetch() {
  const url = "http://localhost:5000/api/firstexample";
  const fallback = <Progress />;
  const fault = <h1>Error loading fetch...</h1>;

  const params = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    }
  };

  return (
    <Paper>
      <Text>This is a sheet of paper.</Text>
      <Fetching url={url} params={params} fallback={fallback} fault={fault}>
        <Notes />
      </Fetching>
    </Paper>
  );
}
