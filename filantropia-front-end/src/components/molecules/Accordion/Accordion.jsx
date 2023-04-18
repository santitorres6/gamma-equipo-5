import React from "react";
import { Collapse } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import "./Accordion.scss";

export const Accordion = (props) => {
  const { Panel } = Collapse;
  const { children } = props;
  return (
    <Collapse
      size="large"
      accordion
      expandIconPosition="end"
      // expandIcon={ArrowIcon}
    >
      {children?.map((element, index) => {
        return (
          <Panel header={element.props.title} key={index}>
            {element}
          </Panel>
        );
      })}
    </Collapse>
  );
};

const ArrowIcon = () => {
  return <FontAwesomeIcon icon={faAngleDown} />;
};
