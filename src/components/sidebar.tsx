import { SidebarItem } from ".";
import { HelpIcon, HomeIcon, QuestionIcon } from "../assets";

const Sidebar = () => {
  return (
    <div className="flex min-w-[244px] h-full bg-white border-r border-[#CED3DC] drop-shadow-md z-20">
      <div className="flex flex-col py-6 gap-8">
        <span className="font-black text-2xl leading-none pl-6 tracking-tighter">
          StoxSight
        </span>

        <div className="flex flex-col gap-1">
          <span className="font-medium text-[10px] text-gray-800 pl-6 tracking-wide">
            GENERAL
          </span>

          <div className="flex flex-col w-48">
            <SidebarItem value="Home" Icon={HomeIcon} />
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <span className="font-medium text-[10px] text-gray-800 pl-6 tracking-wide">
            SUPPORT
          </span>

          <div className="flex flex-col w-48">
            <SidebarItem value="FAQ" Icon={QuestionIcon} />
            <SidebarItem value="Contact Us" Icon={HelpIcon} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
