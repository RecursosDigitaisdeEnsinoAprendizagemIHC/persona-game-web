import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Tooltip } from 'react-tippy';
// components
import { HeaderContainer ,TooltipContainer} from "./PageHeader.style";

// constants
import theme from "../../../constants/theme";

const PageHeader = ({ onBack, title }) => {
  return (
    <HeaderContainer>
      <TooltipContainer>
          <Tooltip 
          title="Voltar para página anterior"
          position="bottom"
          animation="fade"
          theme="transparent"
          distance={2}
        >
          <span onClick={() => onBack()}>
            <FontAwesomeIcon icon={faArrowLeft} size="3x" color={theme.primary} />
            <h3>Voltar</h3>
          </span>
        </Tooltip>
      </TooltipContainer>
      <h2>{title}</h2>
      <div />
    </HeaderContainer>
  );
};

export default PageHeader;
