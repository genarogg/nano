import { A, Icono } from "@nano";

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
    <div
      onClick={() => {
        setIsActive && setIsActive(!isActive);
        /* fn && fn(); */
      }}
      className={`container-nav ${className}  ${isActive ? "active" : ""}`}
    >
      <nav>
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>
              <div className="container-icono">
                <Icono icono={item.icon} />
              </div>
              <A href={item.href}>{item.label}</A>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
