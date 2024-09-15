import { A, Icono } from "@nano";

import TouchNav from "../HeaderFn/TouchWrapper";

interface NavProps {
  className?: string;
  isActive?: boolean;
  setIsActive?: React.Dispatch<React.SetStateAction<boolean>>;
  menuItems: {
    href: string;
    label: string;
    icon: React.ReactNode;
  }[];
}

const Nav: React.FC<NavProps> = ({
  menuItems,
  className = "",
  isActive,
  setIsActive,
}) => {
  return (
    <TouchNav>
      <div
        className={`container-nav ${className}  ${isActive ? "active" : ""}`}
      >
        <nav>
          <ul>
            {menuItems.map((item, index) => (
              <li
                key={index}
                onClick={() => {
                  setIsActive && setIsActive(!isActive);
                }}
              >
                <div className="container-icono">
                  <Icono icono={item.icon} />
                </div>
                <A href={item.href}>{item.label}</A>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </TouchNav>
  );
};

export default Nav;
