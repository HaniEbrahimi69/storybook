import React from "react";
import { add, text } from "stories";
import Typography from "./index";

const stories = [
  {
    name: "with text",
    render: () => <Typography>{text("Children", "Hello Word")}</Typography>,
    notes: ""
  },
  {
    name: "with display",
    render: () => (
      <Typography display={text("Display", "block")}>
        {text("Children", "Hello Word")}
      </Typography>
    ),
    notes: ""
  },

  {
    name: "with align",
    render: () => (
      <Typography align={text("Align", "center")}>
        {text("Children", "Hello Word")}
      </Typography>
    ),
    notes: ""
  },
  {
    name: "with variant",
    render: () => (
      <Typography
        variant={text("variant", "h5")}
        align={text("Align", "center")}
      >
        {text("Children", "Hello Word")}
      </Typography>
    ),
    notes: ""
  },
  {
    name: "with Color",
    render: () => (
      <Typography
        color={text("Color", "error")}
        variant={text("variant", "h5")}
        align={text("Align", "center")}
      >
        {text("Children", "Hello Word")}
      </Typography>
    ),
    notes: ""
  }
];

add("Microcomponents/Typography", stories);

export default stories;
