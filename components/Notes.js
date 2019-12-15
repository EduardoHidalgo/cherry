import { Text } from "nugget-ui";

export default function Notes(props) {
  const { data } = props;

  return data
    ? data.map((n, i) => (
        <div key={`note${i}`}>
          <Text>{n.title}</Text>
          <Text>{n.body}</Text>
          <Text>{n.date}</Text>
        </div>
      ))
    : null;
}
