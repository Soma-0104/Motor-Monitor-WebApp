import { useState } from "react";
import { FiBarChart, FiMessageSquare, FiUser } from 'react-icons/fi';  // Import icons from react-icons
import control from '../assests/control.png'
import logo from '../assests/logo.png'
import React from "react";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", icon: <FiBarChart /> },
    { title: "Thermal Mapping", icon: <FiMessageSquare /> },
    { title: "Predictive Analysis", icon: <FiUser /> },
  ];

  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-sky-700 h-screen p-5  pt-8 relative duration-300 font-bold`}
      >
        <img
          src={control}
          className={`absolute cursor-pointer -right-3 top-9 w-7 bg-cyan-700
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src={logo}
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
         Aurora Motor Monitor
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              {Menu.icon}
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-screen flex-1 p-7">
        <h1 className="text-2xl font-semibold "></h1>
      </div>
    </div>
  );
};

export default Sidebar;
