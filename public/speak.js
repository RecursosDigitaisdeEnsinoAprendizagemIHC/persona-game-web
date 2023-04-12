import React, { useContext } from "react";
import { ThemeContext } from "styled-components";

export function SpeakIcon() {
  const theme = useContext(ThemeContext)

  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.667 6.66666L8.00033 12H2.66699V20H8.00033L14.667 25.3333V6.66666Z" stroke={theme.black} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M25.4264 6.57333C27.926 9.0737 29.3302 12.4645 29.3302 16C29.3302 19.5355 27.926 22.9263 25.4264 25.4267M20.7197 11.28C21.9695 12.5302 22.6716 14.2256 22.6716 15.9933C22.6716 17.7611 21.9695 19.4565 20.7197 20.7067" stroke={theme.black} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}