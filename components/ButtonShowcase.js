import { ExpansionPanel } from "../src/index";
import { Fragment } from "react";
import { Button, ButtonGroup, FabButton, IconButton } from "../src/index";
import AddBoxIcon from "@material-ui/icons/AddBox";
import DeleteIcon from "@material-ui/icons/Delete";
import AlarmIcon from "@material-ui/icons/Alarm";

export default function ButtonShowcase(props) {
  const commonButtons = (
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

  const groupButtons = [
    {
      label: "button1",
      onClick: () => console.log("button1")
    },
    { label: "button2", onClick: () => console.log("button2") },
    {
      label: "button3",
      onClick: () => console.log("button3")
    }
  ];

  const group = (
    <ButtonGroup
      groupName={"example"}
      variant={"contained"}
      buttons={groupButtons}
    />
  );

  const fab = (
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

  const iconButton = (
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

  return (
    <ExpansionPanel
      divider
      elements={[
        {
          title: "Button",
          content: commonButtons,
          defaultExpanded: true
        },
        {
          title: "Button Group",
          content: group,
          defaultExpanded: true
        },
        {
          title: "Fab Button",
          content: fab,
          defaultExpanded: true
        },
        {
          title: "Icon Button",
          content: iconButton,
          defaultExpanded: true
        }
      ]}
    />
  );
}
