import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import Button from "./Button";
import Menu from "./Menu";

const Navbar = ({ toggle }: { toggle: () => void }) => {
  return (
    <>
      <div className="w-full h-20 bg-white sticky top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <Logo />
            <button
              type="button"
              className="inline-flex items-center md:hidden"
              onClick={toggle}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24" >
                <path
                  fill="#fff"
                  d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z" />
              </svg>
            </button>
            <Menu/>            
            <div className="hidden md:block">
              <Button />
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Navbar;
