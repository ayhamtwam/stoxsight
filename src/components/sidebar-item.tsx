import { Link, useLocation } from "react-router-dom";

interface SidebarItemProps {
  value: string;
  Icon: () => JSX.Element;
  selected?: boolean;
}

const SidebarItem = ({ value, Icon, selected }: SidebarItemProps) => {
  const paths = useLocation().pathname;
  const location = paths.split("/")[1];

  selected = location === value.toLowerCase();

  return (
    <Link to={value.toLowerCase()}>
      <div
        className={`flex items-center w-full gap-3 pl-6 py-2 rounded-r-[6px] cursor-pointer ${
          selected ? "bg-slate-200" : ""
        }`}
      >
        <Icon />

        <span className={`text-md ${selected ? "font-bold" : "font-medium"}`}>
          {value}
        </span>
      </div>
    </Link>
  );
};

export default SidebarItem;
