import React from "react";
import "./Tag.css";

export default function Tag({ tag }) {
  const classNames = `tag ${tag === "admin" ? "Tag--highlight" : ""}`;

  return <li className={classNames}>{tag}</li>;
}
