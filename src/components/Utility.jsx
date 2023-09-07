export const TitlePrimary = ({ children }) => {
  return (
    <h4 className="text-white text-2xl font-ibm-plex-sans font-bold leading-tight">
      {children}
    </h4>
  );
};
export const Button = ({ children, ...props }) => {
  return <button {...props}>{children}</button>;
};

export const Avater = ({ image }) => {
  return (
    <div className="w-[132px] h-[132px] border-4 border-primary rounded-full relative z-10 mx-auto">
      {image ? (
        <img src={image} alt="avater" className="w-full h-full rounded-full" />
      ) : (
        <span className="text-[#4E5B62] text-[70px] font-ibm-plex-sans font-bold flex items-center justify-center w-full h-full rounded-full bg-[#343143]">
          ?
        </span>
      )}
    </div>
  );
};

export const BackDrop = ({ showSidebar, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`w-screen h-screen fixed top-0 end-0 bottom-0 left-0 bg-black/60 transition duration-300 z-30 ${
        showSidebar ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    />
  );
};
export const SVGIcon = ({ children }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
    </svg>
  );
};

export const AdTimeCredit = ({ time, credit }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center text-white text-sm md:text-base font-ibm-plex-sans font-semibold leading-tight">
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mr-[6px]"
        >
          <circle cx="9" cy="9" r="7" stroke="#EABB6D" strokeWidth="2" />
          <path
            d="M12.375 9H9.25C9.11193 9 9 8.88807 9 8.75V6.375"
            stroke="#EABB6D"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
        {time}
      </div>
      <div className="flex items-center text-white text-sm md:text-base font-ibm-plex-sans font-semibold leading-tight justify-end">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mr-[6px]"
        >
          <rect
            x="3"
            y="6"
            width="18"
            height="12"
            rx="2"
            stroke="#EABB6D"
            strokeWidth="2"
          />
          <path
            d="M6 9H8"
            stroke="#EABB6D"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M16 15H18"
            stroke="#EABB6D"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="12" cy="12" r="2" stroke="#EABB6D" strokeWidth="2" />
        </svg>
        {credit}
      </div>
    </div>
  );
};

export const AddWatchSchedule = ({ text }) => {
  return (
    <div className="bg-[#6C8772] text-white text-sm font-ibm-plex-sans font-semibold leading-tight rounded-bl-10 rounded-br-10 flex items-center px-3 py-2">
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mr-[7px] translate-y-[1px]"
      >
        <circle cx="10" cy="10" r="6.5" stroke="#F8C571" strokeWidth="2" />
        <path
          d="M4.16666 2.33656C3.40657 2.7754 2.77538 3.40659 2.33654 4.16669"
          stroke="#F8C571"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M15.8333 2.33656C16.5934 2.7754 17.2246 3.40659 17.6635 4.16669"
          stroke="#F8C571"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M7.5 7.5H12.1379C12.2715 7.5 12.3384 7.66157 12.2439 7.75607L7.75607 12.2439C7.66157 12.3384 7.7285 12.5 7.86213 12.5H12.5"
          stroke="#F8C571"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {text}
    </div>
  );
};

export const AddValue = ({ value }) => {
  return (
    <div className="text-white text-base font-ibm-plex-sans font-normal">
      Ad value{" "}
      <strong className="text-primary font-bold inline-block">
        ${value}/view
      </strong>
    </div>
  );
};

export const SVGClock = ({ width, height, stroke }) => {
  return (
    <svg
      width={width ? width : "18"}
      height={height ? height : "18"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="12"
        cy="12"
        r="9"
        stroke={stroke ? stroke : "#F8C571"}
        strokeWidth="2"
      />
      <path
        d="M16.5 12H12.25C12.1119 12 12 11.8881 12 11.75V8.5"
        stroke={stroke ? stroke : "#F8C571"}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export const SVGLighting = ({ width, height, stroke }) => {
  return (
    <svg
      width={width ? width : "18"}
      height={height ? height : "18"}
      viewBox="0 0 42 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.6247 35.1197C20.6247 35.1197 20.6253 35.1188 20.6266 35.1171C20.6253 35.1189 20.6247 35.1198 20.6247 35.1197ZM22.0255 35.4282C22.0255 35.4283 22.0253 35.4273 22.0249 35.4253C22.0253 35.4272 22.0255 35.4282 22.0255 35.4282ZM21.3753 6.88029C21.3753 6.88033 21.3747 6.88115 21.3735 6.88268C21.3747 6.88103 21.3753 6.88026 21.3753 6.88029ZM19.9745 6.57175C19.9745 6.57173 19.9747 6.57268 19.9751 6.5747C19.9747 6.57279 19.9745 6.57178 19.9745 6.57175ZM12.6575 20.8896L13.5649 21.3098L12.6575 20.8896C12.6477 20.9108 12.6379 20.9319 12.6282 20.9529C12.3575 21.5372 12.1091 22.0738 11.9768 22.5229C11.835 23.0046 11.7501 23.633 12.1296 24.2269C12.5091 24.8208 13.1151 25.0078 13.6118 25.0815C14.0749 25.1502 14.6662 25.1501 15.3102 25.15C15.3333 25.15 15.3566 25.15 15.3799 25.15H20V34.4799L20 34.533C19.9999 34.9321 19.9999 35.3117 20.0303 35.5942C20.0456 35.7369 20.0769 35.9507 20.1698 36.1586C20.2728 36.389 20.5127 36.7325 20.9811 36.8357C21.4495 36.9388 21.8116 36.7279 22.0018 36.5621C22.1735 36.4125 22.2917 36.2316 22.3656 36.1086C22.5118 35.865 22.6713 35.5205 22.8389 35.1582L22.8612 35.1101L29.3425 21.1104L29.3718 21.0471C29.6424 20.4628 29.8909 19.9262 30.0232 19.4771C30.165 18.9954 30.2499 18.367 29.8704 17.7731C29.4909 17.1792 28.8849 16.9922 28.3882 16.9185C27.9251 16.8498 27.3338 16.8499 26.6898 16.85C26.6667 16.85 26.6434 16.85 26.6201 16.85H22V7.52012C22 7.50239 22 7.48469 22 7.46702C22.0001 7.06789 22.0001 6.6883 21.9697 6.4058C21.9544 6.26307 21.9231 6.0493 21.8302 5.84138C21.7272 5.61098 21.4873 5.26749 21.0189 5.16432C20.5505 5.06116 20.1884 5.27206 19.9982 5.43788C19.8265 5.58752 19.7083 5.76837 19.6344 5.89144C19.4882 6.13504 19.3287 6.47954 19.1611 6.84178C19.1537 6.8578 19.1462 6.87386 19.1388 6.88994L12.6575 20.8896Z"
        stroke={stroke ? stroke : "#F8C571"}
        strokeWidth="2"
      />
    </svg>
  );
};

export const SVGLightingRound = ({ width, height, stroke }) => {
  return (
    <svg
      width={width ? width : "18"}
      height={height ? height : "18"}
      viewBox="0 0 33 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 18.975H13.0617C11.5327 18.975 10.7683 18.975 10.479 18.478C10.1898 17.981 10.5674 17.3163 11.3227 15.987L15.5653 8.52012C15.9403 7.86016 16.1277 7.53017 16.3139 7.57936C16.5 7.62854 16.5 8.00807 16.5 8.76713V13.525C16.5 13.7607 16.5 13.8786 16.5732 13.9518C16.6464 14.025 16.7643 14.025 17 14.025H19.9383C21.4673 14.025 22.2317 14.025 22.521 14.522C22.8102 15.019 22.4326 15.6837 21.6773 17.013L17.4347 24.4799C17.0597 25.1398 16.8723 25.4698 16.6861 25.4206C16.5 25.3715 16.5 24.9919 16.5 24.2329V19.475C16.5 19.2393 16.5 19.1214 16.4268 19.0482C16.3536 18.975 16.2357 18.975 16 18.975Z"
        fill="white"
      />
      <circle cx="16.5" cy="16.5" r="12.375" stroke={stroke} strokeWidth="2" />
    </svg>
  );
};

export const SVGInfo = ({ width, height, fill, stroke }) => {
  return (
    <svg
      width={width ? width : "18"}
      height={height ? height : "18"}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="9"
        cy="9"
        r="6.75"
        stroke={stroke ? stroke : "#F8C571"}
        strokeWidth="2"
      />
      <path
        d="M9.375 5.625C9.375 5.83211 9.20711 6 9 6C8.79289 6 8.625 5.83211 8.625 5.625C8.625 5.41789 8.79289 5.25 9 5.25C9.20711 5.25 9.375 5.41789 9.375 5.625Z"
        fill={fill ? fill : "#F8C571"}
        stroke={stroke ? stroke : "#F8C571"}
      />
      <path
        d="M9 12.75V7.5"
        stroke={stroke ? stroke : "#F8C571"}
        strokeWidth="2"
      />
    </svg>
  );
};
export const SVGFilter = ({ width, height, fill }) => {
  return (
    <svg
      width={width ? width : "18"}
      height={height ? height : "18"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.65811 19.7806L9.97433 20.7293H9.97433L9.65811 19.7806ZM14.6581 18.114L14.9743 19.0627L14.9743 19.0626L14.6581 18.114ZM19.7071 7.29289L20.4142 8L19.7071 7.29289ZM15.2929 11.7071L14.5858 11L15.2929 11.7071ZM5 5H19V3H5V5ZM5 6.58579V5H3V6.58579H5ZM9.41421 11L5 6.58579L3.58579 8L7.99999 12.4142L9.41421 11ZM7.99999 12.4142V19.3063H9.99999V12.4142H7.99999ZM7.99999 19.3063C7.99999 20.3301 9.00304 21.0531 9.97433 20.7293L9.34188 18.832C9.66565 18.724 9.99999 18.965 9.99999 19.3063H7.99999ZM9.97433 20.7293L14.9743 19.0627L14.3419 17.1653L9.34188 18.832L9.97433 20.7293ZM14.9743 19.0626C15.5868 18.8585 16 18.2853 16 17.6396H14C14 17.4244 14.1377 17.2333 14.3419 17.1653L14.9743 19.0626ZM16 17.6396V12.4142H14V17.6396H16ZM19 6.58579L14.5858 11L16 12.4142L20.4142 8L19 6.58579ZM19 5V6.58579H21V5H19ZM20.4142 8C20.7893 7.62493 21 7.11622 21 6.58579H19L20.4142 8ZM16 12.4142V12.4142L14.5858 11C14.2107 11.3751 14 11.8838 14 12.4142H16ZM7.99999 12.4142H9.99999C9.99999 11.8838 9.78928 11.3751 9.41421 11L7.99999 12.4142ZM3 6.58579C3 7.11622 3.21071 7.62493 3.58579 8L5 6.58579V6.58579H3ZM19 5H21C21 3.89543 20.1046 3 19 3V5ZM5 3C3.89543 3 3 3.89543 3 5H5V5V3Z"
        fill={fill ? fill : "#F8C571"}
      />
    </svg>
  );
};
export const SVGSort = ({ width, height, fill, stroke }) => {
  return (
    <svg
      width={width ? width : "18"}
      height={height ? height : "18"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 7H19"
        stroke={stroke ? stroke : "#F8C571"}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M5 12H15"
        stroke={stroke ? stroke : "#F8C571"}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M5 17H11"
        stroke={stroke ? stroke : "#F8C571"}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export const SVGOk = ({ width, height, fill, stroke }) => {
  return (
    <svg
      width={width ? width : "30"}
      height={height ? height : "30"}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="15"
        cy="15"
        r="11.25"
        stroke={stroke ? stroke : "#F8C571"}
        strokeWidth="2"
      />
      <path
        d="M10 15L13.75 18.75L20 11.25"
        stroke={stroke ? stroke : "#F8C571"}
        strokeWidth="2"
      />
    </svg>
  );
};

export const SVGTimes = ({ width, height, fill, stroke }) => {
  return (
    <svg
      width={width ? width : "30"}
      height={height ? height : "30"}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 6L6 18"
        stroke={stroke ? stroke : "#F8C571"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 6L18 18"
        stroke={stroke ? stroke : "#F8C571"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const SVGUsers = ({ width, height, fill, stroke }) => {
  return (
    <svg
      width={width ? width : "30"}
      height={height ? height : "30"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="12"
        cy="8"
        r="3"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M15.2679 8C15.5332 7.54063 15.97 7.20543 16.4824 7.06815C16.9947 6.93086 17.5406 7.00273 18 7.26795C18.4594 7.53317 18.7946 7.97 18.9319 8.48236C19.0691 8.99472 18.9973 9.54063 18.7321 10C18.4668 10.4594 18.03 10.7946 17.5176 10.9319C17.0053 11.0691 16.4594 10.9973 16 10.7321C15.5406 10.4668 15.2054 10.03 15.0681 9.51764C14.9309 9.00528 15.0027 8.45937 15.2679 8L15.2679 8Z"
        stroke={stroke}
        strokeWidth="2"
      />
      <path
        d="M5.26795 8C5.53317 7.54063 5.97 7.20543 6.48236 7.06815C6.99472 6.93086 7.54063 7.00273 8 7.26795C8.45937 7.53317 8.79457 7.97 8.93185 8.48236C9.06914 8.99472 8.99727 9.54063 8.73205 10C8.46683 10.4594 8.03 10.7946 7.51764 10.9319C7.00528 11.0691 6.45937 10.9973 6 10.7321C5.54063 10.4668 5.20543 10.03 5.06815 9.51764C4.93086 9.00528 5.00273 8.45937 5.26795 8L5.26795 8Z"
        stroke={stroke}
        strokeWidth="2"
      />
      <path
        d="M16.8816 18L15.9012 18.1974L16.0629 19H16.8816V18ZM20.7201 16.9042L21.6626 16.5699L20.7201 16.9042ZM14.7808 14.7105L14.1759 13.9142L13.0193 14.7927L14.2526 15.5597L14.7808 14.7105ZM19.8672 17H16.8816V19H19.8672V17ZM19.7777 17.2384C19.7706 17.2186 19.7641 17.181 19.7725 17.1354C19.7803 17.0921 19.7982 17.0593 19.8151 17.0383C19.8473 16.9982 19.8739 17 19.8672 17V19C21.0132 19 22.1413 17.9194 21.6626 16.5699L19.7777 17.2384ZM17 15C18.6415 15 19.4026 16.1811 19.7777 17.2384L21.6626 16.5699C21.1976 15.2588 19.9485 13 17 13V15ZM15.3856 15.5069C15.7701 15.2148 16.2819 15 17 15V13C15.8381 13 14.9027 13.3622 14.1759 13.9142L15.3856 15.5069ZM14.2526 15.5597C15.2918 16.206 15.727 17.3324 15.9012 18.1974L17.8619 17.8026C17.6439 16.7204 17.0374 14.9364 15.3089 13.8614L14.2526 15.5597Z"
        fill={fill}
      />
      <path
        d="M9.21924 14.7105L9.74736 15.5597L10.9807 14.7927L9.82409 13.9142L9.21924 14.7105ZM3.27986 16.9041L4.22233 17.2384L4.22233 17.2384L3.27986 16.9041ZM7.11841 18V19H7.93709L8.09873 18.1974L7.11841 18ZM7.00008 15C7.71809 15 8.22992 15.2148 8.61439 15.5069L9.82409 13.9142C9.09729 13.3621 8.16196 13 7.00008 13V15ZM4.22233 17.2384C4.59738 16.1811 5.35849 15 7.00008 15V13C4.05157 13 2.80244 15.2587 2.33739 16.5699L4.22233 17.2384ZM4.13284 17C4.12606 17 4.1527 16.9982 4.18492 17.0383C4.20182 17.0593 4.21967 17.0921 4.22754 17.1354C4.23586 17.181 4.22937 17.2186 4.22233 17.2384L2.33739 16.5699C1.8587 17.9194 2.98683 19 4.13284 19V17ZM7.11841 17H4.13284V19H7.11841V17ZM8.09873 18.1974C8.27295 17.3324 8.7082 16.206 9.74736 15.5597L8.69112 13.8614C6.96263 14.9363 6.35606 16.7203 6.1381 17.8026L8.09873 18.1974Z"
        fill={fill}
      />
      <path
        d="M12 14C15.5715 14 16.5919 16.5512 16.8834 18.0089C16.9917 18.5504 16.5523 19 16 19H8C7.44772 19 7.00829 18.5504 7.11659 18.0089C7.4081 16.5512 8.42846 14 12 14Z"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};
