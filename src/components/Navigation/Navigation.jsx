import { IconMenu2 } from "@tabler/icons-react";
import { useState } from "react";
import logo from "../../assets/logo.png";
import CustomLink from "./CustomLink";

export const Navigation = () => {
  const [menu, setMenu] = useState(false);
  const handleClick = () => setMenu(!menu);
  return (
    <header className="w-full relative z-10">
      <nav className="w-full max-w-7xl mx-auto flex  justify-between items-center px-4 py-4">
        <ul className="flex">
          <li className="flex place-items-center">
            <a href="">
              <img
                src={logo}
                alt="logo"
                className="w-16 h-16 object-cover mr-5"
              />
            </a>
          </li>
        </ul>
        <ul className="flex items-center ">
          <CustomLink route="/" text="Habits" />
          <CustomLink route="/" text="Nutrition" />
          <CustomLink route="/" text="Finances" />
          <CustomLink route="/" text="Developers" />
        </ul>
        <ul className="items-center gap-4 md:flex hidden">
          <li>
            <a
              href=""
              className="rounded-md bg-gray-900 px-6 py-2.5 text-md font-semibold text-white shadow-md  ring-gray-300 hover:bg-gray-800"
            >
              Sign In
            </a>
          </li>
          <li>
            <a
              href=""
              className="rounded-md bg-gray-900 px-6 py-2.5 text-md font-semibold text-white shadow-md  ring-gray-300 hover:bg-gray-800"
            >
              Sign Up
            </a>
          </li>
        </ul>
        <button className="p-4 flex md:hidden items-center justify-center hover:bg-slate-300 bg-white ease-in-out transition">
          <IconMenu2 />
        </button>
      </nav>
    </header>
  );
};
