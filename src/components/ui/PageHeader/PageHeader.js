import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

// components
import { HeaderContainer } from "./PageHeader.style";

// constants
import theme from "../../../constants/theme";

const PageHeader = ({ onBack, title }) => {
  return (
    <HeaderContainer>
      <span onClick={() => onBack()}>
        <FontAwesomeIcon icon={faArrowLeft} size="3x" color={theme.primary} />
      </span>
      <span>{title}</span>
    </HeaderContainer>
  );
};

export default PageHeader;
