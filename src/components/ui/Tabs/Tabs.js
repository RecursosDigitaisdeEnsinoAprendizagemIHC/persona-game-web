import React from "react";
import { Tooltip } from 'react-tippy';
// components
import { TabContainer, Tab } from "./Tabs.styles";

const Tabs = ({ items, value, onChange, children }) => {
  return (
    <>
      <TabContainer>
        {items.map((item, index) => (
          <Tooltip
          title={item.tooltipText}
          position="bottom"
          animation="fade"
          theme="transparent"
          distance={2}
          key={item.name}
        >
          <Tab
            key={item.name}
            active={value === index}
            onClick={() => onChange(index)}
          >
            {item.name}
          </Tab>
          </Tooltip>
        )
        )}
      </TabContainer>
      {children}
    </>
  );
};

export default Tabs;
