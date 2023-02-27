import { FC } from "react";

const NavBar: FC = () => {
  return (
    <div className="w-full h-28 px-16 flex justify-between items-center shadow">
      <div className="w-24 h-24 bg-blue-300">Logo</div>
      <nav>
        <ul className="flex justify-center items-center gap-[2.1rem]">
          <li className="hover:text-hover-blue">Home</li>
          <li>Work</li>
          <li>About</li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
