import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Tooltip } from 'react-tippy';
import { ThemeContext } from "styled-components";

// components
import { HeaderContainer ,TooltipContainer} from "./PageHeader.style";


const PageHeader = ({ onBack, title }) => {
  const theme = useContext(ThemeContext)

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
          </span>
        </Tooltip>
      </TooltipContainer>
      <h2>{title}</h2>
      <div />
    </HeaderContainer>
  );
};

export default PageHeader;
