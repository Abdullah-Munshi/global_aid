import React from "react";
import { NavLink } from "react-router-dom";

const Menu = ({ items, title, onHideSidebar }) => {
  const linkStyle = ({ isActive, isPending }) => {
    const commonStyle =
      "block rounded-10 transition duration-200 text-xs_next font-ibm-plex-sans font-bold leading-tight flex items-center px-4 py-3 pl-[10px]";
    return isActive
      ? `${commonStyle} bg-gradient-two text-[#2A2B49] shadow-[0px_2px_5px_0px_rgba(0,0,0,0.25)]`
      : `${commonStyle} bg-[#002464] text-[#BABCF4]`;
  };
  return (
    <div>
      {title && (
        <h5 className="text-xs_next text-[#B2AEE4] font-ibm-plex-sans font-medium leading-tight mb-3">
          {title}
        </h5>
      )}
      <ul className="space-y-3 ">
        {items.map((item, index) => (
          <li key={index}>
            <NavLink
              to={item.path}
              className={linkStyle}
              onClick={onHideSidebar}
            >
              {({ isActive, isPending }) => (
                <>
                  <span className="mr-[6px]">{item.icon(isActive)}</span>
                  {item.label}
                </>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
