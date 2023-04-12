import React, { useContext } from "react";
import { ThemeContext } from "styled-components";

export function PauseIcon() {
  const theme = useContext(ThemeContext)

  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_235_32)">
        <path d="M15.9998 2.66669C8.63984 2.66669 2.6665 8.64002 2.6665 16C2.6665 23.36 8.63984 29.3334 15.9998 29.3334C23.3598 29.3334 29.3332 23.36 29.3332 16C29.3332 8.64002 23.3598 2.66669 15.9998 2.66669ZM14.6665 21.3334H11.9998V10.6667H14.6665V21.3334ZM19.9998 21.3334H17.3332V10.6667H19.9998V21.3334Z" fill={theme.black} />
      </g>
      <defs>
        <clipPath id="clip0_235_32">
          <rect width="32" height="32" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}