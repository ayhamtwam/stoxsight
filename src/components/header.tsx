import { useState } from "react";
import { BellIcon, SearchIcon } from "../assets";

const Header = () => {
  const [isSearch, setSearch] = useState(false as boolean);

  return (
    <div className="flex items-center justify-between w-full min-h-[5rem] h-20 bg-white px-10 drop-shadow-sm border-b border-[#CED3DC] z-10">
      <div>
        <div
          className={`absolute flex flex-col w-96 rounded-md bg-slate-100 transition-all ease-linear top-[19px] ${
            isSearch ? "shadow-sm drop-shadow-md" : ""
          }`}
          onFocus={() => {
            setSearch(true);
          }}
          onBlur={() => {
            setSearch(false);
          }}
        >
          <div className="flex items-center w-full h-10">
            <input
              placeholder="Search stocks or users"
              className="w-full h-full bg-transparent outline-none pl-2 pr-9 placeholder:text-gray-400"
            />

            <div className="absolute right-2 pointer-events-none">
              <SearchIcon />
            </div>
          </div>

          <div
            className={`w-full h-16 ${isSearch ? "visible" : "hidden"}`}
          ></div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="cursor-pointer">
          <BellIcon />
        </div>

        <img src="/blank.png" className="w-9 h-9 rounded-full cursor-pointer" />
      </div>
    </div>
  );
};

export default Header;
