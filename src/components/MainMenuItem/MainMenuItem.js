import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// components
import { ItemContainer, ItemText } from "./MainMenuItem.style";

const MainMenuItem = ({ icon, name, onClick }) => {
  return (
    <ItemContainer onClick={onClick}>
      <FontAwesomeIcon icon={icon} size="2x" color={'#fff'} />
      <ItemText>{name}</ItemText>
    </ItemContainer>
  );
};

export default MainMenuItem;
