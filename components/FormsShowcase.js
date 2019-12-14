import { ExpansionPanel } from "nugget-ui";
import ButtonPanel from "./FormsShowcase/ButtonPanel";
import GroupButtonPanel from "./FormsShowcase/GroupButtonPanel";
import FabButtonPanel from "./FormsShowcase/FabButtonPanel";
import IconButtonPanel from "./FormsShowcase/IconButtonPanel";

export default function FormsShowcase(props) {
  return (
    <ExpansionPanel
      divider
      elements={[
        {
          title: "Button",
          content: <ButtonPanel />,
          defaultExpanded: true
        },
        {
          title: "Button Group",
          content: <GroupButtonPanel />,
          defaultExpanded: true
        },
        {
          title: "Fab Button",
          content: <FabButtonPanel />,
          defaultExpanded: true
        },
        {
          title: "Icon Button",
          content: <IconButtonPanel />,
          defaultExpanded: true
        }
      ]}
    />
  );
}
