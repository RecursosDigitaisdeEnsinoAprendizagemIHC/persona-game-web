import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// components
import { ItemContainer, ItemText } from "./MainMenuItem.style";

// constants
import theme from "../../constants/theme";

const MainMenuItem = ({ icon, name, onClick }) => {
  return (
    <ItemContainer onClick={onClick}>
      <FontAwesomeIcon icon={icon} size="4x" color={theme.primary} />
      <ItemText>{name}</ItemText>
    </ItemContainer>
  );
};

export default MainMenuItem;
