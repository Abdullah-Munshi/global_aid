import React from "react";
import { useMediaQuery } from "react-responsive";
import Menu from "../components/dashboard/Menu";
import { SVGIcon } from "../components/Utility";
import logo from "../assets/logo.png";

const dashMenu = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: (active) => (
      <SVGIcon>
        <path
          d="M5 12.7596C5 11.4019 5 10.723 5.27446 10.1262C5.54892 9.52949 6.06437 9.08769 7.09525 8.20407L8.09525 7.34693C9.95857 5.7498 10.8902 4.95123 12 4.95123C13.1098 4.95123 14.0414 5.7498 15.9047 7.34693L16.9047 8.20407C17.9356 9.08769 18.4511 9.52949 18.7255 10.1262C19 10.723 19 11.4019 19 12.7596V17C19 18.8856 19 19.8284 18.4142 20.4142C17.8284 21 16.8856 21 15 21H9C7.11438 21 6.17157 21 5.58579 20.4142C5 19.8284 5 18.8856 5 17V12.7596Z"
          stroke={active ? "#373A41" : "#ffffff"}
          strokeWidth="2"
        />
        <path
          d="M14.5 21V16C14.5 15.4477 14.0523 15 13.5 15H10.5C9.94772 15 9.5 15.4477 9.5 16V21"
          stroke={active ? "#373A41" : "#ffffff"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </SVGIcon>
    ),
  },
  {
    label: "View Packs",
    path: "/viewPacks",
    icon: (active) => (
      <SVGIcon>
        <circle
          cx="12"
          cy="12"
          r="3"
          stroke={active ? "#373A41" : "#ffffff"}
          strokeWidth="2"
        />
        <path
          d="M20.188 10.9343C20.5762 11.4056 20.7703 11.6412 20.7703 12C20.7703 12.3588 20.5762 12.5944 20.188 13.0657C18.7679 14.7899 15.6357 18 12 18C8.36427 18 5.23206 14.7899 3.81197 13.0657C3.42381 12.5944 3.22973 12.3588 3.22973 12C3.22973 11.6412 3.42381 11.4056 3.81197 10.9343C5.23206 9.21014 8.36427 6 12 6C15.6357 6 18.7679 9.21014 20.188 10.9343Z"
          stroke={active ? "#373A41" : "#ffffff"}
          strokeWidth="2"
        />
      </SVGIcon>
    ),
    total: 10,
  },
  {
    label: "Refer and Earn",
    path: "/refer",
    icon: (active) => (
      <SVGIcon>
        <circle
          cx="12"
          cy="8"
          r="4"
          stroke={active ? "#373A41" : "#ffffff"}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.3267 15.0759C12.8886 15.0255 12.4452 15 12 15C10.0805 15 8.19383 15.4738 6.63113 16.3732C5.06902 17.2721 3.88124 18.5702 3.33091 20.1106C3.1451 20.6307 3.41608 21.203 3.93617 21.3888C4.45626 21.5746 5.02851 21.3036 5.21432 20.7835C5.57558 19.7723 6.39653 18.8157 7.62872 18.1066C8.64272 17.523 9.86375 17.1503 11.158 17.0368C11.4889 16.0601 12.3091 15.3092 13.3267 15.0759Z"
          fill={active ? "#373A41" : "#ffffff"}
        />
        <path
          d="M18 14L18 22"
          stroke={active ? "#373A41" : "#ffffff"}
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M22 18L14 18"
          stroke={active ? "#373A41" : "#ffffff"}
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </SVGIcon>
    ),
  },
  {
    label: "Download Products",
    path: "/download",
    icon: (active) => (
      <SVGIcon>
        <path
          d="M12 20L11.2929 20.7071L12 21.4142L12.7071 20.7071L12 20ZM13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5L13 5ZM5.29289 14.7071L11.2929 20.7071L12.7071 19.2929L6.70711 13.2929L5.29289 14.7071ZM12.7071 20.7071L18.7071 14.7071L17.2929 13.2929L11.2929 19.2929L12.7071 20.7071ZM13 20L13 5L11 5L11 20L13 20Z"
          fill={active ? "#373A41" : "#ffffff"}
        />
      </SVGIcon>
    ),
  },
];
const recordsMenu = [
  {
    label: "My Referrals",
    path: "/myReferrals",
    icon: (active) => (
      <SVGIcon>
        <circle
          cx="12"
          cy="8"
          r="3"
          stroke={active ? "#373A41" : "#ffffff"}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M15.2679 8C15.5332 7.54063 15.97 7.20543 16.4824 7.06815C16.9947 6.93086 17.5406 7.00273 18 7.26795C18.4594 7.53317 18.7946 7.97 18.9319 8.48236C19.0691 8.99472 18.9973 9.54063 18.7321 10C18.4668 10.4594 18.03 10.7946 17.5176 10.9319C17.0053 11.0691 16.4594 10.9973 16 10.7321C15.5406 10.4668 15.2054 10.03 15.0681 9.51764C14.9309 9.00528 15.0027 8.45937 15.2679 8L15.2679 8Z"
          stroke={active ? "#373A41" : "#ffffff"}
          strokeWidth="2"
        />
        <path
          d="M5.26795 8C5.53317 7.54063 5.97 7.20543 6.48236 7.06815C6.99472 6.93086 7.54063 7.00273 8 7.26795C8.45937 7.53317 8.79457 7.97 8.93185 8.48236C9.06914 8.99472 8.99727 9.54063 8.73205 10C8.46683 10.4594 8.03 10.7946 7.51764 10.9319C7.00528 11.0691 6.45937 10.9973 6 10.7321C5.54063 10.4668 5.20543 10.03 5.06815 9.51764C4.93086 9.00528 5.00273 8.45937 5.26795 8L5.26795 8Z"
          stroke={active ? "#373A41" : "#ffffff"}
          strokeWidth="2"
        />
        <path
          d="M16.8816 18L15.9012 18.1974L16.0629 19H16.8816V18ZM20.7201 16.9042L21.6626 16.5699L20.7201 16.9042ZM14.7808 14.7105L14.1759 13.9142L13.0193 14.7927L14.2526 15.5597L14.7808 14.7105ZM19.8672 17H16.8816V19H19.8672V17ZM19.7777 17.2384C19.7706 17.2186 19.7641 17.181 19.7725 17.1354C19.7803 17.0921 19.7982 17.0593 19.8151 17.0383C19.8473 16.9982 19.8739 17 19.8672 17V19C21.0132 19 22.1413 17.9194 21.6626 16.5699L19.7777 17.2384ZM17 15C18.6415 15 19.4026 16.1811 19.7777 17.2384L21.6626 16.5699C21.1976 15.2588 19.9485 13 17 13V15ZM15.3856 15.5069C15.7701 15.2148 16.2819 15 17 15V13C15.8381 13 14.9027 13.3622 14.1759 13.9142L15.3856 15.5069ZM14.2526 15.5597C15.2918 16.206 15.727 17.3324 15.9012 18.1974L17.8619 17.8026C17.6439 16.7204 17.0374 14.9364 15.3089 13.8614L14.2526 15.5597Z"
          fill={active ? "#373A41" : "#ffffff"}
        />
        <path
          d="M9.21924 14.7105L9.74736 15.5597L10.9807 14.7927L9.82409 13.9142L9.21924 14.7105ZM3.27986 16.9041L4.22233 17.2384L4.22233 17.2384L3.27986 16.9041ZM7.11841 18V19H7.93709L8.09873 18.1974L7.11841 18ZM7.00008 15C7.71809 15 8.22992 15.2148 8.61439 15.5069L9.82409 13.9142C9.09729 13.3621 8.16196 13 7.00008 13V15ZM4.22233 17.2384C4.59738 16.1811 5.35849 15 7.00008 15V13C4.05157 13 2.80244 15.2587 2.33739 16.5699L4.22233 17.2384ZM4.13284 17C4.12606 17 4.1527 16.9982 4.18492 17.0383C4.20182 17.0593 4.21967 17.0921 4.22754 17.1354C4.23586 17.181 4.22937 17.2186 4.22233 17.2384L2.33739 16.5699C1.8587 17.9194 2.98683 19 4.13284 19V17ZM7.11841 17H4.13284V19H7.11841V17ZM8.09873 18.1974C8.27295 17.3324 8.7082 16.206 9.74736 15.5597L8.69112 13.8614C6.96263 14.9363 6.35606 16.7203 6.1381 17.8026L8.09873 18.1974Z"
          fill={active ? "#373A41" : "#ffffff"}
        />
        <path
          d="M12 14C15.5715 14 16.5919 16.5512 16.8834 18.0089C16.9917 18.5504 16.5523 19 16 19H8C7.44772 19 7.00829 18.5504 7.11659 18.0089C7.4081 16.5512 8.42846 14 12 14Z"
          stroke={active ? "#373A41" : "#ffffff"}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </SVGIcon>
    ),
  },
  {
    label: "My Transactions",
    path: "/transaction",
    icon: (active) => (
      <SVGIcon>
        <rect
          x="6"
          y="4"
          width="13"
          height="17"
          rx="2"
          stroke={active ? "#373A41" : "#ffffff"}
          strokeWidth="2"
        />
        <path
          d="M15 10V8"
          stroke={active ? "#373A41" : "#ffffff"}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M4 9H8"
          stroke={active ? "#373A41" : "#ffffff"}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M4 13H8"
          stroke={active ? "#373A41" : "#ffffff"}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M4 17H8"
          stroke={active ? "#373A41" : "#ffffff"}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </SVGIcon>
    ),
  },
];

