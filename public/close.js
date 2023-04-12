import React from "react";
import { useContext } from "react";
import { ThemeContext } from "styled-components";

export function CloseIcon({ color }) {
  const theme = useContext(ThemeContext)
  const newColor = color ?? theme.primary

  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 6L6 18" stroke={newColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6 6L18 18" stroke={newColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}