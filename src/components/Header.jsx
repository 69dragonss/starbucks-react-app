import React, { useState } from "react";
import ReUseableSection from "./ReUseableSection";

const Header = () => {
  const [icon, setIcon] = useState(true);
  return (
    <header>
      <nav className="flex justify-between py-4 px-8  lg:px-20 items-center h-24 shadow-md ">
        {/* logo */}
        <div>
          <img
            src="/starbucks.png"
            className="h-12 w-12 mr-4 cursor-pointer"
            alt="starbucks-logo"
          />
        </div>
        {/* nav links  */}
        <div className=" hidden break:flex flex-1 justify-between px-4 font-bold  text-[1rem] text-gray-800 tracking-wider uppercase">
          <div className="flex space-x-8 items-center">
            <li className="list-none">
              <a className="hover:text-green-700" href="#">
                Menu
              </a>
            </li>
            <li className="list-none">
              <a className="hover:text-green-700" href="#">
                Rewards
              </a>
            </li>
            <li className="list-none">
              <a className="hover:text-green-700" href="#">
                Gift Cards
              </a>
            </li>
          </div>
          <div className="flex space-x-8 items-center">
            <a className="hover:text-green-700" href="#">
              Find Store
            </a>
            <a
              className="border border-black py-1 px-3 hover:bg-gray-200 bg-white text-[.8rem] rounded-full text-gray-700"
              href="#"
            >
              Sign In
            </a>

            <a
              className="border border-black text-white py-1 px-3 hover:bg-gray-700 bg-black text-[.8rem] font-bold rounded-full "
              href="#"
            >
              Join Now
            </a>
          </div>
        </div>
        <div className="break:hidden" onClick={() => setIcon(!icon)}>
          {icon == true ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </div>
      </nav>
      {/* hero section  */}
      <section className="px-20 py-8 ">
        <ReUseableSection
          color="#d4e9e2"
          img="/cup.png"
          title="STARBUCKS FOR LIFE"
          paragraph="It's the most festive game of the year, with chances to win free coffee and more."
          button="Play now"
        />
      </section>
    </header>
  );
};

export default Header;
