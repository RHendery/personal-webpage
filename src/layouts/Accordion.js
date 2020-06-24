import React, { useState, useRef } from 'react';
import Chevron from '../components/Chevron';

function Accordion(props) {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("accordion_icon");

  const citation = useRef(null);
  const content = useRef(null);
  const url = useRef(null);

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
    setRotateState(
      setActive === "active" ? "accordion_icon" : "accordion_icon rotate"
    );
  }

  return (
    <div className="accordion_section">
      <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
        <p className="accordion_title is-size-4 has-text-weight-medium">{props.title}</p>
        <Chevron className={`${setRotate}`} width={10} fill={"#777"} />
      </button>
      <div
        ref={citation}
        ref={url}
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className="accordion_content"
      >
        <div
          className="accordion_citation is-italic"
          dangerouslySetInnerHTML={{ __html: props.citation }}
        />
        <div className="accordion_url">
          <a href={props.url} target="blank"
            dangerouslySetInnerHTML={{ __html: props.url }}
          />
        </div>
        <div
          className="accordion_text"
          dangerouslySetInnerHTML={{ __html: props.content }}
        />
      </div>
    </div>
  );
}

export default Accordion;