const resourchMenu = [
  {
    label: "Compensation Plan",
    path: "/plan",
    icon: (active) => (
      <SVGIcon>
        <circle
          cx="12"
          cy="12"
          r="3"
          stroke={active ? "#373A41" : "#ffffff"}
          strokeWidth="2"
        />
        <path
          d="M20.188 10.9343C20.5762 11.4056 20.7703 11.6412 20.7703 12C20.7703 12.3588 20.5762 12.5944 20.188 13.0657C18.7679 14.7899 15.6357 18 12 18C8.36427 18 5.23206 14.7899 3.81197 13.0657C3.42381 12.5944 3.22973 12.3588 3.22973 12C3.22973 11.6412 3.42381 11.4056 3.81197 10.9343C5.23206 9.21014 8.36427 6 12 6C15.6357 6 18.7679 9.21014 20.188 10.9343Z"
          stroke={active ? "#373A41" : "#ffffff"}
          strokeWidth="2"
        />
      </SVGIcon>
    ),
  },
];

const settingsMenu = [
  {
    label: "Telegram Alerts",
    path: "/telegramAlerts",
    icon: (active) => (
      <SVGIcon>
        <path
          d="M4 12C4 7.58172 7.58172 4 12 4V4C16.4183 4 20 7.58172 20 12V17.0909C20 17.9375 20 18.3608 19.8739 18.6989C19.6712 19.2425 19.2425 19.6712 18.6989 19.8739C18.3608 20 17.9375 20 17.0909 20H12C7.58172 20 4 16.4183 4 12V12Z"
          stroke={active ? "#373A41" : "#ffffff"}
          strokeWidth="2"
        />
        <path
          d="M9 12L15 12"
          stroke={active ? "#373A41" : "#ffffff"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 9L12 15"
          stroke={active ? "#373A41" : "#ffffff"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </SVGIcon>
    ),
  },
  {
    label: "Logout",
    path: "/logout",
    icon: (active) => (
      <SVGIcon>
        <circle
          cx="12"
          cy="12"
          r="7"
          stroke={active ? "#373A41" : "#ffffff"}
          strokeWidth="2"
        />
        <circle
          cx="12"
          cy="12"
          r="2"
          fill="#F8C571"
          stroke={active ? "#373A41" : "#ffffff"}
          strokeWidth="2"
        />
        <path
          d="M12 5V3"
          stroke={active ? "#373A41" : "#ffffff"}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M19 12L21 12"
          stroke={active ? "#373A41" : "#ffffff"}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M12 21L12 19"
          stroke={active ? "#373A41" : "#ffffff"}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M3 12H5"
          stroke={active ? "#373A41" : "#ffffff"}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </SVGIcon>
    ),
  },
];

const SidebarDash = ({ showSidebar, onHideSidebar }) => {
  const isSmallScreen = useMediaQuery({ maxWidth: 1279 });
  const toggleClasses = `${
    (showSidebar && isSmallScreen) || !isSmallScreen
      ? "-translate-x-0"
      : "-translate-x-full"
  }`;
  const classes = `${
    isSmallScreen &&
    "fixed h-screen top-0 left-0 overflow-y-scroll transition duration-200"
  } ${toggleClasses}`;
  return (
    <div
      className={`bg-gradient-one xl:rounded-10 p-5 space-y-3 z-30  xl:static  xl:h-full xl:overflow-y-hidden w-[256px] ${classes}`}
    >
      <div className="text-center">
        <img className="w-[200px] mx-auto block" src={logo} alt="Logo" />
      </div>
      <Menu items={dashMenu} onHideSidebar={isSmallScreen && onHideSidebar} />
      <Menu
        items={recordsMenu}
        title="Records"
        onHideSidebar={isSmallScreen && onHideSidebar}
      />
      <Menu
        items={resourchMenu}
        title="Resources"
        onHideSidebar={isSmallScreen && onHideSidebar}
      />
      <Menu
        items={settingsMenu}
        title="Settings"
        onHideSidebar={isSmallScreen && onHideSidebar}
      />
    </div>
  );
};

export default SidebarDash;
