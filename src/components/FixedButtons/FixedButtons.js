import { useRouter } from "next/router";
import React from "react";
import { SettingsIcon } from "../../../public/settings";

import {
  FixedButtonsContainer,
  SettingsButton,
  HelpButton,
} from "./FixedButtons.style";

const FixedButtons = () => {
  const router = useRouter();

  return (
    <FixedButtonsContainer>
      <SettingsButton onClick={() => router.push("/settings")}>
        <SettingsIcon />
      </SettingsButton>
      <HelpButton>
        <img src="/help.svg" alt="" />
      </HelpButton>
    </FixedButtonsContainer>
  );
};

export default FixedButtons;
