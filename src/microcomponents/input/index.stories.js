import React from "react";
import { add } from "stories";
import Input from "./index";

const stories = [
  {
    name: "with label",
    render: () => <Input label="test" />,
    notes: ""
  },
  {
    name: "with value",
    render: () => <Input label="test" value="test" />,
    notes: ""
  },
  {
    name: "with onChange",
    render: () => {
      class _ extends React.Component {
        state = {
          value: "test"
        };
        handleChange = event => {
          this.setState({
            value: event.target.value
          });
        };
        render() {
          return (
            <Input
              label="test"
              value={this.state.value}
              onChange={this.handleChange}
            />
          );
        }
      }

      return <_ />;
    },
    notes: ""
  }
];

add("Microcomponents/Input", stories);

export default stories;
