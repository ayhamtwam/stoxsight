import { NavbarItem } from ".";

const Navbar = () => {
  return (
    <div className="flex w-full h-12 px-10 bg-white gap-10 drop-shadow-md">
      <NavbarItem value="Explore" selected />

      <NavbarItem value="Following" />
    </div>
  );
};

export default Navbar;
