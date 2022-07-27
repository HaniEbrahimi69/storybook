import React from "react";
import { add, action, text } from "stories";
import Button from "./index";

const stories = [
  {
    name: "with text",
    render: () => <Button>{text("Children", "Hello Word")}</Button>,
    notes: ""
  },
  {
    name: "with color",
    render: () => (
      <Button color={text("Color", "primary")}>
        {text("children", "Hello Word")}
      </Button>
    ),
    notes: ""
  },
  {
    name: "with event",
    render: () => (
      <Button onClick={action("onClick")} color={text("Color", "primary")}>
        {text("children", "Hello Word")}
      </Button>
    ),
    notes: ""
  },
  {
    name: "with variant text",
    render: () => (
      <Button variant="text">{text("Children", "Hello Word")}</Button>
    ),
    notes: ""
  }
];

add("Microcomponents/Button", stories);

export default stories;
