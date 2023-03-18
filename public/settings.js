import React, { useContext } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { ThemeContext } from 'styled-components'

const HOME_PATHNAME = '/'

export function SettingsIcon() {
  const router = useRouter()
  const { preferences } = useSelector((state) => state.preferences);
  const theme = useContext(ThemeContext)

  const highContrast = preferences.find(pref => pref.name === "Auto contraste")

  const iconColor = router.pathname === HOME_PATHNAME && !Number(highContrast?.value) ? theme.primary : theme.white

  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_216_341)">
        <path
          d="M16 20C18.2091 20 20 18.2091 20 16C20 13.7909 18.2091 12 16 12C13.7909 12 12 13.7909 12 16C12 18.2091 13.7909 20 16 20Z"
          stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path
          d="M25.8668 20C25.6893 20.4021 25.6364 20.8482 25.7148 21.2808C25.7932 21.7133 25.9994 22.1124 26.3068 22.4266L26.3868 22.5066C26.6348 22.7543 26.8315 23.0484 26.9657 23.3721C27.0999 23.6959 27.1689 24.0429 27.1689 24.3933C27.1689 24.7438 27.0999 25.0908 26.9657 25.4145C26.8315 25.7382 26.6348 26.0323 26.3868 26.28C26.1392 26.5279 25.8451 26.7246 25.5213 26.8588C25.1976 26.993 24.8506 27.0621 24.5002 27.0621C24.1497 27.0621 23.8027 26.993 23.479 26.8588C23.1553 26.7246 22.8612 26.5279 22.6135 26.28L22.5335 26.2C22.2193 25.8926 21.8201 25.6864 21.3876 25.608C20.9551 25.5295 20.509 25.5825 20.1068 25.76C19.7125 25.929 19.3761 26.2096 19.1392 26.5674C18.9023 26.9251 18.7752 27.3443 18.7735 27.7733V28C18.7735 28.7072 18.4925 29.3855 17.9924 29.8856C17.4924 30.3857 16.8141 30.6666 16.1068 30.6666C15.3996 30.6666 14.7213 30.3857 14.2212 29.8856C13.7211 29.3855 13.4402 28.7072 13.4402 28V27.88C13.4298 27.4387 13.287 27.0106 13.0302 26.6516C12.7734 26.2925 12.4145 26.019 12.0002 25.8666C11.598 25.6892 11.1519 25.6362 10.7194 25.7146C10.2869 25.7931 9.88773 25.9993 9.5735 26.3066L9.4935 26.3866C9.24583 26.6346 8.95173 26.8313 8.628 26.9655C8.30428 27.0997 7.95727 27.1687 7.60683 27.1687C7.25639 27.1687 6.90938 27.0997 6.58566 26.9655C6.26193 26.8313 5.96782 26.6346 5.72016 26.3866C5.47223 26.139 5.27553 25.8449 5.14134 25.5212C5.00714 25.1974 4.93807 24.8504 4.93807 24.5C4.93807 24.1495 5.00714 23.8025 5.14134 23.4788C5.27553 23.1551 5.47223 22.861 5.72016 22.6133L5.80016 22.5333C6.10755 22.2191 6.31374 21.82 6.39217 21.3874C6.47059 20.9549 6.41765 20.5088 6.24016 20.1066C6.07115 19.7123 5.7905 19.376 5.43278 19.1391C5.07506 18.9022 4.65588 18.775 4.22683 18.7733H4.00016C3.29292 18.7733 2.61464 18.4924 2.11454 17.9923C1.61445 17.4922 1.3335 16.8139 1.3335 16.1066C1.3335 15.3994 1.61445 14.7211 2.11454 14.221C2.61464 13.7209 3.29292 13.44 4.00016 13.44H4.12016C4.56149 13.4297 4.9895 13.2868 5.34856 13.03C5.70762 12.7732 5.98112 12.4143 6.1335 12C6.31098 11.5978 6.36393 11.1517 6.2855 10.7192C6.20708 10.2867 6.00088 9.88755 5.6935 9.57331L5.6135 9.49331C5.36556 9.24565 5.16887 8.95155 5.03467 8.62782C4.90047 8.30409 4.8314 7.95709 4.8314 7.60665C4.8314 7.25621 4.90047 6.9092 5.03467 6.58547C5.16887 6.26174 5.36556 5.96764 5.6135 5.71998C5.86116 5.47204 6.15526 5.27535 6.47899 5.14115C6.80272 5.00696 7.14972 4.93788 7.50016 4.93788C7.8506 4.93788 8.19761 5.00696 8.52134 5.14115C8.84507 5.27535 9.13917 5.47204 9.38683 5.71998L9.46683 5.79998C9.78107 6.10736 10.1802 6.31356 10.6127 6.39199C11.0452 6.47041 11.4913 6.41747 11.8935 6.23998H12.0002C12.3945 6.07096 12.7309 5.79032 12.9678 5.4326C13.2047 5.07488 13.3318 4.6557 13.3335 4.22665V3.99998C13.3335 3.29274 13.6144 2.61446 14.1145 2.11436C14.6146 1.61426 15.2929 1.33331 16.0002 1.33331C16.7074 1.33331 17.3857 1.61426 17.8858 2.11436C18.3859 2.61446 18.6668 3.29274 18.6668 3.99998V4.11998C18.6685 4.54903 18.7957 4.96821 19.0326 5.32593C19.2695 5.68365 19.6058 5.9643 20.0002 6.13331C20.4023 6.3108 20.8484 6.36374 21.2809 6.28532C21.7135 6.20689 22.1126 6.0007 22.4268 5.69331L22.5068 5.61331C22.7545 5.36538 23.0486 5.16869 23.3723 5.03449C23.6961 4.90029 24.0431 4.83122 24.3935 4.83122C24.7439 4.83122 25.0909 4.90029 25.4147 5.03449C25.7384 5.16869 26.0325 5.36538 26.2802 5.61331C26.5281 5.86097 26.7248 6.15508 26.859 6.47881C26.9932 6.80253 27.0623 7.14954 27.0623 7.49998C27.0623 7.85042 26.9932 8.19743 26.859 8.52115C26.7248 8.84488 26.5281 9.13898 26.2802 9.38665L26.2002 9.46665C25.8928 9.78089 25.6866 10.18 25.6082 10.6125C25.5297 11.0451 25.5827 11.4912 25.7602 11.8933V12C25.9292 12.3943 26.2098 12.7307 26.5675 12.9676C26.9253 13.2045 27.3444 13.3316 27.7735 13.3333H28.0002C28.7074 13.3333 29.3857 13.6143 29.8858 14.1144C30.3859 14.6145 30.6668 15.2927 30.6668 16C30.6668 16.7072 30.3859 17.3855 29.8858 17.8856C29.3857 18.3857 28.7074 18.6666 28.0002 18.6666H27.8802C27.4511 18.6684 27.0319 18.7955 26.6742 19.0324C26.3165 19.2693 26.0358 19.6056 25.8668 20V20Z"
          stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <defs>
        <clipPath id="clip0_216_341">
          <rect width="32" height="32" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}