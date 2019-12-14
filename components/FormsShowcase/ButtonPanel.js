import { Fragment } from "react";
import { Button } from "nugget-ui";

export default function ButtonPanel() {
  return (
    <Fragment>
      <Button
        variant={"contained"}
        label={"contained"}
        onClick={() => console.log("contained")}
      />
      <Button
        variant={"outlined"}
        label={"outlined"}
        onClick={() => console.log("outlined")}
      />
      <Button
        variant={"text"}
        label={"text"}
        onClick={() => console.log("text")}
      />
    </Fragment>
  );
}
