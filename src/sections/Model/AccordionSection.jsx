import React from "react";
import Accordion from "./Accordion";
import { data } from "./AccordionData";
export default function AccordionSection() {
  return (
    <div className="accordion__section">
      {data.map((el) => (
        <Accordion name={el.name} image={el.image} key={el.id} />
      ))}
    </div>
  );
}
