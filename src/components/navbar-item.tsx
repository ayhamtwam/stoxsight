import { Link, useLocation } from "react-router-dom";

interface NavbarItemProps {
  value: string;
  selected?: boolean;
}

const NavbarItem = ({ value, selected }: NavbarItemProps) => {
  const paths = useLocation().pathname;
  const location = paths.split("/")[2];

  selected = location === value.toLowerCase();

  return (
    <Link to={`/home/${value.toLowerCase()}`}>
      <div className="relative flex flex-col justify-center w-fit h-full cursor-pointer">
        <span className="font-medium text-sm">{value}</span>

        {selected && (
          <div className="absolute w-full h-[2px] bg-black bottom-0"></div>
        )}
      </div>
    </Link>
  );
};

export default NavbarItem;
