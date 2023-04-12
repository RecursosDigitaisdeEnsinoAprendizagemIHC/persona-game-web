import React, { useContext } from "react";
import { ThemeContext } from "styled-components";

export function ResumeIcon() {
  const theme = useContext(ThemeContext)

  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 0C7.16129 0 0 7.16129 0 16C0 24.8387 7.16129 32 16 32C24.8387 32 32 24.8387 32 16C32 7.16129 24.8387 0 16 0ZM23.4645 17.5484L12.1097 24.0645C11.0903 24.6323 9.80645 23.9032 9.80645 22.7097V9.29032C9.80645 8.10323 11.0839 7.36774 12.1097 7.93548L23.4645 14.8387C24.5226 15.4323 24.5226 16.9613 23.4645 17.5484Z" fill={theme.black} />
    </svg>
  )
}

