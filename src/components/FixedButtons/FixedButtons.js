import React from "react";
import { SettingsIcon } from "../../../public/settings";

import {
  FixedButtonsContainer,
  SettingsButton,
  HelpButton,
} from "./FixedButtons.style";

const FixedButtons = () => {
  return (
    <FixedButtonsContainer>
      <SettingsButton>
        <SettingsIcon />
      </SettingsButton>
      <HelpButton>
        <img src="/help.svg" alt="" />
      </HelpButton>
    </FixedButtonsContainer>
  );
};

export default FixedButtons;
