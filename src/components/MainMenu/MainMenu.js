import React from "react";
import { useRouter } from "next/router";
import { faBook, faPlay, faTrophy } from "@fortawesome/free-solid-svg-icons";
import { Tooltip } from 'react-tippy';
// components
import MainMenuItem from "../MainMenuItem/MainMenuItem";
import {
  MainMenuContainer,
  MenuGamePresentation,
  MenuActions
} from "./MainMenu.style";

const MainMenu = () => {
  const router = useRouter();

  return (
    <MainMenuContainer>
      <MenuGamePresentation>
        <h1>Persona Design Game</h1>
        <p>Teste seus conhecimentos sobre personas</p>
        <img src="/personas.png" alt="" />
      </MenuGamePresentation>
      <MenuActions>
        <Tooltip
          title="Resumo do conteúdo exigido para o jogo"
          position="bottom"
          animation="fade"
          theme="transparent"
          distance={2}
        >
          <MainMenuItem
            icon={faBook}
            name="Conteúdo"
            onClick={() => router.push("/summary")}
          />
        </Tooltip>
        <Tooltip
          title="Iniciar jogo"
          position="bottom"
          animation="fade"
          theme="transparent"
          distance={2}
        >
          <MainMenuItem
            icon={faPlay}
            name="Jogar"
            onClick={() => router.push("/phases-menu")}
          />
        </Tooltip>
        <Tooltip
          title="Exibir seus prêmios"
          position="bottom"
          animation="fade"
          theme="transparent"
          distance={2}
        >
          <MainMenuItem
            icon={faTrophy}
            name="Prêmios"
            onClick={() => router.push("/rewards")}
          />
        </Tooltip>
      </MenuActions>
    </MainMenuContainer>
  );
};

export default MainMenu;
