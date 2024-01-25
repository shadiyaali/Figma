import React from "react";
import logo from "../../../src/assets/images/Group.png";

const Header = () => {
  return (
    <header className="bg-blue-900 p-3">
      <div className="container mx-auto flex justify-between items-center">
      <div>
          <img src={logo} alt="Logo" className="h-12 w-auto" />
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="text-white hover:text-gray-300">
                HOME
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-300">
                ABOUT US
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-300">
                SERVICES
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-300">
                GALLERY
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-300">
                CONTACT US
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
