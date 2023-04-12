import { Box, MenuItem, Modal, Popper, Select, Slider, Typography } from "@material-ui/core";
import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import { Tooltip } from "react-tippy";
import { ThemeContext } from "styled-components";
import { CloseIcon } from "../../../public/close";
import { PauseIcon } from "../../../public/pause";
import { ResumeIcon } from "../../../public/resume";
import { SettingsIcon } from "../../../public/settings";
import { SpeakIcon } from "../../../public/speak";

import { useSpeachSynthesisApi } from "../../hooks/useSpeachSynthesisApi.js";

import {
  FixedButtonsContainer,
  SettingsButton,
  HelpButton
} from "./FixedButtons.style";

const FixedButtons = () => {
  const [openHelpModal, setOpenHelpModal] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const {
    rate,
    volume,
    speak,
    pause,
    resume,
    changeRate,
    changeVolume
  } = useSpeachSynthesisApi();

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  const router = useRouter();
  const theme = useContext(ThemeContext)

  const helpContent = [
    {
      title: 'Fases:',
      description: "Cada fase possui cinco questões que podem variar entre múltiplas escolhas ou verdadeiro-falso."
    },
    {
      title: 'Perguntas:',
      description: "Selecione uma alternativa e confirme para receber um feedback se a sua resposta está certa ou errada além de uma justificativa."
    },
    {
      title: 'Recompensas:',
      description: "As recompensas de cards de personas são desbloqueadas em cada etapa completa. Você precisa atingir a quantidade mínima de acertos para finalizar a fase com sucesso."
    }
  ]

  const textToSpeak = helpContent.reduce((acc, crr) => {
    return acc += `${crr.title} ${crr.description} `
  }, 'Saiba como funciona o Persona Design Game.    ')

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 900,
    bgcolor: theme.primaryBackground,
    boxShadow: 24,
    borderRadius: 12,
    p: 4,
    border: `2px solid ${theme.white}`,
    color: theme.black
  };

  const speakStyles = {
    border: 1,
    p: '4px 12px',
    bgcolor: theme.questionBackground,
    borderRadius: '4px',
    display: 'flex',
    gap: '16px',
  }

  const handleClick = (event) => {
    speak(textToSpeak)

    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleChangePaused = () => {
    isPaused ? resume() : pause()

    setIsPaused(paused => !paused)
  }

  const options = [0.5, 0.8, 1, 1.2, 1.5]

  return (
    <>
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
          <HelpButton onClick={() => setOpenHelpModal(true)}>
            <img src="/help.svg" alt="" />
          </HelpButton>
        </Tooltip>
      </FixedButtonsContainer>

      <Modal
        open={openHelpModal}
        onClose={() => setOpenHelpModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <button
            style={{ position: 'absolute', right: '20px', top: '20px' }}
            onClick={() => setOpenHelpModal(false)}
          >
            <CloseIcon color={theme.black} />
          </button>

          <div>
            <button
              style={{ position: 'absolute', right: '80px', top: '42px' }}
              aria-describedby={id}
              type="button"
              onClick={handleClick}
            >
              <SpeakIcon/>
            </button>
            <Popper id={id} open={open} anchorEl={anchorEl} style={{ zIndex: 99999 }}>
              <Box sx={speakStyles}>
                <button onClick={() => handleChangePaused()}>
                  {isPaused ? (
                    <ResumeIcon />
                  ) : (
                    <PauseIcon />
                  )}
                </button>
                <div style={{ width: '100px' }}>
                  <Slider min={0} max={1} step={0.1} value={volume} onChange={(e, value) => changeVolume(value)} />
                </div>
                <div>
                  <Select
                    label="options"
                    id="rate"
                    defaultValue={rate}
                    onChange={(e) => changeRate(e.target.value)}
                  >
                    {options.map(option => (
                      <MenuItem key={option} value={option}>{option}x</MenuItem>
                    ))}
                  </Select>
                </div>
              </Box>
            </Popper>
          </div>

          <Typography id="modal-modal-title" variant="h4" component="h2">
            Saiba como funciona o Persona Design Game
          </Typography>

          {helpContent.map(item => (
            <>
              <Typography style={{ marginTop: '24px' }} variant="h6" component="h3">
                {item.title}
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {item.description}
              </Typography>
            </>
          ))}
        </Box>
      </Modal>
    </>
  );
};

export default FixedButtons;
