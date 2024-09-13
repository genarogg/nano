import { A, Icono } from "@nano";

import { FaHome, FaCommentDots, FaRegLightbulb } from "react-icons/fa";
import { GoFileDirectory } from "react-icons/go";
import { BsEnvelopePaper } from "react-icons/bs";
import { FaHandHoldingDollar } from "react-icons/fa6";

interface HeaderLandingProps {}

const menuItems = [
  { href: "/", label: "Inicio", icon: <FaHome /> },
  { href: "/quienes-somos", label: "Quiénes Somos", icon: <FaCommentDots /> },
  { href: "/servicios", label: "Servicios", icon: <FaRegLightbulb /> },
  { href: "/proyectos", label: "Proyectos", icon: <GoFileDirectory /> },
  { href: "/precios", label: "Precios", icon: <FaHandHoldingDollar /> },
  { href: "/contacto", label: "Contacto", icon: <BsEnvelopePaper /> },
];

const HeaderLanding: React.FC<HeaderLandingProps> = () => {
  return (
    <header className="header">
      <div className="container-logo">
        <A href="/">
          <img src="/marca/logo.svg" alt="logo" />
        </A>
      </div>

      <div className="container-nav">
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
    </header>
  );
};

export default HeaderLanding;
