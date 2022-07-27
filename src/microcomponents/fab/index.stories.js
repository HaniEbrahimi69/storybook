import React from "react";
import { add, text } from "stories";
import Fab from "./index";

const stories = [
  {
    name: "with text",
    render: () => <Fab>{text("Children", "Hello Word")}</Fab>,
    notes: ""
  },
  {
    name: "with color",
    render: () => (
      <Fab color={text("Color", "primary")}>{text("children", "Hello Word")}</Fab>
    ),
    notes: ""
  }
];

add("Microcomponents/Fab", stories);

export default stories;
