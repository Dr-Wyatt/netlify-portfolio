import React from "react";
import { SectionInterface } from "../Interfaces/section";

const Section: React.FC<SectionInterface> = ({ title, subtitle, dark, id }) => {
  return (
    <div id={id}>
      {title}
      <div>{subtitle}</div>
    </div>
  );
};

export default Section;
