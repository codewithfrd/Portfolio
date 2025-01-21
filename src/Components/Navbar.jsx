import React, { useState } from "react";
import { MdOutlineMenu } from "react-icons/md"; // <MdOutlineMenu />
import { IoClose } from "react-icons/io5"; // <IoClose />
import { Link } from "react-scroll";

function Navbar() {
  const [menu, setMenu] = useState(false);

  const navItems = [
    {
      id: 1,
      text: "Home",
    },
    {
      id: 2,
      text: "About",
    },
    {
      id: 3,
      text: "Portfolio",
    },
    {
      id: 4,
      text: "Experiance",
    },
    {
      id: 5,
      text: "Contacts",
    },
  ];

  return (
    <>
      <nav className="max-w-screen-2xl z-20 bg-white container mx-auto px-4 md:px-20 h-16 shadow-lg fixed top-0 left-0 right-0">
        <div className="flex justify-between items-center">
          <div className="flex space-x-2 items-center">
            <img
              src="https://png.pngtree.com/png-clipart/20231019/original/pngtree-user-profile-avatar-png-image_13369991.png"
              alt=""
              className="w-16"
            />
            <h1 className="font-semibold  cursor-pointer">
              Portfolio
              <p className="text-sm text-red-500">Web Developer</p>
            </h1>
          </div>
          {/* desktop navbar  */}
          <div>
            <ul className="hidden md:flex space-x-8">
              {navItems.map(({ id, text }) => {
                return (
                  <li
                    key={id}
                    className="hover:text-red-600 duration-200 cursor-pointer"
                  >
                    <Link
                      smooth={true}
                      duration={500}
                      offset={-70}
                      activeClass="active"
                      to={text}
                    >
                      {text}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div onClick={() => setMenu(!menu)} className="md:hidden">
              {menu ? <IoClose /> : <MdOutlineMenu />}
            </div>
          </div>
        </div>
        {menu && (
          <div className="w-full">
            <ul className="md:hidden flex flex-col h-screen px-3 pt-8 w-full inset-0 space-y-3 bg-white">
              {navItems.map(({ id, text }) => {
                return (
                  <li
                    key={id}
                    className="hover:text-red-600 duration-200 cursor-pointer text-xl"
                  >
                    <Link
                    onClick={() => setMenu(!menu)}
                      smooth={true}
                      duration={500}
                      offset={-70}
                      activeClass="active"
                      to={text}
                    >
                      {text}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
