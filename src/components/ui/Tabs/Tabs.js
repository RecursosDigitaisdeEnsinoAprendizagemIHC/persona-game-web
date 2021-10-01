import React from "react";

// components
import { TabContainer, Tab } from "./Tabs.styles";

const Tabs = ({ items, value, onChange, children }) => {
  return (
    <>
      <TabContainer>
        {items.map((item, index) => (
          <Tab
            key={item.name}
            active={value === index}
            onClick={() => onChange(index)}
          >
            {item.name}
          </Tab>
        ))}
      </TabContainer>
      {children}
    </>
  );
};

export default Tabs;
