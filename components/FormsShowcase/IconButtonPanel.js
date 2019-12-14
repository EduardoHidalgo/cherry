import { Fragment } from "react";
import { IconButton } from "nugget-ui";
import AddBoxIcon from "@material-ui/icons/AddBox";
import DeleteIcon from "@material-ui/icons/Delete";
import AlarmIcon from "@material-ui/icons/Alarm";

export default function IconButtonPanel(props) {
  return (
    <Fragment>
      <IconButton
        icon={<AddBoxIcon />}
        onClick={() => console.log("AddBoxIcon")}
      />
      <IconButton
        icon={<AlarmIcon />}
        onClick={() => console.log("AlarmIcon")}
      />
      <IconButton
        icon={<DeleteIcon />}
        onClick={() => console.log("DeleteIcon")}
      />
    </Fragment>
  );
}
