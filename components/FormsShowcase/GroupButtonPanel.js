import { ButtonGroup } from "nugget-ui";

export default function GroupButtonPanel(props) {
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

  return (
    <ButtonGroup
      groupName={"example"}
      variant={"contained"}
      buttons={groupButtons}
    />
  );
}
