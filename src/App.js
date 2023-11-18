import React, { useState } from "react";
import {
  Calendar,
  Chart,
  Chat,
  Chart_fill,
  control,
  Folder,
  logo,
  Setting,
  Search,
  User,
} from "./assets/index.js";
import { Link, useLocation } from "react-router-dom";
import Pagesrouter from "./components/routes/pagesrouter.js";
import Navbar from "./components/navbar/navbar.jsx";



function App() {
  const {pathname}=useLocation()
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", to: "/dashboard", src: Chart_fill },
    { title: "Search", to: "/search", src: Setting },
    { title: "Accounts", to: "/accounts", src: User, gap: true },
    { title: "Schedule", to: "/schedule", src: Calendar },
    { title: "Inbox", to: "/inbox", src: Chat },
    { title: "Analytics", to: "/analytics", src: Chart },
    { title: "Files", to: "/files", src: Folder, gap: true },
    { title: "Setting", to: "/setting", src: Search },
  ];

  return (
    <div className="flex">
      <div
        className={`${
          open ? "w-72" : "w-20"
        } duration-300 p-5 pt-8 h-screen bg-dark-purple relative`}
      >
        <img
          src={control}
          className={`absolute cursor-pointer rounded-full -right-3 top-14 w-7 border-2 border-dark-purple ${
            !open ? "rotate-180" : ""
          }`}
          onClick={() => setOpen(!open)}
          alt="Control"
        />
        <div className="flex gap-x-4 item-center">
          <img
            src={logo}
            alt="logo"
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl mt-2 duration-300 ${
              !open && "scale-0"
            }`}
          >
            Designer
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((menu, index) => (
            <li
              key={index}
              className={`text-gray-300 text-sm flex item-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md 
              ${menu.gap ? "mt-9" : "mt-2"} ${pathname === menu.to && "bg-light-white"}`}
            >
              <Link to={menu.to} className="flex w-full gap-x-2 items-center">
                <img src={menu.src} alt="icon" />
                <span className={!open ? "hidden" : "duration-200"}>
                  {menu.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
        
        <div className="font-medium flex-1 h-screen ">
          <Navbar hidden={open}/>
          <div className='p-4 pr-2 pt-5 pb-0'>
          <Pagesrouter />
          </div>
        </div>
    </div>
  );
}

export default App;