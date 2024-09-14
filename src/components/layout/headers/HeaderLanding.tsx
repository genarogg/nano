import { useEffect, useState } from "react";

import { FaEnvelopeOpenText } from "react-icons/fa";
import { FaCommentDots } from "react-icons/fa";
import { GoFileDirectoryFill } from "react-icons/go";
import { FaLightbulb } from "react-icons/fa";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { TiHome } from "react-icons/ti";

import { Btn3Hamburgues } from "@btn";

import { A, Icono } from "@nano";

import LogoMarca from "../../imgReact/Logo";
import scrollHeader from "./HeaderFn/scrollHeader";

interface HeaderLandingProps {}

// Definir los elementos del header
const home = { href: "#", logo: "/marca/logo.svg", alt: "Logo" };
const menuItems = [
  { href: "/", label: "Inicio", icon: <TiHome /> },
  { href: "#quienes-somos", label: "Quiénes Somos", icon: <FaCommentDots /> },
  { href: "#servicios", label: "Servicios", icon: <FaLightbulb /> },
  { href: "#proyectos", label: "Proyectos", icon: <GoFileDirectoryFill /> },
  { href: "#precios", label: "Precios", icon: <FaHandHoldingDollar /> },
  { href: "#contacto", label: "Contacto", icon: <FaEnvelopeOpenText /> },
];

const HeaderLanding: React.FC<HeaderLandingProps> = () => {
  const [isActive, setIsActive] = useState(false);

  const Logo = () => {
    return (
      <div className="container-logo">
        <A href={home.href}>
          <LogoMarca />
        </A>
      </div>
    );
  };

  const Nav = ({ className = "", isActive, setIsActive }: any) => {
    return (
      <div
        onClick={() => {
          setIsActive(!isActive);
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

  useEffect(() => {
    window.onscroll = () => {
      scrollHeader();
    };
  }, []);

  return (
    <>
      <header className="header landing">
        <div className="desktop" id="desktopHeader">
          <Logo />
          <Nav />
          <Btn3Hamburgues
            className={"btn-desktop"}
            isActive={isActive}
            setIsActive={setIsActive}
          />
        </div>
        <Nav className="nav-xs" isActive={isActive} setIsActive={setIsActive} />
      </header>
    </>
  );
};

export default HeaderLanding;
