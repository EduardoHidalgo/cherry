import { Fragment } from "react";
import { FabButton } from "nugget-ui";
import AddBoxIcon from "@material-ui/icons/AddBox";

export default function FabButtonPanel(props) {
  return (
    <Fragment>
      <FabButton
        icon={<AddBoxIcon />}
        onClick={() => console.log("FabButton")}
      />
      <FabButton
        icon={<AddBoxIcon />}
        label={"Extended"}
        onClick={() => console.log("FabButton")}
      />
    </Fragment>
  );
}
