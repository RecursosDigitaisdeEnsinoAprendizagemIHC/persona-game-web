import React from "react";
import { useRouter } from "next/router";
import { faBook, faPlay, faTrophy } from "@fortawesome/free-solid-svg-icons";

// components
import MainMenuItem from "../MainMenuItem/MainMenuItem";
import { MainMenuContainer } from "./MainMenu.style";

const MainMenu = () => {
  const router = useRouter();

  return (
    <MainMenuContainer>
      <MainMenuItem
        icon={faBook}
        name="Conteúdo"
        onClick={() => router.push("/persona-content")}
      />
      <MainMenuItem
        icon={faPlay}
        name="Jogar"
        onClick={() => router.push("/phases-menu")}
      />
      <MainMenuItem
        icon={faTrophy}
        name="Prêmios"
        onClick={() => router.push("/rewards")}
      />
    </MainMenuContainer>
  );
};

export default MainMenu;
