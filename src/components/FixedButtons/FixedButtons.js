import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";
import { Tooltip } from "react-tippy";
import { SettingsIcon } from "../../../public/settings";

import {
  FixedButtonsContainer,
  SettingsButton,
  HelpButton,
} from "./FixedButtons.style";

const FixedButtons = () => {
  const router = useRouter();
  const { preferences } = useSelector((state) => state.preferences);

  const highContrast = preferences.find(pref => pref.name === "Auto contraste")

  console.log(highContrast, preferences)

  return (
    <FixedButtonsContainer>
      <Tooltip
        title="Ir para configurações"
        position="bottom"
        animation="fade"
        theme="transparent"
        distance={2}
      >
        <SettingsButton onClick={() => router.push("/settings")}>
        <SettingsIcon />
      </SettingsButton>
      </Tooltip>
      <Tooltip
        title="Abrir ajuda"
        position="bottom"
        animation="fade"
        theme="transparent"
        distance={2}
      >
        <HelpButton>
          <img src="/help.svg" alt="" />
        </HelpButton>
      </Tooltip>
    </FixedButtonsContainer>
  );
};

export default FixedButtons;
