import { Fragment } from "react";
import { Button } from "nugget-ui";

export default function DashboardShowcase(props) {
  const changeDashboard = type => {
    props.changeDashboard(type);
  };

  return (
    <Fragment>
      <Button
        label={"Permanent Dashboard"}
        onClick={() => changeDashboard("permanent")}
      />
      <Button
        label={"Persistent Dashboard"}
        onClick={() => changeDashboard("persistent")}
      />
      <Button
        label={"Temporary Dashboard"}
        onClick={() => changeDashboard("temporary")}
      />
    </Fragment>
  );
}
