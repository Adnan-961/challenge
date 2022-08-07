import React from "react";
import "./styles.scss";
import Accordion from "react-bootstrap/Accordion";
import {data} from "./data"
export default function CategoriesNav() {

  return (
    <>
      <div className="group">
        {data.map((item, i) => (
          <div key={i} className="item">
            <span>{item}</span>
          </div>
        ))}
      </div>
      <Accordion className="mobile__nav">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Menu</Accordion.Header>
          <Accordion.Body>
            {data.map((item, i) => (
              <div key={i} className="item">
                <span>{item}</span>
              </div>
            ))}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}
