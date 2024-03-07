"use client";

import {
  RiDashboardFill,
  RiPresentationFill,
  RiFileChartFill,
  RiDraftFill,
} from "react-icons/ri";
import { AiFillHome } from "react-icons/ai";
import { RxDashboard } from "react-icons/rx";
import {
  MdOutlineManageAccounts,
  MdOutlineHomeWork,
  MdOutlineContactSupport,
} from "react-icons/md";
import { GrResources } from "react-icons/gr";
import { GoDesktopDownload } from "react-icons/go";

function Sidebar({ open }) {
  const Menus = [
    {
      topic: false,
      subitems: [{ title: "Home", icon: <MdOutlineHomeWork /> }],
    },
    {
      subitems: [{ title: "Dashboard", icon: <RxDashboard /> }],
    },
    {
      subitems: [
        { title: "Manage Account", icon: <MdOutlineManageAccounts /> },
      ],
    },
    {
      subitems: [{ title: "Learn", icon: <GrResources /> }],
    },
    {
      subitems: [{ title: "Download", icon: <GoDesktopDownload /> }],
    },
    {
      subitems: [
        { title: "Help & Support", icon: <MdOutlineContactSupport /> },
      ],
    },
  ];

  return (
    <div>
      <ul className="pt-2">
        {Menus.map((menu, index) => (
          <li key={index}>
            {menu.topic ? (
              <span
                className={`uppercase font-sans font-semibold text-[#899BBD] text-xs ${
                  !open && "hidden"
                }`}
              >
                {menu.topic}
              </span>
            ) : (
              <span className="hidden"></span>
            )}
            <ul>
              {menu.subitems.map((subitem, index) => (
                <li
                  key={index}
                  className={`text-[#012970] font-sans flex items-center gap-x-4 cursor-pointer p-2 hover:bg-[#DCE8FF] rounded-md mt-2 `}
                >
                  <span key={index} className="text-2xl block float-left">
                    {subitem.icon ? subitem.icon : <RiDashboardFill />}
                  </span>
                  {subitem.title ? (
                    <span
                      className={`text-base font-semibold flex-1 duration-200 ${
                        !open && "hidden"
                      }`}
                    >
                      {subitem.title}
                    </span>
                  ) : (
                    <span className=" hidden"></span>
                  )}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
